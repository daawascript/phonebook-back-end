(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),c=t(14),o=t.n(c),u=(t(19),t(3)),i=t(0),s=function(e){var n=e.addContact,t=e.handleNameChange,r=e.handleNumChange,a=e.newName,c=e.newNumber;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("label",{children:["name: ",Object(i.jsx)("input",{value:a,onChange:t})]}),Object(i.jsxs)("label",{children:["number: ",Object(i.jsx)("input",{value:c,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.person,t=e.handleDelete;return Object(i.jsxs)("p",{children:[n.name," ",n.number," ",Object(i.jsx)("button",{onClick:function(){return t(n.id)},children:"Delete"})]})},d=function(e){var n=e.message;return n?Object(i.jsx)("div",{className:"notification",style:n.includes("fail")?{border:".2rem solid red"}:{border:".2rem solid green"},children:n}):null},h=function(e){var n=e.filterInput,t=e.handleFilterChange;return Object(i.jsxs)("label",{children:["filter shown with"," ",Object(i.jsx)("input",{value:n,onChange:t})]})},b=t(4),f=t.n(b),j="/api/persons",m={getAll:function(){return f.a.get(j).then((function(e){return e.data}))},create:function(e){return f.a.post(j,e).then((function(e){return e.data}))},update:function(e,n){return f.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},deleteContact:function(e){return f.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))}},O=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(u.a)(c,2),b=o[0],f=o[1],j=Object(r.useState)(""),O=Object(u.a)(j,2),p=O[0],g=O[1],x=Object(r.useState)(""),v=Object(u.a)(x,2),w=v[0],C=v[1],N=Object(r.useState)(""),k=Object(u.a)(N,2),S=k[0],y=k[1],T=function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name))&&m.deleteContact(e).then((function(n){a(t.filter((function(n){return n.id!==e})))})).catch((function(e){y(e.response.data.error),setTimeout((function(){return y(null)}),5e3)}))},A=t.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return Object(r.useEffect)((function(){m.getAll().then((function(e){return a(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{message:S}),Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(h,{value:w,handleFilterChange:function(e){C(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new contact"}),Object(i.jsx)(s,{newName:b,newNumber:p,handleNameChange:function(e){f(e.target.value)},handleNumChange:function(e){g(e.target.value)},addContact:function(e){e.preventDefault();var n={name:b,number:p};if(t.some((function(e){return e.name===n.name}))){alert("".concat(n.name," is already added to phonebook, replace the old number with the new one?"));var r=t.find((function(e){return e.name===n.name}));return m.update(r.id,n).then((function(e){a(t.map((function(n){return n.id!==r.id?n:e}))),y("".concat(n.name,"'s number was changed to ").concat(n.number,".")),setTimeout((function(){return y(null)}),5e3)})).catch((function(e){console.log(e.response.data),y(e.response.data.error),setTimeout((function(){return y(null)}),5e3)})),f(""),void g("")}m.create(n).then((function(e){a(t.concat(e)),y("".concat(n.name," was added to the contacts list.")),setTimeout((function(){return y(null)}),5e3),f(""),g("")})).catch((function(e){console.log(e.response.data.error),y(e.response.data.error),setTimeout((function(){return y(null)}),5e3)}))}}),Object(i.jsx)("h2",{children:"Numbers"}),A.map((function(e){return Object(i.jsx)(l,{person:e,handleDelete:T},e.id)}))]})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9c1350b1.chunk.js.map