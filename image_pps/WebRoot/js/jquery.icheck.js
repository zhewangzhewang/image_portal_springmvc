/*!
 * iCheck v1.0.1, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */

(function($) {

  // Cached vars
  var _iCheck = 'iCheck',
    _iCheckHelper = _iCheck + '-helper',
    _checkbox = 'checkbox',
    _radio = 'radio',
    _checked = 'checked',
    _unchecked = 'un' + _checked,
    _disabled = 'disabled',a
    _determinate = 'determinate',
    _indeterminate = 'in' + _determinate,
    _update = 'update',
    _type = 'type',
    _click = 'click',
    _touch = 'touchbegin.i touchend.i',
    _add = 'addClass',
    _remove = 'removeClass',
    _callback = 'trigger',
    _label = 'label',
    _cursor = 'cursor',
    _mobile =false;// /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

  // Plugin init
  $.fn[_iCheck] = function(options, fire,eventfire) {
	  if(!this||this.length<1)
			return;
    // Walker
    var handle = 'input[type="' + _checkbox + '"], input[type="' + _radio + '"]',
      stack = $(),
      walker = function(object) {
    	stack=object;
//        object.each(function() {
//          var self = $(this);
//          if (self.is(handle)) {
//            stack = stack.add(self);
//          } else {
//            stack = stack.add(self.find(handle));
//          }
//        });
      };
      //zhu add. 
      var getTime=function() {
    		return (new Date()).valueOf();
       }
      var timer="";
      var stop =function(name) {
    		var ti = getTime() - startTime;
    		var na=name?name:"";
    		var str=na+":"+ti;
    		if(timer!="")
    			str="|"+str;
    		timer=timer+str;
    	}

      var  start=function() {
      	startTime = getTime();
      	timer="";
      }
      var  print=function() {
    	  stop("stop");
        	alert(timer);
        }
      start();
      //zhu add end . 
    // Check if we should operate with some method
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {

      // Normalize method's name
      options = options.toLowerCase();

      // Find checkboxes and radio buttons
      walker(this);

      return stack.each(function() {
        var self = $(this);

        if (options == 'destroy') {
          tidy(self, 'ifDestroyed');
        } else {
          operate(self, true, options);
        }

        // Fire method's callback
        if ($.isFunction(fire)) {
          //fire();
          fire($(this));
        }
      });

    // Customization
    } else if (typeof options == 'object' || !options) {
    	// Check if any options were passed
      var settings = $.extend({
          checkedClass: _checked,
          disabledClass: _disabled,
          indeterminateClass: _indeterminate,
          labelHover: true
        }, options),

        selector = settings.handle,
        hoverClass = settings.hoverClass || 'hover',
        focusClass = settings.focusClass || 'focus',
        activeClass = settings.activeClass || 'active',
        labelHover = !!settings.labelHover,
        labelHoverClass = settings.labelHoverClass || 'hover',

        // Setup clickable area
        area = ('' + settings.increaseArea).replace('%', '') | 0;

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = 'input[type="' + selector + '"]';
      }

      // Clickable area limit
      if (area < -50) {
        area = -50;
      }
      // Walk around the selector
      walker(this);
      //event bind . 
      this.on(_click + '.i focus.i blur.i ', function(event) {
    	  var type = event[_type],
          key = event.keyCode;
    	  var parent=$(this).parent();
        // Click
        if (type == _click) {
          return false;
        // Focus/blur
        } else if (/us|ur/.test(type)) {
          parent[type == 'blur' ? _remove : _add](focusClass);
        }
    	  
      });
      $(settings.fathertag+" .iCheck-helper").on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
    	  var type = event[_type],
          // mousedown|mouseup
          toggle = /wn|up/.test(type) ? activeClass : hoverClass;
    	  var node=this,self=$(this).prev("input"),parent=$(this).parent(),
    	  label = self.closest(_label).add(self.next(_label)).add(self.parent().next(_label)).add(self.parent().parent().next(_label));
        // Do nothing if input is disabled
        //if (!node[_disabled]) {
        	if (true) {
          // Click
          if (type == _click) {
            operate(self, false, true);
            // Fire method's callback
            if ($.isFunction(eventfire)) {
          	  eventfire(self);
            }
          // Active and hover states
          } else {

            // State is on
            if (/wn|er|in/.test(type)) {

              // mousedown|mouseover|touchbegin
              parent[_add](toggle);
            // State is off
            } else {
              parent[_remove](toggle + ' ' + activeClass);
            }

            // Label hover
            if (label.length && labelHover && toggle == hoverClass) {

              // mouseout|touchend
              label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
            }
          }

        }
    	  
      });
      $(settings.fathertag+" .icheck_label").on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {
    	  var type = event[_type],
        item = $(this);
    	  var self=item.prev().find("input");
    	  var parent=self.parent();

      // Do nothing if input is disabled
//      if (!node[_disabled]) {
    	if (true) {
        // Click
        if (type == _click) {
          if ($(event.target).is('a')) {
            return;
          }
          
          operate(self, false, true);
          
          if ($.isFunction(eventfire)) {
          	  eventfire(self);
            }
        // Hover state
        } else if (labelHover) {
          // mouseout|touchend
          if (/ut|nd/.test(type)) {
            parent[_remove](hoverClass);
            item[_remove](labelHoverClass);
          } else {
            parent[_add](hoverClass);
            item[_add](labelHoverClass);
          }
        }

      }
      });
