(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){e.exports={container:"card_container__3UP_S",id:"card_id__hmR1c",list_container:"card_list_container__c-2to",image_container:"card_image_container__2e9zp",image:"card_image__2vN4D",name_type:"card_name_type__eE-N-",capitalize_first:"card_capitalize_first__3VNyK",info_container:"card_info_container__1ZQc9",data:"card_data__164xg",more:"card_more__wNxnh"}},23:function(e,t,n){e.exports={container:"filters_container__2qk7d",search:"filters_search__c2f7T",search_input:"filters_search_input__1yRPL",filter_items:"filters_filter_items__1EFVb"}},24:function(e,t,n){e.exports={input_container:"form_input_container__3LYVs",input_sections:"form_input_sections__3ZKk2",container:"form_container__jIFag",types_option:"form_types_option__1lHTh",button_container:"form_button_container__VpK7N",submit_btn:"form_submit_btn__1Psdw",reset_btn:"form_reset_btn__g8O0k"}},26:function(e,t,n){e.exports={navbar_container:"navbar_navbar_container__hbf3i",filters_container:"navbar_filters_container__x3-ay",items:"navbar_items__3-j7K",filters:"navbar_filters__1I6i8"}},4:function(e,t,n){e.exports={container:"detail_container__2ylVd",arrow_prev_container:"detail_arrow_prev_container__35RGB",arrow_prev_container_disabled:"detail_arrow_prev_container_disabled___5lID",arrow_next_container:"detail_arrow_next_container__18ecM",arrow_next_container_disabled:"detail_arrow_next_container_disabled__2QuE6",prev_btn:"detail_prev_btn__1CH3Z",prev_next_container:"detail_prev_next_container__zTxTM",prev_container:"detail_prev_container__261cd",prev_info:"detail_prev_info__17B1X",more:"detail_more__2D4pl",next_container:"detail_next_container__9LaEF",next_btn:"detail_next_btn__bcOCo",next_info:"detail_next_info__2DzcM",title_container:"detail_title_container__4LntO",title:"detail_title__3mWRa",image_stats_container:"detail_image_stats_container__2KQpl",id:"detail_id__2aJpr",info_content:"detail_info_content__2k3F6",image_container:"detail_image_container__18CaW",stats_container:"detail_stats_container__2Hiwd",right_side:"detail_right_side__FkGhZ",left_side:"detail_left_side__1XAIf",stats_items:"detail_stats_items__2FPLq",type:"detail_type__1BCeQ",img:"detail_img__2o152",arrow_left:"detail_arrow_left__2sN9Y",arrow_right:"detail_arrow_right__2f5N5",arrow_container:"detail_arrow_container__3IjHN"}},43:function(e,t,n){e.exports={container:"pagination_container__2bGNb",btn:"pagination_btn__1tE0c"}},48:function(e,t,n){e.exports={container:"cardContainer_container__2I9v7"}},49:function(e,t,n){e.exports={container:"home_container__2jgXN"}},54:function(e,t,n){},55:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(33),s=n.n(i),r=(n(54),n(55),n(6)),o=n(10),l=n(17),d=n.n(l),j=n(18),b=function(e){return e>0&&e<10?"000".concat(e):e>1&&e<100?"00".concat(e):e>=100&&e<1e3?"0".concat(e):e>1e3&&e<1e4?"".concat(e):void 0},h=n(0);var u=function(e){var t=e.name,n=e.image,c=e.type,i=e.id,s=Object(a.useState)(""),o=Object(r.a)(s,2),l=o[0],u=o[1];return Object(a.useEffect)((function(){u(b(i))}),[i]),Object(h.jsxs)("div",{className:d.a.container,children:[Object(h.jsxs)("div",{className:d.a.image_container,children:[" ",Object(h.jsx)("img",{src:n,alt:t,className:d.a.image})]}),Object(h.jsxs)("div",{className:d.a.info_container,children:[Object(h.jsxs)("h3",{className:d.a.id,children:["N.\xb0",l]}),Object(h.jsx)("h2",{children:Object(h.jsx)("p",{className:d.a.capitalize_first,children:t})}),Object(h.jsx)("div",{className:d.a.name_type,children:Object(h.jsx)("ul",{className:d.a.list_container,children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("h3",{children:e})},t)}))})}),Object(h.jsx)(j.b,{to:"/pokemons/".concat(i),children:Object(h.jsx)("h3",{className:d.a.more,children:"More +"})})]})]})},m=n(48),_=n.n(m);var p=function(e){return Object(h.jsx)("div",{className:_.a.container,children:e.data.map((function(e,t){return Object(h.jsx)(u,{name:e.name,image:e.image,type:e.types,id:e.id},t)}))})},O=n(43),f=n.n(O),x=function(e){for(var t=e.currentPage,n=e.totalPages,a=e.setCurrentPage,c=[],i=1;i<n+1;i++)c.push(i);return Object(h.jsx)("div",{className:f.a.container,children:c.map((function(e){return Object(h.jsx)("button",{className:f.a.btn,onClick:function(){return a(e)},disabled:e===t,children:e},e)}))})},g=n(15),v=n(25),y=n(19),k=n(71),N=Object(y.b)("pokemons/fetchPokemons",Object(v.a)(Object(g.a)().mark((function e(){var t;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("http://localhost:3001/pokemons");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),w=Object(y.b)("pokemons/getPokemonById",function(){var e=Object(v.a)(Object(g.a)().mark((function e(t){var n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("http://localhost:3001/pokemons/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),C=Object(y.c)({name:"pokemons",initialState:{loading:!1,pokemons:[],filteredPokemons:[],pokeStatus:"idle",pokeError:null,pokemonDetail:[],detailStatus:"idle",detailError:""},reducers:{setFilteredPokemons:function(e,t){e.filteredPokemons=t.payload}},extraReducers:function(e){e.addCase(N.pending,(function(e){e.pokeStatus="loading"})).addCase(N.fulfilled,(function(e,t){e.pokeStatus="succeeded",e.pokemons=t.payload,e.filteredPokemons=t.payload})).addCase(N.rejected,(function(e,t){e.pokeStatus="failed",e.pokeError=t.error.message})).addCase(w.pending,(function(e){e.detailStatus="loading",e.detailError=""})).addCase(w.fulfilled,(function(e,t){e.detailStatus="succeeded",e.pokemonDetail=t.payload})).addCase(w.rejected,(function(e,t){e.detailStatus="failed",e.detailError=t.error.message}))}}),S=C.actions.setFilteredPokemons,P=C.reducer,F=n(49),E=n.n(F),D=n(22),T=n(9),L=n(28),z=Object(y.b)("types/fetchTypes",Object(v.a)(Object(g.a)().mark((function e(){var t;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("http://localhost:3001/types");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),I=Object(y.c)({name:"types",initialState:{types:[],typesStatus:"idle",typesError:null},reducers:{getTypes:function(e,t){e.types=t.payload}},extraReducers:function(e){e.addCase(z.pending,(function(e){e.typesStatus="loading"})).addCase(z.fulfilled,(function(e,t){e.typesStatus="succeeded",e.types=t.payload})).addCase(z.rejected,(function(e,t){e.typesStatus="failed",e.typesError=t.error.message}))}}),A=I.actions.getTypes,H=I.reducer,R=n(23),Z=n.n(R),M=function(){var e=Object(o.c)((function(e){return e.pokemon.pokemons})),t=Object(o.c)((function(e){return e.types.types})),n=Object(o.b)(),c=Object(a.useState)({name:"",id:0,alphabet:"none",attack:0,types:""}),i=Object(r.a)(c,2),s=i[0],l=i[1];Object(a.useEffect)((function(){var t=Object(L.a)(e);t.length>0&&(""!==s.name&&(t=t.filter((function(e){var t;return null===(t=e.name)||void 0===t?void 0:t.includes(s.name)}))),""!==s.types&&(t=t.filter((function(e){var t;return null===(t=e.types)||void 0===t?void 0:t.includes(s.types)}))),0!==s.attack&&(t="low"===s.attack?t.sort((function(e,t){return e.attack-t.attack})):t.sort((function(e,t){return t.attack-e.attack}))),"none"!==s.alphabet&&(t="az"===s.alphabet?t.sort((function(e,t){return e.name.localeCompare(t.name)})):t.sort((function(e,t){return t.name.localeCompare(e.name)})))),n(S(t))}),[n,s,e]);var d=function(e){e.preventDefault(),console.log(Object(T.a)(Object(T.a)({},s),{},Object(D.a)({},e.target.name,e.target.value))),l((function(){return Object(T.a)(Object(T.a)({},s),{},Object(D.a)({},e.target.name,e.target.value))}))};return Object(h.jsxs)("section",{className:Z.a.container,children:[Object(h.jsxs)("article",{className:Z.a.search,children:[Object(h.jsx)("input",{type:"text",name:"name",value:s.name,onChange:d,placeholder:"Type Name",className:Z.a.search_input}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault()},children:Object(h.jsx)("h3",{children:"Search"})})]}),Object(h.jsxs)("article",{className:Z.a.filter_items,children:[Object(h.jsx)("h3",{children:"Sort A - Z"}),Object(h.jsxs)("select",{name:"alphabet",id:"alphabet",onChange:d,children:[Object(h.jsx)("option",{value:"none",children:"None"},"none"),Object(h.jsx)("option",{value:"az",children:"A - Z"},"az"),Object(h.jsx)("option",{value:"za",children:"Z - A"},"za")]})]}),Object(h.jsxs)("article",{className:Z.a.filter_items,children:[Object(h.jsx)("h3",{children:"Attack"}),Object(h.jsxs)("select",{name:"attack",id:"attack",onChange:d,children:[Object(h.jsx)("option",{value:"none",children:"None"}),Object(h.jsx)("option",{value:"low",children:"Low"}),Object(h.jsx)("option",{value:"high",children:"High"})]})]}),Object(h.jsxs)("article",{className:Z.a.filter_items,children:[Object(h.jsx)("h3",{children:"Type"}),Object(h.jsxs)("select",{name:"types",id:"types",value:s.types,onChange:d,children:[Object(h.jsx)("option",{value:"",children:"Choose Type"}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(h.jsx)("option",{value:e.name,children:e.name},t)}))]})]}),Object(h.jsx)("article",{className:Z.a.filter_items,children:Object(h.jsx)("button",{onClick:function(){l({name:"",id:0,alphabet:"none",attack:0,types:""})},children:Object(h.jsx)("h2",{children:"Reset"})})})]})};var V=function(){var e=Object(o.c)((function(e){return e.pokemon.filteredPokemons})),t=Object(o.b)(),n=Object(a.useState)(1),c=Object(r.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)(10),d=Object(r.a)(l,1)[0],j=Object(a.useState)(!0),b=Object(r.a)(j,2),u=(b[0],b[1],e.length),m=Math.ceil(u/d),_=(i-1)*d,O=_+d,f=e.slice(_,O);return Object(a.useEffect)((function(){t(N())}),[t]),Object(h.jsxs)("div",{className:E.a.container,children:[Object(h.jsx)(p,{data:f})," ",Object(h.jsx)(x,{currentPage:i,totalPages:m,setCurrentPage:s})]})},B=n(7),K=n(26),W=n.n(K);var Q=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(B.f)(),s="/"===i.pathname;return console.log(n),console.log(s),console.log(i.pathname),Object(h.jsx)("nav",{children:Object(h.jsxs)("div",{className:W.a.navbar_container,children:[Object(h.jsx)("div",{className:W.a.items,children:Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("h3",{children:"Home"})})}),Object(h.jsx)("div",{className:W.a.items,children:Object(h.jsx)("a",{href:"/form",children:Object(h.jsx)("h3",{children:"Create Pokemon"})})})," ",Object(h.jsx)("div",{className:W.a.items,children:s&&Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),c((function(){return!n}))},children:Object(h.jsx)("h2",{children:"Filters"})})}),Object(h.jsx)("div",{className:W.a.filters,children:s&&Object(h.jsx)("div",{className:W.a.filters_container,children:Object(h.jsx)("div",{children:n&&Object(h.jsx)(M,{})})})})]})})},X=n.p+"static/media/pokemon.48212ed0.png";var G=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:X,alt:"pokemon"})})},J=n(4),q=n.n(J),U=function(){var e,t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],i=n[1],s=Object(B.g)(),l=Object(o.b)(),d=parseInt(s.id);console.log(d);var j=Object(o.c)((function(e){return e.pokemon.pokemonDetail})),u=Object(o.c)((function(e){return e.pokemon.pokemons})),m=Object(a.useState)({name:"",id:0}),_=Object(r.a)(m,2),p=_[0],O=_[1],f=Object(a.useState)(!1),x=Object(r.a)(f,2),g=x[0],v=x[1],y=Object(a.useState)(!1),k=Object(r.a)(y,2),N=k[0],C=k[1],S=Object(a.useState)({name:"",id:0}),P=Object(r.a)(S,2),F=P[0],E=P[1],D=Object(B.e)(),T=!1===g,L=!1===N;console.log("pokemons1",u),console.log("current",j),console.log("previous",p),console.log("next",F);return Object(a.useEffect)((function(){i(b(d)),l(w(d)),function(){var e=null===u||void 0===u?void 0:u.find((function(e){return e.id===d-1}));console.log("previousPokemon",e),e?(v(!1),O({name:e.name,id:b(e.id)})):d-1===0&&(O({name:"No Previous Pokemon",id:0}),v(!0))}(),function(){var e=null===u||void 0===u?void 0:u.find((function(e){return e.id===d+1}));e?(C(!1),E({name:e.name,id:b(e.id)})):(console.log(u.length),d+1>=u.length&&(E({name:"No next Pokemon",id:0}),C(!0)))}()}),[l,d]),Object(h.jsxs)("section",{className:q.a.container,children:[Object(h.jsxs)("div",{className:q.a.prev_next_container,children:[Object(h.jsxs)("div",{className:q.a.prev_container,children:[Object(h.jsxs)("div",{className:q.a.prev_info,children:[Object(h.jsx)("p",{className:q.a.title,children:null===p||void 0===p?void 0:p.name})," ",Object(h.jsxs)("p",{children:["N.\xb0 ",null===p||void 0===p?void 0:p.id]})]}),Object(h.jsx)("button",{onClick:function(e){return e.preventDefault(),D.push("/pokemons/".concat(d-1))},className:q.a.prev_btn,disabled:g,children:Object(h.jsxs)("div",{className:T?q.a.arrow_prev_container:q.a.arrow_prev_container_disabled,children:[Object(h.jsx)("div",{className:q.a.arrow_left})," ",Object(h.jsx)("h3",{className:q.a.more,children:"PREVIOUS"})]})})]}),Object(h.jsxs)("div",{className:q.a.next_container,children:[Object(h.jsx)("button",{onClick:function(e){return e.preventDefault(),D.push("/pokemons/".concat(d+1))},className:q.a.next_btn,disabled:N,children:Object(h.jsxs)("div",{className:L?q.a.arrow_next_container:q.a.arrow_next_container_disabled,children:[Object(h.jsx)("h3",{className:q.a.more,children:"NEXT"}),Object(h.jsx)("div",{className:q.a.arrow_right})]})}),Object(h.jsxs)("div",{className:q.a.next_info,children:[Object(h.jsx)("p",{className:q.a.title,children:null===F||void 0===F?void 0:F.name})," ",Object(h.jsxs)("p",{children:["N.\xb0 ",null===F||void 0===F?void 0:F.id]})]})]})]}),Object(h.jsxs)("section",{className:q.a.info_content,children:[Object(h.jsxs)("div",{className:q.a.title_container,children:[Object(h.jsx)("h1",{className:q.a.title,children:j.name}),Object(h.jsxs)("div",{className:q.a.id,children:[Object(h.jsx)("h3",{children:"N.\xb0 "}),Object(h.jsx)("h3",{children:c})]})]})," ",Object(h.jsxs)("div",{className:q.a.image_stats_container,children:[Object(h.jsxs)("div",{className:q.a.image_container,children:[" ",Object(h.jsx)("img",{className:q.a.img,src:j.image,alt:j.name})]}),Object(h.jsxs)("div",{className:q.a.stats_container,children:[Object(h.jsxs)("div",{className:q.a.right_side,children:[" ",Object(h.jsxs)("article",{className:q.a.stats_items,children:[Object(h.jsx)("h4",{children:"Life"}),Object(h.jsx)("p",{children:j.life})]}),Object(h.jsxs)("article",{className:q.a.type,children:[Object(h.jsx)("h4",{children:"Types"})," ",Object(h.jsx)("ul",{children:null===(e=j.types)||void 0===e?void 0:e.map((function(e,t){return Object(h.jsxs)("li",{children:[" ",e]},t)}))})]})]}),Object(h.jsxs)("div",{className:q.a.left_side,children:[" ",Object(h.jsxs)("article",{className:q.a.stats_items,children:[Object(h.jsx)("h4",{children:"Speed"}),Object(h.jsx)("p",{children:j.speed})]}),Object(h.jsxs)("article",{className:q.a.stats_items,children:[Object(h.jsx)("h4",{children:"Height "}),Object(h.jsxs)("p",{children:[j.height," m"]})]}),Object(h.jsxs)("article",{className:q.a.stats_items,children:[Object(h.jsx)("h4",{children:"Weight"})," ",Object(h.jsxs)("p",{children:[j.weight," lbs"]})]}),Object(h.jsxs)("article",{className:q.a.stats_items,children:[Object(h.jsx)("h4",{children:"Attack"}),Object(h.jsx)("p",{children:j.attack})]}),Object(h.jsxs)("article",{className:q.a.stats_items,children:[Object(h.jsx)("h4",{children:"Defense"})," ",Object(h.jsx)("p",{children:j.defense})]})]})]})]})]})]})},Y=n(24),$=n.n(Y),ee=function(){var e=Object(o.c)((function(e){return e.types.types})),t=Object(a.useState)({name:"",attack:0,life:0,defense:0,speed:0,weight:0,height:0,types:[],image:""}),n=Object(r.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)({}),l=Object(r.a)(s,2),d=l[0],j=l[1],b=Object(a.useState)(!0),u=Object(r.a)(b,2),m=u[0],_=u[1],p=Object(a.useRef)(!0);console.log("showSubmit",m),Object(a.useEffect)((function(){console.log("formvalues",c),console.log("formerrors",d),console.log("showSubmit",m),console.log("error length",0===Object.keys(d).length),console.log("error length",Object.keys(d).length),console.log("initialLoad.current",p.current),!1===p.current&&(console.log("one"),0===Object.keys(d).length&&(console.log("two"),_(!1)))}),[d]),Object(a.useEffect)((function(){p.current=!1}),[c]);var O=function(e){console.log("e.target.name:",e.target.name),e.preventDefault(),i(Object(T.a)(Object(T.a)({},c),{},Object(D.a)({},e.target.name,e.target.value))),j(f(Object(T.a)(Object(T.a)({},c),{},Object(D.a)({},e.target.name,e.target.value))))},f=function(e){var t={};return e.name?e.name.length>20?t.name="Name has to be less than 20 char":/^[a-zA-Z]+$/.test(e.name)||(t.name="Name can only have letters"):t.name="Name cannot be empty",e.life?(e.life<0||e.life>150)&&(t.life="Life between 0 - 150"):t.life="life cannot be empty",e.attack?(e.attack<0||e.attack>150)&&(t.attack="Attack has to be higher than 0 and less than 150"):t.attack="Attack cannot be empty",e.defense?e.defense<0&&e.defense>150&&(t.defense="Defense has to be higher than 0 and less than 150"):t.defense="defense cannot be empty",e.weight?e.weight<0&&e.weight>150&&(t.weight="Weight has to be higher than 0 and less than 150"):t.weight="weight cannot be empty",e.height?e.height<0&&e.height>150&&(t.height="Height has to be higher than 0 and less than 150"):t.height="height cannot be empty",e.image?/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(e.image)||(t.image="Must any of these formats jpg|jpeg|png|webp|avif|gif|svg"):t.image="image cannot be empty",e.types?e.types.length>3&&(t.types="3 types max"):(console.log(e.types.length),t.types="types cannot be empty"),t},x=function(){var e=Object(v.a)(Object(g.a)().mark((function e(t){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.a.post("http://localhost:3001/pokemons",c);case 4:console.log("formValues submitted",c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.prev=10,console.log("finally"),_(!0),i({name:"",attack:0,life:0,defense:0,speed:0,weight:0,height:0,types:[],image:""}),e.finish(10);case 15:case"end":return e.stop()}}),e,null,[[1,7,10,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:$.a.container,children:Object(h.jsxs)("form",{children:[Object(h.jsx)("h1",{children:"Create Pokemon"}),Object(h.jsxs)("section",{children:[Object(h.jsxs)("div",{className:$.a.input_container,children:[Object(h.jsxs)("div",{className:$.a.input_sections,children:[Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{type:"text",id:"name",name:"name",onChange:O,value:c.name})," ",Object(h.jsx)("p",{children:d.name})]})," ",Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"life",children:"Life"}),Object(h.jsx)("input",{type:"number",id:"life",onChange:O,name:"life",value:c.life})," ",Object(h.jsx)("p",{children:d.life})]})," ",Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"attack",children:"Attack"}),Object(h.jsx)("input",{type:"number",id:"attack",onChange:O,name:"attack",value:c.attack}),Object(h.jsx)("p",{children:d.attack})]}),Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"speed",children:"Speed"}),Object(h.jsx)("input",{type:"number",id:"speed",onChange:O,name:"speed",value:c.speed})," ",Object(h.jsx)("p",{children:d.speed})]})," ",Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"defense",children:"Defense"}),Object(h.jsx)("input",{type:"number",id:"defense",onChange:O,name:"defense",value:c.defense})," ",Object(h.jsx)("p",{children:d.defense})]})," "]}),Object(h.jsxs)("div",{className:$.a.input_sections,children:[Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"weight",children:"Weight"}),Object(h.jsx)("input",{type:"number",id:"weight",onChange:O,name:"weight",value:c.weight})," ",Object(h.jsx)("p",{children:d.weight})]})," ",Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"height",children:"Height"}),Object(h.jsx)("input",{type:"number",id:"height",onChange:O,name:"height",value:c.height})," ",Object(h.jsx)("p",{children:d.height})]})," ",Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"types",children:"Types"}),Object(h.jsxs)("select",{name:"types",id:"types",onChange:function(e){e.preventDefault(),i(Object(T.a)(Object(T.a)({},c),{},{types:[].concat(Object(L.a)(c.types),[e.target.value.toLowerCase()])}))},className:$.a.types_option,children:[Object(h.jsx)("option",{value:"placeholder",children:"Choose types"}),null===e||void 0===e?void 0:e.map((function(e,t){return Object(h.jsx)("option",{value:e.name,children:e.name},t)}))]})," ",Object(h.jsx)("p",{children:d.types})]})," ",Object(h.jsxs)("article",{children:[Object(h.jsx)("label",{htmlFor:"image",children:"Image"}),Object(h.jsx)("input",{type:"text",id:"image",value:c.image,onChange:O,name:"image"})," ",Object(h.jsx)("p",{children:d.image})]})," ",Object(h.jsxs)("article",{children:[" ",Object(h.jsx)("label",{htmlFor:"",children:"image"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"submit",onClick:x,disabled:m,className:$.a.submit_btn,children:"Submit"}),Object(h.jsx)("button",{type:"reset",onClick:function(){i({name:"",attack:0,life:0,defense:0,speed:0,weight:0,height:0,types:[],image:""}),_(!0),p.current=!0},className:$.a.reset_btn,children:"Clear"})," "]})]})," "]})," "]})," "]})]})})};var te=function(){var e=Object(B.f)();return Object(h.jsxs)("div",{className:"App",children:["/landing"!==e.pathname&&Object(h.jsx)(Q,{}),Object(h.jsx)(B.a,{exact:!0,path:"/landing",render:function(){return Object(h.jsx)(G,{})}}),Object(h.jsx)(B.a,{exact:!0,path:"/",render:function(){return Object(h.jsx)(V,{})}}),Object(h.jsx)(B.a,{path:"/pokemons/:id",render:function(){return Object(h.jsx)(U,{})}}),Object(h.jsx)(B.a,{path:"/form",render:function(){return Object(h.jsx)(ee,{})}})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},ae=Object(y.a)({reducer:{pokemon:P,types:H}});ae.dispatch(N()),ae.dispatch(z()),ae.dispatch(A()),s.a.render(Object(h.jsxs)(c.a.StrictMode,{children:[" ",Object(h.jsxs)(j.a,{children:[Object(h.jsx)(o.a,{store:ae,children:Object(h.jsx)(B.a,{path:"/",component:te})})," "]})]}),document.getElementById("root")),ne()}},[[70,1,2]]]);
//# sourceMappingURL=main.89737708.chunk.js.map