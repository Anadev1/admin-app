(this["webpackJsonpadmin-app"]=this["webpackJsonpadmin-app"]||[]).push([[0],{213:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var s=t(3),c=t.n(s),n=t(90),i=t.n(n),r=t(29),l=t(21),d=t(18),j=t(94).a.initializeApp({apiKey:"AIzaSyAd2OY0fGtA7EtnqGvYuU-mcy1nJ_r4vWw",authDomain:"final-thesis-70d92.firebaseapp.com",databaseURL:"https://final-thesis-70d92-default-rtdb.firebaseio.com",projectId:"final-thesis-70d92",storageBucket:"final-thesis-70d92.appspot.com",messagingSenderId:"846382954146",appId:"1:846382954146:web:4fd5c08e5cdd54c25709fb"}).firestore(),o=t(6),b=t(7),u=t(9),m=t(8),O=t.p+"static/media/logo_white.25b6a9ba.svg",h=t.p+"static/media/dashboard_icon.5c7263cf.svg",v=t.p+"static/media/users_icon.b506a690.svg",p=t.p+"static/media/jobs_icon.98db3a90.svg",x=t.p+"static/media/settings_icon.28b08c56.svg",_=t.p+"static/media/logout_icon.1b3e7c6a.svg",N=t(2),g=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"navigation",children:[Object(N.jsx)("div",{className:"navigation__header",children:Object(N.jsx)("img",{src:O,alt:"logo"})}),Object(N.jsxs)("div",{className:"navigation__menu",children:[Object(N.jsx)(d.c,{to:"/",className:"navlink navlink__navigation",activeClassName:"is-active",exact:!0,children:Object(N.jsxs)("div",{className:"navlink__container",children:[Object(N.jsx)("img",{src:h,className:"navlink__icon"}),Object(N.jsx)("p",{className:"navlink__name",children:"Dashboard"})]})}),Object(N.jsx)(d.c,{to:"/userdatabase",className:"navlink navlink__navigation",activeClassName:"is-active",children:Object(N.jsxs)("div",{className:"navlink__container",children:[Object(N.jsx)("img",{src:v,className:"navlink__icon"}),Object(N.jsx)("p",{className:"navlink__name",children:"Users"})]})}),Object(N.jsx)(d.c,{to:"/usercreation",className:"navlink navlink__navigation",activeClassName:"is-active",children:Object(N.jsxs)("div",{className:"navlink__container",children:[Object(N.jsx)("img",{src:p,className:"navlink__icon"}),Object(N.jsx)("p",{className:"navlink__name",children:"Jobs"})]})})]}),Object(N.jsxs)("div",{className:"navigation__settings",children:[Object(N.jsx)(d.c,{to:"/settings",className:"navlink navlink__navigation",activeClassName:"is-active",children:Object(N.jsxs)("div",{className:"navlink__container",children:[Object(N.jsx)("img",{src:x,className:"navlink__icon"}),Object(N.jsx)("p",{className:"navlink__name",children:"Settings"})]})}),Object(N.jsx)(d.c,{to:"/login",className:"navlink navlink__navigation",activeClassName:"is-active",children:Object(N.jsxs)("div",{className:"navlink__container",children:[Object(N.jsx)("img",{src:_,className:"navlink__icon"}),Object(N.jsx)("p",{className:"navlink__name",children:"Log out"})]})})]})]})}}]),t}(c.a.Component),f=t.p+"static/media/plus_icon.2cb5970e.svg",k=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(N.jsx)("div",{children:Object(N.jsxs)("button",{className:"main-cta ".concat(this.props.className),children:[Object(N.jsx)("img",{src:f,alt:"plus",className:"main-cta__plus-icon"}),this.props.title]})})}}]),t}(c.a.Component),y=t.p+"static/media/delete_icon.6d344417.svg",C=function(e){var a=Object(s.useState)("none"),t=Object(l.a)(a,2),c=t[0],n=t[1],i={display:"".concat(c)},r="";return"Admin"===e.user.role?r+="user__role--admin":"Member"===e.user.role&&(r+="user__role--member"),Object(N.jsxs)("div",{className:"user",onMouseEnter:function(){return n("flex")},onMouseLeave:function(){return n("none")},children:[Object(N.jsxs)("div",{className:"user__details-container",children:[Object(N.jsx)("p",{className:"user__name",children:e.user.name}),Object(N.jsx)("p",{className:"user__email",children:e.user.email})]}),Object(N.jsx)("div",{className:"user__role-container",children:Object(N.jsx)("p",{className:r,children:e.user.role})}),Object(N.jsxs)("div",{className:"user__actions-container",style:i,children:[Object(N.jsx)("button",{className:"user__reset-password",children:"Reset password"}),Object(N.jsx)("button",{className:"user__delete",name:e.user.id,onClick:function(){return e.clickHandler(e.user.id)},children:Object(N.jsx)("img",{src:y,alt:"delete icon"})})]})]},e.user.id)},S=function(){var e=function(e){j.collection("users").doc(e).delete()},a=Object(s.useState)([]),t=Object(l.a)(a,2),c=t[0],n=t[1],i=[];return Object(s.useEffect)((function(){var e=j.collection("users").onSnapshot((function(e){var a=e.docs.map((function(e){return Object(r.a)({id:e.id},e.data())}));i.push(a.name),n(a)}));return function(){return e()}}),[]),Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)(g,{}),Object(N.jsxs)("div",{className:"main-container",children:[Object(N.jsxs)("div",{className:"page-header",children:[Object(N.jsx)("h1",{className:"page-title",children:"Users"}),Object(N.jsx)(d.c,{to:"/adduser",className:"navlink",children:Object(N.jsx)(k,{title:"Create User"})})]}),Object(N.jsx)("div",{className:"database-container",children:c.map((function(a){return Object(N.jsx)(C,{user:a,clickHandler:e})}))})]})]})},w=t(48),A=function(){var e=Object(s.useState)({}),a=Object(l.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)({}),i=Object(l.a)(n,2),r=i[0],d=i[1],j=Object(s.useState)({}),o=Object(l.a)(j,2),b=o[0],u=o[1];return Object(s.useEffect)((function(){c({labels:["January","February","March","April"],datasets:[{label:"Number of unique logins",data:[357,531,512,787],backgroundColor:["red"],borderWidth:4}]}),d({labels:["January","February","March","April"],datasets:[{label:"Time spent in app",data:[236,543,456,253],backgroundColor:["lightblue"],borderWidth:4}]}),u({labels:["January","February","March","April"],datasets:[{label:"Number of interviews",data:[78,110,115,131],backgroundColor:["green"],borderWidth:4}]})}),[]),Object(N.jsxs)("div",{className:"charts-container",children:[Object(N.jsx)("div",{className:"chart chart--logins",children:Object(N.jsx)(w.b,{data:t})}),Object(N.jsx)("div",{className:"chart chart--time",children:Object(N.jsx)(w.b,{data:r})}),Object(N.jsx)("div",{className:"chart chart--interviews",children:Object(N.jsx)(w.a,{data:b})})]})},E=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)(g,{}),Object(N.jsxs)("div",{className:"main-container",children:[Object(N.jsx)("div",{className:"page-header",children:Object(N.jsx)("h1",{className:"page-title",children:"Dashboard"})}),Object(N.jsx)("div",{className:"chart-container",children:Object(N.jsx)(A,{})})]})]})}}]),t}(c.a.Component),J=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"content",children:Object(N.jsx)("div",{className:"not-found-page",children:Object(N.jsxs)("h1",{children:["Error: 404 - ",Object(N.jsx)(d.b,{to:"/",children:"Go home"})," "]})})})}}]),t}(c.a.Component),U=(t(212),t(213),t(13)),M=t.p+"static/media/exit_icon.d1b98f1a.svg",I=function(){var e=Object(s.useState)(""),a=Object(l.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(""),i=Object(l.a)(n,2),r=i[0],o=i[1],b=Object(s.useState)(""),u=Object(l.a)(b,2),m=u[0],O=u[1];return Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)(g,{}),Object(N.jsxs)("div",{className:"main-container",children:[Object(N.jsxs)("div",{className:"page-header page-header--adduser",children:[Object(N.jsx)("h1",{className:"page-title",children:"Add User"}),Object(N.jsx)(d.c,{to:"/userdatabase",className:"navlink",children:Object(N.jsx)("img",{src:M,alt:"exit icon",className:"adduser__exit-icon"})})]}),Object(N.jsx)("div",{className:"adduser",children:Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.collection("users").add({name:t,email:r,role:m}).then((function(){return c("")}),o(""),O(""))},className:"adduser__form",children:[Object(N.jsx)("input",{className:"adduser__input",placeholder:"Name",value:t,name:"name",onChange:function(e){return c(e.currentTarget.value)},type:"text"}),Object(N.jsx)("input",{className:"adduser__input",placeholder:"Email",value:r,name:"email",onChange:function(e){return o(e.currentTarget.value)},type:"text"}),Object(N.jsx)("input",{className:"adduser__input",placeholder:"Role",value:m,name:"role",onChange:function(e){return O(e.currentTarget.value)},type:"text"}),Object(N.jsx)(k,{title:"Create User",className:"adduser__button"})]})})]})]})},D=Object(N.jsx)(d.a,{children:Object(N.jsxs)(U.c,{children:[Object(N.jsx)(U.a,{path:"/admin-app",component:E,exact:!0}),Object(N.jsx)(U.a,{path:"/userdatabase",component:S}),Object(N.jsx)(U.a,{path:"/adduser",component:I}),Object(N.jsx)(U.a,{component:J})]})});i.a.render(D,document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.ef8c8f8c.chunk.js.map