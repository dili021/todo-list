!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],u=n[d]||0,l="".concat(d," ").concat(u);n[d]=u+1;var s=c(l),A={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(A)):a.push({identifier:l,updater:C(A,t),references:1}),o.push(l)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function A(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function C(e,t){var n,o,r;if(t.singleton){var i=m++;n=f||(f=u(t)),o=A.bind(null,n,i,!1),r=A.bind(null,n,i,!0)}else n=u(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=d(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!0);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap);"]),r.push([e.i,'body{position:relative;margin:0;padding:0;background:#fafafa;font-family:"Baloo Tammudu 2",cursive;color:#4e4e4e}h1{text-align:center}.container{display:flex;min-height:100vh}#project{cursor:pointer;margin:0}#project:hover{text-decoration:underline}.project-wrap{padding:30px;box-shadow:5px 0 20px gray}.project-form{display:flex;flex-direction:column}.todos textarea{border:none;padding:15px;background:rgba(228,182,98,.747)}#todo-form{display:flex;flex-direction:column;justify-content:space-around;padding:5px}#todo-form textarea{background:rgba(169,235,84,.637)}.todos{display:flex;flex-direction:column;flex:2;padding:30px}.todos h3{margin:0}.todos select{margin:5px 0}.todo{padding:5px}label{padding:3px}.todo-container{display:flex;flex-wrap:wrap}.todos input{background:transparent;padding:5px;border:none;outline:none;margin:6px}.todos input[type=date]{padding:10px}.todos form{display:flex;flex-direction:column;width:30%}.message-modal{font-size:3rem;display:grid;place-items:center;position:absolute;left:0;right:0;top:0;bottom:0;color:#db3030}',"",{version:3,sources:["webpack://src/style.scss"],names:[],mappings:"AAEA,KACE,iBAAA,CACA,QAAA,CACA,SAAA,CACA,kBAAA,CACA,qCAAA,CACA,aAAA,CAEF,GACE,iBAAA,CAEF,WACE,YAAA,CACA,gBAAA,CAGF,SACE,cAAA,CACA,QAAA,CAEA,eACE,yBAAA,CAIJ,cACE,YAAA,CACA,0BAAA,CAGF,cACE,YAAA,CACA,qBAAA,CAGF,gBACE,WAAA,CACA,YAAA,CACA,gCAAA,CAGF,WACE,YAAA,CACA,qBAAA,CACA,4BAAA,CACA,WAAA,CAEA,oBACE,gCAAA,CAIJ,OACE,YAAA,CACA,qBAAA,CACA,MAAA,CACA,YAAA,CAEA,UACE,QAAA,CAGF,cACE,YAAA,CAIJ,MACE,WAAA,CAGF,MACE,WAAA,CAGF,gBACE,YAAA,CACA,cAAA,CAGF,aACE,sBAAA,CACA,WAAA,CACA,WAAA,CACA,YAAA,CACA,UAAA,CAGF,wBACE,YAAA,CAGF,YACE,YAAA,CACA,qBAAA,CACA,SAAA,CAEF,eACE,cAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,KAAA,CACA,QAAA,CACA,aAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&display=swap');\n\nbody {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  background: #fafafa;\n  font-family: 'Baloo Tammudu 2', cursive;\n  color: #4e4e4e;\n}\nh1 {\n  text-align: center;\n}\n.container {\n  display: flex;\n  min-height: 100vh;\n}\n\n#project {\n  cursor: pointer;\n  margin: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n}\n\n.project-wrap {\n  padding: 30px;\n  box-shadow: 5px 0 20px gray;\n}\n\n.project-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.todos textarea {\n  border: none;\n  padding: 15px;\n  background: rgba(228, 182, 98, 0.747);\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 5px;\n\n  textarea {\n    background: rgba(169, 235, 84, 0.637);\n  }\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  flex: 2;\n  padding: 30px;\n\n  h3 {\n    margin: 0;\n  }\n\n  select {\n    margin: 5px 0;\n  }\n}\n\n.todo {\n  padding: 5px;\n}\n\nlabel {\n  padding: 3px;\n}\n\n.todo-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.todos input {\n  background: transparent;\n  padding: 5px;\n  border: none;\n  outline: none;\n  margin: 6px;\n}\n\n.todos input[type=\"date\"] {\n  padding: 10px;\n}\n\n.todos form {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n}\n.message-modal {\n  font-size: 3rem;\n  display: grid;\n  place-items: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  color:rgb(219, 48, 48);\n}"],sourceRoot:""}]),t.default=r},function(e,t,n){"use strict";n.r(t);n(1);var o,r=(o=JSON.parse(localStorage.getItem("todos"))?JSON.parse(localStorage.getItem("todos")):[],{createProject:function(e){return{name:e,todos:[],createTodo:function(e){var t=e.title;!this.todos.some((function(e){return e.title===t}))&&this.todos.push(e)},editTodo:function(e){var t=e.title,n=e.description,o=e.priority,r=e.dueDate,i=this.todos.indexOf(e);this.todos[i]={title:t,description:n,dueDate:r,priority:o}},deleteTodo:function(e){this.todos=this.todos.filter((function(t){return t.title!==e}))}}},updateStorage:function(){localStorage.setItem("todos",JSON.stringify(o))},addProjectToStorage:function(e){return!o.some((function(t){return t.name===e.name}))&&(o.push(e),this.updateStorage(),!0)},deleteProject:function(e){o=o.filter((function(t){return t.title!==e.title}))},get storage(){return o}}),i=r.createProject("Default Project");function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}r.addProjectToStorage(i);var l=document.querySelector("#projects"),s=document.querySelector("#todos"),A=document.querySelector("#project-form"),p=(document.querySelectorAll("#project"),i);function f(e){var t=c(r.storage.filter((function(t){return t.name===e})),1);p=t[0]}var m=function(e){l.innerHTML="",e.storage.forEach((function(e){l.appendChild(function(e){var t=document.createElement("div");return t.innerHTML='\n  <h2 id="project">'.concat(e.name,"</h2>\n  "),t}(e))})),l.addEventListener("click",(function(e){"project"===e.target.id&&(f(e.target.textContent),C(p))}))},C=function e(t){s.textContent="",s.appendChild(function(e){var t=document.createElement("div");t.className="todo-container",t.innerHTML="";var n=document.createElement("form");return n.id="todo-form",n.innerHTML='\n  <input type="text" required placeholder="title" id="title"/>\n    <textarea id="description" cols="30" rows="10">description</textarea>\n    <label for="dueDate">due date</label>\n    <input type="date" id="dueDate"/>\n    <select id="priority">\n        <option value="" disabled selected>Priority</option>\n        <option value="high">high</option>\n        <option value="medium">medium</option>\n        <option value="low">low</option>\n    </select>\n    <button type="submit">Add Todo</button>\n  ',t.appendChild(n),e.todos.forEach((function(e){var n=document.createElement("form");n.className="todo",n.id="".concat(e.title),n.innerHTML="\n      <h3>".concat(e.title,'</h3>\n      <textarea type="text" rows="10" placeholder="description" id="description"/>').concat(e.description,'</textarea>\n      <label for="priority">priority:</label>\n      <label for="dueDate">due date:</label>\n      <input type="date" placeholder="dueDate" value="').concat(e.dueDate,'" id="dueDate"/>\n      <select id="priority">\n        <option value="').concat(e.priority,'" selected>').concat(e.priority,'</option>\n        <option value="high">high</option>\n        <option value="medium">medium</option>\n        <option value="low">low</option>\n      </select>\n      <button type="submit">X</button>\n    '),t.appendChild(n)})),t}(t)),g(t),a(document.querySelectorAll(".todo")).forEach((function(n){n.addEventListener("change",(function(e){var n=e.currentTarget,o={title:n.title.value,description:n.description.textContent,dueDate:n.dueDate.value,priority:n.priority.value};t.editTodo(o)})),n.addEventListener("submit",(function(n){n.preventDefault(),t.deleteTodo(n.currentTarget.id),e(p)}))}))};function g(e){document.querySelector("#todo-form").addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget,o={title:n.title.value,description:n.description.textContent,dueDate:n.dueDate.value,priority:n.priority.value};e.createTodo(o),C(e)}))}A.addEventListener("submit",(function(e){e.preventDefault(),l.innerHTML="";var t,n,o=e.currentTarget.name.value,i=r.createProject(o);r.addProjectToStorage(i)||(t="Project already exists",(n=document.createElement("div")).className="message-modal",n.textContent=t,document.body.appendChild(n),setTimeout((function(){n.style.display="none"}),1500)),m(r)})),m(r),C(i)}]);
//# sourceMappingURL=main.bundle.js.map