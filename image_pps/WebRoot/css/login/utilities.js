var CorbisUI=CorbisUI||{};CorbisUI.Utilities=CorbisUI.Utilities||{};(function(a,b){b.popup=function(f,e,g,d){window.open(f,e,"width="+g+",height="+d+",menubar=no,scrollbars=yes,toolbar=no,location=no,status=no,directories=no");};b.requireAuth=function(d,e){c(CorbisData.isAuthed,d,e);};b.requireFullAuth=function(d,e){c(CorbisData.isFullAuth,d,e);};function c(d,e,f){if(!d){CorbisUI.AccountUtils.RedirectToSignIn(f.action,f.actionParam,f.forceHash);}else{if(a.isFunction(e)){e();}}}b.openEnlargementPage=function(e,d){if(e.indexOf("?")==-1){e+="?popup=1";}else{e+="&popup=1";}if(d){e+="&caller="+d;}var f=["titlebar="+0,"toolbar="+0,"scrollbars="+1,typeof($target)==="string"?$target:"location="+0,"status="+0,"menubar="+0,"resizable="+1,"height="+750,"width="+1024,"left="+Math.floor((parent.window.screen.width/2)-(1024/2)),"top="+Math.floor((parent.window.screen.height/2)-(750/2))];win=window.open(e,a.getCurrentTimeMS(),f.join(","));};})(jQuery,CorbisUI.Utilities);