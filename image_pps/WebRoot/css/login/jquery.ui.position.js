(function(a){a.ui=a.ui||{};var e=/left|center|right/,d="center",g=/top|center|bottom/,f="center",c=a.fn.position,b=a.fn.offset;a.fn.position=function(k){if(!k||!k.of){return c.apply(this,arguments);}k=a.extend({},k);var l=a(k.of),i=(k.collision||"flip").split(" "),j=k.offset?k.offset.split(" "):[0,0],n,m,h;if(k.of.nodeType===9){n=l.width();m=l.height();h={top:0,left:0};}else{if(k.of.scrollTo&&k.of.document){n=l.width();m=l.height();h={top:l.scrollTop(),left:l.scrollLeft()};}else{if(k.of.preventDefault){k.at="left top";n=m=0;h={top:k.of.pageY,left:k.of.pageX};}else{n=l.outerWidth();m=l.outerHeight();h=l.offset();}}}a.each(["my","at"],function(){var o=(k[this]||"").split(" ");if(o.length===1){o=e.test(o[0])?o.concat([f]):g.test(o[0])?[d].concat(o):[d,f];}o[0]=e.test(o[0])?o[0]:d;o[1]=g.test(o[1])?o[1]:f;k[this]=o;});if(i.length===1){i[1]=i[0];}j[0]=parseInt(j[0],10)||0;if(j.length===1){j[1]=j[0];}j[1]=parseInt(j[1],10)||0;if(k.at[0]==="right"){h.left+=n;}else{if(k.at[0]===d){h.left+=n/2;}}if(k.at[1]==="bottom"){h.top+=m;}else{if(k.at[1]===f){h.top+=m/2;}}h.left+=j[0];h.top+=j[1];return this.each(function(){var o=a(this),q=o.outerWidth(),p=o.outerHeight(),r=a.extend({},h);if(k.my[0]==="right"){r.left-=q;}else{if(k.my[0]===d){r.left-=q/2;}}if(k.my[1]==="bottom"){r.top-=p;}else{if(k.my[1]===f){r.top-=p/2;}}r.left=parseInt(r.left);r.top=parseInt(r.top);a.each(["left","top"],function(t,s){if(a.ui.position[i[t]]){a.ui.position[i[t]][s](r,{targetWidth:n,targetHeight:m,elemWidth:q,elemHeight:p,offset:j,my:k.my,at:k.at});}});if(a.fn.bgiframe){o.bgiframe();}o.offset(a.extend(r,{using:k.using}));});};a.ui.position={fit:{left:function(j,h){var k=a(window),i=j.left+h.elemWidth-k.width()-k.scrollLeft();j.left=i>0?j.left-i:Math.max(0,j.left);},top:function(j,h){var k=a(window),i=j.top+h.elemHeight-k.height()-k.scrollTop();j.top=i>0?j.top-i:Math.max(0,j.top);}},flip:{left:function(l,h){if(h.at[0]==="center"){return;}var m=a(window),k=l.left+h.elemWidth-m.width()-m.scrollLeft(),i=h.my[0]==="left"?-h.elemWidth:h.my[0]==="right"?h.elemWidth:0,j=-2*h.offset[0];l.left+=l.left<0?i+h.targetWidth+j:k>0?i-h.targetWidth+j:0;},top:function(m,i){if(i.at[1]==="center"){return;}var n=a(window),l=m.top+i.elemHeight-n.height()-n.scrollTop(),j=i.my[1]==="top"?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,h=i.at[1]==="top"?i.targetHeight:-i.targetHeight,k=-2*i.offset[1];m.top+=m.top<0?j+i.targetHeight+k:l>0?j+h+k:0;}}};if(!a.offset.setOffset){a.offset.setOffset=function(l,m){if(/static/.test(a.curCSS(l,"position"))){l.style.position="relative";}var h=a(l),j=h.offset(),k=parseInt(a.curCSS(l,"top",true),10)||0,i=parseInt(a.curCSS(l,"left",true),10)||0,n={top:(m.top-j.top)+k,left:(m.left-j.left)+i};if("using" in m){m.using.call(l,n);}else{h.css(n);}};a.fn.offset=function(i){var h=this[0];if(!h||!h.ownerDocument){return null;}if(i){return this.each(function(){a.offset.setOffset(this,i);});}return b.call(this);};}}(jQuery));