//      print();
      return;
//      return stack.each(function() {
//        var self = $(this);
//        // If already customized
//        tidy(self);
//
//        var node = this,
//          id = node.id,
//          // Get proper class
//          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,
//           //Find assigned labels//$(_label + '[for="' + id + '"]').add(self.closest(_label))
//          label = $(_label + '[for="' + id + '"]').add(self.closest(_label)).add(self.next(_label)).add(self.parent().next(_label)).add(self.parent().parent().next(_label));
//
//        // Layer addition
//        var helper =self.next("ins");// $('<ins class="' + _iCheckHelper + '"/>').css(layer).appendTo(parent);
//        var parent=self.parent();
////        if (_mobile)
////        {
////        	self.css("opacity","1");
////        	helper.hide();
////        }
//        // Label events
//        if (label.length) {
//          label.on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {
//            var type = event[_type],
//              item = $(this);
//
//            // Do nothing if input is disabled
//            if (!node[_disabled]) {
//
//              // Click
//              if (type == _click) {
//                if ($(event.target).is('a')) {
//                  return;
//                }
//                
//                operate(self, false, true);
//                
//                if ($.isFunction(eventfire)) {
//                	  eventfire(self);
//                  }
//              // Hover state
//              } else if (labelHover) {
//                // mouseout|touchend
//                if (/ut|nd/.test(type)) {
//                  parent[_remove](hoverClass);
//                  item[_remove](labelHoverClass);
//                } else {
//                  parent[_add](hoverClass);
//                  item[_add](labelHoverClass);
//                }
//              }
//
////              if (_mobile) {
////                event.stopPropagation();
////              } else {
////                return false;
////              }
//            }
//          });
//        }
//        // Input events
//        self.on(_click + '.i focus.i blur.i ', function(event) {
//          var type = event[_type],
//            key = event.keyCode;
//
//          // Click
//          if (type == _click) {
//            return false;
//          // Focus/blur
//          } else if (/us|ur/.test(type)) {
//            parent[type == 'blur' ? _remove : _add](focusClass);
//          }
//        });
//        // Helper events
//        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
//          var type = event[_type],
//            // mousedown|mouseup
//            toggle = /wn|up/.test(type) ? activeClass : hoverClass;
//          // Do nothing if input is disabled
//          if (!node[_disabled]) {
//
//            // Click
//            if (type == _click) {
//              operate(self, false, true);
//              // Fire method's callback
//              if ($.isFunction(eventfire)) {
//            	  eventfire(self);
//              }
//            // Active and hover states
//            } else {
//
//              // State is on
//              if (/wn|er|in/.test(type)) {
//
//                // mousedown|mouseover|touchbegin
//                parent[_add](toggle);
//              // State is off
//              } else {
//                parent[_remove](toggle + ' ' + activeClass);
//              }
//
//              // Label hover
//              if (label.length && labelHover && toggle == hoverClass) {
//
//                // mouseout|touchend
//                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
//              }
//            }
//
//          }
//        });
//        
//      });
       print();
       
    } else {
      return this;
    }
  };

  // Do something with inputs
  function operate(input, direct, method) {
    var node = input[0],
      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,
      active = method == _update ? {
        checked: node[_checked],
        disabled: node[_disabled],
        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'
      } : node[state];

    // Check, disable or indeterminate
    if (/^(ch|di|in)/.test(method) && !active) {
      on(input, state);

    // Uncheck, enable or determinate
    } else if (/^(un|en|de)/.test(method) && active) {
      off(input, state);

    // Update
    } else if (method == _update) {

      // Handle states
      for (var each in active) {
        if (active[each]) {
          on(input, each, true);
        } else {
          off(input, each, true);
        }
      }

    } else if (!direct || method == 'toggle') {

      // Helper or label was clicked
      if (!direct) {
        input[_callback]('ifClicked');
      }

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state);
        }
      } else {
        on(input, state);
      }
    }
  }

  // Add checked, disabled or indeterminate state
  function on(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));
