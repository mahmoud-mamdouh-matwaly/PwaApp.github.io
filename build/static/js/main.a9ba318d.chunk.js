(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(50)},25:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(25),a(18)),l=a(2),s=a(3),u=a(5),d=a(4),g=a(6),m=r.a.createContext(),f=a(7),h=a(17),v=a.n(h),p="https://api.myjson.com/bins",b=function(e){return v.a.get(e).then(function(e){return e.data})},y={getCategories:function(){return b("".concat(p,"/qk7qi"))},getSubCategories:function(e){return b("".concat(p,"/6frhm/?cat=").concat(e))},getCardData:function(e,t){return b(function(e,t){return"https://newsapi.org/v2/top-headlines?country=eg&category=".concat(e,"&page=").concat(t,"&apiKey=").concat("8e873620e5d8423aae1ed3d8d839e3e6")}(e,t))}},C=(a(45),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={active:null,categoriesItem:[]},a.handleCategories=function(e){a.setState(function(){return{categoriesItem:Object(f.a)(e.map(function(e){return{id:e.id,name:e.name}}))}})},a.handleClick=function(e){a.context.getIdCategory(e),a.setState({active:e})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){y.getCategories().then(this.handleCategories)}},{key:"render",value:function(){var e=this,t=this.state,a=t.active,n=t.categoriesItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"header__navigation"},r.a.createElement("ul",{className:"header__list"},n.map(function(t){return r.a.createElement("li",{className:"header__item",key:t.id},r.a.createElement("button",{type:"button",className:a===t.id?"button-active":"link-button",onClick:function(){return e.handleClick(t.id)}},t.name))})))))}}]),t}(n.Component));C.contextType=m;var E=C,w=(a(46),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={subCategories:[],active:null},a.handleClick=function(e){a.context.getSlugName(e),a.setState({active:e})},a.loadSubCategoryData=function(){var e=a.props.IdCategory;e&&y.getSubCategories(e).then(function(t){a.setState({active:e,subCategories:Object(f.a)(t.map(function(e){return{id:e.id,title:e.name,slug:e.slug}}))})})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){e.IdCategory!==this.props.IdCategory&&this.loadSubCategoryData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.subCategories,n=t.active;return r.a.createElement("nav",{className:"header__subnavigation"},r.a.createElement("ul",{className:"header__sublist"},a.map(function(t){return r.a.createElement("li",{className:"header__subitem",key:t.id},r.a.createElement("button",{type:"button",className:n===t.slug?"button-active":"link-button",onClick:function(){return e.handleClick(t.slug)}},t.title))})))}}]),t}(n.Component));w.contextType=m;var k=w,N=a(8),j=(a(47),function(e){return r.a.createElement("div",{className:"card__item"},r.a.createElement("a",{href:e.cardurl},r.a.createElement("h1",{className:"card__title"},e.cardTitle),r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:e.cardImg,alt:""}))),r.a.createElement("div",{className:"card__action"},r.a.createElement("ul",{className:"card__iconItem"},r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:"link-button"},r.a.createElement("i",{className:"fa fa-heart"}),r.a.createElement("span",null,"save"))),r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:"link-button"},r.a.createElement("i",{className:"fa fa-share-alt"}),r.a.createElement("span",null,"share"))))))}),O=(a(48),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).loadingCardData=function(){var e=a.props.slugName;e!==a.state.slug&&a.setState({page:1,cards:[],slug:e,hasMore:!0}),a.setState({isLoading:!0},function(){y.getCardData(e||a.state.slug,a.state.page).then(function(t){a.setState(function(n){return{active:e,slug:a.state.slug,hasMore:0!==t.articles.length,isLoading:!1,page:n.page+1,cards:[].concat(Object(f.a)(n.cards),Object(f.a)(t.articles.map(function(e){return{title:e.title,url:e.url,img:e.urlToImage}})))}})}).catch(function(e){a.setState({error:e.message,isLoading:!1})})})},a.state={error:!1,hasMore:!0,isLoading:!1,cards:[],active:null,page:1,slug:"general"},window.onscroll=function(){var e=Object(N.a)(a),t=e.loadingCardData,n=e.state,r=n.error,o=n.isLoading,c=n.hasMore;r||o||!c||window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&t()},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadingCardData()}},{key:"componentDidUpdate",value:function(e){e.slugName!==this.props.slugName&&this.loadingCardData()}},{key:"render",value:function(){var e=this.state,t=e.cards,a=e.isLoading,n=e.error,o=e.hasMore;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"card"},t.map(function(e){return r.a.createElement(j,{key:e.title,cardTitle:e.title,cardurl:e.url,cardImg:e.img})})),n&&r.a.createElement("div",{style:{color:"#900",textAlign:"center"}},n),a&&r.a.createElement("div",{style:{color:"#900",textAlign:"center"}},"Loading..."),!o&&r.a.createElement("div",{style:{color:"#900",textAlign:"center"}},"You did it! You reached the end!"))}}]),t}(n.Component));O.contextType=m;var _=O,I=(a(49),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={IdCategory:[],slugName:[]},a.handleData=function(){return{IdCategory:a.state.IdCategory,getIdCategory:function(e){a.setState(function(){return{IdCategory:e}})},getSlugName:function(e){a.setState(function(t){return Object(i.a)({},t.IdCategory,{slugName:e})})}}},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.IdCategory,a=e.slugName;return r.a.createElement(m.Provider,{value:this.handleData()},r.a.createElement(E,null),r.a.createElement(k,{IdCategory:t}),r.a.createElement(_,{slugName:a}))}}]),t}(n.Component)),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){console.log("sw is registered"),e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");S?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):D(t,e)})}else console.log("wont register sw. current env:","production")}(r.a.createElement(I,null))}},[[19,1,2]]]);
//# sourceMappingURL=main.a9ba318d.chunk.js.map