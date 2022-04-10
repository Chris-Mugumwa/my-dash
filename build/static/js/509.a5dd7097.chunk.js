"use strict";(self.webpackChunkmy_dash=self.webpackChunkmy_dash||[]).push([[509],{509:function(e,a,l){l.r(a);var t=l(885),o=l(2791),s=l(6871),n=l(8549),i=l(3108),r=l(5705),c=l(9062),d=l(6480),m=l(6472),u=l(3728),h=l(1724),p=l(184),f={name:"",email:"",password:""},x=h.Ry().shape({name:h.Z_().min(2,"Name too short").max(15,"Name too Long").required("Required"),email:h.Z_().email("Invalid email").required("Required"),password:h.Z_().min(5,"Password too short, password should be at least 6 characters").max(20,"Password too long, password should be less than 20 characters").required("Required")});a.default=function(){var e=(0,o.useState)(m.h),a=(0,t.Z)(e,1)[0],l=new d.hJ,h=(0,n.E)(l),g=h.googleClick,v=h.setGoogleClick,b=(0,s.s0)();return(0,p.jsxs)("div",{className:"relative z-20 justify-center w-full md:justify-start md:w-1/2",children:[(0,p.jsxs)("div",{className:"relative z-50 px-4 pt-4 md:px-6 ",children:[(0,p.jsx)("h1",{className:"text-6xl tracking-wider text-white md:text-8xl font-ropa-sans",children:"Sign Up"}),(0,p.jsx)("h3",{className:"pt-2 pb-4 text-md text-teal-light font-poppins md:text-xl",children:"Hey there, glad to have you here"})]}),(0,p.jsx)("div",{className:"max-w-sm px-6 py-2 mt-2 bg-blue-light rounded-2xl md:px-6 md:mx-6",children:(0,p.jsx)(r.J9,{initialValues:f,validationSchema:x,onSubmit:function(e){(0,d.Xb)(i.I,e.email,e.password).then((function(a){var l=null===a||void 0===a?void 0:a.user;(0,d.ck)(l,{displayName:e.name});try{var t=(0,c.JU)(i.db,"users","".concat(null===l||void 0===l?void 0:l.uid));(0,c.pl)(t,{id:l.uid,displayName:e.name,email:e.email,photo:null,active:!0}).catch((function(e){return console.log("Did not save to db,",e)}))}catch(o){console.error("Error adding document: ",o)}b("/dashboard")})).catch((function(e){var a=e.code,l=e.message;console.log(a),console.log(l)}))},children:(0,p.jsxs)(r.l0,{className:"flex flex-col items-center bg-blue-light",autocomplete:"off",children:[a.map((function(e){return(0,p.jsxs)("div",{className:"relative flex flex-col w-full",children:[(0,p.jsx)("label",{className:"self-start py-2 text-sm text-blue-lighter font-poppins",children:e.name}),(0,p.jsx)(r.gN,{id:e.id,type:e.type,name:e.name,autocomplete:"off",placeholder:e.placeholder,className:"field-primary"}),!0===g||!1===g?null:(0,p.jsx)(r.Bc,{name:e.name,component:"div",className:"error-message"})]},e.id)})),(0,p.jsx)("div",{className:"w-full pt-4",children:(0,p.jsx)("button",{type:"submit",className:"button-auth",children:"Sign In"})}),(0,p.jsxs)("div",{className:"flex items-center self-end pt-4",children:[(0,p.jsx)("p",{className:"pr-2 text-blue-lighter",children:"Sign in with Google instead"}),(0,p.jsx)("div",{className:"button-google",children:(0,p.jsx)("button",{className:"focus:outline-none",onClick:function(){return v(!0)},children:(0,p.jsx)(u.JM8,{icon:"flat-color-icons:google",className:"w-8 h-8"})})})]})]})})})]})}},6472:function(e,a,l){l.d(a,{F:function(){return o},h:function(){return t}});var t=[{id:"name",type:"text",name:"name",placeholder:"e.g. John"},{id:"email",type:"email",name:"email",placeholder:"e.g. John@gmail.com"},{id:"password",type:"password",name:"password",placeholder:"Must be 6 characters or longer"}],o=[{id:"email",type:"email",name:"email",placeholder:"e.g. John@gmail.com"},{id:"password",type:"password",name:"password",placeholder:"Must be 6 characters or longer"}]},8549:function(e,a,l){l.d(a,{E:function(){return c}});var t=l(885),o=l(2791),s=l(3108),n=l(6480),i=l(9062),r=l(6871),c=function(e){var a=(0,o.useState)(!1),l=(0,t.Z)(a,2),c=l[0],d=l[1],m=(0,r.s0)();return(0,o.useEffect)((function(){return!0===c&&(0,n.rh)(s.I,e).then((function(e){var a=null===e||void 0===e?void 0:e.user;try{var l=(0,i.JU)(s.db,"users","".concat(null===a||void 0===a?void 0:a.uid));(0,i.pl)(l,{id:a.uid,displayName:a.displayName,email:a.email,photo:a.photoURL,active:!0})}catch(t){console.error("Error adding document: ",t)}m("/dashboard")})).catch((function(e){return console.log("Error has occurred",e)})),function(){return setTimeout((function(){d(!1)}),3e3)}}),[c]),{googleClick:c,setGoogleClick:d}}}}]);
//# sourceMappingURL=509.a5dd7097.chunk.js.map