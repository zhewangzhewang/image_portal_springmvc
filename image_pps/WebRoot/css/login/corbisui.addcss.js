CorbisUI.AddCSS=function(b){var c=document.getElementsByTagName("head")[0];var a=document.createElement("style");a.type="text/css";a.media="screen";if(a.styleSheet){a.styleSheet.cssText=b;}else{a.appendChild(document.createTextNode(b));}c.appendChild(a);};var CI=CI||{};CI.AddCSS=CorbisUI.AddCSS;