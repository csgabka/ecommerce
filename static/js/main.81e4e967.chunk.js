(this["webpackJsonpclothing-ecommerce"]=this["webpackJsonpclothing-ecommerce"]||[]).push([[0],{43:function(e,t,a){e.exports=a(82)},52:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),l=a(11),s=a(4),o=a(38),m=(a(52),a(9)),u=a.n(m),p=a(3),d=a(13),b=a(18),h=a(19),g=a(21),f=a(20),E=a(5),v=a(2),y=(a(54),a(22)),O=a.n(y),k=(a(55),a(59),{apiKey:"".concat("AIzaSyCQh8YXBAWVi4jApVUea_Mr6JMmInvHiQg"),authDomain:"ecommerce-1bb9a.firebaseapp.com",databaseURL:"https://ecommerce-1bb9a.firebaseio.com",projectId:"ecommerce-1bb9a",storageBucket:"ecommerce-1bb9a.appspot.com",messagingSenderId:"1071503497540",appId:"1:1071503497540:web:eba1382e6d54ee091c9f11",measurementId:"G-2ZNYDXR3HH"}),j=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=w.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(p.a)({displayName:r,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}();O.a.initializeApp(k);var N=O.a.auth(),w=O.a.firestore(),C=new O.a.auth.GoogleAuthProvider;C.setCustomParameters({prompt:"select_account "});var U=function(){return N.signInWithPopup(C)},I=(O.a,{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"}),T=function(){return{type:I.TOGGLE_CART_HIDDEN}},x=function(e){return{type:I.ADD_ITEM,payload:e}},S=function(e){return e.cart},R=Object(v.a)([S],(function(e){return e.cartItems})),A=Object(v.a)([S],(function(e){return e.hidden})),M=Object(v.a)([R],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),B=Object(v.a)([R],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var D=r.a.createElement("g",null),G=r.a.createElement("g",null),H=r.a.createElement("g",null),V=r.a.createElement("g",null),W=r.a.createElement("g",null),q=r.a.createElement("g",null),J=r.a.createElement("g",null),L=r.a.createElement("g",null),z=r.a.createElement("g",null),F=r.a.createElement("g",null),Q=r.a.createElement("g",null),K=r.a.createElement("g",null),Y=r.a.createElement("g",null),X=r.a.createElement("g",null),Z=r.a.createElement("g",null),$=function(e){var t=e.svgRef,a=e.title,n=_(e,["svgRef","title"]);return r.a.createElement("svg",P({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),D,G,H,V,W,q,J,L,z,F,Q,K,Y,X,Z)},ee=r.a.forwardRef((function(e,t){return r.a.createElement($,P({svgRef:t},e))})),te=(a.p,a(61),Object(v.b)({itemCount:M})),ae=Object(s.b)(te,(function(e){return{toggleCartHidden:function(){return e(T())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(ee,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),ne=a(14),re=(a(62),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(ne.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:" ".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),ce=(a(63),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x \xa3",n)))}),ie=(a(64),Object(v.b)({cartItems:R})),le=Object(E.g)(Object(s.b)(ie)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(ce,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(re,{onClick:function(){a.push("/checkout"),n(T())}},"GO TO CHECKOUT"))}))),se=Object(v.a)([function(e){return e.user}],(function(e){return e.currentUser}));function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ue=r.a.createElement("title",null,"Group"),pe=r.a.createElement("desc",null,"Created with Sketch."),de=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),be=function(e){var t=e.svgRef,a=e.title,n=me(e,["svgRef","title"]);return r.a.createElement("svg",oe({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?ue:a?r.a.createElement("title",null,a):null,pe,de)},he=r.a.forwardRef((function(e,t){return r.a.createElement(be,oe({svgRef:t},e))})),ge=(a.p,a(66),Object(v.b)({currentUser:se,hidden:A})),fe=Object(s.b)(ge)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(he,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return N.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(ae,null)),a?null:r.a.createElement(le,null))})),Ee=(a(67),Object(v.a)([function(e){return e.directory}],(function(e){return e.sections}))),ve=(a(68),Object(E.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),ye=(a(69),Object(v.b)({sections:Ee})),Oe=Object(s.b)(ye)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(ne.a)(e,["id"]);return r.a.createElement(ve,Object.assign({key:t},a))})))})),ke=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(Oe,null))},je=(a(70),Object(s.b)(null,(function(e){return{addItem:function(t){return e(x(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c)),r.a.createElement(re,{onClick:function(){return a(t)},inverted:!0},"Add to cart"))}))),Ne=Object(v.a)([function(e){return e.shop}],(function(e){return e.collections})),we=Object(v.a)([Ne],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),Ce=(a(71),Object(s.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(v.a)([Ne],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(je,{key:e.id,item:e})}))))}))),Ue=(a(72),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(je,{key:e.id,item:e})}))))}),Ie=(a(73),Object(v.b)({collections:we})),Te=Object(s.b)(Ie)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(ne.a)(e,["id"]);return r.a.createElement(Ue,Object.assign({key:t},a))})))})),xe=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(E.b,{exact:!0,path:"".concat(t.path),component:Te}),r.a.createElement(E.b,{path:"".concat(t.path,"/:collectionId"),component:Ce}))},Se=a(17),Re=(a(74),function(e){var t=e.handleChange,a=e.label,n=Object(ne.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),Ae=(a(75),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,N.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(Se.a)({},a,r))},n.state={email:"",password:""},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Re,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(Re,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(re,{type:"submit"},"Sign in"),r.a.createElement(re,{onClick:U,isGoogleSignIn:!0},"Sign in with Google"))))}}]),a}(n.Component)),Me=(a(76),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r,c,i,l,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){e.next=5;break}return alert("passwords don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,N.createUserWithEmailAndPassword(c,i);case 8:s=e.sent,o=s.user,j(o,{displayName:r}),n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(Se.a)({},a,r))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Re,{name:"displayName",type:"text",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(Re,{name:"email",type:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Re,{name:"password",type:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Re,{name:"confirmPassword",type:"password",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(re,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),Be=(a(77),function(){return r.a.createElement("div",{className:"sign-in-sign-up"},r.a.createElement(Ae,null),r.a.createElement(Me,null))}),Pe=(a(78),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:I.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(x(t))},removeItem:function(t){return e(function(e){return{type:I.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),_e=a(39),De=a.n(_e),Ge=function(e){var t=e.price,a=100*t;return r.a.createElement(De.a,{label:"Pay Now",name:"Clothing Ecommerce",billingAddress:!0,shippingAddress:!0,description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Sucessful")},currency:"GBP",stripeKey:"pk_test_51Hkrg8ENlWGZtGAD8sgyfGOu9ccyNxWitZKUnf20BBm5AUc3DUXdVQq4s8xQ019JRhd6OFhVudEwrZOgn1K2Pgxh007PxvpbBw"})},He=(a(79),Object(v.b)({cartItems:R,total:B})),Ve=Object(s.b)(He)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Pe,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",a)),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 12/21 - CVV: 123"),r.a.createElement(Ge,{price:a}))})),We="SET_CURRENT_USER",qe=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=N.onAuthStateChanged(function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,j(a);case 3:t.sent.onSnapshot((function(t){e({currentUser:Object(p.a)({id:t.id},t.data())})})),t.next=8;break;case 7:e(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this.props.currentUser;return r.a.createElement("div",null,r.a.createElement(fe,null),r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",component:ke}),r.a.createElement(E.b,{path:"/shop",component:xe}),r.a.createElement(E.b,{exact:!0,path:"/checkout",component:Ve}),r.a.createElement(E.b,{exact:!0,path:"/signin",render:function(){return e?r.a.createElement(E.a,{to:"/"}):r.a.createElement(Be,null)}})))}}]),a}(r.a.Component),Je=Object(v.b)({currentUser:se}),Le=Object(s.b)(Je,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:We,payload:e}}(t))}}}))(qe),ze=a(12),Fe=a(27),Qe=a(40),Ke=a.n(Qe),Ye=a(41),Xe=a.n(Ye),Ze={currentUser:null},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case We:return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload});default:return e}},et=a(42),tt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(et.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},at=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))},nt={hidden:!0,cartItems:[]},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.TOGGLE_CART_HIDDEN:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case I.ADD_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:tt(e.cartItems,t.payload)});case I.REMOVE_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:at(e.cartItems,t.payload)});case I.CLEAR_ITEM_FROM_CART:return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},ct={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;return t.type,e},lt={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ot={key:"root",storage:Xe.a,whitelist:["cart"]},mt=Object(ze.c)({user:$e,cart:rt,directory:it,shop:st}),ut=Object(Fe.a)(ot,mt),pt=[Ke.a],dt=Object(ze.d)(ut,ze.a.apply(void 0,pt)),bt=Object(Fe.b)(dt);i.a.render(r.a.createElement(s.a,{store:dt},r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:bt},r.a.createElement(Le,null))))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.81e4e967.chunk.js.map