(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){e.exports=a.p+"static/media/icon.d325b061.png"},143:function(e,t,a){e.exports=a(261)},191:function(e,t){},199:function(e,t){},201:function(e,t){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=(a(90),a(27)),l=a(18),i=a.n(l),s=a(39),u=a(6),m=a(125),d=a.n(m),p=localStorage.getItem("port"),b=localStorage.getItem("hostname"),g=new d.a({transport:{type:"http",host:b,port:p}}),h=Object(c.createStore)(function(){var e=Object(n.useState)(localStorage.getItem("username")),t=Object(u.a)(e,2),a=t[0],r=t[1];return[a,function(e){return localStorage.setItem("username",e),r(e)}]}),f=Object(c.createStore)(function(){return Object(n.useState)([])}),E=Object(c.createStore)(function(){var e=Object(n.useState)(localStorage.getItem("token")),t=Object(u.a)(e,2),a=t[0],r=t[1];return[a,function(e){return localStorage.setItem("token",e),r(e)}]}),v=Object(c.createStore)(function(){var e=Object(n.useState)(localStorage.getItem("hostname")),t=Object(u.a)(e,2),a=t[0],r=t[1];return[a,function(e){return localStorage.setItem("hostname",e),r(e)}]}),O=Object(c.createStore)(function(){var e=Object(n.useState)(localStorage.getItem("port")),t=Object(u.a)(e,2),a=t[0],r=t[1];return[a,function(e){return localStorage.setItem("port",e),r(e)}]}),j=a(301),N=a(302),w=a(300),y=a(307),k=a(127),x=a.n(k),S=a(263),C=a(262),I=a(299),B=Object(C.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},host:{width:"150px","margin-right":"10px"},port:{width:"100px","margin-right":"10px"}}}),U=function(e){var t=h(),a=Object(u.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),m=Object(u.a)(l,2),d=m[0],p=m[1],b=E(),k=Object(u.a)(b,2),C=k[0],U=k[1],P=f(),W=Object(u.a)(P,2),R=W[0],q=W[1],G=v(),A=Object(u.a)(G,2),T=A[0],M=A[1],D=O(),V=Object(u.a)(D,2),F=V[0],H=V[1],L=Object(n.useState)(),J=Object(u.a)(L,2),_=J[0],K=J[1];function z(){return(z=Object(s.a)(i.a.mark(function t(a){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(o.length<3||d.length<3)){t.next=5;break}K("Username or Password too short"),t.next=17;break;case 5:return t.next=7,g.login(o,d);case 7:if("success"!==(n=t.sent).status){t.next=16;break}return c(n.userName),U(n.token),q(n.nodes),e.history.push("/main"),t.abrupt("return",C+R);case 16:K(n.message);case 17:case"end":return t.stop()}},t)}))).apply(this,arguments)}var Q=B();return r.a.createElement(I.a,{component:"main",maxWidth:"xs"},r.a.createElement(w.a,null),r.a.createElement("div",{className:Q.paper},r.a.createElement(j.a,{className:Q.avatar},r.a.createElement(x.a,null)),r.a.createElement(S.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:Q.form,noValidate:!0},r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"Username",label:"Username",name:"Username",autoFocus:!0,placeholder:"Username",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",id:"password",type:"password",placeholder:"password",value:d,onChange:function(e){return p(e.target.value)}}),"Setup enApi host location",r.a.createElement("br",null),r.a.createElement(y.a,{variant:"outlined",margin:"normal",className:Q.host,required:!0,id:"hostname",name:"hostname",label:"Host Name",placeholder:"Enter enApi Address",value:T,onChange:function(e){return M(e.target.value)}}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",className:Q.port,required:!0,id:"port",name:"port",label:"port",placeholder:"port",value:F,onChange:function(e){return H(e.target.value)}}),r.a.createElement(N.a,{onClick:function(){return e.history.go("/login")},variant:"contained",color:"primary",className:Q.submit},"save"),r.a.createElement(N.a,{onClick:function(e){!function(e){z.apply(this,arguments)}(e)},type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Q.submit},"Login"),_&&r.a.createElement("div",null,_))))},P=a(36),W=a(128),R=a.n(W),q=Object(C.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},host:{width:"150px","margin-right":"10px"},port:{width:"100px","margin-right":"10px"}}}),G=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(),m=Object(u.a)(l,2),d=m[0],p=m[1],b=Object(n.useState)(),h=Object(u.a)(b,2),f=h[0],E=h[1],k=Object(n.useState)("admin"),x=Object(u.a)(k,1)[0],C=Object(n.useState)(),B=Object(u.a)(C,2),U=B[0],W=B[1],G=Object(n.useState)(),A=Object(u.a)(G,2),T=A[0],M=A[1],D=v(),V=Object(u.a)(D,2),F=V[0],H=V[1],L=O(),J=Object(u.a)(L,2),_=J[0],K=J[1],z=function(){var t=Object(s.a)(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),d===f?g.createUser(o,d,x).then(function(t){W(t),"success"===t.status?e.history.push("/login"):M(U.message)}).catch(M):M("Passwords don't Match");case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),Q=q();return r.a.createElement(I.a,{component:"main",maxWidth:"xs"},r.a.createElement(w.a,null),r.a.createElement("div",{className:Q.paper},r.a.createElement(j.a,{className:Q.avatar},r.a.createElement(R.a,null)),r.a.createElement(S.a,{component:"h1",variant:"h5"},"Welcome to enUI User creation."),r.a.createElement("form",{className:Q.form,noValidate:!0},r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"Username",label:"Username",name:"Username",autoFocus:!0,placeholder:"Username",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",name:"password",id:"password",label:"Password",placeholder:"password",value:d,onChange:function(e){return p(e.target.value)}}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",name:"password2",id:"password2",label:"Repeat Password",placeholder:"Repeat Password",value:f,onChange:function(e){return E(e.target.value)}}),"Setup enApi host location",r.a.createElement("br",null),r.a.createElement(y.a,{variant:"outlined",margin:"normal",className:Q.host,required:!0,id:"hostname",name:"hostname",label:"Host Name",placeholder:"Enter enApi Address",value:F,onChange:function(e){return H(e.target.value)}}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",className:Q.port,required:!0,id:"port",name:"port",label:"port",placeholder:"port",value:_,onChange:function(e){return K(e.target.value)}}),r.a.createElement(N.a,{onClick:function(){return e.history.go()},variant:"contained",color:"primary",className:Q.submit},"save"),r.a.createElement(N.a,{onClick:function(e){z(e)},type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Q.submit},"Register"),"*Note: This form is only for first time users.",r.a.createElement("br",null),"Please go to the ",r.a.createElement(P.b,{to:"/login"},"Login")," page if you already have an account. ",r.a.createElement("br",null),"Or contact your admin for a new one.",r.a.createElement("br",null),T&&r.a.createElement("div",null,T))))},A=a(130),T=a.n(A),M=a(312),D=a(303),V=a(304),F=a(265),H=a(131),L=a.n(H),J=a(132),_=a.n(J),K=Object(C.a)(function(e){return Object(M.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appbar:{background:"linear-gradient(45deg, #43a047 30%, #388e3c 90%)",color:"#fff"},menuButton2:{border:0,color:"white",height:24,margin:"0 5px"}})});function z(e){var t=K();return r.a.createElement("nav",{className:t.root},r.a.createElement(D.a,{position:"static",className:t.appbar},r.a.createElement(V.a,null,r.a.createElement(F.a,{edge:"start",className:t.menuButton,color:"inherit","arial-label":"menu"},r.a.createElement("img",{src:T.a,height:"35",alt:""})),r.a.createElement(S.a,{variant:"h6",className:t.title},e.title),r.a.createElement(P.b,{to:"/main"},r.a.createElement(N.a,{className:t.menuButton2},r.a.createElement(L.a,null))),r.a.createElement(P.b,{to:"/nodes"},r.a.createElement(N.a,{className:t.menuButton2},r.a.createElement(_.a,null))),r.a.createElement(P.b,{to:"/login"},r.a.createElement(N.a,{className:t.menuButton2},"Logout")))))}var Q=function(){var e=h(),t=Object(u.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement(z,{title:"Home - Welcome to enUI "+t}))},X=a(264),Y=a(305),Z=Object(C.a)(function(e){return Object(M.a)({root:{flexGrow:1},paper:{padding:e.spacing(3,2),margin:e.spacing(1,3)}})});var $=function(e){var t=f(),a=Object(u.a)(t,1)[0],n=Z();return a.map(function(t,a){return r.a.createElement("div",{className:n.root},r.a.createElement(Y.a,{container:!0,spacing:3},r.a.createElement(Y.a,{item:!0,xs:6},r.a.createElement(X.a,{className:n.paper,key:a,id:a},"Node Name: ",t.nodeName,r.a.createElement("br",null),"Node Container ID: ",t.nodeId," ",r.a.createElement("br",null),"Node Network: ",t.nodeNetwork,r.a.createElement("br",null),"Net version : ",t.version,r.a.createElement("br",null),"Client Version: ",t.clientversion,r.a.createElement("br",null),"Syncing: ",t.sync&&"false"!==t.sync?r.a.createElement(r.a.Fragment,null,"CurrentBlock: ",t.sync.currentBlock):t.sync,r.a.createElement("br",null),r.a.createElement(N.a,{variant:"contained",onClick:function(){return e.removeNodes(t.nodeId,t.nodeName,!0)}},"Remove Node")))))})},ee=a(72),te=a(133),ae=a(308),ne=a(310),re=a(309),oe=a(311),ce=a(306);function le(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}function ie(e){var t=Object(C.a)(function(e){return Object(M.a)({paper:{position:"absolute",width:600,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,4)},formMultiGeth:{width:"100%",marginTop:e.spacing(1),display:f},submit:{margin:e.spacing(3,0,2)},clientButton:{margin:"3px"},networkButton:{margin:"3px"}})}),a=Object(n.useState)(),o=Object(u.a)(a,2),c=o[0],l=o[1],i=r.a.useState(le),s=Object(u.a)(i,1)[0],m=r.a.useState(!1),d=Object(u.a)(m,2),p=d[0],b=d[1],g=Object(n.useState)("none"),h=Object(u.a)(g,2),f=h[0],E=h[1],v=Object(n.useState)({rpc:!1,websocket:!1}),O=Object(u.a)(v,2),j=O[0],w=O[1],k=Object(n.useState)("classic"),x=Object(u.a)(k,2),S=x[0],B=x[1],U=t(),P=function(e){return function(t){w(Object(te.a)({},j,Object(ee.a)({},e,t.target.checked))),console.log("rpc "+j.rpc),console.log("ws "+j.websocket)}};return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){b(!0)}},"Add Node"),r.a.createElement(ae.a,{"aria-labelledby":"Add Node","aria-describedby":"Spin up a Ethereum Node",open:p,onClose:function(){b(!1)}},r.a.createElement("div",{style:s,className:U.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Spin up a Ethereum Node Client"),r.a.createElement(I.a,{fixed:!0},r.a.createElement("div",{style:{borderBottom:"1px solid #000000"}},r.a.createElement("h3",null,"Select Node Client"),r.a.createElement(N.a,{className:U.clientButton,variant:"contained",color:"primary",onClick:function(){return E("")}},"Multi-Geth"),r.a.createElement(N.a,{className:U.clientButton,variant:"contained",color:"primary",disabled:!0,onClick:function(){return E("")}},"Parity"),r.a.createElement(N.a,{className:U.clientButton,variant:"contained",color:"primary",disabled:!0,onClick:function(){return E("")}},"Classic Geth"),r.a.createElement(N.a,{className:U.clientButton,variant:"contained",color:"primary",disabled:!0,onClick:function(){return E("")}},"Mantis")),r.a.createElement("form",{className:U.formMultiGeth,noValidate:!0},r.a.createElement("h4",null,"Multi-Geth Select Network"),r.a.createElement(oe.a,{"aria-label":"position",name:"position",value:S,onChange:function(e){B(e.target.value)},row:!0},r.a.createElement(ce.a,{value:"classic",control:r.a.createElement(re.a,{color:"primary"}),label:"ETC",labelPlacement:"top"}),r.a.createElement(ce.a,{value:"kotti",control:r.a.createElement(re.a,{color:"primary"}),label:"Kotti",labelPlacement:"top"})),r.a.createElement("h4",null,"Enable JSON-RPC"),r.a.createElement(ce.a,{control:r.a.createElement(ne.a,{checked:j.rpc,onChange:P("rpc"),value:"false"}),label:"Enable RPC http"}),r.a.createElement(ce.a,{control:r.a.createElement(ne.a,{checked:j.websocket,onChange:P("websocket"),value:"false"}),label:"Enable RPC WS"}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,name:"nodename",id:"nodename",label:"Node Name",placeholder:"Node Name",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement(N.a,{fullWidth:!0,variant:"contained",color:"primary",className:U.submit,onClick:function(){e.addNode(c,S,"fast",j.rpc,j.websocket)}},"Create Node"))))))}var se=function(e){var t=Object(C.a)(function(e){return Object(M.a)({root:{flexGrow:1}})}),a=h(),o=Object(u.a)(a,1)[0],c=f(),l=Object(u.a)(c,2),m=l[0],d=l[1],p=E(),b=Object(u.a)(p,1)[0],v=Object(n.useState)(!0),O=Object(u.a)(v,2),j=O[0],N=O[1],w=Object(n.useState)(),y=Object(u.a)(w,2),k=y[0],x=y[1],S=t(),I=function(){g.getUser(b,o).then(function(e){d(e.nodes),0===e.nodes.length&&N(!1),m.map(function(e,t){return g.ethRpcCall(o,e.nodeName,e.nodeNetwork,"net_version",[],67).then(function(t){e.version=t.result,d(m)}),g.ethRpcCall(o,e.nodeName,e.nodeNetwork,"eth_syncing",[],67).then(function(t){!1!==t.result?(e.sync=t.result,d(m)):(e.sync="false",d(m)),N(!1)}),g.ethRpcCall(o,e.nodeName,e.nodeNetwork,"web3_clientVersion",[],67).then(function(t){e.clientversion=t.result,d(m)}),m})})};function B(){return(B=Object(s.a)(i.a.mark(function t(a,n,r,c,l){var s,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.addNode(b,o,a,n,r,c,l);case 2:if(s=t.sent,console.log(s),!s||"success"!==s.status){t.next=13;break}return t.next=7,g.getUser(b,o);case 7:u=t.sent,d(u.nodes),N(!1),e.history.go("/nodes"),t.next=15;break;case 13:console.log(s.message),x(s.message);case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function U(){return(U=Object(s.a)(i.a.mark(function t(a,n,r){var c,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.removeNode(b,o,a,n,r);case 2:if(!(c=t.sent)||"success"!==c.status){t.next=12;break}return t.next=6,g.getUser(b,o);case 6:l=t.sent,d(l.nodes),N(!1),e.history.push("/nodes"),t.next=14;break;case 12:console.log(c.message),x(c.message);case 14:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(n.useEffect)(function(){I(),m.length},[j&&m]),r.a.createElement("div",{className:S.root},r.a.createElement(z,{title:"Nodes - Hello "+o+" these are your running nodes: "}),m?r.a.createElement($,{removeNodes:function(e,t,a){return U.apply(this,arguments)}}):r.a.createElement("div",null," Loading Nodes"),r.a.createElement(ie,{addNode:function(e,t,a,n,r){return B.apply(this,arguments)},getNodes:I,testNode:function(){console.log("hello from modal")}}),k&&r.a.createElement("div",null,k))},ue=a(37),me=n.createElement(c.ReusableProvider,null,n.createElement(P.a,{basename:"/enui"},n.createElement(ue.d,null,n.createElement(ue.b,{exact:!0,path:"/",render:function(){return n.createElement(ue.a,{to:"/login"})}}),n.createElement(ue.b,{path:"/main",exact:!0,component:Q}),n.createElement(ue.b,{path:"/login",component:U}),n.createElement(ue.b,{path:"/register",component:G}),n.createElement(ue.b,{path:"/nodes",component:se}))));o.render(me,document.getElementById("root"))},90:function(e,t,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.df927903.chunk.js.map