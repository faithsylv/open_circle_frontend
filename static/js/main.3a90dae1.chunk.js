(this.webpackJsonpopen_circle_frontend=this.webpackJsonpopen_circle_frontend||[]).push([[0],{22:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},37:function(e,t){},42:function(e,t,s){},61:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(35),a=s.n(r),i=(s(42),s(2)),o=s(3),l=s(15),p=s(5),h=s(4),d=s(14),u=s(9),j=s(7),m=s(6),b=s.n(m),f=(s(61),s(0)),O=(c.Component,s(17)),g=s.p+"static/media/ciircle.3ed8fd6d.gif",v=(s(71),function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,n=t.value;c.setState(Object(O.a)({},s,n))},c.handleSubmit=function(e){e.preventDefault();var t=c.state,s={email:t.email,password:t.password};b.a.post("https://open-circle-server.herokuapp.com/login",{user:s},{withCredentials:!0}).then((function(e){console.log("this is the post request",e.data.logged_in),e.data.logged_in?(c.props.handleLogin(e.data),c.redirect()):c.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},c.redirect=function(){var e=c.props.circles[1].id;c.props.history.push("/feed/".concat(e))},c.handleErrors=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:c.state.errors.map((function(e){return Object(f.jsx)("li",{children:e},e)}))})})},c.state={email:"joel@ga.co",password:"chicken",errors:""},c}return Object(o.a)(s,[{key:"componentWillMount",value:function(){return this.props.loggedInStatus?this.redirect():null}},{key:"render",value:function(){var e=this.state,t=e.email,s=e.password;return Object(f.jsx)("div",{className:"loginbg",children:Object(f.jsxs)("div",{className:"logincontainer",children:[Object(f.jsx)("img",{className:"circlelogo",src:g,alt:"circle"}),Object(f.jsxs)("form",{className:"loginform",onSubmit:this.handleSubmit,children:[Object(f.jsx)("input",{className:"inputitem",placeholder:"email",type:"text",name:"email",value:t,onChange:this.handleChange}),Object(f.jsx)("input",{className:"inputitem",placeholder:"password",type:"password",name:"password",value:s,onChange:this.handleChange}),Object(f.jsx)("button",{className:"inputitem",placeholder:"submit",type:"submit",children:"Log In"}),Object(f.jsxs)("div",{className:"signupform",children:["Not a member?  ",Object(f.jsx)(u.b,{to:"/signup",children:"Sign up!"})]})]}),Object(f.jsx)("div",{children:this.state.errors?this.handleErrors():null})]})})}}]),s}(c.Component)),x=(s(72),function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,n=t.value;c.setState(Object(O.a)({},s,n))},c.handleSubmit=function(e){e.preventDefault();var t=c.state,s={email:t.email,password:t.password,password_confirmation:t.password_confirmation};b.a.post("https://open-circle-server.herokuapp.com/users",{user:s},{withCredentials:!0}).then((function(e){"created"===e.data.status?(c.props.handleLogin(e.data),c.redirect()):c.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},c.redirect=function(){c.props.history.push("/feed")},c.handleErrors=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:c.state.errors.map((function(e){return Object(f.jsx)("li",{children:e},e)}))})})},c.state={name:"",email:"",password:"",password_confirmation:"",errors:""},c}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state,t=e.name,s=e.email,c=e.password,n=e.password_confirmation;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:" Welcome to the Signup page!"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("input",{placeholder:"name",type:"text",name:"name",value:t,onChange:this.handleChange}),Object(f.jsx)("input",{placeholder:"email",type:"text",name:"email",value:s,onChange:this.handleChange}),Object(f.jsx)("input",{placeholder:"password",type:"password",name:"password",value:c,onChange:this.handleChange}),Object(f.jsx)("input",{placeholder:"password confirmation",type:"password",name:"password_confirmation",value:n,onChange:this.handleChange}),Object(f.jsx)("button",{placeholder:"submit",type:"submit",children:"Sign Up"})]}),Object(f.jsx)("div",{children:this.state.errors?this.handleErrors():null})]})}}]),s}(c.Component)),N=s(19),C=(s(22),function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return console.log("POST RENDERING"),console.log("POST TO RENDER",this.props.post),this.props.post?Object(f.jsxs)("div",{className:"post-box",children:[Object(f.jsxs)("div",{className:"post-header",children:[Object(f.jsx)("img",{className:"poster-pic",src:this.props.post.user.profile_image,alt:"profile"}),Object(f.jsxs)("div",{className:"post-name-and-time",children:[Object(f.jsxs)("div",{className:"poster-name",children:[this.props.post.user.name," "]}),Object(f.jsx)("div",{className:"post-time",children:this.props.post.user.created_at})]})]}),Object(f.jsx)("div",{className:"post-body",children:Object(f.jsxs)("p",{className:"post-text",children:[" ",this.props.post.content]})})]}):""}}]),s}(c.Component)),S=(s(33),s.p+"static/media/banner.9b8039ad.png"),_=(s.p,s.p,s.p,s.p,"https://open-circle-server.herokuapp.com/posts"),k=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).displayImages=function(){var t=[];e.state.posts.forEach((function(e){e.image.forEach((function(e){t.push(e)}))})),e.setState({photos:t})},e.state={name:"",bio:"",profile_image:"",photos:[],posts:[]},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=function t(){e.props.circles.forEach((function(t){b.a.get("".concat(_,"?circle_id=").concat(t.id)).then((function(s){console.log("".concat(_,"?circle_id=").concat(t.id));var c=[];s.data.forEach((function(t){t.user.name===e.state.name&&(console.log("the post is",t),c.push(t))})),console.log("USER POSTS",c),e.setState({posts:[].concat(c,Object(N.a)(e.state.posts))},(function(){console.table(e.state.posts)}))}))})),setTimeout(t,2e3)};!function(){console.log(e.props.match.params.id);var s="".concat("https://open-circle-server.herokuapp.com/users/").concat(e.props.match.params.id);console.log(s),b.a.get(s).then((function(s){e.setState({name:s.data.user.name,bio:s.data.user.bio,profile_image:s.data.user.profile_image}),t()}))}()}},{key:"render",value:function(){return console.log("name is",this.state.name),console.log("the circles array coming in from props is:",this.props.circles),console.log("this users posts are",this.state.posts),console.log("RENDER"),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"profile-top",children:Object(f.jsxs)("div",{className:"name-and-picture",children:[Object(f.jsx)("div",{className:"banner-picture-div",children:Object(f.jsx)("img",{className:"banner-picture",src:S,alt:"banner"})}),Object(f.jsx)("img",{className:"profile-picture",src:this.state.profile_image,alt:"profile"}),Object(f.jsx)("p",{className:"profile-name",children:this.state.name})]})}),Object(f.jsxs)("div",{className:"profile-bottom",children:[Object(f.jsxs)("div",{className:"profile-left",children:[Object(f.jsxs)("div",{className:"profile-intro profile-box",children:[Object(f.jsx)("p",{className:"profile-header",children:"Intro"}),Object(f.jsx)("p",{className:"bio",children:this.state.bio})]}),Object(f.jsx)("div",{className:"profile-photos profile-box",children:Object(f.jsx)("p",{className:"profile-header",children:"Photos"})})]}),Object(f.jsx)("div",{className:"profile-right",children:Object(f.jsxs)("div",{className:"profile-posts profile-box",children:[Object(f.jsx)("p",{className:"profile-header",children:"Posts"}),this.state.posts.map((function(e){return Object(f.jsx)(C,{post:e})}))]})})]})]})}}]),s}(c.Component),y=(s(73),function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(f.jsx)("h1",{className:"home_header",children:" Welcome to the Circles page!"})}}]),s}(c.Component)),I=s(37),w=s.n(I),L=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={content:""},e._handleSubmit=e._handleSubmit.bind(Object(l.a)(e)),e._handleChangeContent=e._handleChangeContent.bind(Object(l.a)(e)),e}return Object(o.a)(s,[{key:"_handleSubmit",value:function(e){e.preventDefault(),b.a.post("https://open-circle-server.herokuapp.com/posts",{post:{content:this.state.content,user_id:this.props.user.id,circle_id:this.props.circleparam}}),this.setState({content:""})}},{key:"_handleChangeContent",value:function(e){this.setState({content:e.target.value})}},{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this._handleSubmit,children:[Object(f.jsx)("p",{children:Object(f.jsx)("input",{className:"inputitemfeed",type:"text",onChange:this._handleChangeContent,value:this.state.content,placeholder:"What's on your mind?"})}),Object(f.jsx)("input",{className:"submititemfeed",type:"submit",value:"",onSubmit:this._handleSubmit})]})}}]),s}(c.Component),E=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return console.log("my friends are",this.props.friends),Object(f.jsxs)("div",{className:"feed-members feed-box",children:[Object(f.jsx)("p",{className:"feed-header"}),Object(f.jsx)(u.b,{to:"/self/edit/".concat(this.props.currentUser.id),children:Object(f.jsxs)("div",{className:"members-box members-box-self",children:[Object(f.jsx)("img",{className:"member-pic member-pic-self",src:this.props.currentUser.profile_image,alt:"profile"}),Object(f.jsx)("div",{className:"member-name member-name-self",children:this.props.currentUser.name})]})}),this.props.friends.map((function(t){if(t.id!==e.props.currentUser.id)return Object(f.jsx)(u.b,{to:"/profile/".concat(t.id),children:Object(f.jsxs)("div",{className:"members-box",children:[Object(f.jsx)("img",{className:"member-pic",src:t.profile_image,alt:"profile"}),Object(f.jsx)("div",{className:"member-name",children:t.name})]})})}))]})}}]),s}(c.Component),D=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={posts:[],users:[],timerID:""},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchPosts(this.props.circleId),this.props.fetchUsers(this.props.circleId),clearInterval(this.state.timerID);var t=setInterval((function(){return e.props.fetchPosts(e.props.circleId)}),5e3);this.setState({timerID:t})}},{key:"render",value:function(){return console.log("the posts are",this.props.posts),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{}),Object(f.jsxs)("div",{className:"feed-bottom",children:[Object(f.jsx)("div",{className:"feed-left",children:Object(f.jsxs)("div",{className:"feed-posts feed-box",children:[Object(f.jsxs)("div",{className:"post-box",children:[Object(f.jsxs)("div",{className:"post-header",children:[Object(f.jsx)("img",{className:"poster-pic",src:this.props.user.profile_image,alt:"profile"}),Object(f.jsx)("div",{className:"post-name-and-time",children:Object(f.jsx)("div",{className:"poster-name",children:this.props.user.name})})]}),Object(f.jsx)("div",{className:"post-body",children:Object(f.jsx)(L,{user:this.props.user,circleparam:this.props.circleId})})]}),this.props.posts.map((function(e){return Object(f.jsx)(C,{post:e})}))]})}),Object(f.jsx)("div",{className:"feed-right",children:Object(f.jsx)(E,{currentUser:this.props.user,friends:this.props.users,circleparam:this.props.circleId})})]})]})}}]),s}(c.Component),P="https://open-circle-server.herokuapp.com/posts",U=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).displayImages=function(){var e=[];c.props.user.posts.forEach((function(t){t.image.forEach((function(t){e.push(t)}))})),c.setState({photos:e})},c.state={photos:[],posts:[]},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;e.props.circles.forEach((function(t){b.a.get("".concat(P,"?circle_id=").concat(t.id)).then((function(s){console.log("".concat(P,"?circle_id=").concat(t.id));var c=[];s.data.forEach((function(t){t.user.name===e.state.name&&(console.log("the post is",t),c.push(t))})),console.log("USER POSTS",c),e.setState({posts:[].concat(c,Object(N.a)(e.state.posts))},(function(){console.table(e.state.posts)}))}))}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{children:" This is you "}),Object(f.jsx)("div",{className:"profile-top",children:Object(f.jsxs)("div",{className:"name-and-picture",children:[Object(f.jsx)("div",{className:"banner-picture-div",children:Object(f.jsx)("img",{className:"banner-picture",src:S,alt:"banner"})}),Object(f.jsx)("img",{className:"profile-picture",src:this.props.user.profile_image,alt:"profile"}),Object(f.jsx)("p",{className:"profile-name",children:this.props.user.name})]})}),Object(f.jsxs)("div",{className:"profile-bottom",children:[Object(f.jsxs)("div",{className:"profile-left",children:[Object(f.jsxs)("div",{className:"profile-intro profile-box",children:[Object(f.jsx)("p",{className:"profile-header",children:"Intro"}),Object(f.jsx)("p",{className:"bio",children:this.props.user.bio})]}),Object(f.jsx)("div",{className:"profile-photos profile-box",children:Object(f.jsx)("p",{className:"profile-header",children:"Photos"})})]}),Object(f.jsx)("div",{className:"profile-right",children:Object(f.jsxs)("div",{className:"profile-posts profile-box",children:[Object(f.jsx)("p",{className:"profile-header",children:"Posts"}),this.state.posts.map((function(e){return Object(f.jsx)(C,{data:e})}))]})})]})]})}}]),s}(c.Component),R=(s(74),function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return console.log("mycircles in circlenav state",this.props.circles),Object(f.jsx)("div",{className:"circle-nav",children:this.props.circles.map((function(t){return Object(f.jsx)(u.b,{to:"/feed/".concat(t.id),children:Object(f.jsx)("img",{onClick:function(){return e.props.circleClick(t.id)},className:"circle-pic",src:t.image,alt:"profile"})})}))})}}]),s}(c.Component)),T=(s(34),"https://open-circle-server.herokuapp.com/users"),M=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).fetchPosts=function(e){var t="".concat("https://open-circle-server.herokuapp.com/posts","?circle_id=").concat(e);b.a.get(t).then((function(e){c.setState({currentPosts:e.data})}))},c.fetchUsers=function(e){b.a.get("".concat(T,"?circle_id=").concat(e)).then((function(e){console.log("USERS IN MEMBER BOX on feed",e),console.log("fetch users url",T),c.setState({currentUsers:e.data})}))},c._handleCircleClick=function(e){c.setState({currentCircleID:e}),c.fetchPosts(e),c.fetchUsers(e),clearInterval(c.state.timerID);var t=setInterval((function(){return c.fetchPosts(e)}),2e3);c.setState({timerID:t})},c.state={currentCircleID:"",currentUsers:[],currentPosts:[],timerID:""},c}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return console.log("logout buttton test",this.props.isLoggedIn),Object(f.jsx)("div",{className:"navdiv",children:Object(f.jsx)(u.a,{children:Object(f.jsxs)("div",{className:"App",children:[this.props.isLoggedIn?Object(f.jsxs)("div",{className:"navbar",children:[Object(f.jsx)(u.b,{to:"/logout",onClick:this.props.handleClick,children:"Log Out"}),Object(f.jsx)(R,{user:this.props.user,circles:this.props.circles,circleClick:this._handleCircleClick})]}):null,Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/profile/:id",render:function(t){return Object(f.jsx)(k,Object(d.a)(Object(d.a)({},t),{},{circles:e.props.circles}))}}),";",Object(f.jsx)(j.a,{exact:!0,path:"/profile",render:function(t){return Object(f.jsx)(k,{user:e.props.user})}}),";",Object(f.jsx)(j.a,{path:"/circles",render:function(t){return Object(f.jsx)(y,{user:e.props.user})}}),";",Object(f.jsx)(j.a,{path:"/messages",render:function(t){return Object(f.jsx)(w.a,{user:e.props.user})}}),";",Object(f.jsx)(j.a,{path:"/feed/:circle_id",render:function(t){return Object(f.jsx)(D,Object(d.a)({user:e.props.user,circleId:e.state.currentCircleID,users:e.state.currentUsers,posts:e.state.currentPosts,fetchUsers:e.fetchUsers,fetchPosts:e.fetchPosts},t))}}),";",Object(f.jsx)(j.a,{path:"/signup",render:function(t){return Object(f.jsx)(x,Object(d.a)(Object(d.a)({},t),{},{handleLogin:e.props.handleLogin,loggedInStatus:e.props.isLoggedIn}))}}),Object(f.jsx)(j.a,{exact:!0,path:"/",render:function(t){return Object(f.jsx)(v,Object(d.a)(Object(d.a)({},t),{},{circles:e.props.circles,handleLogin:e.props.handleLogin,loggedInStatus:e.props.isLoggedIn}))}}),";",Object(f.jsx)(j.a,{path:"/self/edit/:id",render:function(t){return Object(f.jsx)(U,Object(d.a)({user:e.props.user,circles:e.props.circles},t))}}),";"]})]})})})}}]),s}(c.Component),B=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).loginStatus=function(){b.a.get("https://open-circle-server.herokuapp.com/logged_in",{withCredentials:!0}).then((function(e){e.data.logged_in?c.handleLogin(e):c.handleLogout(),console.log("logged in?",e)})).catch((function(e){return console.log("api errors:",e)}))},c.fetchCircles=function(){b.a.get("".concat("https://open-circle-server.herokuapp.com/circles","?user_id=").concat(c.state.user.id)).then((function(e){console.log("the results are",e),c.setState({circles:e.data})}))},c._handleClick=function(){b.a.delete("https://open-circle-server.herokuapp.com/logout",{withCredentials:!0}).then((function(e){c.handleLogout(),console.log(Object(l.a)(c)),window.location.hash="/"})).catch((function(e){return console.log(e)}))},c.handleLogin=function(e){console.log(e),c.setState({isLoggedIn:!0,user:e.user}),console.log("logged in fetching circles"),c.fetchCircles()},c.handleLogout=function(){c.setState({isLoggedIn:!1,user:{}}),console.log("loggedin status at logout",c.state.isLoggedIn)},c.state={isLoggedIn:!1,user:{},circles:[]},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.loginStatus()}},{key:"render",value:function(){return console.log("App.js logged in state",this.state.isLoggedIn),console.log("App.js circles state",this.state.circles),Object(f.jsx)(M,{handleClick:this._handleClick,handleLogin:this.handleLogin,isLoggedIn:this.state.isLoggedIn,user:this.state.user,circles:this.state.circles})}}]),s}(c.Component),F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,76)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),F()}},[[75,1,2]]]);
//# sourceMappingURL=main.3a90dae1.chunk.js.map