(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(14),o=t.n(a),u=(t(19),t(3)),i=t(0),l=function(e){var n=e.addContact,t=e.handleNameChange,c=e.handleNumChange,r=e.newName,a=e.newNumber;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("label",{children:["name: ",Object(i.jsx)("input",{value:r,onChange:t})]}),Object(i.jsxs)("label",{children:["number: ",Object(i.jsx)("input",{value:a,onChange:c})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.person,t=e.handleDelete;return Object(i.jsxs)("p",{children:[n.name," ",n.number," ",Object(i.jsx)("button",{onClick:function(){return t(n.id)},children:"Delete"})]})},s=function(e){var n=e.message;return n?Object(i.jsx)("div",{className:"notification",style:n.includes("error")?{border:".2rem solid red"}:{border:".2rem solid green"},children:n}):null},h=function(e){var n=e.filterInput,t=e.handleFilterChange;return Object(i.jsxs)("label",{children:["filter shown with"," ",Object(i.jsx)("input",{value:n,onChange:t})]})},b=t(4),f=t.n(b),j="/api/persons",m={getAll:function(){return f.a.get(j).then((function(e){return e.data}))},create:function(e){return f.a.post(j,e).then((function(e){return e.data}))},update:function(e,n){return f.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},deleteContact:function(e){return f.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))}},O=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),b=o[0],f=o[1],j=Object(c.useState)(""),O=Object(u.a)(j,2),v=O[0],p=O[1],g=Object(c.useState)(""),x=Object(u.a)(g,2),w=x[0],C=x[1],N=Object(c.useState)(""),y=Object(u.a)(N,2),k=y[0],A=y[1],S=function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name))&&m.deleteContact(e).then((function(n){r(t.filter((function(n){return n.id!==e})))})).catch((function(e){A("An error has occured, the contact details of ".concat(n.name," have already been removed from the server")),setTimeout((function(){return A(null)}),5e3)})),console.log("clicking",e)},T=t.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return Object(c.useEffect)((function(){m.getAll().then((function(e){return r(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(s,{message:k}),Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(h,{value:w,handleFilterChange:function(e){C(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new contact"}),Object(i.jsx)(l,{newName:b,newNumber:v,handleNameChange:function(e){f(e.target.value)},handleNumChange:function(e){p(e.target.value)},addContact:function(e){e.preventDefault();var n={name:b,number:v};if(t.some((function(e){return e.name===n.name}))){alert("".concat(n.name," is already added to phonebook, replace the old number with the new one?"));var c=t.find((function(e){return e.name===n.name}));return m.update(c.id,n).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),A("".concat(n.name,"'s number was change to ").concat(n.number,".")),setTimeout((function(){return A(null)}),5e3)})).catch((function(e){A("An error has occured, the contact details of ".concat(n.name," have already been removed from the server")),setTimeout((function(){return A(null)}),5e3)})),f(""),void p("")}m.create(n).then((function(e){r(t.concat(e)),A("".concat(n.name," was added to the contacts list.")),setTimeout((function(){return A(null)}),5e3),f(""),p("")})).catch((function(e){A("An error has occured, the contact details of ".concat(n.name," have already been removed from the server")),setTimeout((function(){return A(null)}),5e3)}))}}),Object(i.jsx)("h2",{children:"Numbers"}),T.map((function(e){return Object(i.jsx)(d,{person:e,handleDelete:S},e.id)}))]})};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.bd552ae3.chunk.js.map