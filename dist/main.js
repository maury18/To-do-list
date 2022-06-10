(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"html {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nh1,\r\nh2,\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\ni {\r\n  color: #bbb;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.list-section {\r\n  border: 0.2rem solid #bbb;\r\n  margin-top: 6rem;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.8rem;\r\n  border-bottom: 0.2rem solid #bbb;\r\n}\r\n\r\n.add-list {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.8rem;\r\n  border: none;\r\n  border-bottom: 0.2rem solid #bbb;\r\n  outline: none;\r\n  font-size: 1.5rem;\r\n  color: #bbb;\r\n}\r\n\r\n.add-list::placeholder {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.new-task--container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.8rem;\r\n  border: none;\r\n  border-bottom: 0.2rem solid #bbb;\r\n}\r\n\r\n.left-content {\r\n  display: flex;\r\n  gap: 0.9rem;\r\n  align-items: center;\r\n}\r\n\r\n.left-content span {\r\n  font-size: 1.5rem;\r\n  color: #000;\r\n  line-height: 0;\r\n}\r\n\r\n.check-task {\r\n  display: block;\r\n  width: 0.8rem;\r\n  height: 0.8rem;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.right-content {\r\n  display: flex;\r\n  gap: 0;\r\n  align-items: center;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 0.8rem;\r\n  border: none;\r\n  background-color: #fff;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.fa-trash-can {\r\n  display: none;\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),c=e.n(s),d=e(216),l=e.n(d),p=e(589),u=e.n(p),f=e(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,document.querySelector("section"),document.querySelector("input"),document.querySelector(".tasks-container");const b=document.getElementById("tasks-container");document.querySelector("button"),[{description:"wash dishes",completed:!0,index:1}].forEach((n=>{const r=document.createElement("div");r.classList.add("new-task--container"),r.innerHTML+=`\n   <div class="left-content">\n      <input type="checkbox" ${n.completed} class="check-task">\n      <span>${n.description}</span>\n   </div>\n   <div class="right-content">\n      <i class="fa-solid fa-ellipsis-vertical"></i>\n      <i class="fa-solid fa-trash-can"></i>\n   </div>`,b.appendChild(r)}))})()})();