//
    label = input.closest(_label).add(input.next(_label)).add(input.parent().next(_label)).add(input.parent().parent().next(_label));
    label.css("color","#FFF");
    // Prevent unnecessary actions
    if (node[state] !== true) {

      // Toggle assigned radio buttons
      if (!keep && state == _checked && node[_type] == _radio && node.name) {
        var form = input.closest('form'),
          inputs = 'input[name="' + node.name + '"]';

        inputs = form.length ? form.find(inputs) : $(inputs);

        inputs.each(function() {
          if (this !== node && $(this).data(_iCheck)) {
            off($(this), state);
          }
        });
      }

      // Indeterminate state
      if (indeterminate) {

        // Add indeterminate state
        node[state] = true;

        // Remove checked state
        if (node[_checked]) {
          off(input, _checked, 'force');
        }

      // Checked or disabled state
      } else {

        // Add checked or disabled state
        if (!keep) {
          node[state] = true;
        }

        // Remove indeterminate state
        if (checked && node[_indeterminate]) {
          off(input, _indeterminate, false);
        }
      }

      // Trigger callbacks
      callbacks(input, checked, state, keep);
    }

    // Add proper cursor
    if (node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'default');
    }

    // Add state class
    parent[_add]('checked');

    // Remove regular state class
    parent[_remove](regular || option(input, callback) || '');
  }

  // Remove checked, disabled or indeterminate state
  function off(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));
    label = input.closest(_label).add(input.next(_label)).add(input.parent().next(_label)).add(input.parent().parent().next(_label));

    label.css("color","#A0A0A0");
 
    // Prevent unnecessary actions
    if (node[state] !== false) {

      // Toggle state
      if (indeterminate || !keep || keep == 'force') {
        node[state] = false;
      }

      // Trigger callbacks
      callbacks(input, checked, callback, keep);
    }

    // Add proper cursor
    if (!node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');
    }

    // Remove state class
    parent[_remove]('checked');

    // Add regular state class
    parent[_add](regular || option(input, callback) || '');
  }

  // Remove all traces
  function tidy(input, callback) {
    if (input.data(_iCheck)) {

      // Remove everything except input
      input.parent().html(input.attr('style', input.data(_iCheck).s || ''));

      // Callback
      if (callback) {
        input[_callback](callback);
      }

      // Unbind events
      input.off('.i').unwrap();
      $(_label + '[for="' + input[0].id + '"]').add(input.closest(_label)).off('.i');
    }
  }

  // Get some option
  function option(input, state, regular) {
    if (input.data(_iCheck)) {
      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];
    }
  }

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Executable handlers
  function callbacks(input, checked, callback, keep) {
    if (!keep) {
      if (checked) {
        input[_callback]('ifToggled');
      }

      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));
    }
  }
})(window.jQuery || window.Zepto);
