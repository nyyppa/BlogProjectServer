(this.webpackJsonpblogclient=this.webpackJsonpblogclient||[]).push([[0],{188:function(e,t,a){e.exports=a(339)},193:function(e,t,a){},194:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(24),l=a(25),o=a(44),r=a(40),i=a(45),c=a(0),u=a.n(c),s=a(7),m=a.n(s),h=(a(193),a(49)),d=a(171),f=(a(194),function(){function e(t,a,l,o){Object(n.a)(this,e),this.ID=t,this.AUTHOR=a,this.TEXT=l,this.TAGS=o,this.TIME="null"}return Object(l.a)(e,[{key:"getID",value:function(){return this.ID}},{key:"getAuthor",value:function(){return this.AUTHOR}},{key:"getText",value:function(){return this.TEXT}},{key:"setText",value:function(e){this.TEXT=e}},{key:"getTags",value:function(){return this.TAGS}},{key:"setTags",value:function(e){this.TAGS=e}},{key:"setTIME",value:function(e){var t=new Date(parseInt(e));this.TIME=t.toUTCString(),console.log("time: "+this.TIME)}},{key:"getTIME",value:function(){return this.TIME}}]),e}()),g=a(371),E=a(376),v=a(386),p=a(377),b=a(80),y=a(385),T=a(118),w=a.n(T),O=a(165),C=a.n(O),j=a(378),x=function(){function e(){Object(n.a)(this,e)}return Object(l.a)(e,[{key:"removePost",value:function(e){console.log("remove id:"+e),fetch("http://localhost:8080/delete/"+e,{method:"DELETE"})}},{key:"addPostWithTags",value:function(e,t,a,n){if(n.length>=2){for(var l=[],o=0;o<n.length;o++)l.push({tagId:n[o]});var r={blogId:e,author:t,text:a,tags:l};console.log("data: "+JSON.stringify(r)),fetch("http://localhost:8080/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){console.log("data send")}))}else alert("add least 2 tags. (separate tags with ,)")}},{key:"addNewPost",value:function(e,t,a){if(a.length>=2){for(var n=[],l=0;l<a.length;l++)n.push({tagId:a[l]});var o={author:e,text:t,tags:n};console.log("data: "+JSON.stringify(o)),fetch("http://localhost:8080/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){console.log("data send")}))}else alert("add least 2 tags. (separate tags with ,)")}},{key:"addComment",value:function(e,t){var a={author:e.getAuthor(),text:e.getText()};fetch("http://localhost:8080/comment/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}},{key:"changeComment",value:function(e,t){var a=e.getAuthor(),n=e.getText(),l={commentId:e.getID(),author:a,text:n};console.log("data= "+JSON.stringify(l)),fetch("http://localhost:8080/comment/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})}}]),e}(),k=a(384),S=a(78),I=a.n(S),A=a(166),D=a.n(A),N=a(119),J=a.n(N),M=a(162),W=a(172),P=a(373),R=a(375),U=Object(g.a)((function(e){return{root:{width:"100%",height:"85vh",backgroundColor:e.palette.background.paper}}}));var X,B=function(e){var t=U(),a=e.lista;return u.a.createElement("div",{className:t.root},u.a.createElement(M.a,null,(function(e){var t=e.height,n=e.width;return u.a.createElement(W.a,{height:t,width:n,itemSize:500,itemCount:a.length},(function(e){for(var t=e.index,n=(e.style,a[t].getText()),l="",o=0;o<10;o++)l+=n.charAt(o);l+="...";var r=a[t].getID();return u.a.createElement(P.a,{key:t,onClick:function(){return e=r,void window.location.assign("../show/"+e);var e},style:{cursor:"pointer"}},u.a.createElement(y.a,{width:1},u.a.createElement(R.a,{primary:l})))}))})))},H=a(163),G=a.n(H),V=a(164),z=a.n(V),L=[];var q,Y,$=function(){var e=u.a.useReducer((function(e){return e+1}),0),t=Object(h.a)(e,2)[1];return u.a.createElement(z.a,null,u.a.createElement("div",null,u.a.createElement(G.a,{onChange:function(e){X=e,console.log("searchWord: "+X)},onRequestSearch:function(){fetch("http://localhost:8080/search/"+X).then((function(e){return e.json()})).then((function(e){L=[];var t=!0,a=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value;L.push(new f(r.blogId,r.author,r.text,r.tags))}}catch(i){a=!0,n=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}})).then((function(e){return t()}))},style:{margin:"0 auto",maxWidth:800}}),u.a.createElement("br",null),u.a.createElement(B,{lista:L})))},F=[],K=!0,Q=[];function Z(e){var t=e.children,a=e.value,n=e.index,l=Object(d.a)(e,["children","value","index"]);return u.a.createElement(b.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},l),a===n&&u.a.createElement(y.a,{p:3},t))}function _(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}function ee(e,t){e?fetch("http://localhost:8080/blogs/").then((function(e){return e.json()})).then((function(e){console.log("json: "+JSON.stringify(e));var t=!0,a=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value;F.push(new f(r.blogId,r.author,r.text,r.tags))}}catch(i){a=!0,n=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}K=!1})).then((function(e){console.log(F.length),t()})):fetch("http://localhost:8080/blogs/").then((function(e){return e.json()})).then((function(e){console.log("json: "+JSON.stringify(e)),F=[];var t=!0,a=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value;F.push(new f(r.blogId,r.author,r.text,r.tags))}}catch(i){a=!0,n=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}})).then((function(e){console.log(F.length),t()}))}var te=Object(g.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));var ae=function(){var e=te(),t=u.a.useState(0),a=Object(h.a)(t,2),n=a[0],l=a[1],o=u.a.useReducer((function(e){return e+1}),0),r=Object(h.a)(o,2)[1],i=window.sessionStorage.getItem("in");Object(c.useEffect)((function(){K&&ee(!0,r)}));var s=function(e,t){l(t)};return"admin"==i?u.a.createElement("div",{className:e.root},u.a.createElement(E.a,{position:"static",color:"default"},u.a.createElement(v.a,{value:n,onChange:s,variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example"},u.a.createElement(p.a,Object.assign({label:"Show posts",icon:u.a.createElement(w.a,null)},_(0))),u.a.createElement(p.a,Object.assign({label:"Add new post",icon:u.a.createElement(C.a,null)},_(1))),u.a.createElement(p.a,Object.assign({label:"Search",icon:u.a.createElement(J.a,null)},_(2))))),u.a.createElement(Z,{value:n,index:0},u.a.createElement(B,{lista:F})),u.a.createElement(Z,{value:n,index:1},u.a.createElement(I.a,null,u.a.createElement("form",{noValidate:!0,autoComplete:"off"},u.a.createElement(k.a,{id:"outlinedBasic",label:"Author",variant:"outlined",onChange:function(e){Y=e.target.value}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(k.a,{id:"outlinedMultiline",label:"Text",multiline:!0,rows:"4",variant:"outlined",onChange:function(e){q=e.target.value}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(k.a,{id:"tags",label:"Tags",variant:"outlined",onChange:function(e){var t=e.target.value;Q=t.split(",")}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(j.a,{variant:"contained",color:"primary",size:"large",startIcon:u.a.createElement(D.a,null),onClick:function(){x.prototype.addNewPost(Y,q,Q),setTimeout((function(){ee(!1,r)}),500)}},"Save")))),u.a.createElement(Z,{value:n,index:2},u.a.createElement($,null))):u.a.createElement("div",{className:e.root},u.a.createElement(E.a,{position:"static",color:"default"},u.a.createElement(v.a,{value:n,onChange:s,variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example"},u.a.createElement(p.a,Object.assign({label:"Show posts",icon:u.a.createElement(w.a,null)},_(0))),u.a.createElement(p.a,Object.assign({label:"Search",icon:u.a.createElement(J.a,null)},_(2))))),u.a.createElement(Z,{value:n,index:0},u.a.createElement(B,{lista:F})),u.a.createElement(Z,{value:n,index:2},u.a.createElement($,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne,le,oe,re=a(168),ie=a(50),ce=a(383),ue=a(167),se=a.n(ue),me=a(379),he=a(93),de=a.n(he),fe=a(388),ge=a(380),Ee=a(381),ve=a(382),pe=a(389),be=a(341),ye=function(){function e(t,a){Object(n.a)(this,e),this.AUTHOR=t,this.TEXT=a,this.ID=0}return Object(l.a)(e,[{key:"getAuthor",value:function(){return this.AUTHOR}},{key:"getText",value:function(){return this.TEXT}},{key:"setAuthor",value:function(e){this.AUTHOR=e}},{key:"setText",value:function(e){this.TEXT=e}},{key:"setID",value:function(e){this.ID=e}},{key:"getID",value:function(){return this.ID}}]),e}(),Te=Object(g.a)((function(e){return{root:{width:"100%",height:"40vh",backgroundColor:e.palette.background.paper,overflowY:"scroll"},listaus:{listStyleType:"none"}}}));var we,Oe,Ce,je,xe,ke=function(e){for(var t=Te(),a=e.lista,n=e.id,l=u.a.useState(!1),o=Object(h.a)(l,2),r=o[0],i=o[1],c=u.a.useReducer((function(e){return e+1}),0),s=Object(h.a)(c,2)[1],m=function(){var e=new ye(oe,ne);e.setID(le),x.prototype.changeComment(e,n),setTimeout((function(){i(!1),s()}),700)},d=[],f=function(e){d.push(u.a.createElement("li",null,u.a.createElement("h5",null,"Author: ",a[e].getAuthor(),u.a.createElement(me.a,{color:"primary","aria-label":"modify",onClick:function(){var t;le=a[t=e].getID(),ne=a[t].getText(),oe=a[t].getAuthor(),i(!0)}},u.a.createElement(de.a,null))),u.a.createElement("p",null,a[e].getText())))},g=0;g<a.length;g++)f(g);return u.a.createElement("div",null,u.a.createElement("div",{className:t.root},u.a.createElement("h2",null,"Comments:"),u.a.createElement("ul",{className:t.listaus},d)),u.a.createElement(fe.a,{open:r,onClose:m,"aria-labelledby":"form-dialog-title"},u.a.createElement(ge.a,{id:"form-dialog-title"},"Modify this blog post"),u.a.createElement(Ee.a,null,u.a.createElement("h4",null,oe),u.a.createElement(k.a,{margin:"dense",multiline:!0,id:"modifyText",label:"Text",defaultValue:ne,onChange:function(e){ne=e.target.value},fullWidth:!0})),u.a.createElement(ve.a,null,u.a.createElement(j.a,{onClick:function(){i(!1)},color:"primary"},"Cancel"),u.a.createElement(j.a,{onClick:m,color:"primary"},"Save"))))},Se=!1,Ie=!1,Ae=[],De=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={id:0},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.blog;console.log("ShowOne data: "+e),Se=!0,this.setState({id:e,open:!1,comment:!1,allcomments:[]})}},{key:"render",value:function(){var e=this,t=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},root2:{width:"100%",height:"85vh",backgroundColor:e.palette.background.paper}}})),a=window.sessionStorage.getItem("in"),n=function(){x.prototype.addPostWithTags(we.getID(),Ce,Oe,Ae),setTimeout((function(){Se=!0,Ie=!1,e.setState({open:!1})}),700)},l=function(){var t=new ye(je,xe);x.prototype.addComment(t,e.state.id),setTimeout((function(){window.location.reload()}),750)};if(Se){var o=this.state.id,r=[];fetch("http://localhost:8080/blogs/"+o).then((function(e){return e.json()})).then((function(e){console.log("json in showdata: "+JSON.stringify(e)),(we=new f(e.blogId,e.author,e.text,e.tags)).setTIME(e.creationTime)})).then((function(t){Se=!1,Ie=!0,fetch("http://localhost:8080/comment/"+o).then((function(e){return e.json()})).then((function(e){var t=!0,a=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var i=l.value,c=new ye(i.author,i.text);c.setID(i.commentId),r.push(c)}}catch(u){a=!0,n=u}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}})).then((function(t){e.setState({id:o,allcomments:r})}))}))}if(Ie){var i=we.getTags(),c=this.state.allcomments;return"admin"==a?u.a.createElement("div",null,u.a.createElement(ce.a,{container:!0,spacing:3},u.a.createElement(ce.a,{item:!0,xs:8},we.getText()),u.a.createElement(ce.a,{item:!0,xs:4},u.a.createElement("h2",null,"Author: ",we.getAuthor()),u.a.createElement("br",null),u.a.createElement("h3",null,"Create time: ",we.getTIME()),u.a.createElement("br",null),u.a.createElement(me.a,{color:"primary","aria-label":"modify",onClick:function(){Ce=we.getAuthor(),Oe=we.getText(),Ae=we.getTags(),e.setState({open:!0})}},u.a.createElement(de.a,null)),u.a.createElement("br",null),u.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(){x.prototype.removePost(we.getID()),setTimeout((function(){window.location.assign("../deletion")}),1e3)},startIcon:u.a.createElement(se.a,null)},"Delete"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h3",null,"Tags:"),u.a.createElement("br",null),u.a.createElement(be.a,{className:t.root},i.map((function(e){return u.a.createElement(pe.a,{label:e.tagId,onClick:function(){window.location.assign("../showtag/"+e.tagId)}})}))))),u.a.createElement(ce.a,{item:!0,spacing:3,xs:12},u.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){e.setState({comment:!0})}},"Add new comment"),u.a.createElement(ke,{lista:c,id:this.state.id})),u.a.createElement(fe.a,{open:this.state.open,onClose:n,"aria-labelledby":"form-dialog-title"},u.a.createElement(ge.a,{id:"form-dialog-title"},"Modify this blog post"),u.a.createElement(Ee.a,null,u.a.createElement(k.a,{margin:"dense",id:"modifyAuthor",label:"Author",defaultValue:Ce,onChange:function(e){Ce=e.target.value},fullWidth:!0}),u.a.createElement(k.a,{margin:"dense",multiline:!0,id:"modifyText",label:"Text",defaultValue:Oe,onChange:function(e){Oe=e.target.value},fullWidth:!0}),u.a.createElement(k.a,{margin:"dense",id:"modifyTags",label:"Tags",onChange:function(e){var t=e.target.value;Ae=t.split(",")},fullWidth:!0})),u.a.createElement(ve.a,null,u.a.createElement(j.a,{onClick:function(){e.setState({open:!1})},color:"primary"},"Cancel"),u.a.createElement(j.a,{onClick:n,color:"primary"},"Save"))),u.a.createElement(fe.a,{open:this.state.comment,onClose:l,"aria-labelledby":"form-dialog-title"},u.a.createElement(ge.a,{id:"form-dialog-title"},"Add new comment"),u.a.createElement(Ee.a,null,u.a.createElement(k.a,{margin:"dense",id:"authorcomment",label:"Author",onChange:function(e){var t=e.target.value;je=t},fullWidth:!0}),u.a.createElement(k.a,{margin:"dense",id:"textcomment",label:"Text",onChange:function(e){var t=e.target.value;xe=t},fullWidth:!0})),u.a.createElement(ve.a,null,u.a.createElement(j.a,{onClick:function(){e.setState({comment:!1})},color:"primary"},"Cancel"),u.a.createElement(j.a,{onClick:l,color:"primary"},"Save")))):u.a.createElement("div",null,u.a.createElement(ce.a,{container:!0,spacing:3},u.a.createElement(ce.a,{item:!0,xs:8},we.getText()),u.a.createElement(ce.a,{item:!0,xs:4},u.a.createElement("h2",null,"Author: ",we.getAuthor()),u.a.createElement("br",null),u.a.createElement("h3",null,"Create time: ",we.getTIME()),u.a.createElement("br",null),u.a.createElement("h3",null,"Tags:"),u.a.createElement("br",null),u.a.createElement(be.a,{className:t.root},i.map((function(e){return u.a.createElement(pe.a,{label:e.tagId,onClick:function(){window.location.assign("../showtag/"+e.tagId)}})}))))),u.a.createElement(ce.a,{item:!0,spacing:3,xs:12},u.a.createElement(ke,{lista:c,id:this.state.id})))}return u.a.createElement("div",null,u.a.createElement("h1",null,"Downloading..."))}}]),t}(u.a.Component),Ne=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));return u.a.createElement(I.a,null,u.a.createElement("div",null,u.a.createElement("h1",{style:{color:"green"}},"Delete done"),u.a.createElement("br",null),u.a.createElement(I.a,{className:e.root},u.a.createElement(j.a,{variant:"contained",onClick:function(){window.location.assign("../")},color:"primary"},"Ok"))))}}]),t}(u.a.Component),Je=!1,Me=!1,We=[],Pe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={id:0},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.tag;Je=!0,this.setState({id:e})}},{key:"render",value:function(){var e=this;if(Je){var t={tagId:this.state.id};fetch("http://localhost:8080/blogsWithTag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("json: "+JSON.stringify(e));var t=!0,a=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value;We.push(new f(r.blogId,r.author,r.text,r.tags))}}catch(i){a=!0,n=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}})).then((function(t){Je=!1,Me=!0,e.setState({id:e.state.id})}))}return Me?u.a.createElement("div",null,u.a.createElement("h1",null,"List of posts with: ",this.state.id),u.a.createElement(B,{lista:We})):u.a.createElement("h1",null,"Downloading...")}}]),t}(u.a.Component),Re=function(){return u.a.createElement(ae,null)},Ue=function(e){return u.a.createElement(De,e)},Xe=function(){return u.a.createElement(Ne,null)},Be=function(e){return u.a.createElement(Pe,e)},He=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(re.a,null,u.a.createElement(ie.a,{exact:!0,path:"/",component:Re}),u.a.createElement(ie.a,{path:"/show/:blog",component:Ue}),u.a.createElement(ie.a,{path:"/deletion",component:Xe}),u.a.createElement(ie.a,{path:"/showtag/:tag",component:Be}))}}]),t}(u.a.Component);m.a.render(u.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.0573235b.chunk.js.map