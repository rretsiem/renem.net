window.loadIndieConfig=function(){"use strict";var e,n,t,o,i,a=[];return o=function(){for(e=e||{},n.parentNode.removeChild(n),n=void 0,window.removeEventListener("message",i),clearTimeout(t);a[0];)a.shift()(e)},i=function(t){if(n&&t.source===n.contentWindow&&void 0===e){try{e=JSON.parse(t.data)}catch(e){}o()}},window.navigator.registerProtocolHandler||(e={}),function(d){e?d(e):(a.push(d),n||((n=document.createElement("iframe")).src="web+action:load",document.getElementsByTagName("body")[0].appendChild(n),n.style.display="none",window.addEventListener("message",i),t=setTimeout(o,3e3)))}}();