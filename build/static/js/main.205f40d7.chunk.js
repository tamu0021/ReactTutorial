(this.webpackJsonpReactTutorial2=this.webpackJsonpReactTutorial2||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);c(7);var s=c(4),n=c(6),r=c(1),i=c(3),a=c.n(i),j=c(5);function l(e){return o.apply(this,arguments)}function o(){return(o=Object(j.a)(a.a.mark((function e(t){var c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/".concat(t,"/images/random/12"));case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s.message);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=c(0);function u(){return Object(d.jsx)("header",{className:"hero is-dark is-bold",children:Object(d.jsx)("div",{className:"hero-body",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("h1",{className:"title",children:"Cute Dog Images"})})})})}function b(e){return Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image",children:Object(d.jsx)("img",{src:e.src,alt:"cute dog!"})})})})}function h(){return Object(d.jsx)("p",{children:"Loading..."})}function m(e){var t=e.urls;return null==t?Object(d.jsx)(h,{}):Object(d.jsx)("div",{className:"columns is-vcentered is-multiline",children:t.map((function(e){return Object(d.jsx)("div",{className:"column is-3",children:Object(d.jsx)(b,{src:e})},e)}))})}function x(e){return Object(d.jsx)("div",{children:Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault();var c=t.target.elements.breed;e.onFormSubmit(c.value)},children:Object(d.jsxs)("div",{className:"field has-addons",children:[Object(d.jsx)("div",{className:"control is-expanded",children:Object(d.jsx)("div",{className:"select is-fullwidth",children:Object(d.jsxs)("select",{name:"breed",defaultValue:"shiba",children:[Object(d.jsx)("option",{value:"shiba",children:"Shiba"}),Object(d.jsx)("option",{value:"akita",children:"Akita"})]})})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:"button is-dark",children:"Reload"})})]})})})}function O(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(r.useEffect)((function(){l("shiba").then((function(e){s(e)}))}),[]),Object(d.jsxs)("main",{children:[Object(d.jsx)("section",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(x,{onFormSubmit:function(e){l(e).then((function(e){s(e)}))}})})}),Object(d.jsx)("section",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(m,{urls:c})})})]})}function f(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("div",{className:"content has-text-centered",children:[Object(d.jsx)("p",{children:"Dog images are retrieved from Dog API"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"https://dog.ceo/dog-api/about",children:"Donate to Dog API"})})]})})}var v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsx)(O,{}),Object(d.jsx)(f,{})]})};Object(s.render)(Object(d.jsx)(v,{}),document.querySelector("#content"))}},[[14,1,2]]]);
//# sourceMappingURL=main.205f40d7.chunk.js.map