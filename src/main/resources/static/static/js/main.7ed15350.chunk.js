(this.webpackJsonpblogclient=this.webpackJsonpblogclient||[]).push([[0],{198:function(e,t,a){e.exports=a(354)},203:function(e,t,a){},204:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(23),o=a(32),l=a(30),c=a(33),i=a(0),u=a.n(i),s=a(8),m=a.n(s),h=(a(203),a(51)),f=a(102),d=(a(204),function(){function e(t,a,r,o){Object(n.a)(this,e),this.ID=t,this.AUTHOR=a,this.TEXT=r,this.TAGS=o,this.TIME="null"}return Object(r.a)(e,[{key:"getID",value:function(){return this.ID}},{key:"getAuthor",value:function(){return this.AUTHOR}},{key:"getText",value:function(){return this.TEXT}},{key:"setText",value:function(e){this.TEXT=e}},{key:"getTags",value:function(){return this.TAGS}},{key:"setTags",value:function(e){this.TAGS=e}},{key:"setTIME",value:function(e){var t=new Date(parseInt(e));this.TIME=t.toUTCString(),console.log("time: "+this.TIME)}},{key:"getTIME",value:function(){return this.TIME}}]),e}()),g=a(386),p=a(392),v=a(401),E=a(393),b=a(86),y=a(400),O=a(173),T=a.n(O),j=a(174),w=a.n(j),S=a(391),C=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"removePost",value:function(e){console.log("remove id:"+e),fetch("http://localhost:8080/delete/"+e,{method:"DELETE"})}},{key:"addPostWithTags",value:function(e,t,a,n){if(n.length>=2){for(var r=[],o=0;o<n.length;o++)r.push({tagId:n[o]});var l={blogId:e,author:t,text:a,tags:r};console.log("data: "+JSON.stringify(l)),fetch("http://localhost:8080/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){console.log("data send")}))}else alert("add least 2 tags. (separate tags with ,)")}},{key:"addNewPost",value:function(e,t,a){if(a.length>=2){for(var n=[],r=0;r<a.length;r++)n.push({tagId:a[r]});var o={author:e,text:t,tags:n};console.log("data: "+JSON.stringify(o)),fetch("http://localhost:8080/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){console.log("data send")}))}else alert("add least 2 tags. (separate tags with ,)")}},{key:"addComment",value:function(e,t){var a={author:e.getAuthor(),text:e.getText()};fetch("http://localhost:8080/comment/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}},{key:"changeComment",value:function(e,t){var a=e.getAuthor(),n=e.getText(),r={commentId:e.getID(),author:a,text:n};console.log("data= "+JSON.stringify(r)),fetch("http://localhost:8080/comment/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}}]),e}(),k=a(399),x=a(83),I=a.n(x),N=a(176),A=a.n(N),D=a(175),P=a.n(D),W=a(170),J=a(182),R=a(388),M=a(390),U=Object(g.a)((function(e){return{root:{width:"100%",height:"85vh",backgroundColor:e.palette.background.paper}}}));var X,L=function(e){var t=U(),a=e.lista;return u.a.createElement("div",{className:t.root},u.a.createElement(W.a,null,(function(e){var t=e.height,n=e.width;return u.a.createElement(J.a,{height:t,width:n,itemSize:500,itemCount:a.length},(function(e){for(var t=e.index,n=(e.style,a[t].getText()),r="",o=0;o<10;o++)r+=n.charAt(o);r+="...";var l=a[t].getID();return u.a.createElement(R.a,{key:t,onClick:function(){return e=l,void window.location.assign("../show/"+e);var e},style:{cursor:"pointer"}},u.a.createElement(y.a,{width:1},u.a.createElement(M.a,{primary:r})))}))})))},H=a(171),G=a.n(H),B=a(172),F=a.n(B),V=[];var z=function(){var e=u.a.useReducer((function(e){return e+1}),0),t=Object(h.a)(e,2)[1];return u.a.createElement(F.a,null,u.a.createElement("div",null,u.a.createElement(G.a,{onChange:function(e){X=e,console.log("searchWord: "+X)},onRequestSearch:function(){fetch("http://localhost:8080/search/"+X).then((function(e){return e.json()})).then((function(e){V=[];var t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value;V.push(new d(l.blogId,l.author,l.text,l.tags))}}catch(c){a=!0,n=c}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}})).then((function(e){return t()}))},style:{margin:"0 auto",maxWidth:800}}),u.a.createElement("br",null),u.a.createElement(L,{lista:V})))};var q,K,Y=function(){return u.a.createElement(S.a,{variant:"contained",color:"secondary",onClick:function(){window.location.assign("/user")}},"Login")},$=[],_=!0,Q=[];function Z(e){var t=e.children,a=e.value,n=e.index,r=Object(f.a)(e,["children","value","index"]);return u.a.createElement(b.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},r),a===n&&u.a.createElement(y.a,{p:3},t))}function ee(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}function te(e,t){e?fetch("http://localhost:8080/blogs/").then((function(e){return e.json()})).then((function(e){console.log("json: "+JSON.stringify(e));var t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value;$.push(new d(l.blogId,l.author,l.text,l.tags))}}catch(c){a=!0,n=c}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}_=!1})).then((function(e){console.log($.length),t()})):fetch("http://localhost:8080/blogs/").then((function(e){return e.json()})).then((function(e){console.log("json: "+JSON.stringify(e)),$=[];var t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value;$.push(new d(l.blogId,l.author,l.text,l.tags))}}catch(c){a=!0,n=c}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}})).then((function(e){console.log($.length),t()}))}var ae=Object(g.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));var ne=function(){var e=ae(),t=u.a.useState(0),a=Object(h.a)(t,2),n=a[0],r=a[1],o=u.a.useReducer((function(e){return e+1}),0),l=Object(h.a)(o,2)[1];return Object(i.useEffect)((function(){_&&te(!0,l)})),u.a.createElement("div",{className:e.root},u.a.createElement(Y,null),u.a.createElement(p.a,{position:"static",color:"default"},u.a.createElement(v.a,{value:n,onChange:function(e,t){r(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example"},u.a.createElement(E.a,Object.assign({label:"Show posts",icon:u.a.createElement(T.a,null)},ee(0))),u.a.createElement(E.a,Object.assign({label:"Add new post",icon:u.a.createElement(w.a,null)},ee(1))),u.a.createElement(E.a,Object.assign({label:"Search",icon:u.a.createElement(P.a,null)},ee(2))))),u.a.createElement(Z,{value:n,index:0},u.a.createElement(L,{lista:$})),u.a.createElement(Z,{value:n,index:1},u.a.createElement(I.a,null,u.a.createElement("form",{noValidate:!0,autoComplete:"off"},u.a.createElement(k.a,{id:"outlinedBasic",label:"Author",variant:"outlined",onChange:function(e){K=e.target.value}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(k.a,{id:"outlinedMultiline",label:"Text",multiline:!0,rows:"4",variant:"outlined",onChange:function(e){q=e.target.value}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(k.a,{id:"tags",label:"Tags",variant:"outlined",onChange:function(e){var t=e.target.value;Q=t.split(",")}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(S.a,{variant:"contained",color:"primary",size:"large",startIcon:u.a.createElement(A.a,null),onClick:function(){C.prototype.addNewPost(K,q,Q),setTimeout((function(){te(!1,l)}),500)}},"Save")))),u.a.createElement(Z,{value:n,index:2},u.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re,oe,le,ce=a(179),ie=a(52),ue=a(398),se=a(177),me=a.n(se),he=a(394),fe=a(100),de=a.n(fe),ge=a(403),pe=a(395),ve=a(396),Ee=a(397),be=a(404),ye=a(356),Oe=function(){function e(t,a){Object(n.a)(this,e),this.AUTHOR=t,this.TEXT=a,this.ID=0}return Object(r.a)(e,[{key:"getAuthor",value:function(){return this.AUTHOR}},{key:"getText",value:function(){return this.TEXT}},{key:"setAuthor",value:function(e){this.AUTHOR=e}},{key:"setText",value:function(e){this.TEXT=e}},{key:"setID",value:function(e){this.ID=e}},{key:"getID",value:function(){return this.ID}}]),e}(),Te=Object(g.a)((function(e){return{root:{width:"100%",height:"40vh",backgroundColor:e.palette.background.paper,overflowY:"scroll"},listaus:{listStyleType:"none"}}}));var je,we,Se,Ce,ke,xe=function(e){for(var t=Te(),a=e.lista,n=e.id,r=u.a.useState(!1),o=Object(h.a)(r,2),l=o[0],c=o[1],i=u.a.useReducer((function(e){return e+1}),0),s=Object(h.a)(i,2)[1],m=function(){var e=new Oe(le,re);e.setID(oe),C.prototype.changeComment(e,n),setTimeout((function(){c(!1),s()}),700)},f=[],d=function(e){f.push(u.a.createElement("li",null,u.a.createElement("h5",null,"Author: ",a[e].getAuthor(),u.a.createElement(he.a,{color:"primary","aria-label":"modify",onClick:function(){var t;oe=a[t=e].getID(),re=a[t].getText(),le=a[t].getAuthor(),c(!0)}},u.a.createElement(de.a,null))),u.a.createElement("p",null,a[e].getText())))},g=0;g<a.length;g++)d(g);return u.a.createElement("div",null,u.a.createElement("div",{className:t.root},u.a.createElement("h2",null,"Comments:"),u.a.createElement("ul",{className:t.listaus},f)),u.a.createElement(ge.a,{open:l,onClose:m,"aria-labelledby":"form-dialog-title"},u.a.createElement(pe.a,{id:"form-dialog-title"},"Modify this blog post"),u.a.createElement(ve.a,null,u.a.createElement("h4",null,le),u.a.createElement(k.a,{margin:"dense",multiline:!0,id:"modifyText",label:"Text",defaultValue:re,onChange:function(e){re=e.target.value},fullWidth:!0})),u.a.createElement(Ee.a,null,u.a.createElement(S.a,{onClick:function(){c(!1)},color:"primary"},"Cancel"),u.a.createElement(S.a,{onClick:m,color:"primary"},"Save"))))},Ie=!1,Ne=!1,Ae=[],De=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={id:0},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.blog;console.log("ShowOne data: "+e),Ie=!0,this.setState({id:e,open:!1,comment:!1,allcomments:[]})}},{key:"render",value:function(){var e=this,t=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},root2:{width:"100%",height:"85vh",backgroundColor:e.palette.background.paper}}})),a=function(){C.prototype.addPostWithTags(je.getID(),Se,we,Ae),setTimeout((function(){Ie=!0,Ne=!1,e.setState({open:!1})}),700)},n=function(){var t=new Oe(Ce,ke);C.prototype.addComment(t,e.state.id),setTimeout((function(){window.location.reload()}),750)};if(Ie){var r=this.state.id,o=[];fetch("http://localhost:8080/blogs/"+r).then((function(e){return e.json()})).then((function(e){console.log("json in showdata: "+JSON.stringify(e)),(je=new d(e.blogId,e.author,e.text,e.tags)).setTIME(e.creationTime)})).then((function(t){Ie=!1,Ne=!0,fetch("http://localhost:8080/comment/"+r).then((function(e){return e.json()})).then((function(e){var t=!0,a=!1,n=void 0;try{for(var r,l=e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var c=r.value,i=new Oe(c.author,c.text);i.setID(c.commentId),o.push(i)}}catch(u){a=!0,n=u}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}})).then((function(t){e.setState({id:r,allcomments:o})}))}))}if(Ne){var l=je.getTags(),c=this.state.allcomments;return u.a.createElement("div",null,u.a.createElement(ue.a,{container:!0,spacing:3},u.a.createElement(ue.a,{item:!0,xs:8},je.getText()),u.a.createElement(ue.a,{item:!0,xs:4},u.a.createElement("h2",null,"Author: ",je.getAuthor()),u.a.createElement("br",null),u.a.createElement("h3",null,"Create time: ",je.getTIME()),u.a.createElement("br",null),u.a.createElement(he.a,{color:"primary","aria-label":"modify",onClick:function(){Se=je.getAuthor(),we=je.getText(),Ae=je.getTags(),e.setState({open:!0})}},u.a.createElement(de.a,null)),u.a.createElement("br",null),u.a.createElement(S.a,{variant:"contained",color:"secondary",onClick:function(){C.prototype.removePost(je.getID()),setTimeout((function(){window.location.assign("../deletion")}),1e3)},startIcon:u.a.createElement(me.a,null)},"Delete"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h3",null,"Tags:"),u.a.createElement("br",null),u.a.createElement(ye.a,{className:t.root},l.map((function(e){return u.a.createElement(be.a,{label:e.tagId,onClick:function(){window.location.assign("../tags/"+e.tagId)}})}))))),u.a.createElement(ue.a,{item:!0,spacing:3,xs:12},u.a.createElement(S.a,{variant:"contained",color:"primary",onClick:function(){e.setState({comment:!0})}},"Add new comment"),u.a.createElement(xe,{lista:c,id:this.state.id})),u.a.createElement(ge.a,{open:this.state.open,onClose:a,"aria-labelledby":"form-dialog-title"},u.a.createElement(pe.a,{id:"form-dialog-title"},"Modify this blog post"),u.a.createElement(ve.a,null,u.a.createElement(k.a,{margin:"dense",id:"modifyAuthor",label:"Author",defaultValue:Se,onChange:function(e){Se=e.target.value},fullWidth:!0}),u.a.createElement(k.a,{margin:"dense",multiline:!0,id:"modifyText",label:"Text",defaultValue:we,onChange:function(e){we=e.target.value},fullWidth:!0}),u.a.createElement(k.a,{margin:"dense",id:"modifyTags",label:"Tags",onChange:function(e){var t=e.target.value;Ae=t.split(",")},fullWidth:!0})),u.a.createElement(Ee.a,null,u.a.createElement(S.a,{onClick:function(){e.setState({open:!1})},color:"primary"},"Cancel"),u.a.createElement(S.a,{onClick:a,color:"primary"},"Save"))),u.a.createElement(ge.a,{open:this.state.comment,onClose:n,"aria-labelledby":"form-dialog-title"},u.a.createElement(pe.a,{id:"form-dialog-title"},"Add new comment"),u.a.createElement(ve.a,null,u.a.createElement(k.a,{margin:"dense",id:"authorcomment",label:"Author",onChange:function(e){var t=e.target.value;Ce=t},fullWidth:!0}),u.a.createElement(k.a,{margin:"dense",id:"textcomment",label:"Text",onChange:function(e){var t=e.target.value;ke=t},fullWidth:!0})),u.a.createElement(Ee.a,null,u.a.createElement(S.a,{onClick:function(){e.setState({comment:!1})},color:"primary"},"Cancel"),u.a.createElement(S.a,{onClick:n,color:"primary"},"Save"))))}return u.a.createElement("div",null,u.a.createElement("h1",null,"Downloading..."))}}]),t}(u.a.Component),Pe=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));return u.a.createElement(I.a,null,u.a.createElement("div",null,u.a.createElement("h1",{style:{color:"green"}},"Delete done"),u.a.createElement("br",null),u.a.createElement(I.a,{className:e.root},u.a.createElement(S.a,{variant:"contained",onClick:function(){window.location.assign("../")},color:"primary"},"Ok"))))}}]),t}(u.a.Component),We=!1,Je=!1,Re=[],Me=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={id:0},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.tag;We=!0,this.setState({id:e})}},{key:"render",value:function(){var e=this;if(We){var t={tagId:this.state.id};fetch("http://localhost:8080/blogsWithTag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("json: "+JSON.stringify(e));var t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value;Re.push(new d(l.blogId,l.author,l.text,l.tags))}}catch(c){a=!0,n=c}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}})).then((function(t){We=!1,Je=!0,e.setState({id:e.state.id})}))}return Je?u.a.createElement("div",null,u.a.createElement("h1",null,"List of posts with: ",this.state.id),u.a.createElement(L,{lista:Re})):u.a.createElement("h1",null,"Downloading...")}}]),t}(u.a.Component),Ue=a(72),Xe=a.n(Ue),Le=a(178),He=a.n(Le),Ge=a(85),Be=a(126),Fe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={value:e.value?e.value:"",className:e.className?e.className:"",error:!1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleError,a=Object(f.a)(e,["handleError"]);return this.handleError=t,u.a.createElement("input",Object.assign({},a,{value:this.state.value,onChange:this.inputChange,className:this.state.className}))}}]),t}(i.Component),Ve=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).handleError=function(e,t){e&&(t?a.setState((function(a){return{failure:"",errcount:a.errcount+1,errmsgs:Object(Be.a)({},a.errmsgs,Object(Ge.a)({},e,t))}})):a.setState((function(t){return{failure:"",errcount:1===t.errcount?0:t.errcount-1,errmsgs:Object(Be.a)({},t.errmsgs,Object(Ge.a)({},e,""))}})))},a.renderError=function(){if(a.state.errcount||a.state.failure){var e=a.state.failure||Object.values(a.state.errmsgs).find((function(e){return e}));return u.a.createElement("div",{className:"error"},e)}},a.handleSubmit=function(e){if(e.preventDefault(),!a.state.errcount){var t=new FormData(a.form);fetch(a.form.action,{method:a.form.method,body:new URLSearchParams(t)}).then((function(e){e.redirected&&(window.location=e.url)})).catch((function(e){return console.warn(e)}))}},e.error?a.state={failure:"wrong username or password!",errcount:0}:a.state={errcount:0},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.inputs.map((function(t,a){var n=t.name,r=t.placeholder,o=t.type,l=t.value,c=t.className;return u.a.createElement(Fe,{key:a,name:n,placeholder:r,type:o,value:l,className:"submit"===o?c:"",handleError:e.handleError})})),a=this.renderError();return u.a.createElement("form",Object.assign({},this.props,{onSubmit:this.handleSubmit,ref:function(t){e.form=t}}),t,a)}}]),t}(i.Component),ze={name:"loginForm",method:"POST",action:"/perform_login",inputs:[{name:"username",placeholder:"username",type:"text"},{name:"password",placeholder:"password",type:"password"},{type:"submit",value:"Submit",className:"btn"}]},qe=new URLSearchParams(window.location.search),Ke=function(){return Xe.a.post("/logout",(function(){Xe()("#user").html(""),localStorage.setItem("login","false")})),!0};var Ye=function(){var e="true"===localStorage.getItem("login");return Xe.a.get("/user",(function(e){Xe()("#user").html(e.name),localStorage.setItem("login","true")})),Xe.a.ajaxSetup({beforeSend:function(e,t){"POST"!=t.type&&"PUT"!=t.type&&"DELETE"!=t.type||/^http:.*/.test(t.url)||/^https:.*/.test(t.url)||e.setRequestHeader("X-XSRF-TOKEN",He.a.get("XSRF-TOKEN"))}}),e?u.a.createElement("div",null,u.a.createElement("p",null,"logged"),u.a.createElement("div",null,"Logged in as: ",u.a.createElement("span",{id:"user"})),u.a.createElement("div",null,u.a.createElement("button",{onClick:Ke,className:"btn btn-primary"},"Logout"))):u.a.createElement("div",null,u.a.createElement(Ve,Object.assign({},ze,{error:qe.get("error")})),u.a.createElement("br",null),u.a.createElement("div",null,"With GitHub: ",u.a.createElement("a",{href:"/oauth2/authorization/github"},"click here")))},$e=function(){return u.a.createElement(ne,null)},_e=function(e){return u.a.createElement(De,e)},Qe=function(){return u.a.createElement(Pe,null)},Ze=function(e){return u.a.createElement(Me,e)},et=function(){return u.a.createElement(Ye,null)},tt=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(ce.a,null,u.a.createElement(ie.a,{exact:!0,path:"/",component:$e}),u.a.createElement(ie.a,{path:"/show/:blog",component:_e}),u.a.createElement(ie.a,{path:"/deletion",component:Qe}),u.a.createElement(ie.a,{path:"/tags/:tag",component:Ze}),u.a.createElement(ie.a,{path:"/login",component:et}))}}]),t}(u.a.Component);m.a.render(u.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,1,2]]]);
//# sourceMappingURL=main.7ed15350.chunk.js.map