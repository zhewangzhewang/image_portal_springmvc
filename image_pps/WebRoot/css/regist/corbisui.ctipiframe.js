var CorbisUI=CorbisUI||{};CorbisUI.CTip=CorbisUI.CTip||{};CorbisUI.CTip.IFrameModal=CorbisUI.CTip.IFrameModal||{};(function(a,g){var e="iframe-ctip";var f="."+e;var c="ctip-iframe";var b="autoSize";var d={style:{width:0,classes:{content:e+"-content",tooltip:e}},show:{when:{event:null},effect:{type:"none"},solo:true},hide:{when:{event:null},effect:{type:"none"}},position:{enableDynamicUpdate:false},allowDefocusClose:true};g.showWithOthers=function(l,m,h,i,k,j){k=k||{};k.opener=j;k=a.extend({},d,{show:{solo:false}},k);g.show(l,m,h,i,k);};g.show=function(q,r,j,k,p){p=a.extend({},d,p);p.style.width=r;k=k||0;if(!a("#loading").length){var n=a("#fade_page").length;var o=CorbisUI.CommonTemplates.loading({display_text:CorbisUI.Localization.loading,hideFadePage:n});a("body").append('<div id="loading">'+o+"</div>");}var i=a("#fade_page");if(p.noblock){i.css("display","none");}if(p.opener){p.opener.css("z-index","3");}a("#waiting-contents").show();if(i.data("ctip")){g.store();}if(p.allowDefocusClose){i.click(function(){g.hide(true);});}var l="";if(j!=-1){l="height: "+j+"px;";}var m=new CorbisUI.CTip.Tooltip(i,'<iframe id="ctip-iframe" src="'+q+'" style="width: '+r+"px;"+l+' border: none;" scrolling="no" frameborder="0" />',p);var h=a("#ctip-iframe");h.bind(b,function(){var s=a(this);var u=s.contents().find("html").height()+k;if(a.browser.msie){var t=s.contents().find("body")[0];u=t.scrollHeight+(t.offsetHeight-t.clientHeight)+k;}s.height(u);g.centerPopup(r,u);a(f).css("visibility","visible");a("#waiting-contents").hide();});h.load(function(){h.trigger(b);h.bind("resize",function(){h.trigger(b);});a(window).bind("resize.ctip-iframe",function(){h.trigger(b);});});if(j!=-1){g.centerPopup(r,j);}};g.centerPopup=function(j,i){var h=a(f);if(i>a(window).height()){i=a(window).height();h.css("height",i+"px");h.css("overflow","scroll");}else{h.css("height","");h.css("overflow","");}h.css("margin-left",(-1*(j/2))+"px");h.css("margin-top",(-1*(i/2))+"px");};g.hide=function(j){var i=a("#fade_page");var h=a(i[0]).data("ctip");a(window).unbind("resize.ctip-iframe");if(g.restorePrevious()||(j&&h&&!h._options.allowDefocusClose)){return false;}if(!h){return false;}if(i&&i.length>0&&h){h.destroy();}a("#loading").remove();if(h&&h._options.opener){h._options.opener.css("z-index","5");}return true;};g.store=function(){var h=a("#fade_page");var i=h.data("ctip");h.data("previousCtip",i);h.removeData("ctip");a("#"+c).attr("id","#"+c+"_prev");i.hide();};g.restorePrevious=function(){var i=a("#fade_page");var j=i.data("previousCtip");if(j){var h=i.data("ctip");if(h){h.destroy();}i.data("ctip",j);i.removeData("previousCtip");a("#"+c+"_prev").attr("id","#"+c);j.show();return true;}return false;};})(window.jQuery,CorbisUI.CTip.IFrameModal);function PricingModalPopupExit(){if(window.parent&&window.parent.CorbisUI&&window.parent.CorbisUI.CTip&&window.parent.CorbisUI.CTip.IFrameModal&&window.parent.CorbisUI.CTip.IFrameModal.hide){window.parent.CorbisUI.CTip.IFrameModal.hide();}if(CorbisUI&&CorbisUI.CTip&&CorbisUI.CTip.IFrameModal&&CorbisUI.CTip.IFrameModal.hide){CorbisUI.CTip.IFrameModal.hide();}if(parent&&parent.MochaUI){parent.MochaUI.CloseModal("pricing");}else{if(parent&&parent.isBase){parent.CorbisUI.CTip.IFrameModal.hide();}else{if(parent&&parent.CI&&parent.CI.Pricing&&parent.CI.Pricing.Dialogs){parent.CI.Pricing.Dialogs.closeCalculator();}}}}