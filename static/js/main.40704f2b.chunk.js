(this["webpackJsonp01-project"]=this["webpackJsonp01-project"]||[]).push([[0],{128:function(A,e,t){"use strict";t.d(e,"c",(function(){return p})),t.d(e,"d",(function(){return O})),t.d(e,"e",(function(){return m})),t.d(e,"b",(function(){return E}));var n=t(9),r=t.n(n),a=t(17),s=t(36),c=t(5),i=t(16),o=function(A,e,t,n){return A.map((function(A){return A[t]===e?Object(c.a)(Object(c.a)({},A),n):A}))},u={users:[],count:10,page:1,totalPages:90,isFetching:!1,followingIsProgress:[],fake:10},l=function(A){return{type:"usersPage/FOLLOW",userId:A}},b=function(A){return{type:"usersPage/UNFOLLOW",userId:A}},d=function(A){return{type:"usersPage/SET-USERS",users:A}},f=function(A){return{type:"usersPage/PAGE-CHANGER",page:A}},g=function(A){return{type:"usersPage/TOTAL-FETCHING",isFetching:A}},j=function(A,e){return{type:"usersPage/TOTAL-FOLLOWING-IS-PROGRESS",isFetching:A,usersId:e}},p=function(A,e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g(!0)),t.next=3,i.d.setUser(A,e);case 3:a=t.sent,n(g(!1)),n(d(a.items)),n({type:"usersPage/TOTAL-COUNT",totalCount:a.totalCount});case 7:case"end":return t.stop()}}),t)})));return function(A){return t.apply(this,arguments)}}()},O=function(A,e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g(!0)),n(f(A)),t.next=4,i.d.setUser(A,e);case 4:a=t.sent,n(g(!1)),n(d(a.items));case 7:case"end":return t.stop()}}),t)})));return function(A){return t.apply(this,arguments)}}()},h=function(){var A=Object(a.a)(r.a.mark((function A(e,t,n,a){return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e(j(!0,t)),A.next=3,n(t);case 3:0===A.sent.data.resultCode&&e(a(t)),e(j(!1,t));case 6:case"end":return A.stop()}}),A)})));return function(e,t,n,r){return A.apply(this,arguments)}}(),m=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,A,i.d.unfollowUser.bind(i.d),b);case 2:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},E=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,A,i.d.followUser.bind(i.d),l);case 2:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()};e.a=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"usersPage/FOLLOW":return Object(c.a)(Object(c.a)({},A),{},{users:o(A.users,e.userId,"id",{followed:!0})});case"usersPage/UNFOLLOW":return Object(c.a)(Object(c.a)({},A),{},{users:o(A.users,e.userId,"id",{followed:!1})});case"usersPage/SET-USERS":return Object(c.a)(Object(c.a)({},A),{},{users:Object(s.a)(e.users)});case"usersPage/PAGE-CHANGER":return Object(c.a)(Object(c.a)({},A),{},{page:e.page});case"usersPage/TOTAL-COUNT":return Object(c.a)(Object(c.a)({},A),{},{totalPages:e.totalCount});case"usersPage/TOTAL-FETCHING":return Object(c.a)(Object(c.a)({},A),{},{isFetching:e.isFetching});case"usersPage/TOTAL-FOLLOWING-IS-PROGRESS":return Object(c.a)(Object(c.a)({},A),{},{followingIsProgress:e.isFetching?[].concat(Object(s.a)(A.followingIsProgress),[e.usersId]):A.followingIsProgress.filter((function(A){return A!==e.usersId}))});default:return A}}},16:function(A,e,t){"use strict";t.d(e,"d",(function(){return a})),t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return i}));var n=t(129),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0b9c4dda-69fd-4618-a5bd-e83834b7b6c8"}}),a={setUser:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(A,"&count=").concat(e)).then((function(A){return A.data}))},unfollowUser:function(A){return r.delete("follow/".concat(A))},followUser:function(A){return r.post("follow/".concat(A))}},s={me:function(){return r.get("auth/me").then((function(A){return A.data}))},loginAPI:function(A,e,t){return r.post("auth/login",{email:A,password:e,rememberMe:t}).then((function(A){return A.data}))},logoutAPI:function(){return r.delete("auth/login")}},c={profileUser:function(A){return r.get("profile/".concat(A)).then((function(A){return A.data}))},profileStatus:function(A){return r.get("profile/status/".concat(A)).then((function(A){return A.data}))},changeProfileStatus:function(A){return r.put("profile/status",{status:A}).then((function(A){return A.data}))},changeProfile:function(A){return r.put("profile",A).then((function(A){return A.data}))}},i={uploadPhoto:function(A){var e=new FormData;return e.append("image",A),r.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(A){return A.data}))}}},18:function(A,e,t){A.exports={navbar:"Nav_navbar__1OntH",item:"Nav_item__2Roh-",active:"Nav_active__3nhKv"}},24:function(A,e,t){A.exports={messages:"Messages_messages__2kne9",vl:"Messages_vl__NG8m5",title:"Messages_title__2VILf",dialogItems:"Messages_dialogItems__2TyjI",active:"Messages_active__2K8Yu",dialog:"Messages_dialog__4NXHi",chatItems:"Messages_chatItems__zxPvK",message:"Messages_message__SRhKG",sending:"Messages_sending__1tKL5"}},245:function(A,e,t){},292:function(A,e,t){"use strict";t.r(e);var n=t(1),r=(t(96),function(A){A&&A instanceof Function&&t.e(6).then(t.bind(null,301)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;t(A),n(A),r(A),a(A),s(A)}))}),a=t(10),s=t(94),c=t(36),i=t(5),o={dialogData:[{id:1,name:"Maks"},{id:2,name:"Artur"},{id:3,name:"Vika"},{id:4,name:"Vlad"},{id:5,name:"Sergey"},{id:6,name:"\u0412\u0430\u0441\u044f"}],chatData:[{id:1,message:"Hi"},{id:2,message:"Have are you?"},{id:3,message:"Abra kadabra"},{id:4,message:"Abra "}]},u=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"messagesPage/SEND-MESSAGE":var t={id:5,message:e.newChatText};return Object(i.a)(Object(i.a)({},A),{},{chatData:[].concat(Object(c.a)(A.chatData),[t])});default:return A}},l=t(128),b=t(9),d=t.n(b),f=t(17),g=t(16),j=t(28),p={id:null,login:null,email:null,signIn:!1},O=function(A,e,t,n){return{type:"auth/SET-USER-DATA",payload:{id:A,login:e,email:t,signIn:n}}},h=function(){return function(){var A=Object(f.a)(d.a.mark((function A(e){var t,n,r,a,s;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,g.a.me();case 2:0===(t=A.sent).resultCode&&(n=t.data,r=n.id,a=n.login,s=n.email,e(O(r,a,s,!0)));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},m=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"auth/SET-USER-DATA":return Object(i.a)(Object(i.a)({},A),e.payload);default:return A}},E=t(127),x=t(130),k=t(132),M={initialization:!1},v=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"app/INITIALIZATION":return Object(i.a)(Object(i.a)({},A),{},{initialization:!0});default:return A}},C=Object(a.combineReducers)({profilePage:s.b,messagesPage:u,usersPage:l.a,auth:m,app:v,form:E.a}),I=Object(a.createStore)(C,Object(x.composeWithDevTools)(Object(a.applyMiddleware)(k.a))),S=t(0),P=t.n(S),w=t(66),R=t.n(w),y=t(39),Q=t(40),G=t(42),B=t(41),F=(t(245),t(11)),T=t(13),D=t(18),z=t.n(D),J=function(){return Object(n.jsx)("nav",{className:z.a.navbar,children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:z.a.item,children:Object(n.jsx)(T.b,{to:"/profile",activeClassName:z.a.active,children:"Profile"})}),Object(n.jsx)("li",{className:z.a.item,children:Object(n.jsx)(T.b,{to:"/messages",activeClassName:z.a.active,children:"Messages"})}),Object(n.jsx)("li",{className:z.a.item,children:Object(n.jsx)(T.b,{to:"/news",activeClassName:z.a.active,children:"News"})}),Object(n.jsx)("li",{className:z.a.item,children:Object(n.jsx)(T.b,{to:"/music",children:"Music"})}),Object(n.jsx)("li",{className:z.a.item}),Object(n.jsx)("li",{className:z.a.item,children:Object(n.jsx)(T.b,{to:"/users",activeClassName:z.a.active,children:"Users"})}),Object(n.jsx)("li",{className:z.a.item}),Object(n.jsx)("li",{className:z.a.item,children:Object(n.jsx)(T.b,{to:"/settings",activeClassName:z.a.active,children:"Settings"})})]})})};var K=function(A){return Object(n.jsx)("div",{children:"News"})},Z=t(24),L=t.n(Z),U=function(A){var e=A.id,t=A.name;return Object(n.jsx)("li",{className:L.a.dialog,children:Object(n.jsx)(T.b,{to:"/messages/"+e,activeClassName:L.a.active,children:t})})},H=function(A){return Object(n.jsx)("div",{children:A.message})},N=t(87),q=t(126),W=t(34),Y=t(44),X=Object(Y.a)(100),V=Object(W.a)("textarea"),_=Object(q.a)({form:"dialogForm"})((function(A){return Object(n.jsxs)("form",{onSubmit:A.handleSubmit,className:L.a.sending,children:[Object(n.jsx)(N.a,{component:V,placeholder:"your message",name:"sending",id:"sending",cols:"70",rows:"2",validate:[Y.b,X]}),Object(n.jsx)("button",{children:"send"})]})})),$=function(A){var e=A.dialogData,t=A.chatData,r=A.sendMessage,a=e.map((function(A){return Object(n.jsx)(U,{id:A.id,name:A.name},A.id)})),s=t.map((function(A){return Object(n.jsx)(H,{message:A.message},A.id)}));return Object(n.jsxs)("div",{className:L.a.messages,children:[Object(n.jsxs)("div",{className:L.a.dialogItems,children:[Object(n.jsx)("h2",{className:L.a.title,children:"Dialogs"}),Object(n.jsx)("ul",{children:a})]}),Object(n.jsx)("div",{className:L.a.vl}),Object(n.jsxs)("div",{className:L.a.chatItems,children:[Object(n.jsx)("div",{className:L.a.message,children:s}),Object(n.jsx)(_,{onSubmit:function(A){var e=A.sending;r(e)}})]})]})},AA=t(12),eA=function(A){return{signIn:A.auth.signIn}},tA=Object(a.compose)(Object(AA.b)((function(A){return{dialogData:A.messagesPage.dialogData,chatData:A.messagesPage.chatData,newChatText:A.messagesPage.newChatText,signIn:A.auth.signIn}}),{sendMessage:function(A){return{type:"messagesPage/SEND-MESSAGE",newChatText:A}}}),(function(A){var e=function(e){Object(G.a)(r,e);var t=Object(B.a)(r);function r(){return Object(y.a)(this,r),t.apply(this,arguments)}return Object(Q.a)(r,[{key:"render",value:function(){return this.props.signIn?Object(n.jsx)(A,Object(i.a)({},this.props)):Object(n.jsx)(F.a,{to:"/login"})}}]),r}(P.a.Component);return Object(AA.b)(eA)(e)}))($),nA=t(56),rA=t.n(nA);var aA=function(A){var e=A.login,t=A.logout,r=A.signIn;return Object(n.jsxs)("header",{className:rA.a.header,children:[Object(n.jsx)("img",{className:rA.a.logo,src:"https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg",alt:"logo"}),Object(n.jsx)("div",{className:rA.a.login,children:r?Object(n.jsxs)("div",{children:[e," ",Object(n.jsx)("button",{className:rA.a.btn,onClick:t,children:"Log out"})]}):Object(n.jsx)(T.b,{to:"/login",children:"Login"})})]})},sA=function(A){Object(G.a)(t,A);var e=Object(B.a)(t);function t(){return Object(y.a)(this,t),e.apply(this,arguments)}return Object(Q.a)(t,[{key:"render",value:function(){return Object(n.jsx)(aA,Object(i.a)({},this.props))}}]),t}(P.a.Component),cA=Object(AA.b)((function(A){return{signIn:A.auth.signIn,login:A.auth.login}}),{logout:function(A,e,t){return function(){var n=Object(f.a)(d.a.mark((function n(r){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.logoutAPI(A,e,t);case 2:0===n.sent.data.resultCode&&r(O(null,null,null,!1));case 4:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}()}})(sA),iA=t(37),oA=t.n(iA),uA=Object(W.a)("input"),lA=Object(q.a)({form:"login"})((function(A){var e=A.handleSubmit,t=A.error;return Object(n.jsx)("div",{className:oA.a.container,children:Object(n.jsxs)("form",{onSubmit:e,children:[Object(n.jsx)("div",{className:oA.a.title,children:"Login"}),Object(n.jsxs)("div",{children:[Object(W.b)(oA.a.formInput,"text","email",uA,"email",[Y.b]),Object(W.b)(oA.a.formInput,"password","password",uA,"password",[Y.b]),Object(W.b)(null,"checkbox",null,uA,"rememberMe",null,null,"remember me"),t&&Object(n.jsx)("div",{className:oA.a.error,children:t}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:oA.a.formBtn,children:"submit"})})]})]})})})),bA=Object(AA.b)((function(A){return{signIn:A.auth.signIn}}),{logIn:function(A,e,t){return function(){var n=Object(f.a)(d.a.mark((function n(r){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.loginAPI(A,e,t);case 2:0===(a=n.sent).resultCode?r(h()):r(Object(j.a)("login",{_error:a.messages.length>0?a.messages[0]:"SOME ERROR"}));case 4:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}()}})((function(A){var e=A.logIn;return A.signIn?Object(n.jsx)(F.a,{to:"/profile"}):Object(n.jsx)(lA,{onSubmit:function(A){e(A.email,A.password,A.rememberMe),console.log(A)}})})),dA=t(65),fA=function(A){return function(e){return Object(n.jsx)(P.a.Suspense,{fallback:Object(n.jsx)(dA.a,{}),children:Object(n.jsx)(A,Object(i.a)({},e))})}},gA=P.a.lazy((function(){return t.e(3).then(t.bind(null,302))})),jA=P.a.lazy((function(){return t.e(4).then(t.bind(null,303))})),pA=P.a.lazy((function(){return t.e(5).then(t.bind(null,304))})),OA=function(A){Object(G.a)(t,A);var e=Object(B.a)(t);function t(){return Object(y.a)(this,t),e.apply(this,arguments)}return Object(Q.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialization?Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(cA,{}),Object(n.jsx)(J,{}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsx)(F.b,{path:"/profile/:userId?",render:fA(gA)}),Object(n.jsx)(F.b,{path:"/messages",render:function(){return Object(n.jsx)(tA,{})}}),Object(n.jsx)(F.b,{path:"/news",render:function(){return Object(n.jsx)(K,{})}}),Object(n.jsx)(F.b,{path:"/users",render:fA(jA)}),Object(n.jsx)(F.b,{path:"/login",render:function(){return Object(n.jsx)(bA,{})}}),Object(n.jsx)(F.b,{path:"/settings",render:fA(pA)})]})]}):Object(n.jsx)(dA.a,{})}}]),t}(P.a.Component),hA=Object(AA.b)((function(A){return{initialization:A.app.initialization}}),{initializeApp:function(){return function(A){var e=A(h());Promise.all([e]).then((function(){A({type:"app/INITIALIZATION"})}))}}})(OA);R.a.render(Object(n.jsx)(T.a,{children:Object(n.jsx)(AA.a,{store:I,children:Object(n.jsx)(hA,{})})}),document.getElementById("root")),r()},34:function(A,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return u}));var n=t(5),r=t(134),a=t(1),s=(t(0),t(91)),c=t.n(s),i=t(87),o=function(A){return function(e){var t=e.input,s=e.meta,i=s.touched,o=s.error,u=Object(r.a)(e,["input","meta"]),l=i&&o;return Object(a.jsxs)("div",{className:c.a.formControl+" "+(l?c.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)(A,Object(n.a)(Object(n.a)({},t),u))}),l&&Object(a.jsx)("span",{children:o})]})}},u=function(A,e,t,r,s,c){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.a,Object(n.a)({className:A,type:e,placeholder:t,component:r,name:s,validate:c},o)),u]})}},37:function(A,e,t){A.exports={container:"Login_container__3gxY_",title:"Login_title__3hAIR",formInput:"Login_formInput__1x-Ur",formBtn:"Login_formBtn__egylk",error:"Login_error__1hxP7"}},44:function(A,e,t){"use strict";t.d(e,"b",(function(){return n})),t.d(e,"a",(function(){return r}));var n=function(A){if(!A)return"Required!"},r=function(A){return function(e){if(e.length>A)return"Must be ".concat(A," characters or less")}}},56:function(A,e,t){A.exports={header:"Header_header__3K6Cw",logo:"Header_logo__jb-o9",login:"Header_login__2z8Sl",btn:"Header_btn__1olkU"}},65:function(A,e,t){"use strict";var n=t(1);t(0),e.a=function(){return Object(n.jsx)("div",{style:{textAlign:"center",marginTop:"10px"},children:Object(n.jsx)("img",{src:"data:image/gif;base64,R0lGODlhoAAUAKIAAJyWnNza3Ly2vMS+xPz+/Ly6vP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQICAAAACwAAAAAoAAUAAAD/mi63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPGxEMQ0BINq7zt9wu0hMCfUNI8UcMMpXO5GMpdVCJAoAWUKguCNltVxnWjqdlrlcB3qrJ7rM1LW+0xWvD3Zzfvx8BbloBEIGChICCAIgOhm6MDY5bkAySg4WKlAuWi5iHno8QaVoCooqlD6MAqA6qrA2upoKvDLGpp7JutAu2DgW4t7O5W7sKvbDArcnIwsG6w6TQq6CT1JeJn9ih2tXc142Z1p3e4+DZc3F9v3hK63zt6fDsU+5/VvV1DAT46vH0/lOiHDHSBMnAJwENFiQIRWFDhgkhWhFIo6LFixgzatzIDbGjx48gQ4ocSbLkhgQAIfkECAgAAAAsAAAAAKAAFACEPDI8pJ6kdGp03N7c/Pr8ZFZklIqU7ObsxL7ETEJM5N7kbGJsnJaczMbMhHqE/P78ZFpklI6U7OrsxMLETEZM5OLk////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf6gJY5kaZ5oqq5s675wLM90bd94ru9879OHAAQSqPyOyKSNUAA4n46HckqtjgiJpxaQIFi/YF5zqy2cHopJYyBNodVs1XvdRs3j7jRdrsfb+3VngHxwgSIVZGRGJA8TDI8ME4YjjZCRkyKVkJJ2jpuYFpqPnGeeo6Cil52WpCaprSIGiVsGJQOWAQwDKAqQubq8vo+7J72Pv8QmxgzIwcfDzszQxcLA1M/WIwuzWhAlCNgMCCjgluLk5ucn5Zbj6+nuJuyQ8d/w6Ob1JPOP+tvcTszsu/dOmL4R83IdFJFQnTxcDu0ZxPdsoYWGFjGWkAUQQC0St8wls5VuJMhwJohHhPyVjaS0aSZWQkopQiZMlyxpWrDZ0gKijgpKEHD0CxYjoqdQDGUFauknpaZUnXCadGpUo1euNtVqYswsgUIVIJigAFQmsWTNhkpD1kueCW0JxX079w9cBW7t1hV0Ny8JLLO6hBlMmAYTMgv8Fl7MWIUCAwUKGAjauLLly5gza97MubPnwiEAACH5BAgIAAAALAAAAACgABQAhDwyPJyanHRqdMzOzFxWXOzq7ExCTMTCxIyCjOTi5GReZEQ6RGRWZPz6/MzKzJySnOzm7EQ2RKymrHx2fNTO1ExGTMzGzOTm5GxibGRaZPz+/JyWnP///wAAAAAAAAAAAAX+ICeOZGmeaKqubOu+cCzPdG3feK7vfO//pYIkk5EUgMikkkQRRAACCqpBAFivCM1yy701Mtcro1FqGMJhA7nLbrOqaCuhxIiHGSdNwuFIaFN6fH4qgX1/KIWDgHuGhIyKiI+HeZInFHZXUiIQmGEQJRoHG6MbFpMkGhakpacjqaumiKqksXmzo7Umr7StIru4vRy/rCYYnQAYIw/HVg8lCRsB0aMJKNCrG9Un16vaJtyk3s/Y2dbk4iTg1ObY6BxPnREjxswZJbekByiz0tL6J6Km+UMRsN+GfyYKTkNYQuFAgKMMMiTh8KAJeJjkiaB3zB4JftMsECQn8gQ+XPusSKbEVtLEyVIrYcWkZUJBR2XMADhLd86cwXLbIk5zJ+KaQaIcjA5ld5Tp0qACgTI5pokDJ2afSDRQ1S9XmVsBvGrFJ3bEVljBzvKaQjZtW7ZoT8CJg4dEnU51yySwYCHBmkh8/Tqy0OcvJcKCFyE2rGtv4cGPFUc20eDuHcYNFmRk7KazZw4WBFjB0LKM5SsTOH9ezRoFhAcMGDzI2rq27du4c+vezbu3bx4hAAAh+QQICAAAACwAAAAAoAAUAIU8MjycmpxsZmzMzsxcVlzs6uxMPky8tryMiozk4uR8cnxkXmT09vREOkSspqzUztRkVmRMRkzMxszs5uz8/vxENkSknqR0anRMQkyclpzk5uSEeoT8+vzU0tRkWmTMysz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCQcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/VgsPjcRTA6HSWw2B2FICKooPkEAD4PIKi7vuZAwZ4Bh91EHl5EBxFHBiIiBiLf5OUcI8KR3ePeARFh5uJSAkDDwlMo6WnpKZLqKxKrqqpratJH6AAhUQduHh0QhO9eRNFFBIZyBkSfEfGycrMRs7Jy0jTyNXNx9TRxdvY3UTX0EeCoAZFF8IXQxnCeBlFCRkByPWv8vT2GfhE8/X6+g35t0+gEIIBRelLeAThPSMchEkSUkFYhSHq3nkoss0CNSTfPh4JiQ3ks5IjTyozeVICy2cuGUkkUrHXRSEZhW0kIgGgykgjx+p5XJlSKEqg+obGRGqUKNMMSk02XUrE3CZ0RAQIE9DuHYB4/p55NAhi3kmyZp+hVbn2rEK3DdkeOYDrQJEHwh4MCbapZkViRDgcUxpuiDGAFrJJ64kscWEhhxsr9oZ4sjjGUC0bxuwYSc487Ix82gTBk7DSDSVIIOvvw+pTrlkPjA37dSvat20nkWDOAFUiDEYnmiiEgdVHFYhTWt6HQZslDzJe+D2Eg3A8G5Qz385dSgILECBkANy9vPnz6NOrX8++vfvuQQAAIfkECAgAAAAsAAAAAKAAFACFPDI8nJqcbGZszM7MXFZc7OrsTD5MvLa8jIqM5OLkfHJ8ZF5k9Pb0RDpErKas1M7UZFZkTEZMzMbM7Obs/P78RDZEpJ6kdGp0TEJMnJac5ObkhHqE/Pr81NLUZFpkzMrM////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AkHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4GLB4fE4CuG02sphMDsKQEXRQXIIgLweQVn7/0kDBnkGH3YQenoQHEUcGImJGIyAlFgJAw8JSnGQCkd4kHkERYihikiXmUypmkusq5itSq+usUoUEhm6GRJ9Rh+mAIZEHcF5dUITxnoTRbi7vL5Gz7u9SNS61kfY0de51dLO39nhRAkZAbrpskSDpgZFF8sXQxnLeRlF5+noGezm/fr9G7JPnT9UAdch5KfwSEGBSL5ZqGaEw7JJQiosqzBE3j0PRSRSPDJupJGS2SJCS0lyJS+VKyVE5GdyCIOLRDQa4yjE48sykEQk0GR5st/Ely3THZWZNMNSlUqJhjQqFeCuiQNBuAsFj4iAZQLq3QOQz6ourAhXZgVxTm1aaGvbwn27a+0zftqKHAh2oMiDZQ+GKAulU2MzIhxyLS03BBc/C3nFPY5MxPFZyo2FXmYsxLJTzOY+SFjbMxQ9I6VCQSC1bLVDCaNXiSZNcLbs2K5s58adRYI7A0yNMEitCKMQBlshVTBeqXkaBm6WPPB4IXgj4nk2MHfOvfuTBBYgQMhw2Lv58+jTq1/Pvr3791KCAAAh+QQICAAAACwAAAAAoAAUAIU8MjycmpxsZmzMzsxcVlzs6uxMPky8tryMiozk4uR8cnxkXmT09vREOkSspqzUztRkVmRMRkzMxszs5uz8/vxENkSknqR0anRMQkyclpzk5uSEeoT8+vzU0tRkWmTMysz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCQcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gasHh8TgK4bTaymEwOwpARdFBcgiAvB5BWfv/SQMGeQYfdhB6ehAcRRwYiYkYjICUSAkDDwlMl5lKcZAKR3iQeQRFiKSKlpiaS5ytSq+brLOdSRQSGboZEn1HuLu8vkUfqQCGRB3GeXVCE8t6E0XAu71I1LrWv7nVw9Pc2d5E2MKWGQG66LBFCefpGetDg6kGRRfQF0MZ0HkZ7O7u4g1phy6guYLqDr4TKITgQiTcLFSDGCybEQ7QJgmpAK3CkHv8PBSJOPEIuJJGTlo0WZEXxYoSIBZEOdKdRJdFGGQkwnGZz0chIKGJJCJh5sqUNo/WRHczJkumSokmxWmk3S6JDEFYDcZwHql6RARAE6CPHwB/RLZmwGquYla1ut62lOv2Wq6C2ozgKmghL5EDxg4UeQDtwZBnpHpylEaEQ66m4obs1dU3spDJa/2OK0pZs2TOmS0P/CAha1rSpkEE1ZPPCCpSEE5Bi30kgYTSm1Dnxu1Kd2/elSTMM+DUCIPXijQKYeAVUgXllaKnYeBmyQOQF4o3Qp5nA3Tp4MM/SWABAoQMjMWrX8++vfv38OPLny8kCAAh+QQICAAAACwAAAAAoAAUAIU8MjycmpxsZmzMzsxcVlzs6uxMPky8tryMiozk4uR8cnxkXmT09vREOkSspqzUztRkVmRMRkzMxszs5uz8/vxENkSknqR0anRMQkyclpzk5uSEeoT8+vzU0tRkWmTMysz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCQcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gMLHg8HgcBbF6PeUwmB0FoKLoIDkEgH6PoLD/gEYDBnoGH3cQe3sQHEUcGIqKGI2BXwkDDwlMl5mbmJpJcpEKR3mRegRFiaeLSJygSq+enUuySRQSGboZEn5HuLu8vkbAu71HH6wAh0Qdynp2QhPPexNFxbrHv7nGw9fc2d5E2MKuGQG66LBFCefpGetE7eju8UKErAZFF9QXQxnU9GRg566eOXrqDr6zJ2TeQiTcLBiDGCwbxYoSjHCgRklIBWoVhvAL6KFIxIlHwKE0otJiyoq8INJbadKdxJgv0d3MWIQBzUciH5+FFDKSWkkiEma6ZGlzaU2dTpE2xWmk3S6JDEFYDZZ16y6G+E7pIyKAmoB/AQEMlBcMq7mKXWHGhYsEGD1txJLqsoD3Gz2+4oQcUHagyANqD4ZMOxX0ozUiHHLtDCwE19++4/RmAFxXM+ckCT5IyCpPNOkhoUcrKbrHn5FVpyCooib7SAIJqmuZ3rRbd+5KUCTgM8DTCAPYizoKYRA2UgXlwKODYfBmyYORF4o7Qq5nA3Tp4MNvsgABQobH4tOrX8++vfv38OODCQIAIfkECAgAAAAsAAAAAKAAFACFPDI8nJqcbGZszM7MXFZc7OrsTD5MvLa8jIqM5OLkfHJ8ZF5k9Pb0RDpErKas1M7UZFZkTEZMzMbM7Obs/P78RDZEpJ6kdGp0TEJMnJac5ObkhHqE/Pr81NLUZFpkzMrM////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AkHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4DC14PB4HAWxej3lMJgdBaCi6CA5BIB+j6Cw/4BGAwZ6Bh93EHt7EBxFHBiKihiNgU8JAw8JTJeZm5iaS5ygSHKRCkd5kXoERYmqi0iinp2hn0oUEhm6GRJ+R7i7vL5GwLu9SMW6x0YfrwCHRB3OenZCE9N7E0XJwsi5xsPb38rhRAkZAbrpo0Xn6egZ7Obw8PJD7urxR4SvBkUX2C4MyYBNT4Z29NbFSqjvCL56SL5ZMBYxmLKKFiVgDKbRETZKQipgqzAEYEEPRSRSPDJupZGWF1m+c5kS3kReFdPd7PjSZsxMIgw+EhE5jaQQk9hQEpEw82dNnU6X+sTpMNhEe0LOWcQKQmswrl53YeWnyh8RAdgEDCwI4OC8XVcXbpX71Ru9ZcSY6rKAV9w7vuWG4Prbd8gBZweKPMD2YMg1VURFaiPCIdfOwEIG7y0sWG8GwEoSfJDA1dzo0vdOb1KdBOkegUZcqYLQChtthxJIr9YdinUlMBL4GeBZhIHsRSCFMCAbqULy39DBMHiz5IHJC8QpH9ez4Xn07+A3WYAAIcPk8OjTq1/Pvr379/ChBAEAIfkECAgAAAAsAAAAAKAAFACFPDI8nJqcbGZszM7MXFZc7OrsTD5MvLa8jIqM5OLkfHJ8ZF5k9Pb0RDpErKas1M7UZFZkTEZMzMbM7Obs/P78RDZEpJ6kdGp0TEJMnJac5ObkhHqE/Pr81NLUZFpkzMrM////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AkHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LBYWHB4PI7CeM2GchjMjgJQUXSQHAJgz0dQ2oCBQwMGewYfeBB8fBAcRRwYi4sYjoAJAw8JTJeZm5iaS5ygSqJKc5IKR3qSewRFiqyMSKWhn0oUEhm6GRJ/R7i7vL5GwLu9SMW6x7+5xsNEH7EAiEQd0nt3QhPXfBNFycLIzcrPRAkZAbrpo0Xn6egZ7Obw8PJD7urxs/TrR4WxBopc4HZhSAZuezK046fvCL56SJpZMBYxmLKKFiVgDKbxyDiKj7hVElKBW4UhAxF6KCIRpJGPFz2+c8kS3kReFdPd7PjSZszMnjp/DmEgkkjJayeFpOS2koiEmUKd+sTpMNhEe0LOWcQKQmswrl53gbXYsMg/VgGJCOAmwCBCAArn7bq6b6s4esuIPdVlIe+3vRn6lhuC651gcYb9Djkg7UCRB9weDNnG6mhJb0Q45No5WEhhvorbfZDA1dzo0vdOb1IdijWSpXwKGoHFCsIrbrYdSiC9mreg3x7/GeBZhAFtRiOFMDgrqUJy4NC9MICz5EHKC8QzH9+z4Xn07+CTJLAAAUIGzOHTq1/Pvr379/DBBwEAIfkECAgAAAAsAAAAAKAAFACFPDI8nJqcbGZszM7MXFZc7OrsTD5MvLa8jIqM5OLkfHJ8ZF5k9Pb0RDpErKas1M7UZFZkTEZMzMbM7Obs/P78RDZEpJ6kdGp0TEJMnJac5ObkhHqE/Pr81NLUZFpkzMrM////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AkHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LBYWnB4PI7CeM2GchjMjgJQUXSQHAJgz0dQ2oCBQwMGewYfeBB8fBAcRRwYi4sYjlcJAw8JTJeZm5iaS5ygSqKenUlzkgpHepJ7BEWKroxIpUkUEhm6GRJ/R7i7vL5GwLu9SMW6x7+5xsNFycJHH7MAiEQd1Xt3QhPafBPQzcrPRAkZAbrpo0Xn6egZ7Obw8PJD7urxtfTr++/9RgrNMlDkwrcLQzJ825OhHT99R5pZMIZkHMWIwZRVzMhrY0YJHoOBfPStkpAK3yoMMbjQQxGJF41IeBfzJbyJHTGmwzlS5s1NjToz8Ny4EygRBiWJoNSmUgjLby6JzPy4b9dEe0LOZcQKQmswrl53geU4dusRga4IEhHwTUDChQAazrMKkViud8vsvrOQV9zevkRw/S03RLAuvoSFGBYKWMiBageKPPj2YIg3V0tRhiPCIRfPxPc+SOBqTjTp0KM3mVadOtTqJE/5IDQiyxWEWN9uH0kgobWg31YkCDTQswiD2oxMCmGAVlIF5cCje2EAZ8kDlheKc0a+ZwN06eDDJ0lgAQKEDJvFq1/Pvr379/DjfwkCACH5BAgIAAAALAAAAACgABQAhTwyPJyanGxmbMzOzFxWXOzq7Ew+TLy2vIyKjOTi5HxyfGReZPT29EQ6RKymrNTO1GRWZExGTMzGzOzm7Pz+/EQ2RKSepHRqdExCTJyWnOTm5IR6hPz6/NTS1GRaZMzKzP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+QJBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CwWFxweDyOwnjNhnIYzI4CUFF0kBwCYM9HUNqAgUMDBnsGH3gQfHwQHEUcGIuLGI5HCQMPCUyXmZuYmkucoEqinp2hn0pzkgpHepJ7BEWKsIxGFBIZuhkSf0e4u7y+t7m7vUjAxsNFybrHv8XOy0TNwkcftQCIRB3Ze3dCE958E0UJGQG66aPm6OoZ7ETn6e7xQ/Pv9kL49Uj86/7c9TNSqJaBIhfGXRiSYdyeDEWKWTCGJBrFIxadVQymESNHXhs5SggZbOSjcZWEVBhXYUhChx4i0rtoJFe6iSA93uxY0x3GTpM9d+YMmuHnRqFAhzBASWSlt5ZCXo6LKS/YRH0gznHEqjUY149ftwYUawnskYKwDhIRME4AQ4cAIFKzKQ2ZBHoWnhHDq5fZXV15pw3BxVewEMKA+84tfORAtgNFHox7MEQcLKcryxlJ8EECVnmdP98LvYl0KNOkUCfh7FmJVD4LjdCCBWHWuNqCco+RUNBAUiIMZjNKKYQBWkkViOte7oUBnCUPXl74PYSD8D0blDPfzn21BQgQMmjuTr68+fPo06tf/yQIACH5BAgIAAAALAAAAACgABQAhDwyPLSytOTe5GxmbFxWXMTCxPT29EQ6RGReZMzKzPz+/EQ2RMS+xOTi5JyWnGRWZMzGzPz6/Ew+TGxibMzOzP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX+YCWOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwahYYIKzFZLCaUo3Qqg0gAAEkBpXhgv4CH8qRoQCANhUohOKfXbbQ6xXbPufE3PX8n8+F2KQNgWAMnBIRfBGQFDo4OBX0kEY2PkSiUj5CSI5mWnCKejpcnopuYlaOgFaakJRCJWBAlCQuxWAkmApqOAii7vL4nwJrCurwOxiXEj8okzL2/yM4j0MknV7ESJRO3WBMmqZYo4qPkyFsn5ZDnvOnh6O2a7yXr9KHeAGMitt4L8O7kjVMXj2BAg/MEmkM4EGDCEhHy7avQ79a/ZcgaSOOlcVjGjZo6HuMI8pFIjCR6PaYskS3RNhII8iEwoUAchFU1Nd3kYhNnT546fQYF+mgno6EmAtwK8CrfLJpm5Kwxk0APF6pWyWBdJaIMhKpcK3gFO/VrVqhmuXYjBM6El1gPqMide4JBNgkMML0FI4au378GDLCAsPbB07+IEytezLix48eQI0tuEQIAIfkECAgAAAAsAAAAAKAAFACDPDI8rKqs3NrcbGZsvLq89Pb0bGJsxMLE/P78TD5MvLa83N7cnJacxL7E/Pr8////BP7wyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3fW+HgfB8fCQAg0dAgFoeDAGFEKpmZY3LZnEIx0mdVG3VSu9bt9zIQmgEDbIPBZjSuFcS6/Va33XCK/F6/7Ol5E39sfRaDeHaAiYSBDw1nZ0UWAndsAhiUlZcXmXebk5UMnxWdbaMUpZaYoacTqaKrmhdBkEIJFwShBBi5lbu4urzBwL7CxcR3vxa9ycbNFQ61ZzsVzG3K1cPL2tnH297dz9/i4dfO5tDSZtSooQuxd++c7vBt8qCV96T08/n1bPra+bNAq9YtQ3PYHGj04NDCRQwe+kkYkaFDixQlIryjMU5GjEgcGwVQFwCLkwUMJSAQkASlEZYHXEaBKRMLzZQNb75siXMlz50xUxqoZcCH0aMlFNBKoACp06cfChSASrWq1atYs2rdyrXr1QgAOw==",alt:"\u0438\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})}},91:function(A,e,t){A.exports={formControl:"FormsControls_formControl__1Myza",error:"FormsControls_error__2nlG_"}},94:function(A,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"g",(function(){return d})),t.d(e,"c",(function(){return f})),t.d(e,"d",(function(){return g})),t.d(e,"f",(function(){return j})),t.d(e,"e",(function(){return p}));var n=t(9),r=t.n(n),a=t(17),s=t(36),c=t(5),i=t(16),o=t(28),u={postData:[{id:1,imgSrc:"https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",message:"hi, hove are you?",likesCount:181}],usersProfile:null,userStatus:""},l=function(A){return{type:"profilePage/ADD-POST",newPostText:A}},b=function(A){return{type:"profilePage/SET-USERS-STATUS",status:A}},d=function(A){return{type:"profilePage/SET_USER_PHOTO",fileName:A}},f=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.profileUser(A);case 2:n=e.sent,t({type:"profilePage/SET-USERS-PROFILE",profile:n});case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},g=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.profileStatus(A);case 2:n=e.sent,t(b(n));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},j=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.changeProfileStatus(A);case 2:0===e.sent.resultCode&&t(b(A));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},p=function(A){return function(){var e=Object(a.a)(r.a.mark((function e(t,n){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.id,e.next=3,i.b.changeProfile(A);case 3:if(0!==(s=e.sent).resultCode){e.next=8;break}t(f(a)),e.next=10;break;case 8:return t(Object(o.a)("contacts-form",{_error:s.messages.length>0?s.messages[0]:"SOME ERROR"})),e.abrupt("return",Promise.reject(s.messages[0]));case 10:case"end":return e.stop()}}),e)})));return function(A,t){return e.apply(this,arguments)}}()};e.b=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"profilePage/ADD-POST":var t={id:3,imgSrc:"https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",message:e.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},A),{},{postData:[].concat(Object(s.a)(A.postData),[t])});case"profilePage/DELETE-POST":return Object(c.a)(Object(c.a)({},A),{},{postData:A.postData.filter((function(A){return A.id!==e.postId}))});case"profilePage/SET-USERS-PROFILE":return Object(c.a)(Object(c.a)({},A),{},{usersProfile:e.profile});case"profilePage/SET-USERS-STATUS":return Object(c.a)(Object(c.a)({},A),{},{userStatus:e.status});case"settingsPage/SET_USER_PHOTO":return Object(c.a)(Object(c.a)({},A),{},{usersProfile:Object(c.a)(Object(c.a)({},A.usersProfile),{},{photos:e.fileName})});default:return A}}},96:function(A,e,t){}},[[292,1,2]]]);
//# sourceMappingURL=main.40704f2b.chunk.js.map