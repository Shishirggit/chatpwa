webpackJsonp([1],{124:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mdc-layout-app",[a("mdc-toolbar",{attrs:{slot:"toolbar"},slot:"toolbar"},[a("mdc-toolbar-row",[a("mdc-toolbar-section",{attrs:{"align-start":""}},[a("mdc-toolbar-menu-icon",{attrs:{event:"toggle-drawer"}}),t._v(" "),a("mdc-toolbar-title",[t._v("Title")])],1),t._v(" "),a("mdc-toolbar-section",{attrs:{"align-end":""}},[a("mdc-toolbar-icon",{attrs:{event:"show-help",icon:"help"}})],1)],1)],1),t._v(" "),a("mdc-drawer",{attrs:{slot:"drawer","toggle-on":"toggle-drawer",temporary:""},slot:"drawer"},[a("mdc-toolbar-title",[t._v("Title")]),t._v(" "),a("mdc-drawer-list",[a("mdc-drawer-item",{attrs:{"start-icon":"inbox",to:"/"}},[t._v("Home")]),t._v(" "),a("mdc-drawer-item",{attrs:{"start-icon":"send",to:"Post"}},[t._v("Post")])],1)],1),t._v(" "),a("main",[a("router-view")],1)],1)},n=[],i={render:r,staticRenderFns:n};e.a=i},125:function(t,e,a){"use strict";var r=a(32),n=a(126),i=a(127),o=a(130),s=a(135),c=a(142),l=a(145);r.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:i.a},{path:"/detail/:id",name:"Detail",component:o.a},{path:"/post",name:"Post",component:s.a},{path:"/login",name:"Login",component:c.a},{path:"/register",name:"Register",component:l.a},{path:"*",redirect:"/"}]})},127:function(t,e,a){"use strict";function r(t){a(128)}var n=a(49),i=a(129),o=a(7),s=r,c=o(n.a,i.a,!1,s,"data-v-8603ea1c",null);e.a=c.exports},128:function(t,e){},129:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.getCats(),function(e){return a("mdc-layout-grid",{key:e.id},[a("mdc-layout-cell",[a("mdc-card",[a("mdc-card-primary-action",[a("mdc-card-media",{attrs:{src:e.url}})],1),t._v(" "),a("mdc-card-header",{attrs:{title:"Title goes here",subtitle:e.comment}}),t._v(" "),a("mdc-card-actions",[a("mdc-button",{attrs:{raised:""},on:{click:function(a){t.displayDetails(e[".key"])}}},[t._v("Detail")]),t._v(" "),a("mdc-card-action-icons",[a("mdc-card-action-icon",{attrs:{icon:"star"}})],1)],1)],1)],1)],1)}))},n=[],i={render:r,staticRenderFns:n};e.a=i},130:function(t,e,a){"use strict";function r(t){a(131)}var n=a(50),i=a(134),o=a(7),s=r,c=o(n.a,i.a,!1,s,"data-v-6f22c72c",null);e.a=c.exports},131:function(t,e){},134:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mdc-layout-grid",[a("mdc-layout-cell",[a("mdc-card",[a("mdc-card-primary-action",[a("mdc-card-media",{attrs:{src:t.cat.url}})],1),t._v(" "),a("mdc-card-header",{attrs:{title:"Title goes here",subtitle:t.cat.info}},[t._v("\n    "+t._s(t.cat.comment)+"\n  ")]),t._v(" "),a("mdc-card-actions",[a("mdc-button",{attrs:{to:"/post",raised:""}},[t._v("Post")]),t._v(" "),a("mdc-card-action-icons",[a("mdc-card-action-icon",{attrs:{icon:"star"}})],1)],1)],1)],1)],1)},n=[],i={render:r,staticRenderFns:n};e.a=i},135:function(t,e,a){"use strict";function r(t){a(136)}var n=a(51),i=a(141),o=a(7),s=r,c=o(n.a,i.a,!1,s,"data-v-3701860a",null);e.a=c.exports},136:function(t,e){},141:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("mdc-layout-grid",[a("mdc-layout-cell",[a("mdc-card",[a("mdc-card-primary-action",[a("mdc-card-media",{attrs:{src:this.catUrl}})],1),t._v(" "),a("mdc-card-header",{attrs:{title:"Title goes here",subtitle:"Describe me"}}),t._v(" "),a("mdc-textfield",{attrs:{id:"username",label:"Describe",outline:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),a("mdc-card-actions",[a("mdc-button",{attrs:{raised:""},on:{click:function(e){return e.preventDefault(),t.postCat(e)}}},[t._v("POST A CAT")]),t._v(" "),a("mdc-card-action-icons",[a("mdc-card-action-icon",{attrs:{icon:"star"}})],1)],1)],1)],1)],1)],1)},n=[],i={render:r,staticRenderFns:n};e.a=i},142:function(t,e,a){"use strict";function r(t){a(143)}var n=a(52),i=a(144),o=a(7),s=r,c=o(n.a,i.a,!1,s,null,null);e.a=c.exports},143:function(t,e){},144:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("label",{attrs:{for:"email"}},[t._v("Email..")]),t._v(" "),a("b-form-input",{attrs:{type:"text",placeholder:"Enter your email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),a("div",[a("label",{attrs:{for:"password"}},[t._v("Password..")]),t._v(" "),a("b-form-input",{attrs:{type:"password",placeholder:"Enter your email"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("b-button",{on:{click:function(e){t.login()}}},[t._v("Login user")]),t._v(" "),a("div",{staticStyle:{color:"red"},domProps:{innerHTML:t._s(t.error)}})],1)},n=[],i={render:r,staticRenderFns:n};e.a=i},145:function(t,e,a){"use strict";function r(t){a(146)}var n=a(53),i=a(147),o=a(7),s=r,c=o(n.a,i.a,!1,s,null,null);e.a=c.exports},146:function(t,e){},147:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{name:"registerForm",autocomplete:"off"}},[a("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"mdl-textfield__input",attrs:{type:"text",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{staticClass:"mdl-textfield__label",attrs:{for:"email"}},[t._v("Email..")])]),t._v(" "),a("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"mdl-textfield__input",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{staticClass:"mdl-textfield__label",attrs:{for:"email"}},[t._v("Password...")])]),t._v(" "),a("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",attrs:{type:"button",id:"button"},on:{click:function(e){t.register()}}},[t._v("Register user")]),t._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:t.authenticationMessage,expression:"authenticationMessage"}],attrs:{for:"authMessage"}},[t._v(t._s(t.authenticationMessage))]),t._v(" "),a("div",{staticStyle:{color:"red"},domProps:{innerHTML:t._s(t.error)}})])},n=[],i={render:r,staticRenderFns:n};e.a=i},149:function(t,e,a){"use strict";var r=a(150),n=a.n(r),i={apiKey:"AIzaSyDhzYBQVFS0TdhhQQQS4q2nxL9l5bfkZIw",authDomain:"chat-d6854.firebaseapp.com",databaseURL:"https://chat-d6854.firebaseio.com",projectId:"chat-d6854",storageBucket:"chat-d6854.appspot.com",messagingSenderId:"907984876865"};n.a.initializeApp(i);var o=n.a.database(),s=n.a.auth();e.a={database:o,auth:s}},161:function(t,e){},163:function(t,e){},34:function(t,e,a){"use strict";var r=a(35),n=a.n(r),i=a(21),o=a.n(i),s=a(22),c=a.n(s);e.a={name:"app",data:function(){return{}},mounted:function(){var t=this;navigator.serviceWorker.getRegistration().then(function(e){return e.pushManager.getSubscription().then(function(){var a=c()(o.a.mark(function a(r){var n,i,s;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!r){a.next=2;break}return a.abrupt("return",r);case 2:return a.next=4,fetch("./vapidPublicKey");case 4:return n=a.sent,a.next=7,n.text();case 7:return i=a.sent,s=t.urlBase64ToUint8Array(i),a.abrupt("return",e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:s}));case 10:case"end":return a.stop()}},a,t)}));return function(t){return a.apply(this,arguments)}}())}).then(function(t){fetch("./sendNotification",{method:"post",headers:{"Content-type":"application/json"},body:n()({subscription:t})})})},methods:{urlBase64ToUint8Array:function(t){for(var e="=".repeat((4-t.length%4)%4),a=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=window.atob(a),n=new Uint8Array(r.length),i=0;i<r.length;++i)n[i]=r.charCodeAt(i);return n}}}},49:function(t,e,a){"use strict";var r=a(35),n=a.n(r);e.a={name:"Home",data:function(){return{pictures:this.$root.cat}},methods:{displayDetails:function(t){this.$router.push({name:"Detail",params:{id:t}})},getCats:function(){return navigator.onLine?(this.saveCatsToCache(),this.$root.cat):JSON.parse(localStorage.getItem("cats"))},saveCatsToCache:function(){this.$root.$firebaseRefs.cat.once("value",function(t){var e=[];t.forEach(function(t){var a=t.val();a[".key"]=t.key,e.push(a)}),localStorage.setItem("cats",n()(e))})}},mounted:function(){this.saveCatsToCache()}}},50:function(t,e,a){"use strict";var r=a(132);a.n(r);e.a={name:"Detail",data:function(){return{cat:null}},created:function(){var t=this;this.cat=Object(r.find)(this.$root.cat,function(e){return e[".key"]===t.$route.params.id})}}},51:function(t,e,a){"use strict";var r=a(137),n=a.n(r);e.a={name:"Post",data:function(){return{catUrl:null,title:""}},mounted:function(){var t=this;this.$http.get("https://thecatapi.com/api/images/get?format=xml&results_per_page=1").then(function(e){t.catUrl=n()(e.body).root.children[0].children[0].children[0].children[0].content})},methods:{postCat:function(){this.$root.$firebaseRefs.cat.push({url:this.catUrl,comment:this.title,info:"Posted by on Tuesday",created_at:-1*(new Date).getTime()}).then(this.$router.push("/"))}}}},52:function(t,e,a){"use strict";var r=a(21),n=a.n(r),i=a(22),o=a.n(i);e.a={name:"Login",data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var t=this;return o()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.error=null;case 1:case"end":return e.stop()}},e,t)}))()}}}},53:function(t,e,a){"use strict";var r=a(21),n=a.n(r),i=a(22),o=a.n(i);e.a={name:"Register",data:function(){return{email:"",password:"",authenticationMessage:"",error:null}},methods:{register:function(){var t=this;return o()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.error=null,t.$root.auth.createUserWithEmailAndPassword(t.email,t.password).then(function(t){alert("account is created")});case 2:case"end":return e.stop()}},e,t)}))()}}}},80:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(32),n=a(82),i=a(125),o=a(148),s=a.n(o),c=a(149),l=a(160),u=a(162),d=a(163);a.n(d);r.a.use(u.a),r.a.use(l.a),r.a.use(s.a),r.a.config.productionTip=!1,new r.a({el:"#app",firebase:function(){return{cat:c.a.database.ref("cat")}},router:i.a,template:"<App/>",components:{App:n.a}})},82:function(t,e,a){"use strict";function r(t){a(83)}var n=a(34),i=a(124),o=a(7),s=r,c=o(n.a,i.a,!1,s,null,null);e.a=c.exports},83:function(t,e){}},[80]);
//# sourceMappingURL=app.c676cd8cd504128159dc.js.map