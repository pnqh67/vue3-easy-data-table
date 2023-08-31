(function(e,Q){typeof exports=="object"&&typeof module!="undefined"?module.exports=Q(require("vue")):typeof define=="function"&&define.amd?define(["vue"],Q):(e=typeof globalThis!="undefined"?globalThis:e||self,e["vue3-easy-data-table"]=Q(e.Vue))})(this,function(e){"use strict";const Q=["onClick"],ze=["checked"],De=e.createElementVNode("label",{for:"checbox"},null,-1),ye=e.defineComponent({__name:"MultipleSelectCheckBox",props:{status:{type:String,required:!0}},emits:["change"],setup(o,{emit:i}){const t=o,r=e.computed(()=>t.status==="allSelected"),m=()=>{i("change",!r.value)};return e.inject("themeColor"),(c,s)=>(e.openBlock(),e.createElementBlock("div",{onClick:e.withModifiers(m,["stop","prevent"])},[e.createElementVNode("input",{type:"checkbox",name:"checkbox",checked:r.value,class:e.normalizeClass(o.status)},null,10,ze),De],8,Q))}}),ve=["id","name","checked"],Me=e.defineComponent({__name:"SingleSelectCheckBox",props:{checked:{type:Boolean,required:!0}},emits:["change"],setup(o,{emit:i}){e.inject("themeColor");const t=(Math.random()+1).toString(36).substring(7);return(r,m)=>(e.openBlock(),e.createElementBlock("input",{id:e.unref(t),type:"checkbox",name:e.unref(t),checked:o.checked,onChange:m[0]||(m[0]=c=>i("change"))},null,40,ve))}});var rn="",U=(o,i)=>{const t=o.__vccOpts||o;for(const[r,m]of i)t[r]=m;return t};const He=o=>(e.pushScopeId("data-v-4ca5de3a"),o=o(),e.popScopeId(),o),Oe={class:"easy-data-table__rows-selector"},je={class:"rows-input"},We=He(()=>e.createElementVNode("div",{class:"triangle"},null,-1)),qe=["onClick"],Je=e.defineComponent({__name:"RowsSelector",props:{modelValue:{type:Number,required:!0},rowsItems:{type:Array,required:!0}},emits:["update:modelValue"],setup(o,{emit:i}){const t=o;e.useCssVars(k=>({"1b889342":e.unref(h)}));const r=e.ref(!1),m=e.ref(!1),c=e.inject("dataTable");e.watch(r,k=>{if(k&&c){const g=window.innerHeight,P=c.value.getBoundingClientRect().height,T=c.value.getBoundingClientRect().top;g-(P+T)<=100?m.value=!0:m.value=!1}});const s=e.computed({get:()=>t.modelValue,set:k=>{i("update:modelValue",k)}}),n=k=>{s.value=k,r.value=!1},d=(k,g)=>{let P=k.parentNode;for(;P!=null;){if(P.classList&&P.classList.contains(g))return!0;P=P.parentNode}return!1},p=k=>{d(k.target,"easy-data-table__rows-selector")||(r.value=!1)};e.onMounted(()=>{document.addEventListener("click",p)}),e.onBeforeUnmount(()=>{document.removeEventListener("click",p)});const h=e.inject("themeColor");return(k,g)=>(e.openBlock(),e.createElementBlock("div",Oe,[e.createElementVNode("div",{class:"rows-input__wrapper",onClick:g[0]||(g[0]=P=>r.value=!r.value)},[e.createElementVNode("div",je,e.toDisplayString(s.value),1),We]),e.createElementVNode("ul",{class:e.normalizeClass(["select-items",{show:r.value,inside:m.value}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.rowsItems,P=>(e.openBlock(),e.createElementBlock("li",{key:P,class:e.normalizeClass({selected:P===s.value}),onClick:T=>n(P)},e.toDisplayString(P),11,qe))),128))],2)]))}});var Ue=U(Je,[["__scopeId","data-v-4ca5de3a"]]),on="";const le=o=>(e.pushScopeId("data-v-1fa3a520"),o=o(),e.popScopeId(),o),Ge={class:"lds-ring"},Ke=[le(()=>e.createElementVNode("div",null,null,-1)),le(()=>e.createElementVNode("div",null,null,-1)),le(()=>e.createElementVNode("div",null,null,-1)),le(()=>e.createElementVNode("div",null,null,-1))],Qe=e.defineComponent({__name:"Loading",setup(o){e.useCssVars(t=>({26774109:e.unref(i)}));const i=e.inject("themeColor");return(t,r)=>(e.openBlock(),e.createElementBlock("div",Ge,Ke))}});var Xe=U(Qe,[["__scopeId","data-v-1fa3a520"]]),un="";const Ye={class:"loader-line"},Ze=e.defineComponent({__name:"LoadingLine",setup(o){e.useCssVars(t=>({"0d327f57":e.unref(i)}));const i=e.inject("themeColor");return(t,r)=>(e.openBlock(),e.createElementBlock("div",Ye))}});var et=U(Ze,[["__scopeId","data-v-7d281cac"]]),pn="";const tt={class:"buttons-pagination"},nt=["onClick"],q=7,at=e.defineComponent({__name:"ButtonsPagination",props:{maxPaginationNumber:{type:Number,required:!0},currentPaginationNumber:{type:Number,required:!0}},emits:["updatePage"],setup(o,{emit:i}){const t=o;e.useCssVars(s=>({"40dd4f07":e.unref(c)}));const r=s=>{s.type==="button"&&!s.active&&i("updatePage",s.page)},m=e.computed(()=>{const s=[];if(t.maxPaginationNumber<=q)for(let n=1;n<=t.maxPaginationNumber;n+=1)s.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if([1,2,t.maxPaginationNumber,t.maxPaginationNumber-1].includes(t.currentPaginationNumber))for(let n=1;n<=q;n+=1)if(n<=3)s.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if(n===4)s.push({type:"omission"});else{const d=t.maxPaginationNumber-(q-n);s.push({type:"button",page:d,active:d===t.currentPaginationNumber,activePrev:d+1===t.currentPaginationNumber})}else if([3,4].includes(t.currentPaginationNumber))for(let n=1;n<=q;n+=1)n<=5?s.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber}):n===6?s.push({type:"omission"}):s.push({type:"button",page:t.maxPaginationNumber,active:t.maxPaginationNumber===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if([t.maxPaginationNumber-2,t.maxPaginationNumber-3].includes(t.currentPaginationNumber))for(let n=1;n<=q;n+=1)if(n===1)s.push({type:"button",page:1,active:t.currentPaginationNumber===1,activePrev:n+1===t.currentPaginationNumber});else if(n===2)s.push({type:"omission"});else{const d=t.maxPaginationNumber-(q-n);s.push({type:"button",page:d,active:d===t.currentPaginationNumber,activePrev:d+1===t.currentPaginationNumber})}else for(let n=1;n<=q;n+=1)if(n===1)s.push({type:"button",page:1,active:t.currentPaginationNumber===1,activePrev:n+1===t.currentPaginationNumber});else if(n===2||n===6)s.push({type:"omission"});else if(n===7)s.push({type:"button",page:t.maxPaginationNumber,active:t.maxPaginationNumber===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else{const d=4-n,p=t.currentPaginationNumber-d;s.push({type:"button",page:p,active:p===t.currentPaginationNumber,activePrev:p+1===t.currentPaginationNumber})}return s}),c=e.inject("themeColor");return(s,n)=>(e.openBlock(),e.createElementBlock("div",tt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,(d,p)=>(e.openBlock(),e.createElementBlock("div",{key:p,class:e.normalizeClass(["item",{button:d.type==="button",active:d.type==="button"&&d.active,"active-prev":d.type==="button"&&d.activePrev,omission:d.type==="omission"}]),onClick:h=>r(d)},e.toDisplayString(d.type==="button"?d.page:"..."),11,nt))),128))]))}});var rt=U(at,[["__scopeId","data-v-4c681fa2"]]),fn="";const he=o=>(e.pushScopeId("data-v-c9da5286"),o=o(),e.popScopeId(),o),ot=[he(()=>e.createElementVNode("span",{class:"arrow arrow-right"},null,-1))],lt=[he(()=>e.createElementVNode("span",{class:"arrow arrow-left"},null,-1))],st=e.defineComponent({__name:"PaginationArrows",props:{isFirstPage:{type:Boolean,required:!1},isLastPage:{type:Boolean,required:!1}},emits:["clickPrevPage","clickNextPage"],setup(o,{emit:i}){const t=e.useSlots();return(r,m)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",{class:e.normalizeClass(["previous-page__click-button",{"first-page":o.isFirstPage}]),onClick:m[0]||(m[0]=c=>i("clickPrevPage"))},ot,2),e.unref(t).buttonsPagination?e.renderSlot(r.$slots,"buttonsPagination",{key:0},void 0,!0):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["next-page__click-button",{"last-page":o.isLastPage}]),onClick:m[1]||(m[1]=c=>i("clickNextPage"))},lt,2)],64))}});var it=U(st,[["__scopeId","data-v-c9da5286"]]);function ct(o,i,t,r){return{clickRow:(c,s,n)=>{if(o.value!==s)return;const d={...c};if(i.value){const{checkbox:p}=c;delete d.checkbox,d.isSelected=p}if(t.value){const{index:p}=c;delete d.index,d.indexInCurrentPage=p}r("clickRow",d,n)}}}function dt(o,i,t){const r=e.ref([]);return{expandingItemIndexList:r,updateExpandingItemIndexList:(s,n,d)=>{d.stopPropagation();const p=r.value.indexOf(s);if(p!==-1)r.value.splice(p,1);else{const h=o.value.findIndex(k=>JSON.stringify(k)===JSON.stringify(n));t("expandRow",i.value+h,n),r.value.push(i.value+h)}},clearExpandingItemIndexList:()=>{r.value=[]}}}function ut(o){const i=e.computed(()=>o.value.filter(m=>m.fixed)),t=e.computed(()=>i.value.length?i.value[i.value.length-1].value:""),r=e.computed(()=>{if(!i.value.length)return[];const m=i.value.map(c=>{var s;return(s=c.width)!=null?s:100});return i.value.map((c,s)=>{var n,d;return{value:c.value,fixed:(n=c.fixed)!=null?n:!0,width:(d=c.width)!=null?d:100,distance:s===0?0:m.reduce((p,h,k)=>{let g=p;return k<s&&(g+=h),g})}})});return{fixedHeaders:i,lastFixedColumn:t,fixedColumnsInfos:r}}function pt(o,i,t,r,m,c,s,n,d,p,h,k,g,P,T,_,I,F,z){const u=e.computed(()=>s.value.findIndex(y=>y.fixed)!==-1),x=e.computed(()=>u.value?s.value.filter(y=>y.fixed):[]),C=e.computed(()=>s.value.filter(y=>!y.fixed)),w=(y,D)=>Array.isArray(y)&&Array.isArray(D)?{sortBy:y,sortDesc:D.map(S=>S==="desc")}:y!==""?{sortBy:T.value,sortDesc:_.value==="desc"}:null,f=e.ref(w(T.value,_.value)),E=e.computed(()=>{var se;const D=[...x.value,...C.value].map(K=>{const V=Object.assign(K);if(V.sortable&&(V.sortType="none"),g.value)if(Array.isArray(g.value.sortBy)&&Array.isArray(g.value.sortType)&&g.value.sortBy.includes(V.value)){const Y=g.value.sortBy.indexOf(V.value);V.sortType=g.value.sortType[Y]}else V.value===g.value.sortBy&&g.value.sortType&&(V.sortType=g.value.sortType);if(f.value&&Array.isArray(f.value.sortBy)&&Array.isArray(f.value.sortDesc)&&f.value.sortBy.includes(V.value)){const Y=f.value.sortBy.indexOf(V.value);V.sortType=f.value.sortDesc[Y]?"desc":"asc"}else f.value&&V.value===f.value.sortBy&&(V.sortType=f.value.sortDesc?"desc":"asc");return V});let S=[];n.value?S=[m.value||u.value?{text:"",value:"expand",fixed:!0,width:t.value}:{text:"",value:"expand"},...D]:S=D;let L=[];P.value?L=[c.value||u.value?{text:o.value,value:"index",fixed:!0,width:d.value}:{text:o.value,value:"index"},...S]:L=S;let X=[];return p.value?X=[r.value||u.value?{text:"checkbox",value:"checkbox",fixed:!0,width:(se=i.value)!=null?se:36}:{text:"checkbox",value:"checkbox"},...L]:X=L,X}),$=e.computed(()=>E.value.map(y=>y.value));return{clientSortOptions:f,headerColumns:$,headersForRender:E,updateSortField:(y,D)=>{let S=null;if(D==="none"?S="asc":D==="asc"?S="desc":S=k.value?"asc":null,h.value&&F(y,S),f.value&&Array.isArray(f.value.sortBy)&&Array.isArray(f.value.sortDesc)){const L=f.value.sortBy.indexOf(y);L===-1?S!==null&&(f.value.sortBy.push(y),f.value.sortDesc.push(S==="desc")):S===null?(f.value.sortDesc.splice(L,1),f.value.sortBy.splice(L,1)):f.value.sortDesc[L]=S==="desc"}else S===null?f.value=null:f.value={sortBy:y,sortDesc:S==="desc"};z("updateSort",{sortType:S,sortBy:y})},isMultiSorting:y=>g.value&&Array.isArray(g.value.sortBy)?g.value.sortBy.includes(y):f.value&&Array.isArray(f.value.sortBy)?f.value.sortBy.includes(y):!1,getMultiSortNumber:y=>g.value&&Array.isArray(g.value.sortBy)?g.value.sortBy.indexOf(y)+1:f.value&&Array.isArray(f.value.sortBy)?f.value.sortBy.indexOf(y)+1:!1}}function ft(o,i,t,r,m,c,s,n,d){const p=e.computed(()=>(o.value-1)*m.value+1),h=e.computed(()=>t.value?Math.min(d.value,o.value*m.value):Math.min(n.value.length,o.value*m.value)),k=e.computed(()=>t.value?r.value:n.value.slice(p.value-1,h.value)),g=e.computed(()=>s.value?k.value.map((_,I)=>({index:p.value+I,..._})):k.value),P=e.computed(()=>c.value.length===0||c.value.every(I=>n.value.findIndex(F=>JSON.stringify(I)===JSON.stringify(F))===-1)?"noneSelected":c.value.length===n.value.length&&c.value.every(F=>n.value.findIndex(z=>JSON.stringify(F)===JSON.stringify(z))!==-1)?"allSelected":"partSelected"),T=e.computed(()=>i.value?P.value==="allSelected"?g.value.map(_=>({checkbox:!0,..._})):P.value==="noneSelected"?g.value.map(_=>({checkbox:!1,..._})):g.value.map(_=>({checkbox:c.value.findIndex(F=>{const z={..._};return delete z.index,JSON.stringify(F)===JSON.stringify(z)})!==-1,..._})):g.value);return{currentPageFirstIndex:p,currentPageLastIndex:h,multipleSelectStatus:P,pageItems:T}}function mt(o,i,t,r,m,c,s){const n=e.ref(c.value?c.value.page:o.value),d=e.computed(()=>Math.ceil(r.value/m.value)),p=e.computed(()=>d.value===0||n.value===d.value),h=e.computed(()=>n.value===1);return{currentPaginationNumber:n,maxPaginationNumber:d,isLastPage:p,isFirstPage:h,nextPage:()=>{if(r.value!==0&&!p.value&&!t.value)if(i.value){const _=n.value+1;s(_)}else n.value+=1},prevPage:()=>{if(r.value!==0&&!h.value&&!t.value)if(i.value){const _=n.value-1;s(_)}else n.value-=1},updatePage:_=>{t.value||(i.value?s(_):n.value=_)},updateCurrentPaginationNumber:_=>{n.value=_}}}function gt(o,i,t,r){const m=e.computed(()=>!o.value&&i.value.findIndex(n=>n===r.value)===-1?[r.value,...i.value]:i.value),c=e.ref(t.value?t.value.rowsPerPage:r.value);return{rowsItemsComputed:m,rowsPerPageRef:c,updateRowsPerPage:n=>{c.value=n}}}function yt(o,i,t){const r=e.computed({get:()=>{if(o.value){const{page:n,rowsPerPage:d,sortBy:p,sortType:h}=o.value;return{page:n,rowsPerPage:d,sortBy:p!=null?p:null,sortType:h!=null?h:null}}return null},set:n=>{t("update:serverOptions",n)}});return{serverOptionsComputed:r,updateServerOptionsPage:n=>{r.value&&(r.value={...r.value,page:n})},updateServerOptionsSort:(n,d)=>{if(r.value)if(i.value&&Array.isArray(r.value.sortBy)&&Array.isArray(r.value.sortType)){const p=r.value.sortBy.findIndex(h=>h===n);p===-1&&d!==null&&(r.value.sortBy.push(n),r.value.sortType.push(d)),d===null?(r.value.sortBy.splice(p,1),r.value.sortType.splice(p,1)):r.value.sortType[p]=d}else r.value={...r.value,sortBy:d!==null?n:null,sortType:d}},updateServerOptionsRowsPerPage:n=>{r.value&&(r.value={...r.value,page:1,rowsPerPage:n})}}}function A(o,i){var t;if(o.includes(".")){const r=o.split("."),{length:m}=r;let c,s=0;for(;s<m;){if(s===0)c=i[r[0]];else if(c&&typeof c=="object")c=c[r[s]];else{c="";break}s+=1}return c!=null?c:""}return(t=i[o])!=null?t:""}function ht(o,i){const t=A(o,i);return Array.isArray(t)?t.join(","):t}function kt(o,i,t,r,m,c,s,n,d,p){const h=u=>{if(typeof c.value=="string"&&c.value!=="")return A(c.value,u);if(Array.isArray(c.value)){let x="";return c.value.forEach(C=>{x+=A(C,u)}),x}return Object.values(u).join(" ")},k=e.computed(()=>{if(!t.value&&s.value!==""){const u=new RegExp(s.value,"i");return r.value.filter(x=>u.test(h(x)))}return r.value}),g=e.computed(()=>{let u=[...k.value];return i.value?(i.value.forEach(x=>{u=u.filter(C=>{const{field:w,comparison:f,criteria:E}=x;if(typeof f=="function")return f(A(w,C),E);const $=A(w,C);switch(f){case"=":return $===E;case"!=":return $!==E;case">":return $>E;case"<":return $<E;case"<=":return $<=E;case">=":return $>=E;case"between":return $>=Math.min(...E)&&$<=Math.max(...E);case"in":return E.includes($);default:return $===E}})}),u):k.value});e.watch(g,u=>{i.value&&p("updateFilter",u)},{immediate:!0,deep:!0});function P(u,x,C,w){const f=u[w],E=x[w];return(w===0?C:P(u,x,C,w-1)).sort((H,G)=>{let O=!0;for(let y=0;y<w;y+=1)if(A(u[y],H)!==A(u[y],G)){O=!1;break}return O?A(f,H)<A(f,G)?E?1:-1:A(f,H)>A(f,G)?E?-1:1:0:0})}const T=e.computed(()=>{if(t.value)return r.value;if(o.value===null)return g.value;const{sortBy:u,sortDesc:x}=o.value,C=[...g.value];return d&&Array.isArray(u)&&Array.isArray(x)?u.length===0?C:P(u,x,C,u.length-1):C.sort((w,f)=>A(u,w)<A(u,f)?x?1:-1:A(u,w)>A(u,f)?x?-1:1:0)}),_=e.computed(()=>t.value?n.value:T.value.length),I=e.computed({get:()=>{var u;return(u=m.value)!=null?u:[]},set:u=>{p("update:itemsSelected",u)}});return{totalItems:T,selectItemsComputed:I,totalItemsLength:_,toggleSelectAll:u=>{I.value=u?T.value:[],u&&p("selectAll")},toggleSelectItem:u=>{const x=u.checkbox;if(delete u.checkbox,delete u.index,x)I.value=I.value.filter(C=>JSON.stringify(C)!==JSON.stringify(u)),p("deselectRow",u);else{const C=I.value;C.unshift(u),I.value=C,p("selectRow",u)}}}}var bt={alternating:{type:Boolean,default:!1},buttonsPagination:{type:Boolean,default:!1},checkboxColumnWidth:{type:Number,default:null},currentPage:{type:Number,default:1},emptyMessage:{type:String,default:"No Available Data"},expandColumnWidth:{type:Number,default:36},filterOptions:{type:Array,default:null},fixedExpand:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!0},fixedCheckbox:{type:Boolean,default:!1},fixedIndex:{type:Boolean,default:!1},headerTextDirection:{type:String,default:"left"},bodyTextDirection:{type:String,default:"left"},hideFooter:{type:Boolean,default:!1},hideRowsPerPage:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},indexColumnWidth:{type:Number,default:60},itemsSelected:{type:Array,default:null},loading:{type:Boolean,default:!1},rowsPerPage:{type:Number,default:25},rowsItems:{type:Array,default:()=>[25,50,100]},rowsPerPageMessage:{type:String,default:"rows per page:"},searchField:{type:[String,Array],default:""},searchValue:{type:String,default:""},serverOptions:{type:Object,default:null},serverItemsLength:{type:Number,default:0},showIndex:{type:Boolean,default:!1},sortBy:{type:[String,Array],default:""},sortType:{type:[String,Array],default:"asc"},multiSort:{type:Boolean,default:!1},tableMinHeight:{type:Number,default:180},tableHeight:{type:Number,default:null},themeColor:{type:String,default:"#42b883"},tableClassName:{type:String,default:""},headerClassName:{type:String,default:""},headerItemClassName:{type:[Function,String],default:""},bodyRowClassName:{type:[Function,String],default:""},bodyExpandRowClassName:{type:[Function,String],default:""},bodyItemClassName:{type:[Function,String],default:""},noHover:{type:Boolean,default:!1},borderCell:{type:Boolean,default:!1},mustSort:{type:Boolean,default:!1},rowsOfPageSeparatorMessage:{type:String,default:"of"},clickEventType:{type:String,default:"single"},clickRowToExpand:{type:Boolean,default:!1},tableNodeId:{type:String,default:""},showIndexSymbol:{type:String,default:"#"},preventContextMenuRow:{type:Boolean,default:!0}},yn="",hn="";const Pt=o=>(e.pushScopeId("data-v-1485792e"),o=o(),e.popScopeId(),o),_t=["id"],xt=["onClick"],Nt={key:3,class:"header-text"},Ct={key:5,class:"multi-sort__number"},St=["onClick","onDblclick","onContextmenu"],Bt=["data-colname","onClick"],wt=["colspan"],Et={key:4},It=["onClick"],$t={key:3,class:"header-text"},At={key:5,class:"multi-sort__number"},Vt={key:0},Tt=Pt(()=>e.createElementVNode("div",null,null,-1)),Rt={class:"loading-entity"},Lt={key:1},Ft={key:0},zt={key:0,class:"pagination__rows-per-page"},Dt={class:"pagination__items-index"},vt=e.defineComponent({__name:"DataTable",props:{...bt,items:{type:Array,required:!0},headers:{type:Array,required:!0}},emits:["clickRow","contextmenuRow","selectRow","deselectRow","expandRow","updateSort","updateFilter","update:itemsSelected","update:serverOptions","updatePageItems","updateTotalItems","selectAll"],setup(o,{expose:i,emit:t}){const r=o;e.useCssVars(l=>({"2f333b04":Ht.value,"7f64ab9c":Mt.value}));const{tableNodeId:m,clickEventType:c,bodyTextDirection:s,checkboxColumnWidth:n,currentPage:d,expandColumnWidth:p,filterOptions:h,fixedCheckbox:k,fixedExpand:g,fixedHeader:P,fixedIndex:T,headers:_,headerTextDirection:I,indexColumnWidth:F,items:z,itemsSelected:u,loading:x,mustSort:C,multiSort:w,rowsItems:f,rowsPerPage:E,searchField:$,searchValue:H,serverItemsLength:G,serverOptions:O,showIndex:y,sortBy:D,sortType:S,tableHeight:L,tableMinHeight:X,themeColor:se,rowsOfPageSeparatorMessage:K,showIndexSymbol:V,preventContextMenuRow:Y}=e.toRefs(r),Mt=e.computed(()=>L.value?`${L.value}px`:null),Ht=e.computed(()=>`${X.value}px`);e.provide("themeColor",se.value);const R=e.useSlots(),Ot=e.computed(()=>!!R.pagination),jt=e.computed(()=>!!R.loading),be=e.computed(()=>!!R.expand),Wt=e.computed(()=>!!R.body),Pe=e.ref(),de=e.ref();e.provide("dataTable",Pe);const _e=e.ref(!1);e.onMounted(()=>{de.value.addEventListener("scroll",()=>{_e.value=de.value.scrollLeft>0})});const ue=e.computed(()=>u.value!==null),J=e.computed(()=>O.value!==null),{serverOptionsComputed:pe,updateServerOptionsPage:qt,updateServerOptionsSort:Jt,updateServerOptionsRowsPerPage:Ut}=yt(O,w,t),{clientSortOptions:xe,headerColumns:Ne,headersForRender:v,updateSortField:Ce,isMultiSorting:Se,getMultiSortNumber:Be}=pt(V,n,p,k,g,T,_,be,F,ue,J,C,pe,y,D,S,w,Jt,t),{rowsItemsComputed:we,rowsPerPageRef:j,updateRowsPerPage:Gt}=gt(J,f,O,E),{totalItems:Ee,selectItemsComputed:Kt,totalItemsLength:ie,toggleSelectAll:Ie,toggleSelectItem:Qt}=kt(xe,h,J,z,u,$,H,G,w,t),{currentPaginationNumber:M,maxPaginationNumber:Z,isLastPage:ee,isFirstPage:te,nextPage:ne,prevPage:ae,updatePage:re,updateCurrentPaginationNumber:Xt}=mt(d,J,x,ie,j,O,qt),{currentPageFirstIndex:$e,currentPageLastIndex:Ae,multipleSelectStatus:ce,pageItems:W}=ft(M,ue,J,z,j,Kt,y,Ee,ie),oe=e.computed(()=>M.value===0?0:(M.value-1)*j.value),{expandingItemIndexList:Ve,updateExpandingItemIndexList:Te,clearExpandingItemIndexList:Re}=dt(W,oe,t),{fixedHeaders:fe,lastFixedColumn:me,fixedColumnsInfos:Yt}=ut(v),{clickRow:Le}=ct(c,ue,y,t),Zt=(l,N)=>{Y.value&&N.preventDefault(),t("contextmenuRow",l,N)},en=l=>{var a;const N=(a=l.width)!=null?a:fe.value.length?100:null;if(N)return`width: ${N}px; min-width: ${N}px;`},ge=(l,N="th")=>{if(!fe.value.length)return;const a=Yt.value.find(B=>B.value===l);if(a)return`left: ${a.distance}px;z-index: ${N==="th"?3:1};position: sticky;`},tn=l=>{const N=v.value.find(a=>a.value===l);return N==null?void 0:N.text},nn=l=>{const N=v.value.find(a=>a.value===l);return N==null?void 0:N.class};return e.watch(x,(l,N)=>{pe.value&&l===!1&&N===!0&&(Xt(pe.value.page),Re())}),e.watch(j,l=>{J.value?Ut(l):re(1)}),e.watch([H,h],()=>{J.value||re(1)}),e.watch([M,xe,$,H,h],()=>{Re()},{deep:!0}),e.watch(W,l=>{t("updatePageItems",l)},{deep:!0}),e.watch(Ee,l=>{t("updateTotalItems",l)},{deep:!0}),i({currentPageFirstIndex:$e,currentPageLastIndex:Ae,clientItemsLength:ie,maxPaginationNumber:Z,currentPaginationNumber:M,isLastPage:ee,isFirstPage:te,nextPage:ne,prevPage:ae,updatePage:re,rowsPerPageOptions:we,rowsPerPageActiveOption:j,updateRowsPerPageActiveOption:Gt}),(l,N)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"dataTable",ref:Pe,class:e.normalizeClass([l.tableClassName])},[e.createElementVNode("div",{ref_key:"tableBody",ref:de,class:e.normalizeClass({"fixed-header":e.unref(P),"fixed-height":e.unref(L),"show-shadow":_e.value,"table-fixed":e.unref(fe).length,hoverable:!l.noHover,"border-cell":l.borderCell})},[e.createElementVNode("table",{id:e.unref(m),class:"cmn_tbl tbl_view"},[e.createElementVNode("colgroup",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(v),(a,B)=>(e.openBlock(),e.createElementBlock("col",{key:B,style:e.normalizeStyle(en(a))},null,4))),128))]),e.unref(R)["customize-headers"]?e.renderSlot(l.$slots,"customize-headers",{key:0},void 0,!0):e.unref(v).length&&!l.hideHeader?(e.openBlock(),e.createElementBlock("thead",{key:1,class:e.normalizeClass([l.headerClassName])},[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(v),(a,B)=>(e.openBlock(),e.createElementBlock("th",{key:B,class:e.normalizeClass([{sortable:a.sortable,none:a.sortable&&a.sortType==="none",desc:a.sortable&&a.sortType==="desc",asc:a.sortable&&a.sortType==="asc",shadow:a.value===e.unref(me)},typeof l.headerItemClassName=="string"?l.headerItemClassName:l.headerItemClassName(a,B+1)]),style:e.normalizeStyle(ge(a.value)),onClick:e.withModifiers(b=>a.sortable&&a.sortType?e.unref(Ce)(a.value,a.sortType):null,["stop"])},[a.text==="checkbox"?(e.openBlock(),e.createBlock(ye,{key:e.unref(ce),status:e.unref(ce),onChange:e.unref(Ie)},null,8,["status","onChange"])):(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(["header",`direction-${e.unref(I)}`])},[e.unref(R)[`header-${a.value}`]?e.renderSlot(l.$slots,`header-${a.value}`,e.normalizeProps(e.mergeProps({key:0},a)),void 0,!0):e.unref(R)[`header-${a.value.toLowerCase()}`]?e.renderSlot(l.$slots,`header-${a.value.toLowerCase()}`,e.normalizeProps(e.mergeProps({key:1},a)),void 0,!0):e.unref(R).header?e.renderSlot(l.$slots,"header",e.normalizeProps(e.mergeProps({key:2},a)),void 0,!0):(e.openBlock(),e.createElementBlock("span",Nt,e.toDisplayString(a.text),1)),a.sortable?(e.openBlock(),e.createElementBlock("i",{key:a.sortType?a.sortType:"none",class:e.normalizeClass(["sortType-icon",{desc:a.sortType==="desc"}])},null,2)):e.createCommentVNode("",!0),e.unref(w)&&e.unref(Se)(a.value)?(e.openBlock(),e.createElementBlock("span",Ct,e.toDisplayString(e.unref(Be)(a.value)),1)):e.createCommentVNode("",!0)],2))],14,xt))),128))])],2)):e.createCommentVNode("",!0),Wt.value?e.renderSlot(l.$slots,"body",e.normalizeProps(e.mergeProps({key:2},e.unref(W))),void 0,!0):e.unref(Ne).length?(e.openBlock(),e.createElementBlock("tbody",{key:3,class:e.normalizeClass({"row-alternation":l.alternating})},[e.renderSlot(l.$slots,"body-prepend",e.normalizeProps(e.guardReactiveProps({items:e.unref(W),pagination:{isFirstPage:e.unref(te),isLastPage:e.unref(ee),currentPaginationNumber:e.unref(M),maxPaginationNumber:e.unref(Z),nextPage:e.unref(ne),prevPage:e.unref(ae)},headers:e.unref(v)})),void 0,!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(W),(a,B)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:B},[e.createElementVNode("tr",{class:e.normalizeClass([{"even-row":(B+1)%2===0},typeof l.bodyRowClassName=="string"?l.bodyRowClassName:l.bodyRowClassName(a,B+1)]),onClick:b=>{e.unref(Le)(a,"single",b),l.clickRowToExpand&&e.unref(Te)(B+oe.value,a,b)},onDblclick:b=>{e.unref(Le)(a,"double",b)},onContextmenu:b=>{Zt(a,b)}},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(Ne),(b,an)=>(e.openBlock(),e.createElementBlock("td",{key:an,style:e.normalizeStyle(ge(b,"td")),"data-colname":tn(b),class:e.normalizeClass([{shadow:b===e.unref(me),"can-expand":b==="expand",col_check:b==="checkbox"},typeof l.bodyItemClassName=="string"?l.bodyItemClassName:l.bodyItemClassName(b,B+1),nn(b)]),onClick:Fe=>b==="expand"?e.unref(Te)(B+oe.value,a,Fe):null},[e.unref(R)[`item-${b}`]?e.renderSlot(l.$slots,`item-${b}`,e.normalizeProps(e.mergeProps({key:0},a)),void 0,!0):e.unref(R)[`item-${b.toLowerCase()}`]?e.renderSlot(l.$slots,`item-${b.toLowerCase()}`,e.normalizeProps(e.mergeProps({key:1},a)),void 0,!0):b==="expand"?(e.openBlock(),e.createElementBlock("i",{key:2,class:e.normalizeClass(["expand-icon",{expanding:e.unref(Ve).includes(oe.value+B)}])},null,2)):b==="checkbox"?(e.openBlock(),e.createBlock(Me,{key:3,checked:a[b],onChange:Fe=>e.unref(Qt)(a)},null,8,["checked","onChange"])):e.unref(R).item?e.renderSlot(l.$slots,"item",e.normalizeProps(e.mergeProps({key:4},{column:b,item:a})),void 0,!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:5},[e.createTextVNode(e.toDisplayString(e.unref(ht)(b,a)),1)],64))],14,Bt))),128))],42,St),be.value&&e.unref(Ve).includes(B+oe.value)?(e.openBlock(),e.createElementBlock("tr",{key:0,class:e.normalizeClass([{"even-row":(B+1)%2===0},typeof l.bodyExpandRowClassName=="string"?l.bodyExpandRowClassName:l.bodyExpandRowClassName(a,B+1)])},[e.createElementVNode("td",{colspan:e.unref(v).length,class:"expand"},[a.expandLoading?(e.openBlock(),e.createBlock(et,{key:0,class:"expand-loading"})):e.createCommentVNode("",!0),e.renderSlot(l.$slots,"expand",e.normalizeProps(e.guardReactiveProps(a)),void 0,!0)],8,wt)],2)):e.createCommentVNode("",!0)],64))),128)),e.renderSlot(l.$slots,"body-append",e.normalizeProps(e.guardReactiveProps({items:e.unref(W),pagination:{isFirstPage:e.unref(te),isLastPage:e.unref(ee),currentPaginationNumber:e.unref(M),maxPaginationNumber:e.unref(Z),nextPage:e.unref(ne),prevPage:e.unref(ae),updatePage:e.unref(re)},headers:e.unref(v)})),void 0,!0)],2)):e.createCommentVNode("",!0),!e.unref(x)&&e.unref(W).length?(e.openBlock(),e.createElementBlock("tfoot",Et,[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(v),(a,B)=>(e.openBlock(),e.createElementBlock("th",{key:B,class:e.normalizeClass([{sortable:a.sortable,none:a.sortable&&a.sortType==="none",desc:a.sortable&&a.sortType==="desc",asc:a.sortable&&a.sortType==="asc",shadow:a.value===e.unref(me)},typeof l.headerItemClassName=="string"?l.headerItemClassName:l.headerItemClassName(a,B+1)]),style:e.normalizeStyle(ge(a.value)),onClick:e.withModifiers(b=>a.sortable&&a.sortType?e.unref(Ce)(a.value,a.sortType):null,["stop"])},[a.text==="checkbox"?(e.openBlock(),e.createBlock(ye,{key:e.unref(ce),status:e.unref(ce),onChange:e.unref(Ie)},null,8,["status","onChange"])):(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(["header",`direction-${e.unref(I)}`])},[e.unref(R)[`header-${a.value}`]?e.renderSlot(l.$slots,`header-${a.value}`,e.normalizeProps(e.mergeProps({key:0},a)),void 0,!0):e.unref(R)[`header-${a.value.toLowerCase()}`]?e.renderSlot(l.$slots,`header-${a.value.toLowerCase()}`,e.normalizeProps(e.mergeProps({key:1},a)),void 0,!0):e.unref(R).header?e.renderSlot(l.$slots,"header",e.normalizeProps(e.mergeProps({key:2},a)),void 0,!0):(e.openBlock(),e.createElementBlock("span",$t,e.toDisplayString(a.text),1)),a.sortable?(e.openBlock(),e.createElementBlock("i",{key:a.sortType?a.sortType:"none",class:e.normalizeClass(["sortType-icon",{desc:a.sortType==="desc"}])},null,2)):e.createCommentVNode("",!0),e.unref(w)&&e.unref(Se)(a.value)?(e.openBlock(),e.createElementBlock("span",At,e.toDisplayString(e.unref(Be)(a.value)),1)):e.createCommentVNode("",!0)],2))],14,It))),128))])])):e.createCommentVNode("",!0)],8,_t),e.unref(x)?(e.openBlock(),e.createElementBlock("div",Vt,[Tt,e.createElementVNode("div",Rt,[jt.value?e.renderSlot(l.$slots,"loading",{key:0},void 0,!0):(e.openBlock(),e.createBlock(Xe,{key:1}))])])):e.createCommentVNode("",!0),!e.unref(W).length&&!e.unref(x)?(e.openBlock(),e.createElementBlock("div",Lt,[e.renderSlot(l.$slots,"empty-message",{},()=>[e.createTextVNode(e.toDisplayString(l.emptyMessage),1)],!0)])):e.createCommentVNode("",!0)],2),l.hideFooter?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",Ft,[l.hideRowsPerPage?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",zt,[e.createTextVNode(e.toDisplayString(l.rowsPerPageMessage)+" ",1),e.createVNode(Ue,{modelValue:e.unref(j),"onUpdate:modelValue":N[0]||(N[0]=a=>e.isRef(j)?j.value=a:null),"rows-items":e.unref(we)},null,8,["modelValue","rows-items"])])),e.createElementVNode("div",Dt,e.toDisplayString(`${e.unref($e)}\u2013${e.unref(Ae)}`)+" "+e.toDisplayString(e.unref(K))+" "+e.toDisplayString(e.unref(ie)),1),Ot.value?e.renderSlot(l.$slots,"pagination",e.normalizeProps(e.mergeProps({key:1},{isFirstPage:e.unref(te),isLastPage:e.unref(ee),currentPaginationNumber:e.unref(M),maxPaginationNumber:e.unref(Z),nextPage:e.unref(ne),prevPage:e.unref(ae)})),void 0,!0):(e.openBlock(),e.createBlock(it,{key:2,"is-first-page":e.unref(te),"is-last-page":e.unref(ee),onClickNextPage:e.unref(ne),onClickPrevPage:e.unref(ae)},e.createSlots({_:2},[l.buttonsPagination?{name:"buttonsPagination",fn:e.withCtx(()=>[e.createVNode(rt,{"current-pagination-number":e.unref(M),"max-pagination-number":e.unref(Z),onUpdatePage:e.unref(re)},null,8,["current-pagination-number","max-pagination-number","onUpdatePage"])]),key:"0"}:void 0]),1032,["is-first-page","is-last-page","onClickNextPage","onClickPrevPage"]))]))],2))}});var ke=U(vt,[["__scopeId","data-v-1485792e"]]);return typeof window!="undefined"&&window.Vue&&window.Vue.createApp({}).component("Vue3EasyDataTable",ke),ke});
