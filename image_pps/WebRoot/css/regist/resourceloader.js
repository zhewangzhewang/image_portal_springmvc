var ResourceLoader={};(function(a,j){var o={};var b=CorbisData.AssemblyKey;var i=CorbisData.Locale;var d=f(navigator.userAgent);var c=d.browser;var e=d.version.substr(0,1);var p=CorbisData.StaticRoot;var n=[];j.Load=function(u,r,w,t){if(!t){t=u;}if(!w){w="js";}if(!document.getElementById(t)){o[t]={loaded:false,data:null,handlers:[]};if(r){o[t].handlers.push(r);}var v=(document.location.protocol=="https:")?u:p+u;var s=g[w](v,t);document.getElementsByTagName("head")[0].appendChild(s);}else{if(a.isFunction(r)){if(o[t].loaded){r(t);}else{o[t].handlers.push(r);}}}};j.LoadPackage=function(s,r){if(!r){r="_"+s+"Init";}var t=["/jspkg",b,c,e,i,s];j.Load(t.join("/")+".js",r,"js","Package_"+s);};j.LoadPackages=function(u){for(var s=0;s<u.length;s++){var t=u[s].packageName;var r=u[s].callback;if(o["Package_"+t]){continue;}if(!r){r="_"+t+"Init";}var v=["/jspkg",b,c,e,i,t];h(v.join("/")+".js",r,"js","Package_"+t);}l();};j.LoadCSS=function(s,r){if(!r){r="_"+s+"Init";}var t=["/csspkg",b,c,e,i,s];j.Load(t.join("/")+".css",r,"css","Package_"+s);};j.LoadPackageWithData=function(u,s,v){if(o["Package_"+u]){return;}var t=function(){a(document).trigger("OnPackageLoad."+u.replace(".","_"));if(o["Package_"+u].data){q(u);}};var r=function(){if(o["Package_"+u].loaded){q(u);}};j.LoadPackage(u,t);a.get(s,null,function(w){o["Package_"+u].data=w;r();},v||"json");};j.IsPackageLoaded=function(r){if(o["Package_"+r]&&o["Package_"+r].loaded){return true;}return false;};function h(t,r,u,s){n.push([t,r,u,s]);}function l(){if(n.length>0){m(n.shift());}}function m(s){var r=s[1];var u=s[0];if(n.length>0){var t=n.shift();r=function(){if(a.isFunction(s[1])){s[1](null);}else{if(a.isFunction(window[s[1]])){window[s[1]](null);}}m(t);};}j.Load(s[0],r,s[2],s[3]);}var g={js:function(s,r){var t=document.createElement("script");t.type="text/javascript";t.src=s;t.id=r;t.onload=t.onreadystatechange=k(r);return t;},css:function(s,r){var t=document.createElement("link");t.rel="stylesheet";t.type="text/css";t.href=s;t.id=r;t.onload=t.onreadystatechange=k(r);return t;}};function k(r){return function(){var u=this.readyState;if(u&&u!="complete"&&u!="loaded"){return;}var t=o[r].handlers;while(t.length){var s=t.shift();if(a.isFunction(s)){s();}else{if(a.isFunction(window[s])){window[s]();}}}o[r].loaded=true;};}function q(r){a(document).trigger("OnPackageDataReady."+r.replace(".","_"),[o["Package_"+r].data]);}function f(s){s=s.toLowerCase();var r=/(webkit)[ \/]([\w.]+)/.exec(s)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(msie) ([\w.]+)/.exec(s)||!/compatible/.test(s)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(s)||[];return{browser:r[1]||"",version:r[2]||"0"};}})(window.jQuery,ResourceLoader);