(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8482:function(r,e,t){"use strict";t.d(e,{E:function(){return h},d:function(){return f}});var n=t(63),i=t(8629),o=t(5505),a=t(3808),s=t(7294),l=t(8327);function c(){return(c=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function d(r,e){if(null==r)return{};var t,n,i={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(i[t]=r[t]);return i}var u=s.forwardRef(((r,e)=>{var{htmlWidth:t,htmlHeight:n,alt:i}=r,o=d(r,["htmlWidth","htmlHeight","alt"]);return s.createElement("img",c({width:t,height:n,ref:e,alt:i},o))})),h=(0,n.G)(((r,e)=>{var{fallbackSrc:t,fallback:n,src:a,align:h,fit:f,loading:g,ignoreFallback:b,crossOrigin:p}=r,m=d(r,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),v=null!=g||b,x=function(r){var{src:e,srcSet:t,onLoad:n,onError:i,crossOrigin:o,sizes:a,ignoreFallback:c}=r,[d,u]=(0,s.useState)("pending");(0,s.useEffect)((()=>{u(e?"loading":"pending")}),[e]);var h=(0,s.useRef)(),f=(0,s.useCallback)((()=>{if(e){g();var r=new Image;r.src=e,o&&(r.crossOrigin=o),t&&(r.srcset=t),a&&(r.sizes=a),r.onload=r=>{g(),u("loaded"),null==n||n(r)},r.onerror=r=>{g(),u("failed"),null==i||i(r)},h.current=r}}),[e,o,t,a,n,i]),g=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,l.G)((()=>{if(!c)return"loading"===d&&f(),()=>{g()}}),[d,f,c]),c?"loaded":d}(c({},r,{ignoreFallback:v})),k=c({ref:e,objectFit:f,objectPosition:h},v?m:(0,o.CE)(m,["onError","onLoad"]));return"loaded"!==x?n||s.createElement(i.m$.img,c({as:u,className:"chakra-image__placeholder",src:t},k)):s.createElement(i.m$.img,c({as:u,src:a,crossOrigin:p,loading:g,className:"chakra-image"},k))})),f=(0,n.G)(((r,e)=>s.createElement(i.m$.img,c({ref:e,as:u,className:"chakra-image"},r))));a.Ts&&(h.displayName="Image")},4485:function(r,e,t){"use strict";t.d(e,{Z:function(){return a}});t(7294);var n=t(8017),i=t(336),o=t(5893),a=function(r){return(0,o.jsx)(n.xu,{py:"2",children:(0,o.jsx)(i.X,{p:"2",bg:"gray.200",children:r.children})})}},6269:function(r,e,t){"use strict";var n=t(1163),i=t(980);e.Z=function(r){var e=(0,n.useRouter)(),t=(0,i.useToast)(),o=r.nextPage;return{handleClick:function(r){r.isCorrect?(r.NotShowToast||t({title:r.CorrecttoastTitle||"\u6b63\u89e3\u3067\u3059\u6b21\u306e\u554f\u984c\u306b\u884c\u304d\u307e\u3057\u3087\u3046",description:r.CorrecttoastBody||"You have successfully completed this page",status:"success",duration:3e3,isClosable:!0}),r.notPush&&(r.notPush||!r.nextPagePath&&!o)||e.push(r.nextPagePath||o)):t({title:"\u7b54\u3048\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",description:"\u3082\u3046\u4e00\u5ea6\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046",status:"error",duration:4e3,isClosable:!0})}}}},4066:function(r,e,t){"use strict";t.r(e),t.d(e,{Home:function(){return y},default:function(){return O}});var n=t(7294),i=t(6269),o=t(8482),a=t(4115),s=t(3123),l=t(4096),c=t(8017),d=t(336),u=t(63),h=t(4915),f=t(5284),g=t(8629),b=t(4461),p=t(3808);function m(){return(m=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function v(r,e){if(null==r)return{};var t,n,i={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(i[t]=r[t]);return i}var x=(0,u.G)(((r,e)=>{var t=(0,h.m)("Divider",r),{borderLeftWidth:i,borderBottomWidth:o,borderTopWidth:a,borderRightWidth:s,borderWidth:l,borderStyle:c,borderColor:d}=t,u=v(t,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),p=(0,f.Lr)(r),{className:x,orientation:k="horizontal",__css:j}=p,_=v(p,["className","orientation","__css"]),y={vertical:{borderLeftWidth:i||s||l||"1px",height:"100%"},horizontal:{borderBottomWidth:o||a||l||"1px",width:"100%"}};return n.createElement(g.m$.hr,m({ref:e,"aria-orientation":k},_,{__css:m({},u,{border:"0",borderColor:d,borderStyle:c},y[k],j),className:(0,b.cx)("chakra-divider",x)}))}));p.Ts&&(x.displayName="Divider");var k=t(5893),j=function(r){return(0,k.jsx)(l.k,{py:"2",css:{gap:".5rem"},children:r.list.map((function(r){return(0,k.jsxs)(c.xu,{borderWidth:"2px",p:"2",w:"full",rounded:"md",children:[(0,k.jsx)(d.X,{as:"h3",p:"2",size:"lg",children:r.title}),(0,k.jsx)(x,{size:"lg"}),(0,k.jsx)(a.x,{p:"2",children:r.description})]},r.title)}))})},_=t(4485),y=function(){var r=(0,i.Z)({nextPage:"/page1"}).handleClick;return(0,k.jsxs)("div",{children:[(0,k.jsx)(o.d,{src:"/ogp/Titleimg.png",mt:"2"}),(0,k.jsx)(_.Z,{children:"\u30b9\u30c8\u30fc\u30ea\u30fc"}),(0,k.jsxs)(a.x,{py:"2",children:["\u3068\u3042\u308b\u5c0f\u5b66\u6821\u304c\u7d0d\u8c46\u5de5\u5834\u306e\u5de5\u5834\u898b\u5b66\u3092\u7533\u3057\u8fbc\u3093\u3060\u3002\u7d0d\u8c46\u5de5\u5834\u306f\u3088\u308a\u7f8e\u5473\u3057\u3044\u7d0d\u8c46\u3092\u4f5c\u308b\u305f\u3081\u306b\u3001\u65e5\u3005\u7d0d\u8c46\u83cc\u306e\u7814\u7a76\u3092\u3057\u3066\u304a\u308a\u3001\u54c1\u7a2e\u6539\u826f\u3092\u884c\u3063\u3066\u3044\u304f\u3046\u3061\u306b\u7d0d\u8c46\u83cc\u304c\u304a\u304b\u3057\u306a\u884c\u52d5\u3092\u3068\u308b\u3053\u3068\u304c\u76ee\u6483\u3055\u308c\u3066\u3044\u308b\u3002\u5de5\u5834\u306f\u305d\u306e\u7d0d\u8c46\u83cc\u3092\u96a0\u3057\u3066\u3044\u308b\u5f8c\u308d\u3081\u305f\u3055\u304c\u3042\u308b\u304c\u3001\u516c\u8868\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u65ad\u308b\u7406\u7531\u3082\u306a\u304f\u53d7\u3051\u5165\u308c\u305f\u3002",(0,k.jsx)("br",{}),"\u5de5\u5834\u898b\u5b66\u304c\u3061\u3083\u304f\u3061\u3083\u304f\u3068\u9032\u3093\u3067\u3044\u304f\u4e2d\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u73ed\u306f\u96c6\u56e3\u3068\u96e2\u308c\u3066\u5de5\u5834\u306e\u63a2\u691c\u3092\u3057\u3066\u3057\u307e\u3046\u3002\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u3042\u308b\u7570\u5909\u306b\u6c17\u3065\u3044\u305f\u3002\u5de5\u5834\u5185\u304c\u3069\u3093\u3069\u3093\u6691\u304f\u306a\u3063\u3066\u3044\u304f\u306e\u3060\u3002\u8010\u3048\u304c\u305f\u3044\u74b0\u5883\u306b\u306a\u3063\u3066\u3044\u304f\u306e\u3067\u6025\u3044\u3067\u96c6\u56e3\u3068\u5408\u6d41\u3057\u3088\u3046\u3068\u6c7a\u3081\u305f\u3068\u304d\u3001\u5974\u304c\u66b4\u308c\u3060\u3057\u305f\u3002"]}),(0,k.jsx)(_.Z,{children:"\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3059\u308b\u524d\u306b"}),(0,k.jsx)(j,{list:[{title:"\u7d19\u3068\u30da\u30f3\u3092\u7528\u610f\u3057\u3088\u3046\uff01",description:"\u30e1\u30e2\u3092\u3068\u308b\u305f\u3081\u306e\u7d19\u3068\u7b46\u8a18\u7528\u5177\u3092\u304a\u624b\u5143\u306b\u3054\u6e96\u5099\u304f\u3060\u3055\u3044\u3002"},{title:"\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3061\u3083\u3093\u3068\u53d6\u308d\u3046",description:"2\u4eba\u3067\u30b2\u30fc\u30e0\u3092\u9032\u3081\u3066\u3044\u304f\u306e\u3067\u3001\u60c5\u5831\u5171\u6709\u306f\u3057\u3063\u304b\u308a\u3068\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"}]}),(0,k.jsx)(s.z,{mt:"2",variant:"black",w:"full",onClick:function(){r({isCorrect:!0,NotShowToast:!0})},children:"\u6e96\u5099OK\uff1f\u3067\u306f\u3001\u30b2\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\uff01\uff01\uff01"})]})},O=y},5301:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4066)}])}},function(r){r.O(0,[774,398,888,179],(function(){return e=5301,r(r.s=e);var e}));var e=r.O();_N_E=e}]);