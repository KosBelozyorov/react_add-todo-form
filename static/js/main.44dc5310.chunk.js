(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),i=a(10),c=a(7),l=a(2),u=a(3),d=a(5),m=a(4),p=a(6),h=a(1),b=a.n(h),g=b.a.shape({name:b.a.string}).isRequired,y=(b.a.shape({title:b.a.string,completed:b.a.bool,id:b.a.number,user:g}).isRequired,b.a.arrayOf(b.a.shape({title:b.a.string,completed:b.a.bool,id:b.a.number,user:g}).isRequired).isRequired,b.a.string,a(18),function(e){var t=e.user;return r.a.createElement("span",{className:"todo-list-item__user"},t.name)}),f=(a(19),function(e){var t=e.todo,a=t.title,n=t.completed,o=void 0!==n&&n,s=t.user,i=t.id,c=o?"todo-list-item todo-list-item--done":"todo-list-item";return r.a.createElement("span",{className:c},r.a.createElement("span",{className:"todo-list-item__id"},i),r.a.createElement(y,{user:s}),r.a.createElement("span",{className:"todo-list-item__name"},a))}),v=(a(20),function(e){var t=e.todos;return r.a.createElement("ul",{className:"list-group todo-list"},t.map(function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement(f,{todo:e}))}))}),E=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],w=(a(21),function(e){var t=e.users,a=e.selected,n=e.onChange;return r.a.createElement("select",{className:"users-select form-control",value:a,onChange:function(e){return n(e)}},r.a.createElement("option",{value:0}),t.map(function(e){var t=e.id,a=e.name;return r.a.createElement("option",{value:t,key:t},a)}))}),S=(a(22),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",selected:0,inputError:null,selectError:null},a.handleChange=function(e){var t=e.target;a.setState({value:t.value})},a.onClickSelect=function(e){var t=e.target;a.setState({selected:t.value})},a.handleSubmit=function(e){e.preventDefault(),a.state.selected<1?a.setState({selectError:"Please select User"}):a.state.value.length<1?a.setState({inputError:"Please enter what needs Todo"}):(a.props.onItemAdded(a.state.value,a.state.selected),a.setState({value:"",selected:0,inputError:"",selectError:""}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.selected,n=e.inputError,o=e.selectError,s=this.props.users;return r.a.createElement("div",{className:"add-todo-container"},r.a.createElement("form",{className:"add-todo-form",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"form-control",placeholder:"What needs to be done",type:"text",value:t,onChange:this.handleChange}),null!==n&&r.a.createElement("p",{className:"invalid-feedback error error--input"},n),r.a.createElement(w,{users:s,selected:a,onChange:this.onClickSelect}),null!==o&&r.a.createElement("p",{className:"invalid-feedback error error--select"},o),r.a.createElement("button",{type:"submit"},"Add todo")))}}]),t}(n.Component)),O=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];a(23);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={todosData:Object(c.a)(E),usersData:Object(c.a)(O)},a.getTodosWithUsers=function(e,t){return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{user:t.find(function(t){return t.id===e.userId})})})},a.addTodo=function(e,t){var n=a.createTodoItem(e,t);a.setState(function(e){return{todosData:[].concat(Object(c.a)(e.todosData),[n])}})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"createTodoItem",value:function(e,t){return{title:e,completed:!1,userId:Number(t),id:this.state.todosData.length+1}}},{key:"render",value:function(){var e=this.state,t=e.todosData,a=e.usersData,n=this.getTodosWithUsers(t,a);return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Static list of todos with add todo form"),r.a.createElement("p",null,r.a.createElement("span",null,"Todos: "),t.length),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),a.length),r.a.createElement(S,{users:a,onItemAdded:this.addTodo}),r.a.createElement(v,{todos:n}))}}]),t}(n.Component);s.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.44dc5310.chunk.js.map