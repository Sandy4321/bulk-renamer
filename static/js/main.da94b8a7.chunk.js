(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},19:function(e,t,n){},20:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),l=(n(19),n(2)),u=(n(20),n(3)),i=n(4),m=n.n(i),d=function(e){var t=e.prepareAndValidateInput,n=e.setError,a=e.setCode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{placeholder:"function a() {\n  let b = 1;\n  b = 2;\n  b = 3;\n}\n\nfunction b() {\n  let b = 3;\n  let c = b;\n  b = 4;\n}"}),r.a.createElement("button",{onClick:function(e){return t(e,n,a)}},"Bulk rename!"))},s=n(13),p=n.n(s),b=function(e){var t=e.code,n=e.renameSymbol,a=e.setCode,o=r.a.useState(!1),c=Object(l.a)(o,2),i=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("pre",null,p.a.generate(Object(u.parse)(t._code))):r.a.createElement(r.a.Fragment,null,t._code.split("").map(function(e,o){return r.a.createElement("span",{onClick:function(){return n(t,o,a)},key:"code-".concat(o),id:"code-".concat(o)},e)}),r.a.createElement("button",{id:"done-button",onClick:function(){return m(!0)}},"Done?")))},f=function(e,t,n){var a=e.target.previousSibling.value;try{Object(u.parse)(a)}catch(r){return void t("Invalid JavaScript code.")}n(new m.a.Context(a))},h=function(e,t,n){try{n(new m.a.Context(e.rename(e.identify(t),prompt("New name for variable: "))))}catch(a){console.warn("Invalid renaming."),n(e)}},w=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1],o=r.a.useState(null),c=Object(l.a)(o,2),u=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Bulk renamer for JavaScript by ",r.a.createElement("a",{href:"https://twitter.com/otterinjection"},"@otterinjection")," [",r.a.createElement("a",{href:"https://github.com/fredrikaugust/bulk-renamer"},"source"),"]"),r.a.createElement("p",null,'How does one use this tool? Insert some JS, click the "Bulk Rename" button, and when prompted with your parsed code, you want to click the variable you wish to rename. You will then be presented with a dialog box asking you for your new variable name. Simply enter it, and press enter, and voilla, you\'re done.'),n?r.a.createElement("h5",{id:"error"},n):"",u?r.a.createElement(b,{code:u,renameSymbol:h,setCode:i}):r.a.createElement(d,{prepareAndValidateInput:f,setError:a,setCode:i}))};c.a.render(r.a.createElement(w,null),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.da94b8a7.chunk.js.map