(this["webpackJsonpcook-book"]=this["webpackJsonpcook-book"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(28),s=c.n(a),r=(c(72),c(16)),i=c(108),j=c(63),o=c(22),l=c(109),b=c(62),d=c(67),h=c(2);var O=function(){return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(b.a,{children:Object(h.jsx)(o.IndexLinkContainer,{to:"/cook-book",children:Object(h.jsx)(d.a,{children:"Home"})})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(o.LinkContainer,{to:"/recipes",children:Object(h.jsx)(d.a,{children:"Recipes"})})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(o.LinkContainer,{to:"/addRecipe",children:Object(h.jsx)(d.a,{children:"Add Recipe"})})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(o.LinkContainer,{to:"/about",children:Object(h.jsx)(d.a,{children:"About"})})})]})};var x=function(){return Object(h.jsx)("header",{children:Object(h.jsx)(i.a,{variant:"light",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(o.LinkContainer,{to:"/",children:Object(h.jsx)(j.a,{href:"#",children:"Logo"})}),Object(h.jsx)(O,{})]})})})},u=c(7),m=c(106),p=c(48),f=c(30),g=c(23),v=c.n(g),N=function(){return Object(h.jsxs)(m.a,{className:"d-flex flex-column justify-content-center bd-highlight",fluid:!0,children:[Object(h.jsx)(p.a,{className:"ms-5 mb-4",children:Object(h.jsxs)(v.a,{left:!0,children:[Object(h.jsx)("h1",{children:"Cook - Eat - Repeat!"}),Object(h.jsx)("p",{children:"Thinking about what to cook today? You're at the right place."})]})}),Object(h.jsx)(p.a,{className:"ms-5",children:Object(h.jsx)(v.a,{bottom:!0,children:Object(h.jsxs)("p",{children:[Object(h.jsx)(r.Link,{to:"/recipes",children:Object(h.jsx)(f.a,{className:"me-5",variant:"outline-warning",children:"Search recipe"})}),Object(h.jsx)(r.Link,{to:"/about",children:Object(h.jsx)(f.a,{className:"ms-5",variant:"outline-warning",children:"Learn more"})})]})})})]})},k=c(66),y=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsx)(v.a,{bottom:!0,children:Object(h.jsx)("h1",{className:"responsive-headline",children:"Anh To"})}),Object(h.jsx)(v.a,{bottom:!0,duration:1200,children:Object(h.jsx)("p",{children:"Hey! Glad to see you here. I am a web development in progress and I use ReactJS and PHP mainly as my programming languages. This project is meant to be a simple cook book that can be used as a recipes browser for everyone in everyday. You're cooking something today?"})}),Object(h.jsx)("hr",{}),Object(h.jsx)(v.a,{bottom:!0,duration:2e3,children:Object(h.jsxs)("ul",{className:"social",children:[Object(h.jsxs)("a",{href:"https://github.com/tna007/cook-book",target:"_blank",rel:"norefferer",className:"button btn project-btn",children:[Object(h.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(h.jsxs)("a",{href:"https://github.com/tna007",target:"_blank",rel:"noreferrer",className:"button btn github-btn",children:[Object(h.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(h.jsx)(k.a,{type:"cobweb"})]})},C=c(29),w=c.n(C),L=c(36),S=c(17),I=c(27),R=c.n(I),A=c(18),T=c(10),B=function(e){var t=e.search;return Object(h.jsx)("section",{className:"search",children:Object(h.jsxs)(A.a,{className:"mb-5 mx-auto",xs:5,md:7,children:[Object(h.jsx)(T.a.Label,{htmlFor:"searchBar",srOnly:!0}),Object(h.jsx)(T.a.Control,{type:"text",placeholder:"Search recipes",name:"searchBar",className:"mb-3",onChange:t})]})})},D=c(110);var G=function(e){var t=e.name,c=e.image,n=e.difficulty,a=e.ingredients,s=e.directions,i=e.id,j=Object(u.n)().url;return Object(h.jsxs)(D.a,{style:{width:"18rem"},text:"dark",className:"recipe",children:[Object(h.jsx)(D.a.Img,{variant:"top",src:c,alt:t}),Object(h.jsxs)(D.a.Body,{children:[Object(h.jsx)(D.a.Title,{children:t}),Object(h.jsxs)(D.a.Text,{children:["Difficulty: ",Object(h.jsx)("em",{children:n})]}),Object(h.jsx)(D.a.Text,{children:Object(h.jsx)("em",{children:a})}),Object(h.jsx)(D.a.Text,{children:s}),Object(h.jsx)(r.Link,{to:"".concat(j,"/").concat(i),children:"More"})]})]})};var E=function(e){var t=e.recipes;return Object(h.jsx)("div",{className:"recipesList",children:t.map((function(e){return t?Object(h.jsx)(G,{name:e.name,image:e.image,alt:e.name,difficulty:e.difficulty,id:e.id},e.id):null}))})},J=c(107),q=c(49);var F=function(){var e,t=Object(n.useState)([]),c=Object(S.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)([]),i=Object(S.a)(r,2),j=i[0],o=i[1],l=Object(n.useState)([]),b=Object(S.a)(l,2),d=b[0],O=b[1],x=Object(u.m)().id,m=Object(u.k)();if(Object(n.useEffect)((function(){(function(){var e=Object(L.a)(w.a.mark((function e(){var t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("http://just-cook.herokuapp.com/recipes/"+x);case 2:t=e.sent,c=t.data,console.log("this is spa ",c),s(c),o(c.direction),O(c.ingredients);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x],[a]),console.log("this is direction ",a),a){var g=j.map((function(e,t){return""!==e.text&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("em",{children:["Step ",t+1]}),Object(h.jsx)("p",{children:e.text})]},e.step)})),v=d.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[e.amount," ",e.ingredientName]})},e.ingredientName)}));e=Object(h.jsxs)(J.a,{children:[Object(h.jsx)(p.a,{className:"mb-3",children:Object(h.jsx)("h2",{children:a.name})}),Object(h.jsxs)(p.a,{className:"mt-1 mb-3",children:[Object(h.jsx)(A.a,{children:Object(h.jsx)(q.a,{src:a.image,alt:a.name,className:"mb-1",thumbnail:!0})}),Object(h.jsxs)(A.a,{className:"ms-3",children:[Object(h.jsxs)(p.a,{children:[Object(h.jsx)("strong",{className:"mb-2",children:Object(h.jsx)("u",{className:"lead",children:"Ingredients"})}),Object(h.jsx)("p",{className:"mb-2",children:v})]}),Object(h.jsx)(p.a,{children:Object(h.jsxs)("em",{children:["Difficulty: ",a.difficulty]})})]})]}),Object(h.jsx)(p.a,{children:Object(h.jsxs)(A.a,{children:[Object(h.jsx)("strong",{children:Object(h.jsx)("u",{className:"lead",children:"Directions"})}),Object(h.jsx)("p",{className:"mt-4 mb-5",children:g})]})}),Object(h.jsx)(f.a,{onClick:function(){return m.goBack()},children:"Back"})]})}else e=Object(h.jsx)("p",{children:"Loading.."});return Object(h.jsx)("div",{children:e})},H=c(111),P=c(38),Y=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(S.a)(s,2),i=r[0],j=r[1];Object(n.useEffect)((function(){(function(){var e=Object(L.a)(w.a.mark((function e(){var t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("http://just-cook.herokuapp.com/recipes/");case 2:t=e.sent,c=t.data,a(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var o=c.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})),l=Object(u.n)().url;return Object(h.jsx)("div",{children:Object(h.jsxs)(u.g,{children:[Object(h.jsxs)(u.d,{path:l,exact:!0,children:[Object(h.jsx)(J.a,{fluid:!0,className:"text-center mx-auto",children:Object(h.jsxs)(H.a,{children:[Object(h.jsx)("blockquote",{className:"blockquote",children:Object(h.jsx)("p",{children:"In cooking, you\u2019ve got to have a what-the-hell attitude."})}),Object(h.jsx)(P.a,{className:"blockquote-footer",children:Object(h.jsx)("cite",{title:"source",children:"Julia Child"})})]})}),Object(h.jsx)(B,{search:function(e){j(e.target.value)}}),Object(h.jsx)("section",{className:"recipes",children:Object(h.jsx)(E,{recipes:o})})]}),Object(h.jsx)(u.d,{path:"".concat(l,"/:id"),children:Object(h.jsx)(F,{})})]})})},M=c(25),_=c(39),U=c(24);var z=function(){var e=Object(n.useState)({name:"",difficulty:"Easy",image:"",ingredients:[],direction:[]}),t=Object(S.a)(e,2),c=t[0],a=t[1],s=function(e){a(Object(U.a)(Object(U.a)({},c),{},Object(_.a)({},e.target.name,e.target.value)))},r=Object(n.useState)([{name:"test",amount:"test"}]),i=Object(S.a)(r,2),j=i[0],o=i[1],l=Object(n.useState)([{step:1,text:"ab"}]),b=Object(S.a)(l,2),d=b[0],O=b[1],x=function(e,t){var n=e.target,s=n.name,r=n.value;if("text"===s){var i=Object(M.a)(d);i[t][s]=r,O(i),a(Object(U.a)(Object(U.a)({},c),{},{direction:d}))}else{var l=Object(M.a)(j);l[t][s]=r,o(l),a(Object(U.a)(Object(U.a)({},c),{},{ingredients:j}))}},u=function(){o([].concat(Object(M.a)(j),[{name:"",amount:""}]))},m=function(){O([].concat(Object(M.a)(d),[{step:d.length+1,text:""}]))};return Object(h.jsx)("div",{className:"newRecipe",children:Object(h.jsxs)(T.a,{onSubmit:function(e){e.preventDefault(),R.a.post("http://just-cook.herokuapp.com/add",c)},children:[Object(h.jsx)("h2",{className:"mt-5 mb-3",children:"Add New Recipe"}),Object(h.jsxs)(T.a.Group,{controlId:"name",className:"mb-3",children:[Object(h.jsx)(T.a.Label,{children:"Name"}),Object(h.jsx)(T.a.Control,{type:"text",name:"name",className:"mb-2",onChange:s})]}),Object(h.jsxs)(T.a.Group,{controlId:"difficulty",className:"mb-3",children:[Object(h.jsx)(T.a.Label,{children:"Choose difficulty"}),Object(h.jsxs)(T.a.Control,{as:"select",name:"difficulty",className:"mb-2",onChange:s,children:[Object(h.jsx)("option",{children:"Easy"}),Object(h.jsx)("option",{children:"Medium"}),Object(h.jsx)("option",{children:"Difficult"})]})]}),Object(h.jsxs)(T.a.Group,{controlId:"image",className:"mb-3",children:[Object(h.jsx)(T.a.Label,{children:"Image(URL)"}),Object(h.jsx)(T.a.Control,{type:"text",name:"image",className:"mb-2",onChange:s})]}),j.map((function(e,t){return Object(h.jsx)(T.a.Group,{controlId:"ingredient",className:"mb-3",children:Object(h.jsxs)(p.a,{className:"align-items-end",children:[Object(h.jsxs)(A.a,{xs:"auto",children:[Object(h.jsx)(T.a.Label,{children:"Amount"}),Object(h.jsx)(T.a.Control,{type:"text",name:"amount",className:"mb-2",onChange:function(e){return x(e,t)}})]}),Object(h.jsxs)(A.a,{xs:"auto",children:[Object(h.jsx)(T.a.Label,{children:"Ingredient"}),Object(h.jsx)(T.a.Control,{type:"text",name:"name",className:"mb-2",onChange:function(e){return x(e,t)}})]}),Object(h.jsx)(A.a,{className:"mb-2",children:1!==j.length&&Object(h.jsx)(f.a,{variant:"outline-danger",onClick:function(){return function(e){var t=Object(M.a)(j);t.splice(e,1),o(t)}(t)},children:"Remove"})}),Object(h.jsx)(A.a,{className:"mb-2",children:j.length-1===t&&Object(h.jsx)(f.a,{variant:"outline-success",onClick:u,children:"Add"})})]})},t)})),Object(h.jsx)("h3",{children:"Directions"}),d.map((function(e,t){return Object(h.jsxs)(T.a.Group,{children:[Object(h.jsxs)(T.a.Label,{children:["Step ",t+1]}),Object(h.jsx)(T.a.Control,{as:"textarea",rows:3,name:"text",className:"mb-2",onChange:function(e){return x(e,t)}}),Object(h.jsxs)(p.a,{children:[Object(h.jsx)(A.a,{xs:"auto",className:"mb-3",children:d.length-1===t&&Object(h.jsx)(f.a,{variant:"outline-success",onClick:m,children:"Add"})}),Object(h.jsx)(A.a,{xs:"auto",className:"mb-3",children:1!==d.length&&Object(h.jsx)(f.a,{variant:"outline-danger",onClick:function(){return function(e){var t=Object(M.a)(d);t.splice(e,1),O(t)}(t)},children:"Remove"})})]})]},t)})),Object(h.jsx)(A.a,{align:"center",children:Object(h.jsx)(f.a,{className:"mb-2",variant:"success",type:"submit",children:"Submit"})})]})})};var K=function(){return Object(h.jsx)("main",{children:Object(h.jsxs)(u.g,{children:[Object(h.jsx)(u.d,{path:"/cook-book",exact:!0,component:N}),Object(h.jsx)(u.d,{path:"/recipes",component:Y}),Object(h.jsx)(u.d,{path:"/addRecipe",component:z}),Object(h.jsx)(u.d,{path:"/about",component:y})]})})},Q=function(){return Object(h.jsx)("footer",{children:Object(h.jsxs)("p",{children:["Copyrights \xa9 ",Object(h.jsx)("a",{href:"https://github.com/tna007",children:"Anh To"})," ",(new Date).getFullYear()]})})};c(102),c(103);var V=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(r.BrowserRouter,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(K,{}),Object(h.jsx)(Q,{})]})})};s.a.render(Object(h.jsx)(V,{}),document.getElementById("root"))},72:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.20e54c8e.chunk.js.map