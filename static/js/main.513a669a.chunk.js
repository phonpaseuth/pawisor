(this.webpackJsonppawisor=this.webpackJsonppawisor||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(5),r=n.n(i),o=(n(11),n(2)),l=[{name:"Saul",breed:"Lab",owner:"Dave",size:"LG",description:"An energetic lab that loves to play"},{name:"Goldie",breed:"Lab",owner:"Dave",size:"LG",description:"Office mommy dog"},{name:"Gio",breed:"Terrier",owner:"Dan",size:"SM",description:"A fluffy terrier mix who runs on treats"},{name:"Sophie",breed:"Pit Bull",owner:"Christina",size:"MD",description:"A brindled pitbull princess"},{name:"Taro",breed:"Great Pyrenees",owner:"Sara",size:"XL",description:"A great pyrenees mix often confused with a horse"},{name:"Gabby",breed:"Pit Bull",owner:"Dan",size:"MD",description:"A tutu-flaunting American bulldog/pitbull mix"},{name:"Percy",breed:"Husky",owner:"Monica",size:"LG",description:"A wolf-sized pup with piercing blue eyes"},{name:"Benny",breed:"Hound",owner:"Brandon",size:"MD",description:"A belly-rub loving hound-mix"},{name:"Baxter",breed:"Chihuahua",owner:"Skip",size:"XS",description:"The eldest, wisest, and tiniest dog of the office"},{name:"Vyla",breed:"Poodle",owner:"Skip",size:"SM",description:"The resident toy and bone hoarder"}],d=n.p+"static/media/circle-filled.0f92d32a.svg",j=n.p+"static/media/delete.353fcdfd.svg";n(12);var b=function(e){var t=e.dog,n=e.onDelete;return Object(a.jsxs)("div",{className:"dog-card",children:[Object(a.jsx)("div",{className:"dog-card__actions-container",children:Object(a.jsx)("img",{src:j,alt:"Delete",onClick:function(){return n(t)}})}),Object(a.jsx)("div",{className:"dog-card__name",children:t.name}),Object(a.jsxs)("div",{className:"dog-card__info",children:[Object(a.jsx)("span",{className:"dog-card__breed",children:t.breed}),Object(a.jsx)("img",{src:d,width:4,height:4,alt:"circle filled icon"}),Object(a.jsx)("span",{className:"dog-card__size",children:t.size}),Object(a.jsx)("img",{src:d,width:4,height:4,alt:"circle filled icon"}),Object(a.jsx)("span",{className:"dog-card__owner",children:t.owner})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"dog-card__description",children:t.description})]})},u=n(3);n(13);var m=function(e){var t=e.className,n=e.children;return Object(a.jsx)("div",{className:Object(u.a)("container",t),children:n})},h=n.p+"static/media/cancel.da5c4222.svg";n(14);var O=function(e){var t=e.show,n=e.onClose,c=e.className,s=e.children;return t?Object(a.jsx)("div",{className:Object(u.a)("modal",c),children:Object(a.jsxs)("div",{className:"modal__content",children:[Object(a.jsx)("button",{onClick:n,className:"modal__cancel-button",children:Object(a.jsx)("img",{src:h,alt:"cancel modal icon"})}),s]})}):null},g=n.p+"static/media/undraw_cautious_dog.49aa3fad.svg";n(15);var x=function(e){var t=e.show,n=e.onClose,s=e.registerNewDog,i=Object(c.useState)(""),r=Object(o.a)(i,2),l=r[0],d=r[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),m=b[0],h=b[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),v=f[0],p=f[1],_=Object(c.useState)("XS"),w=Object(o.a)(_,2),N=w[0],S=w[1],C=Object(c.useState)(""),D=Object(o.a)(C,2),y=D[0],z=D[1];function M(){d(""),h(""),p(""),S("XS"),z(""),n()}function k(){return 0===l.length||0===m.length||0===v.length||0===N.length||0===y.length}return Object(a.jsxs)(O,{show:t,onClose:M,children:[Object(a.jsxs)("div",{className:"register-new-dog-modal__header",children:[Object(a.jsx)("img",{src:g,alt:"Cautious dog"}),Object(a.jsx)("h2",{children:"Recommend an advisor"}),Object(a.jsx)("p",{children:"We're always looking to add new members to our team!"}),Object(a.jsx)("p",{children:"Tell us a bit more about this friend."})]}),Object(a.jsxs)("form",{className:"register-new-dog-modal__form",onSubmit:function(e){return function(e){e.preventDefault(),s({name:l,breed:m,owner:v,size:N,description:y}),M()}(e)},children:[Object(a.jsxs)("label",{className:"register-new-dog-modal__label",children:[Object(a.jsx)("span",{children:"Name"}),Object(a.jsx)("input",{type:"text",value:l,onChange:function(e){return d(e.target.value)}})]}),Object(a.jsxs)("label",{className:"register-new-dog-modal__label",children:[Object(a.jsx)("span",{children:"Breed"}),Object(a.jsx)("input",{type:"text",value:m,onChange:function(e){return h(e.target.value)}})]}),Object(a.jsxs)("label",{className:"register-new-dog-modal__label",children:[Object(a.jsx)("span",{children:"Owner"}),Object(a.jsx)("input",{type:"text",value:v,onChange:function(e){return p(e.target.value)}})]}),Object(a.jsxs)("label",{className:"register-new-dog-modal__label",children:[Object(a.jsx)("span",{children:"Size"}),Object(a.jsxs)("select",{value:N,onChange:function(e){return S(e.target.value)},children:[Object(a.jsx)("option",{value:"XS",children:"XS"}),Object(a.jsx)("option",{value:"SM",children:"SM"}),Object(a.jsx)("option",{value:"MD",children:"MD"}),Object(a.jsx)("option",{value:"LG",children:"LG"}),Object(a.jsx)("option",{value:"XL",children:"XL"})]})]}),Object(a.jsxs)("label",{className:"register-new-dog-modal__label",children:[Object(a.jsx)("span",{children:"Description"}),Object(a.jsx)("textarea",{value:y,onChange:function(e){return z(e.target.value)}})]}),Object(a.jsx)("input",{className:Object(u.a)("register-new-dog-modal__submit-button",{"register-new-dog-modal__submit-button--active":!k()}),type:"submit",value:"RECOMMEND",disabled:k()})]})]})},f=n.p+"static/media/undraw_walk_dreaming.78c53ba8.svg";n(16);var v=function(e){var t=e.label,n=e.className,c=e.onClick;return Object(a.jsx)("button",{className:Object(u.a)("button",n),onClick:c,children:t})};n(17);var p=function(e){var t=e.dog,n=e.show,c=e.onDelete,s=e.onClose;return Object(a.jsxs)(O,{show:n,onClose:s,children:[Object(a.jsxs)("div",{className:"delete-confirmation-modal__header",children:[Object(a.jsx)("img",{src:f,alt:"Sad dog"}),Object(a.jsxs)("h2",{children:["Remove ",Object(a.jsx)("i",{children:null===t||void 0===t?void 0:t.name}),"?"]}),Object(a.jsx)("p",{children:"This action cannot be reversed."})]}),Object(a.jsx)("div",{className:"delete-confirmation-modal__delete-button-container",children:Object(a.jsx)(v,{label:"Yes, I'm sure",className:"delete-confirmation-modal__delete-button",onClick:c})})]})},_=n.p+"static/media/undraw_team_spirit.79e359a3.svg";n(18);var w=function(){return Object(a.jsx)("div",{className:"hero",children:Object(a.jsxs)("div",{className:"hero__image",children:[Object(a.jsxs)("div",{className:"hero__text",children:[Object(a.jsx)("h1",{children:"Pawisor"}),Object(a.jsx)("p",{children:"Our friendliest and fluffiest financial advisors at Voyant"})]}),Object(a.jsx)("img",{src:_,alt:"Team spirit"})]})})};n(19);var N=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("dogsData")||"[]")),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),r=Object(o.a)(i,2),d=r[0],j=r[1],u=Object(c.useState)(!1),h=Object(o.a)(u,2),O=h[0],g=h[1],f=Object(c.useState)(void 0),_=Object(o.a)(f,2),N=_[0],S=_[1];function C(e){g(!0),S(e)}return 0===n.length&&(console.log("Saving to local storage"),s(l),localStorage.setItem("dogsData",JSON.stringify(l))),Object(a.jsxs)(m,{className:"home",children:[Object(a.jsx)(w,{}),Object(a.jsx)("h2",{className:"home__title",children:"Meet our most trusted advisors"}),Object(a.jsx)(v,{label:"Recommend an advisor",onClick:function(){return j(!0)}}),Object(a.jsx)("div",{className:"home__dogs-container",children:n.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e,t){return Object(a.jsx)(b,{dog:e,onDelete:C},t)}))}),Object(a.jsx)(x,{show:d,onClose:function(){return j(!1)},registerNewDog:function(e){var t=n.concat(e);s(t),localStorage.setItem("dogsData",JSON.stringify(t))}}),Object(a.jsx)(p,{dog:N,show:O,onDelete:function(){var e=n.findIndex((function(e){return e.name===(null===N||void 0===N?void 0:N.name)&&e.breed===N.breed&&e.owner===N.owner&&e.size===N.size&&e.description===N.description}));n.splice(e,1),localStorage.setItem("dogsData",JSON.stringify(n)),g(!1)},onClose:function(){return g(!1)}})]})};n(20);var S=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),C()}],[[21,1,2]]]);
//# sourceMappingURL=main.513a669a.chunk.js.map