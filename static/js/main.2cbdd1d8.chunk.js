(this.webpackJsonpgithubjobs=this.webpackJsonpgithubjobs||[]).push([[0],{170:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),s=a(20),o=a.n(s),i=(a(72),a(27)),j=a(9),l=a(16),b=a(174),u=(a(73),a(177)),d=a(172),h=a(173),O=a(175),x=a(39),m=a.n(x),p=function(e){var t=e.job,a=Object(c.useState)(!1),r=Object(l.a)(a,2),s=r[0],o=r[1];return Object(n.jsx)(u.a,{className:"mb-3",children:Object(n.jsxs)(u.a.Body,{children:[Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)(u.a.Title,{children:[t.title," - ",Object(n.jsx)("span",{className:"text-muted font-weight-light",children:t.company})]}),Object(n.jsx)(u.a.Subtitle,{className:"text-muted mb-2",children:new Date(t.created_at).toLocaleDateString()}),Object(n.jsx)(d.a,{variant:"secondary",className:"mr-2",children:t.type}),Object(n.jsx)(d.a,{variant:"secondary",children:t.location}),Object(n.jsx)("div",{style:{wordBreak:"break-all"},children:Object(n.jsx)(m.a,{source:t.how_to_apply})})]}),Object(n.jsx)("img",{className:"d-none d-md-block",height:"50",src:t.company_logo,alt:t.company})]}),Object(n.jsx)(u.a.Text,{children:Object(n.jsx)(h.a,{onClick:function(){return o((function(e){return!e}))},variant:"primary",children:s?"Hide Details":"View Details"})}),Object(n.jsx)(O.a,{in:s,children:Object(n.jsx)("div",{className:"mt-4",children:Object(n.jsx)(m.a,{source:t.description})})})]})})},g=a(178),f=function(e){var t=e.page,a=e.setPage,c=e.hasNextPage;function r(e){a((function(t){return t+e}))}return Object(n.jsxs)(g.a,{children:[1!==t&&Object(n.jsx)(g.a.Prev,{onClick:function(){return r(-1)}}),1!==t&&Object(n.jsx)(g.a.Item,{onClick:function(){return r(1)},children:"1"}),t>2&&Object(n.jsx)(g.a.Ellipsis,{}),t>2&&Object(n.jsx)(g.a.Item,{onClick:function(){return r(-1)},children:t-1}),Object(n.jsx)(g.a.Item,{active:!0,children:t}),c&&Object(n.jsx)(g.a.Item,{onClick:function(){return r(1)},children:t+1}),c&&Object(n.jsx)(g.a.Next,{onClick:function(){return r(1)}})]})},y=a(176),v=a(65),k=function(e){var t=e.params,a=e.onParamChange;return Object(n.jsx)(y.a,{className:"mb-4",children:Object(n.jsxs)(y.a.Row,{className:"align-items-end",children:[Object(n.jsxs)(y.a.Group,{as:v.a,children:[Object(n.jsx)(y.a.Label,{children:"Description"}),Object(n.jsx)(y.a.Control,{onChange:a,value:t.description,name:"description",type:"text"})]}),Object(n.jsxs)(y.a.Group,{as:v.a,children:[Object(n.jsx)(y.a.Label,{children:"Location"}),Object(n.jsx)(y.a.Control,{onChange:a,value:t.location,name:"location",type:"text"})]}),Object(n.jsx)(y.a.Group,{as:v.a,xs:"auto",className:"ml-2",children:Object(n.jsx)(y.a.Check,{className:"mb-2",onChange:a,value:t.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox"})})]})})},N=a(17),C=a.n(N),P="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",T="MAKE_REQUEST",w="GET_DATA",E="ERROR",_="UPDATE_HAS_NEXT_PAGE",S=function(e,t){switch(t.type){case T:return{loading:!0,jobs:[]};case w:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case E:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case _:return Object(j.a)(Object(j.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}},D=function(e,t){var a=Object(c.useReducer)(S,{jobs:[],loading:!0}),n=Object(l.a)(a,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var a=C.a.CancelToken.source();s({type:T}),C.a.get(P,{cancelToken:a.token,params:Object(j.a)({markdown:!0,page:t},e)}).then((function(e){return s({type:w,payload:{jobs:e.data}})})).catch((function(e){C.a.isCancel(e)||s({type:E,payload:{error:e}})}));var n=C.a.CancelToken.source();return C.a.get(P,{cancelToken:n.token,params:Object(j.a)({markdown:!0,page:t+1},e)}).then((function(e){return s({type:_,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){C.a.isCancel(e)||s({type:E,payload:{error:e}})})),function(){a.cancel(),n.cancel()}}),[e,t]),r},L=a(66);var R=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(1),o=Object(l.a)(s,2),u=o[0],d=o[1],h=D(a,u),O=h.jobs,x=h.loading,m=h.error,g=h.hasNextPage;return Object(n.jsxs)(b.a,{className:"my-4",children:[Object(n.jsxs)("h1",{className:"mb-4 text-center",children:[Object(n.jsx)(L.a,{})," Github Jobs"]}),Object(n.jsx)(k,{params:a,onParamChange:function(e){var t=e.target.name,a=e.target.value;d(1),r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(i.a)({},t,a))}))}}),Object(n.jsx)(f,{page:u,setPage:d,hasNextPage:g}),x&&Object(n.jsx)("h1",{children:"Loading..."}),m&&Object(n.jsx)("h1",{children:"Error. Try Refreshing."}),O.map((function(e){return Object(n.jsx)(p,{job:e},e.id)})),Object(n.jsx)(f,{page:u,setPage:d,hasNextPage:g})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),A()},72:function(e,t,a){},73:function(e,t,a){}},[[170,1,2]]]);
//# sourceMappingURL=main.2cbdd1d8.chunk.js.map