(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),c=t.n(o),l=(t(12),t(2)),i=(t(13),t(5)),u=t(1),d=t.n(u),m=function(e){var n=e.prepareAndValidateInput,t=e.setError,a=e.setCode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{placeholder:"function a() {\n  let b = 1;\n  b = 2;\n  b = 3;\n}\n\nfunction b() {\n  let b = 3;\n  let c = b;\n  b = 4;\n}"}),r.a.createElement("button",{onClick:function(e){return n(e,t,a)}},"Bulk rename!"))},s=function(e){var n=e.code,t=e.renameSymbol,a=e.setCode;return n._code.split("").map(function(e,o){return r.a.createElement("span",{onClick:function(){return t(n,o,a)},key:"code-".concat(o),id:"code-".concat(o)},e)})},p=function(e,n,t){var a=e.target.previousSibling.value;try{Object(i.parse)(a)}catch(r){return void n("Invalid JavaScript code.")}t(new d.a.Context(a))},b=function(e,n,t){try{t(new d.a.Context(e.rename(e.identify(n),prompt("New name for variable: "))))}catch(a){console.error("Invalid renaming."),t(e)}},f=function(){var e=r.a.useState(null),n=Object(l.a)(e,2),t=n[0],a=n[1],o=r.a.useState(null),c=Object(l.a)(o,2),i=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Bulk renamer for JavaScript by ",r.a.createElement("a",{href:"https://twitter.com/otterinjection"},"@otterinjection")),r.a.createElement("p",null,'How does one use this tool? Insert some JS, click the "Bulk Rename" button, and when prompted with your parsed code, you want to click the variable you wish to rename. You will then be presented with a dialog box asking you for your new variable name. Simply enter it, and press enter, and voilla, you\'re done.'),t?r.a.createElement("h5",{id:"error"},t):"",i?r.a.createElement(s,{code:i,renameSymbol:b,setCode:u}):r.a.createElement(m,{prepareAndValidateInput:p,setError:a,setCode:u}))};c.a.render(r.a.createElement(f,null),document.querySelector("#root"))},6:function(e,n,t){e.exports=t(19)}},[[6,1,2]]]);
//# sourceMappingURL=main.9a252d02.chunk.js.map