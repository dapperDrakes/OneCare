if (self.CavalryLogger) { CavalryLogger.start_js(["7vw8h"]); }

__d('UnicodeCJK',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h='a-zA-Z',i='\uFF21-\uFF3A\uFF41-\uFF5A',j=h+i,k='\u3040-\u309F',l='\u30A0-\u30FF',m='\u31F0-\u31FF',n='\uFF65-\uFF9F',o=l+m+n,p=k+o,q=[12352,12447],r=[12448,12543],s=r[0]-q[0],t='\u4E00-\u9FCF',u='\u3400-\u4DBF',v=t+u,w='\uAC00-\uD7AF',x=v+p+w,y=null,z=null,aa=null,ba=null;function ca(ka){z=z||new RegExp('['+p+']');return z.test(ka);}function da(ka){y=y||new RegExp('['+v+']');return y.test(ka);}function ea(ka){aa=aa||new RegExp('['+x+']');return aa.test(ka);}function fa(ka){var la=ka.charCodeAt(0);return String.fromCharCode(la<q[0]||la>q[1]?la:la+s);}function ga(ka){if(!ca(ka))return ka;return ka.split('').map(fa).join('');}function ha(ka){ba=ba||new RegExp('^'+'['+p+']+'+'['+j+']'+'$');return ba.test(ka);}function ia(ka){if(ha(ka))return ka.substr(0,ka.length-1);return ka;}var ja={hasKana:ca,hasIdeograph:da,hasIdeoOrSyll:ea,hiraganaToKatakana:ga,isKanaWithTrailingLatin:ha,kanaRemoveTrailingLatin:ia};f.exports=ja;},null);