(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{6885:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(2809),c=r(2283),i=(r(7294),r(4848)),o=r(6618),s=r(70),u=r(3123),a=function(t){var e=t.CollectList,r=t.FormList,n=e.map((function(t){return t.correctText}));return JSON.stringify(n)==JSON.stringify(r)},l=r(6269),f=r(5893);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=function(t){var e=(0,c.cI)(),r=e.handleSubmit,n=e.register,p=e.formState.isSubmitting,h=(0,l.Z)({nextPage:t.nextPage||"/page1"}).handleClick;return(0,f.jsxs)("div",{children:[(0,f.jsxs)("form",{onSubmit:r((function(e){console.log(e.name),console.log(t.correctList),h({isCorrect:a({CollectList:t.correctList,FormList:e.name})})})),children:[t.correctList.map((function(t,e){return(0,f.jsxs)(i.NI,{children:[(0,f.jsx)(o.l,{htmlFor:"name",fontWeight:"800",children:t.title}),(0,f.jsx)(s.I,d({id:"name.".concat(e),placeholder:t.title},n("name.".concat(e),{required:"\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093"})))]},e)})),(0,f.jsx)(u.z,{mt:4,colorScheme:"teal",isLoading:p,type:"submit",children:"Submit"})]}),(0,f.jsx)("p",{children:"hogehoge"}),t.correctList.map((function(t,e){return(0,f.jsx)("p",{children:JSON.stringify(t)},e)}))]})}},6269:function(t,e,r){"use strict";var n=r(1163),c=r(980);e.Z=function(t){var e=(0,n.useRouter)(),r=(0,c.useToast)(),i=t.nextPage;return{handleClick:function(t){t.isCorrect?(t.NotShowToast||r({title:t.CorrecttoastTitle||"\u6b63\u89e3\u3067\u3059\u6b21\u306e\u554f\u984c\u306b\u884c\u304d\u307e\u3057\u3087\u3046",description:t.CorrecttoastBody||"You have successfully completed this page",status:"success",duration:3e3,isClosable:!0}),t.notPush||e.push(i)):r({title:"\u7b54\u3048\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",description:"\u3082\u3046\u4e00\u5ea6\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046",status:"error",duration:4e3,isClosable:!0})}}}},7302:function(t,e,r){"use strict";r.r(e),r.d(e,{Home:function(){return i}});r(7294);var n=r(6885),c=r(5893),i=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:"\u3044\u3061\u3082\u3093\u3081"}),(0,c.jsx)(n.Z,{nextPage:"/page2",correctList:[{title:"\u30bf\u30a4\u30c8\u30eb1",correctText:"aaa",type:"text"},{title:"\u30bf\u30a4\u30c8\u30eb2",correctText:"aaa",type:"text"},{title:"\u30bf\u30a4\u30c8\u30eb1",correctText:"aaa",type:"text"}]})]})};e.default=i},372:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page1",function(){return r(7302)}])}},function(t){t.O(0,[774,398,224,888,179],(function(){return e=372,t(t.s=e);var e}));var e=t.O();_N_E=e}]);