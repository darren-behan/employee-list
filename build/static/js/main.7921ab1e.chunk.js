(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e){e.exports=JSON.parse('[{"name":"John Smith","phone":"(965)-470-5658","email":"john.smith@example.com","dob":"09-18-1998","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxYvNkBrfm3v4mwBS4hNJxMvJhDSbIVtqWkQ&usqp=CAU"},{"name":"John Doe","phone":"(965)-470-1231","email":"john.doe@example.com","dob":"02-21-1992","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxYvNkBrfm3v4mwBS4hNJxMvJhDSbIVtqWkQ&usqp=CAU"},{"name":"Anne Smith","phone":"(912)-423-5128","email":"anne.smith@example.com","dob":"01-13-1988","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxYvNkBrfm3v4mwBS4hNJxMvJhDSbIVtqWkQ&usqp=CAU"},{"name":"Bob Doe","phone":"(123)-231-1228","email":"bob.doe@example.com","dob":"03-09-1991","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxYvNkBrfm3v4mwBS4hNJxMvJhDSbIVtqWkQ&usqp=CAU"},{"name":"Alice Smith","phone":"(123)-420-5618","email":"alice.smith@example.com","dob":"03-03-1994","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxYvNkBrfm3v4mwBS4hNJxMvJhDSbIVtqWkQ&usqp=CAU"},{"name":"Jack Sloan","phone":"(123)-430-5618","email":"jack.sloan@example.com","dob":"03-23-1993","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7owPBAqGhb9gmAfPlsjzysjuJNsxHeaKRYA&usqp=CAU"},{"name":"Mike Smith","phone":"(103)-120-5218","email":"mike.smith@example.com","dob":"01-03-1994","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxYvNkBrfm3v4mwBS4hNJxMvJhDSbIVtqWkQ&usqp=CAU"},{"name":"Mike Johnson","phone":"(002)-417-1618","email":"mike.johnson@example.com","dob":"03-03-1994","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqZk9XX4ElykWAG79cwe5OAqqBEqE14Z_SnQ&usqp=CAU"},{"name":"Ryan Bird","phone":"(523)-120-5609","email":"ryan.bird@example.com","dob":"12-08-1991","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-i2sUoCAuEBSwk1dkN3BwaQMYpXcFxFPYiw&usqp=CAU"},{"name":"Janice Doe","phone":"(126)-020-3618","email":"janice.doe@example.com","dob":"01-01-1990","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmLLdEyRV9Xf5r-Ay59uz1nndKSOtFwGbLHw&usqp=CAU"}]')},51:function(e,t,n){e.exports=n(66)},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),m=n(10),r=n.n(m),l=(n(56),n(33)),c=n(34),i=n(48),s=n(45);n(57),n(58),n(59);var u=function(e){return o.a.createElement("main",{className:"wrapper"},e.children)};n(60);var h=function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Employee List"),o.a.createElement("p",null,"Click on a heading to filter by heading or use the search box to narrow your results."))},d=n(46),p=n(74),b=n(73),g=n(36),f=n(37),E=n(71),A=n(44);n(61);var v=function(e){var t=o.a.useState(""),n=Object(d.a)(t,2),a=n[0],m=n[1];return o.a.createElement(p.a,{className:"navbar",bg:"light",expand:"lg",sticky:"top"},o.a.createElement(b.a,{inline:!0},o.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return m(e.target.value)}}),o.a.createElement(f.a,{onClick:function(){return e.handleFormSubmit(a)},variant:"outline-dark"},"Search")),o.a.createElement(E.a,{id:"dropdown-basic-button",variant:"outline-dark",title:"Sort By",drop:"left"},o.a.createElement(A.a.Item,{as:"button",value:"ascend",onClick:function(t){return e.handleSortChange(t.target.value)}},"Ascend By Name"),o.a.createElement(A.a.Item,{as:"button",value:"descend",onClick:function(t){return e.handleSortChange(t.target.value)}},"Descend By Name")))},S=n(72);var y=function(e){Object(a.useEffect)((function(){t()}),[e.employees]);var t=function(){if(e.employees.length>0)return e.employees.sort((function(t,n){switch(console.log(e.order),console.log(t),console.log(n),e.order){case"descend":return t.email<n.email?1:-1;default:return t.email>n.email?1:-1}})).map((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())?o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("img",{src:t.image,alt:"emp-img"})),o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.email),o.a.createElement("td",null,t.phone),o.a.createElement("td",null,t.dob)):null}))};return o.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Image"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Phone"),o.a.createElement("th",null,"DOB"))),o.a.createElement("tbody",null,t()))},k=n(42),N=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),m=0;m<a;m++)o[m]=arguments[m];return(e=t.call.apply(t,[this].concat(o))).state={employees:[],pending:"",search:"",order:"ascend"},e.handleSortChange=function(t){console.log(t),e.setState({order:t})},e.handleFormSubmit=function(t){e.setState({search:t})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({employees:k})}},{key:"render",value:function(){return o.a.createElement(u,null,o.a.createElement(h,null),o.a.createElement(v,{handleFormSubmit:this.handleFormSubmit,handleSortChange:this.handleSortChange}),o.a.createElement(y,{employees:this.state.employees,search:this.state.search,order:this.state.order}))}}]),n}(a.Component);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.7921ab1e.chunk.js.map