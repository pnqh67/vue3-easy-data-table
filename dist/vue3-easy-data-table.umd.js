(function(e,re){typeof exports=="object"&&typeof module!="undefined"?module.exports=re(require("vue")):typeof define=="function"&&define.amd?define(["vue"],re):(e=typeof globalThis!="undefined"?globalThis:e||self,e["vue3-easy-data-table"]=re(e.Vue))})(this,function(e){"use strict";var re="",M=(o,i)=>{const t=o.__vccOpts||o;for(const[r,m]of i)t[r]=m;return t};const Fe=o=>(e.pushScopeId("data-v-e0a0b7f0"),o=o(),e.popScopeId(),o),ze=["onClick"],De=["checked"],Me=Fe(()=>e.createElementVNode("label",{for:"checbox"},null,-1)),He=e.defineComponent({__name:"MultipleSelectCheckBox",props:{status:{type:String,required:!0}},emits:["change"],setup(o,{emit:i}){const t=o;e.useCssVars(l=>({"51ab8a49":e.unref(c)}));const r=e.computed(()=>t.status==="allSelected"),m=()=>{i("change",!r.value)},c=e.inject("themeColor");return(l,a)=>(e.openBlock(),e.createElementBlock("div",{class:"easy-checkbox",onClick:e.withModifiers(m,["stop","prevent"])},[e.createElementVNode("input",{type:"checkbox",checked:r.value,class:e.normalizeClass(o.status)},null,10,De),Me],8,ze))}});var ye=M(He,[["__scopeId","data-v-e0a0b7f0"]]),ia="";const Oe=o=>(e.pushScopeId("data-v-7e69a276"),o=o(),e.popScopeId(),o),je=["checked"],We=Oe(()=>e.createElementVNode("label",{for:"checbox"},null,-1)),qe=e.defineComponent({__name:"SingleSelectCheckBox",props:{checked:{type:Boolean,required:!0}},emits:["change"],setup(o,{emit:i}){e.useCssVars(r=>({fdaf7e9e:e.unref(t)}));const t=e.inject("themeColor");return(r,m)=>(e.openBlock(),e.createElementBlock("div",{class:"easy-checkbox",onClick:m[0]||(m[0]=e.withModifiers(c=>i("change"),["stop","prevent"]))},[e.createElementVNode("input",{type:"checkbox",checked:o.checked},null,8,je),We]))}});var Je=M(qe,[["__scopeId","data-v-7e69a276"]]),ca="";const Ue=o=>(e.pushScopeId("data-v-4ca5de3a"),o=o(),e.popScopeId(),o),Ge={class:"easy-data-table__rows-selector"},Ke={class:"rows-input"},Qe=Ue(()=>e.createElementVNode("div",{class:"triangle"},null,-1)),Xe=["onClick"],Ye=e.defineComponent({__name:"RowsSelector",props:{modelValue:{type:Number,required:!0},rowsItems:{type:Array,required:!0}},emits:["update:modelValue"],setup(o,{emit:i}){const t=o;e.useCssVars(_=>({"1b889342":e.unref(h)}));const r=e.ref(!1),m=e.ref(!1),c=e.inject("dataTable");e.watch(r,_=>{if(_&&c){const g=window.innerHeight,k=c.value.getBoundingClientRect().height,A=c.value.getBoundingClientRect().top;g-(k+A)<=100?m.value=!0:m.value=!1}});const l=e.computed({get:()=>t.modelValue,set:_=>{i("update:modelValue",_)}}),a=_=>{l.value=_,r.value=!1},d=(_,g)=>{let k=_.parentNode;for(;k!=null;){if(k.classList&&k.classList.contains(g))return!0;k=k.parentNode}return!1},p=_=>{d(_.target,"easy-data-table__rows-selector")||(r.value=!1)};e.onMounted(()=>{document.addEventListener("click",p)}),e.onBeforeUnmount(()=>{document.removeEventListener("click",p)});const h=e.inject("themeColor");return(_,g)=>(e.openBlock(),e.createElementBlock("div",Ge,[e.createElementVNode("div",{class:"rows-input__wrapper",onClick:g[0]||(g[0]=k=>r.value=!r.value)},[e.createElementVNode("div",Ke,e.toDisplayString(l.value),1),Qe]),e.createElementVNode("ul",{class:e.normalizeClass(["select-items",{show:r.value,inside:m.value}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.rowsItems,k=>(e.openBlock(),e.createElementBlock("li",{key:k,class:e.normalizeClass({selected:k===l.value}),onClick:A=>a(k)},e.toDisplayString(k),11,Xe))),128))],2)]))}});var Ze=M(Ye,[["__scopeId","data-v-4ca5de3a"]]),da="";const le=o=>(e.pushScopeId("data-v-1fa3a520"),o=o(),e.popScopeId(),o),et={class:"lds-ring"},tt=[le(()=>e.createElementVNode("div",null,null,-1)),le(()=>e.createElementVNode("div",null,null,-1)),le(()=>e.createElementVNode("div",null,null,-1)),le(()=>e.createElementVNode("div",null,null,-1))],at=e.defineComponent({__name:"Loading",setup(o){e.useCssVars(t=>({26774109:e.unref(i)}));const i=e.inject("themeColor");return(t,r)=>(e.openBlock(),e.createElementBlock("div",et,tt))}});var nt=M(at,[["__scopeId","data-v-1fa3a520"]]),ga="";const ot={class:"loader-line"},rt=e.defineComponent({__name:"LoadingLine",setup(o){e.useCssVars(t=>({"0d327f57":e.unref(i)}));const i=e.inject("themeColor");return(t,r)=>(e.openBlock(),e.createElementBlock("div",ot))}});var lt=M(rt,[["__scopeId","data-v-7d281cac"]]),ya="";const st={class:"buttons-pagination"},it=["onClick"],q=7,ct=e.defineComponent({__name:"ButtonsPagination",props:{maxPaginationNumber:{type:Number,required:!0},currentPaginationNumber:{type:Number,required:!0}},emits:["updatePage"],setup(o,{emit:i}){const t=o;e.useCssVars(l=>({"40dd4f07":e.unref(c)}));const r=l=>{l.type==="button"&&!l.active&&i("updatePage",l.page)},m=e.computed(()=>{const l=[];if(t.maxPaginationNumber<=q)for(let a=1;a<=t.maxPaginationNumber;a+=1)l.push({type:"button",page:a,active:a===t.currentPaginationNumber,activePrev:a+1===t.currentPaginationNumber});else if([1,2,t.maxPaginationNumber,t.maxPaginationNumber-1].includes(t.currentPaginationNumber))for(let a=1;a<=q;a+=1)if(a<=3)l.push({type:"button",page:a,active:a===t.currentPaginationNumber,activePrev:a+1===t.currentPaginationNumber});else if(a===4)l.push({type:"omission"});else{const d=t.maxPaginationNumber-(q-a);l.push({type:"button",page:d,active:d===t.currentPaginationNumber,activePrev:d+1===t.currentPaginationNumber})}else if([3,4].includes(t.currentPaginationNumber))for(let a=1;a<=q;a+=1)a<=5?l.push({type:"button",page:a,active:a===t.currentPaginationNumber,activePrev:a+1===t.currentPaginationNumber}):a===6?l.push({type:"omission"}):l.push({type:"button",page:t.maxPaginationNumber,active:t.maxPaginationNumber===t.currentPaginationNumber,activePrev:a+1===t.currentPaginationNumber});else if([t.maxPaginationNumber-2,t.maxPaginationNumber-3].includes(t.currentPaginationNumber))for(let a=1;a<=q;a+=1)if(a===1)l.push({type:"button",page:1,active:t.currentPaginationNumber===1,activePrev:a+1===t.currentPaginationNumber});else if(a===2)l.push({type:"omission"});else{const d=t.maxPaginationNumber-(q-a);l.push({type:"button",page:d,active:d===t.currentPaginationNumber,activePrev:d+1===t.currentPaginationNumber})}else for(let a=1;a<=q;a+=1)if(a===1)l.push({type:"button",page:1,active:t.currentPaginationNumber===1,activePrev:a+1===t.currentPaginationNumber});else if(a===2||a===6)l.push({type:"omission"});else if(a===7)l.push({type:"button",page:t.maxPaginationNumber,active:t.maxPaginationNumber===t.currentPaginationNumber,activePrev:a+1===t.currentPaginationNumber});else{const d=4-a,p=t.currentPaginationNumber-d;l.push({type:"button",page:p,active:p===t.currentPaginationNumber,activePrev:p+1===t.currentPaginationNumber})}return l}),c=e.inject("themeColor");return(l,a)=>(e.openBlock(),e.createElementBlock("div",st,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,(d,p)=>(e.openBlock(),e.createElementBlock("div",{key:p,class:e.normalizeClass(["item",{button:d.type==="button",active:d.type==="button"&&d.active,"active-prev":d.type==="button"&&d.activePrev,omission:d.type==="omission"}]),onClick:h=>r(d)},e.toDisplayString(d.type==="button"?d.page:"..."),11,it))),128))]))}});var dt=M(ct,[["__scopeId","data-v-4c681fa2"]]),ha="";const he=o=>(e.pushScopeId("data-v-c9da5286"),o=o(),e.popScopeId(),o),ut=[he(()=>e.createElementVNode("span",{class:"arrow arrow-right"},null,-1))],pt=[he(()=>e.createElementVNode("span",{class:"arrow arrow-left"},null,-1))],ft=e.defineComponent({__name:"PaginationArrows",props:{isFirstPage:{type:Boolean,required:!1},isLastPage:{type:Boolean,required:!1}},emits:["clickPrevPage","clickNextPage"],setup(o,{emit:i}){const t=e.useSlots();return(r,m)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",{class:e.normalizeClass(["previous-page__click-button",{"first-page":o.isFirstPage}]),onClick:m[0]||(m[0]=c=>i("clickPrevPage"))},ut,2),e.unref(t).buttonsPagination?e.renderSlot(r.$slots,"buttonsPagination",{key:0},void 0,!0):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["next-page__click-button",{"last-page":o.isLastPage}]),onClick:m[1]||(m[1]=c=>i("clickNextPage"))},pt,2)],64))}});var mt=M(ft,[["__scopeId","data-v-c9da5286"]]);function gt(o,i,t,r){return{clickRow:(c,l,a)=>{if(o.value!==l)return;const d={...c};if(i.value){const{checkbox:p}=c;delete d.checkbox,d.isSelected=p}if(t.value){const{index:p}=c;delete d.index,d.indexInCurrentPage=p}r("clickRow",d,a)}}}function yt(o,i,t){const r=e.ref([]);return{expandingItemIndexList:r,updateExpandingItemIndexList:(l,a,d)=>{d.stopPropagation();const p=r.value.indexOf(l);if(p!==-1)r.value.splice(p,1);else{const h=o.value.findIndex(_=>JSON.stringify(_)===JSON.stringify(a));t("expandRow",i.value+h,a),r.value.push(i.value+h)}},clearExpandingItemIndexList:()=>{r.value=[]}}}function ht(o){const i=e.computed(()=>o.value.filter(m=>m.fixed)),t=e.computed(()=>i.value.length?i.value[i.value.length-1].value:""),r=e.computed(()=>{if(!i.value.length)return[];const m=i.value.map(c=>{var l;return(l=c.width)!=null?l:100});return i.value.map((c,l)=>{var a,d;return{value:c.value,fixed:(a=c.fixed)!=null?a:!0,width:(d=c.width)!=null?d:100,distance:l===0?0:m.reduce((p,h,_)=>{let g=p;return _<l&&(g+=h),g})}})});return{fixedHeaders:i,lastFixedColumn:t,fixedColumnsInfos:r}}function _t(o,i,t,r,m,c,l,a,d,p,h,_,g,k,A,b,I,v,F){const u=e.computed(()=>l.value.findIndex(y=>y.fixed)!==-1),P=e.computed(()=>u.value?l.value.filter(y=>y.fixed):[]),S=e.computed(()=>l.value.filter(y=>!y.fixed)),B=(y,z)=>Array.isArray(y)&&Array.isArray(z)?{sortBy:y,sortDesc:z.map(C=>C==="desc")}:y!==""?{sortBy:A.value,sortDesc:b.value==="desc"}:null,f=e.ref(B(A.value,b.value)),w=e.computed(()=>{var se;const z=[...P.value,...S.value].map(K=>{const V=Object.assign(K);if(V.sortable&&(V.sortType="none"),g.value)if(Array.isArray(g.value.sortBy)&&Array.isArray(g.value.sortType)&&g.value.sortBy.includes(V.value)){const X=g.value.sortBy.indexOf(V.value);V.sortType=g.value.sortType[X]}else V.value===g.value.sortBy&&g.value.sortType&&(V.sortType=g.value.sortType);if(f.value&&Array.isArray(f.value.sortBy)&&Array.isArray(f.value.sortDesc)&&f.value.sortBy.includes(V.value)){const X=f.value.sortBy.indexOf(V.value);V.sortType=f.value.sortDesc[X]?"desc":"asc"}else f.value&&V.value===f.value.sortBy&&(V.sortType=f.value.sortDesc?"desc":"asc");return V});let C=[];a.value?C=[m.value||u.value?{text:"",value:"expand",fixed:!0,width:t.value}:{text:"",value:"expand"},...z]:C=z;let R=[];k.value?R=[c.value||u.value?{text:o.value,value:"index",fixed:!0,width:d.value}:{text:o.value,value:"index"},...C]:R=C;let Q=[];return p.value?Q=[r.value||u.value?{text:"checkbox",value:"checkbox",fixed:!0,width:(se=i.value)!=null?se:36}:{text:"checkbox",value:"checkbox"},...R]:Q=R,Q}),E=e.computed(()=>w.value.map(y=>y.value));return{clientSortOptions:f,headerColumns:E,headersForRender:w,updateSortField:(y,z)=>{let C=null;if(z==="none"?C="asc":z==="asc"?C="desc":C=_.value?"asc":null,h.value&&v(y,C),f.value&&Array.isArray(f.value.sortBy)&&Array.isArray(f.value.sortDesc)){const R=f.value.sortBy.indexOf(y);R===-1?C!==null&&(f.value.sortBy.push(y),f.value.sortDesc.push(C==="desc")):C===null?(f.value.sortDesc.splice(R,1),f.value.sortBy.splice(R,1)):f.value.sortDesc[R]=C==="desc"}else C===null?f.value=null:f.value={sortBy:y,sortDesc:C==="desc"};F("updateSort",{sortType:C,sortBy:y})},isMultiSorting:y=>g.value&&Array.isArray(g.value.sortBy)?g.value.sortBy.includes(y):f.value&&Array.isArray(f.value.sortBy)?f.value.sortBy.includes(y):!1,getMultiSortNumber:y=>g.value&&Array.isArray(g.value.sortBy)?g.value.sortBy.indexOf(y)+1:f.value&&Array.isArray(f.value.sortBy)?f.value.sortBy.indexOf(y)+1:!1}}function kt(o,i,t,r,m,c,l,a,d){const p=e.computed(()=>(o.value-1)*m.value+1),h=e.computed(()=>t.value?Math.min(d.value,o.value*m.value):Math.min(a.value.length,o.value*m.value)),_=e.computed(()=>t.value?r.value:a.value.slice(p.value-1,h.value)),g=e.computed(()=>l.value?_.value.map((b,I)=>({index:p.value+I,...b})):_.value),k=e.computed(()=>c.value.length===0||c.value.every(I=>a.value.findIndex(v=>JSON.stringify(I)===JSON.stringify(v))===-1)?"noneSelected":c.value.length===a.value.length&&c.value.every(v=>a.value.findIndex(F=>JSON.stringify(v)===JSON.stringify(F))!==-1)?"allSelected":"partSelected"),A=e.computed(()=>i.value?k.value==="allSelected"?g.value.map(b=>({checkbox:!0,...b})):k.value==="noneSelected"?g.value.map(b=>({checkbox:!1,...b})):g.value.map(b=>({checkbox:c.value.findIndex(v=>{const F={...b};return delete F.index,JSON.stringify(v)===JSON.stringify(F)})!==-1,...b})):g.value);return{currentPageFirstIndex:p,currentPageLastIndex:h,multipleSelectStatus:k,pageItems:A}}function bt(o,i,t,r,m,c,l){const a=e.ref(c.value?c.value.page:o.value),d=e.computed(()=>Math.ceil(r.value/m.value)),p=e.computed(()=>d.value===0||a.value===d.value),h=e.computed(()=>a.value===1);return{currentPaginationNumber:a,maxPaginationNumber:d,isLastPage:p,isFirstPage:h,nextPage:()=>{if(r.value!==0&&!p.value&&!t.value)if(i.value){const b=a.value+1;l(b)}else a.value+=1},prevPage:()=>{if(r.value!==0&&!h.value&&!t.value)if(i.value){const b=a.value-1;l(b)}else a.value-=1},updatePage:b=>{t.value||(i.value?l(b):a.value=b)},updateCurrentPaginationNumber:b=>{a.value=b}}}function Pt(o,i,t,r){const m=e.computed(()=>!o.value&&i.value.findIndex(a=>a===r.value)===-1?[r.value,...i.value]:i.value),c=e.ref(t.value?t.value.rowsPerPage:r.value);return{rowsItemsComputed:m,rowsPerPageRef:c,updateRowsPerPage:a=>{c.value=a}}}function xt(o,i,t){const r=e.computed({get:()=>{if(o.value){const{page:a,rowsPerPage:d,sortBy:p,sortType:h}=o.value;return{page:a,rowsPerPage:d,sortBy:p!=null?p:null,sortType:h!=null?h:null}}return null},set:a=>{t("update:serverOptions",a)}});return{serverOptionsComputed:r,updateServerOptionsPage:a=>{r.value&&(r.value={...r.value,page:a})},updateServerOptionsSort:(a,d)=>{if(r.value)if(i.value&&Array.isArray(r.value.sortBy)&&Array.isArray(r.value.sortType)){const p=r.value.sortBy.findIndex(h=>h===a);p===-1&&d!==null&&(r.value.sortBy.push(a),r.value.sortType.push(d)),d===null?(r.value.sortBy.splice(p,1),r.value.sortType.splice(p,1)):r.value.sortType[p]=d}else r.value={...r.value,sortBy:d!==null?a:null,sortType:d}},updateServerOptionsRowsPerPage:a=>{r.value&&(r.value={...r.value,page:1,rowsPerPage:a})}}}function $(o,i){var t;if(o.includes(".")){const r=o.split("."),{length:m}=r;let c,l=0;for(;l<m;){if(l===0)c=i[r[0]];else if(c&&typeof c=="object")c=c[r[l]];else{c="";break}l+=1}return c!=null?c:""}return(t=i[o])!=null?t:""}function St(o,i){const t=$(o,i);return Array.isArray(t)?t.join(","):t}function Ct(o,i,t,r,m,c,l,a,d,p){const h=u=>{if(typeof c.value=="string"&&c.value!=="")return $(c.value,u);if(Array.isArray(c.value)){let P="";return c.value.forEach(S=>{P+=$(S,u)}),P}return Object.values(u).join(" ")},_=e.computed(()=>{if(!t.value&&l.value!==""){const u=new RegExp(l.value,"i");return r.value.filter(P=>u.test(h(P)))}return r.value}),g=e.computed(()=>{let u=[..._.value];return i.value?(i.value.forEach(P=>{u=u.filter(S=>{const{field:B,comparison:f,criteria:w}=P;if(typeof f=="function")return f($(B,S),w);const E=$(B,S);switch(f){case"=":return E===w;case"!=":return E!==w;case">":return E>w;case"<":return E<w;case"<=":return E<=w;case">=":return E>=w;case"between":return E>=Math.min(...w)&&E<=Math.max(...w);case"in":return w.includes(E);default:return E===w}})}),u):_.value});e.watch(g,u=>{i.value&&p("updateFilter",u)},{immediate:!0,deep:!0});function k(u,P,S,B){const f=u[B],w=P[B];return(B===0?S:k(u,P,S,B-1)).sort((H,G)=>{let O=!0;for(let y=0;y<B;y+=1)if($(u[y],H)!==$(u[y],G)){O=!1;break}return O?$(f,H)<$(f,G)?w?1:-1:$(f,H)>$(f,G)?w?-1:1:0:0})}const A=e.computed(()=>{if(t.value)return r.value;if(o.value===null)return g.value;const{sortBy:u,sortDesc:P}=o.value,S=[...g.value];return d&&Array.isArray(u)&&Array.isArray(P)?u.length===0?S:k(u,P,S,u.length-1):S.sort((B,f)=>$(u,B)<$(u,f)?P?1:-1:$(u,B)>$(u,f)?P?-1:1:0)}),b=e.computed(()=>t.value?a.value:A.value.length),I=e.computed({get:()=>{var u;return(u=m.value)!=null?u:[]},set:u=>{p("update:itemsSelected",u)}});return{totalItems:A,selectItemsComputed:I,totalItemsLength:b,toggleSelectAll:u=>{I.value=u?A.value:[],u&&p("selectAll")},toggleSelectItem:u=>{const P=u.checkbox;if(delete u.checkbox,delete u.index,P)I.value=I.value.filter(S=>JSON.stringify(S)!==JSON.stringify(u)),p("deselectRow",u);else{const S=I.value;S.unshift(u),I.value=S,p("selectRow",u)}}}}var Nt={alternating:{type:Boolean,default:!1},buttonsPagination:{type:Boolean,default:!1},checkboxColumnWidth:{type:Number,default:null},currentPage:{type:Number,default:1},emptyMessage:{type:String,default:"No Available Data"},expandColumnWidth:{type:Number,default:36},filterOptions:{type:Array,default:null},fixedExpand:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!0},fixedCheckbox:{type:Boolean,default:!1},fixedIndex:{type:Boolean,default:!1},headerTextDirection:{type:String,default:"left"},bodyTextDirection:{type:String,default:"left"},hideFooter:{type:Boolean,default:!1},hideRowsPerPage:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},indexColumnWidth:{type:Number,default:60},itemsSelected:{type:Array,default:null},loading:{type:Boolean,default:!1},rowsPerPage:{type:Number,default:25},rowsItems:{type:Array,default:()=>[25,50,100]},rowsPerPageMessage:{type:String,default:"rows per page:"},searchField:{type:[String,Array],default:""},searchValue:{type:String,default:""},serverOptions:{type:Object,default:null},serverItemsLength:{type:Number,default:0},showIndex:{type:Boolean,default:!1},sortBy:{type:[String,Array],default:""},sortType:{type:[String,Array],default:"asc"},multiSort:{type:Boolean,default:!1},tableMinHeight:{type:Number,default:180},tableHeight:{type:Number,default:null},themeColor:{type:String,default:"#42b883"},tableClassName:{type:String,default:""},headerClassName:{type:String,default:""},headerItemClassName:{type:[Function,String],default:""},bodyRowClassName:{type:[Function,String],default:""},bodyExpandRowClassName:{type:[Function,String],default:""},bodyItemClassName:{type:[Function,String],default:""},noHover:{type:Boolean,default:!1},borderCell:{type:Boolean,default:!1},mustSort:{type:Boolean,default:!1},rowsOfPageSeparatorMessage:{type:String,default:"of"},clickEventType:{type:String,default:"single"},clickRowToExpand:{type:Boolean,default:!1},tableNodeId:{type:String,default:""},showIndexSymbol:{type:String,default:"#"},preventContextMenuRow:{type:Boolean,default:!0}},ba="",Pa="";const Bt=o=>(e.pushScopeId("data-v-6e3c351c"),o=o(),e.popScopeId(),o),wt=["id"],It=["onClick"],Et={key:3,class:"header-text"},$t={key:5,class:"multi-sort__number"},Vt=["onClick","onDblclick","onContextmenu"],At=["onClick"],Tt=["colspan"],Rt={class:"vue3-easy-data-table__header"},Lt=["onClick"],vt={key:3,class:"header-text"},Ft={key:5,class:"multi-sort__number"},zt={key:0,class:"vue3-easy-data-table__loading"},Dt=Bt(()=>e.createElementVNode("div",{class:"vue3-easy-data-table__loading-mask"},null,-1)),Mt={class:"loading-entity"},Ht={key:1,class:"vue3-easy-data-table__message"},Ot={key:0,class:"vue3-easy-data-table__footer"},jt={key:0,class:"pagination__rows-per-page"},Wt={class:"pagination__items-index"},qt=e.defineComponent({__name:"DataTable",props:{...Nt,items:{type:Array,required:!0},headers:{type:Array,required:!0}},emits:["clickRow","contextmenuRow","selectRow","deselectRow","expandRow","updateSort","updateFilter","update:itemsSelected","update:serverOptions","updatePageItems","updateTotalItems","selectAll"],setup(o,{expose:i,emit:t}){const r=o;e.useCssVars(s=>({"6fb57bbc":Ut.value,"86bd6c98":Jt.value}));const{tableNodeId:m,clickEventType:c,bodyTextDirection:l,checkboxColumnWidth:a,currentPage:d,expandColumnWidth:p,filterOptions:h,fixedCheckbox:_,fixedExpand:g,fixedHeader:k,fixedIndex:A,headers:b,headerTextDirection:I,indexColumnWidth:v,items:F,itemsSelected:u,loading:P,mustSort:S,multiSort:B,rowsItems:f,rowsPerPage:w,searchField:E,searchValue:H,serverItemsLength:G,serverOptions:O,showIndex:y,sortBy:z,sortType:C,tableHeight:R,tableMinHeight:Q,themeColor:se,rowsOfPageSeparatorMessage:K,showIndexSymbol:V,preventContextMenuRow:X}=e.toRefs(r),Jt=e.computed(()=>R.value?`${R.value}px`:null),Ut=e.computed(()=>`${Q.value}px`);e.provide("themeColor",se.value);const T=e.useSlots(),Gt=e.computed(()=>!!T.pagination),Kt=e.computed(()=>!!T.loading),ke=e.computed(()=>!!T.expand),Qt=e.computed(()=>!!T.body),be=e.ref(),de=e.ref();e.provide("dataTable",be);const Pe=e.ref(!1);e.onMounted(()=>{de.value.addEventListener("scroll",()=>{Pe.value=de.value.scrollLeft>0})});const ue=e.computed(()=>u.value!==null),J=e.computed(()=>O.value!==null),{serverOptionsComputed:pe,updateServerOptionsPage:Xt,updateServerOptionsSort:Yt,updateServerOptionsRowsPerPage:Zt}=xt(O,B,t),{clientSortOptions:xe,headerColumns:Se,headersForRender:j,updateSortField:Ce,isMultiSorting:Ne,getMultiSortNumber:Be}=_t(V,a,p,_,g,A,b,ke,v,ue,J,S,pe,y,z,C,B,Yt,t),{rowsItemsComputed:we,rowsPerPageRef:W,updateRowsPerPage:ea}=Pt(J,f,O,w),{totalItems:Ie,selectItemsComputed:ta,totalItemsLength:ie,toggleSelectAll:Ee,toggleSelectItem:aa}=Ct(xe,h,J,F,u,E,H,G,B,t),{currentPaginationNumber:D,maxPaginationNumber:Y,isLastPage:Z,isFirstPage:ee,nextPage:te,prevPage:ae,updatePage:ne,updateCurrentPaginationNumber:na}=bt(d,J,P,ie,W,O,Xt),{currentPageFirstIndex:$e,currentPageLastIndex:Ve,multipleSelectStatus:ce,pageItems:U}=kt(D,ue,J,F,W,ta,y,Ie,ie),oe=e.computed(()=>D.value===0?0:(D.value-1)*W.value),{expandingItemIndexList:Ae,updateExpandingItemIndexList:Te,clearExpandingItemIndexList:Re}=yt(U,oe,t),{fixedHeaders:fe,lastFixedColumn:me,fixedColumnsInfos:oa}=ht(j),{clickRow:Le}=gt(c,ue,y,t),ra=(s,L)=>{X.value&&L.preventDefault(),t("contextmenuRow",s,L)},la=s=>{var n;const L=(n=s.width)!=null?n:fe.value.length?100:null;if(L)return`width: ${L}px; min-width: ${L}px;`},ge=(s,L="th")=>{if(!fe.value.length)return;const n=oa.value.find(N=>N.value===s);if(n)return`left: ${n.distance}px;z-index: ${L==="th"?3:1};position: sticky;`};return e.watch(P,(s,L)=>{pe.value&&s===!1&&L===!0&&(na(pe.value.page),Re())}),e.watch(W,s=>{J.value?Zt(s):ne(1)}),e.watch([H,h],()=>{J.value||ne(1)}),e.watch([D,xe,E,H,h],()=>{Re()},{deep:!0}),e.watch(U,s=>{t("updatePageItems",s)},{deep:!0}),e.watch(Ie,s=>{t("updateTotalItems",s)},{deep:!0}),i({currentPageFirstIndex:$e,currentPageLastIndex:Ve,clientItemsLength:ie,maxPaginationNumber:Y,currentPaginationNumber:D,isLastPage:Z,isFirstPage:ee,nextPage:te,prevPage:ae,updatePage:ne,rowsPerPageOptions:we,rowsPerPageActiveOption:W,updateRowsPerPageActiveOption:ea}),(s,L)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"dataTable",ref:be,class:e.normalizeClass(["vue3-easy-data-table",[s.tableClassName]])},[e.createElementVNode("div",{ref_key:"tableBody",ref:de,class:e.normalizeClass(["vue3-easy-data-table__main",{"fixed-header":e.unref(k),"fixed-height":e.unref(R),"show-shadow":Pe.value,"table-fixed":e.unref(fe).length,hoverable:!s.noHover,"border-cell":s.borderCell}])},[e.createElementVNode("table",{id:e.unref(m)},[e.createElementVNode("colgroup",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(j),(n,N)=>(e.openBlock(),e.createElementBlock("col",{key:N,style:e.normalizeStyle(la(n))},null,4))),128))]),e.unref(T)["customize-headers"]?e.renderSlot(s.$slots,"customize-headers",{key:0},void 0,!0):e.unref(j).length&&!s.hideHeader?(e.openBlock(),e.createElementBlock("thead",{key:1,class:e.normalizeClass(["vue3-easy-data-table__header",[s.headerClassName]])},[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(j),(n,N)=>(e.openBlock(),e.createElementBlock("th",{key:N,class:e.normalizeClass([{sortable:n.sortable,none:n.sortable&&n.sortType==="none",desc:n.sortable&&n.sortType==="desc",asc:n.sortable&&n.sortType==="asc",shadow:n.value===e.unref(me)},typeof s.headerItemClassName=="string"?s.headerItemClassName:s.headerItemClassName(n,N+1)]),style:e.normalizeStyle(ge(n.value)),onClick:e.withModifiers(x=>n.sortable&&n.sortType?e.unref(Ce)(n.value,n.sortType):null,["stop"])},[n.text==="checkbox"?(e.openBlock(),e.createBlock(ye,{key:e.unref(ce),status:e.unref(ce),onChange:e.unref(Ee)},null,8,["status","onChange"])):(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(["header",`direction-${e.unref(I)}`])},[e.unref(T)[`header-${n.value}`]?e.renderSlot(s.$slots,`header-${n.value}`,e.normalizeProps(e.mergeProps({key:0},n)),void 0,!0):e.unref(T)[`header-${n.value.toLowerCase()}`]?e.renderSlot(s.$slots,`header-${n.value.toLowerCase()}`,e.normalizeProps(e.mergeProps({key:1},n)),void 0,!0):e.unref(T).header?e.renderSlot(s.$slots,"header",e.normalizeProps(e.mergeProps({key:2},n)),void 0,!0):(e.openBlock(),e.createElementBlock("span",Et,e.toDisplayString(n.text),1)),n.sortable?(e.openBlock(),e.createElementBlock("i",{key:n.sortType?n.sortType:"none",class:e.normalizeClass(["sortType-icon",{desc:n.sortType==="desc"}])},null,2)):e.createCommentVNode("",!0),e.unref(B)&&e.unref(Ne)(n.value)?(e.openBlock(),e.createElementBlock("span",$t,e.toDisplayString(e.unref(Be)(n.value)),1)):e.createCommentVNode("",!0)],2))],14,It))),128))])],2)):e.createCommentVNode("",!0),Qt.value?e.renderSlot(s.$slots,"body",e.normalizeProps(e.mergeProps({key:2},e.unref(U))),void 0,!0):e.unref(Se).length?(e.openBlock(),e.createElementBlock("tbody",{key:3,class:e.normalizeClass(["vue3-easy-data-table__body",{"row-alternation":s.alternating}])},[e.renderSlot(s.$slots,"body-prepend",e.normalizeProps(e.guardReactiveProps({items:e.unref(U),pagination:{isFirstPage:e.unref(ee),isLastPage:e.unref(Z),currentPaginationNumber:e.unref(D),maxPaginationNumber:e.unref(Y),nextPage:e.unref(te),prevPage:e.unref(ae)},headers:e.unref(j)})),void 0,!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(U),(n,N)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:N},[e.createElementVNode("tr",{class:e.normalizeClass([{"even-row":(N+1)%2===0},typeof s.bodyRowClassName=="string"?s.bodyRowClassName:s.bodyRowClassName(n,N+1)]),onClick:x=>{e.unref(Le)(n,"single",x),s.clickRowToExpand&&e.unref(Te)(N+oe.value,n,x)},onDblclick:x=>{e.unref(Le)(n,"double",x)},onContextmenu:x=>{ra(n,x)}},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(Se),(x,sa)=>(e.openBlock(),e.createElementBlock("td",{key:sa,style:e.normalizeStyle(ge(x,"td")),class:e.normalizeClass([{shadow:x===e.unref(me),"can-expand":x==="expand"},typeof s.bodyItemClassName=="string"?s.bodyItemClassName:s.bodyItemClassName(x,N+1),`direction-${e.unref(l)}`]),onClick:ve=>x==="expand"?e.unref(Te)(N+oe.value,n,ve):null},[e.unref(T)[`item-${x}`]?e.renderSlot(s.$slots,`item-${x}`,e.normalizeProps(e.mergeProps({key:0},n)),void 0,!0):e.unref(T)[`item-${x.toLowerCase()}`]?e.renderSlot(s.$slots,`item-${x.toLowerCase()}`,e.normalizeProps(e.mergeProps({key:1},n)),void 0,!0):x==="expand"?(e.openBlock(),e.createElementBlock("i",{key:2,class:e.normalizeClass(["expand-icon",{expanding:e.unref(Ae).includes(oe.value+N)}])},null,2)):x==="checkbox"?(e.openBlock(),e.createBlock(Je,{key:3,checked:n[x],onChange:ve=>e.unref(aa)(n)},null,8,["checked","onChange"])):e.unref(T).item?e.renderSlot(s.$slots,"item",e.normalizeProps(e.mergeProps({key:4},{column:x,item:n})),void 0,!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:5},[e.createTextVNode(e.toDisplayString(e.unref(St)(x,n)),1)],64))],14,At))),128))],42,Vt),ke.value&&e.unref(Ae).includes(N+oe.value)?(e.openBlock(),e.createElementBlock("tr",{key:0,class:e.normalizeClass([{"even-row":(N+1)%2===0},typeof s.bodyExpandRowClassName=="string"?s.bodyExpandRowClassName:s.bodyExpandRowClassName(n,N+1)])},[e.createElementVNode("td",{colspan:e.unref(j).length,class:"expand"},[n.expandLoading?(e.openBlock(),e.createBlock(lt,{key:0,class:"expand-loading"})):e.createCommentVNode("",!0),e.renderSlot(s.$slots,"expand",e.normalizeProps(e.guardReactiveProps(n)),void 0,!0)],8,Tt)],2)):e.createCommentVNode("",!0)],64))),128)),e.renderSlot(s.$slots,"body-append",e.normalizeProps(e.guardReactiveProps({items:e.unref(U),pagination:{isFirstPage:e.unref(ee),isLastPage:e.unref(Z),currentPaginationNumber:e.unref(D),maxPaginationNumber:e.unref(Y),nextPage:e.unref(te),prevPage:e.unref(ae),updatePage:e.unref(ne)},headers:e.unref(j)})),void 0,!0)],2)):e.createCommentVNode("",!0),e.createElementVNode("tfoot",Rt,[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(j),(n,N)=>(e.openBlock(),e.createElementBlock("th",{key:N,class:e.normalizeClass([{sortable:n.sortable,none:n.sortable&&n.sortType==="none",desc:n.sortable&&n.sortType==="desc",asc:n.sortable&&n.sortType==="asc",shadow:n.value===e.unref(me)},typeof s.headerItemClassName=="string"?s.headerItemClassName:s.headerItemClassName(n,N+1)]),style:e.normalizeStyle(ge(n.value)),onClick:e.withModifiers(x=>n.sortable&&n.sortType?e.unref(Ce)(n.value,n.sortType):null,["stop"])},[n.text==="checkbox"?(e.openBlock(),e.createBlock(ye,{key:e.unref(ce),status:e.unref(ce),onChange:e.unref(Ee)},null,8,["status","onChange"])):(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(["header",`direction-${e.unref(I)}`])},[e.unref(T)[`header-${n.value}`]?e.renderSlot(s.$slots,`header-${n.value}`,e.normalizeProps(e.mergeProps({key:0},n)),void 0,!0):e.unref(T)[`header-${n.value.toLowerCase()}`]?e.renderSlot(s.$slots,`header-${n.value.toLowerCase()}`,e.normalizeProps(e.mergeProps({key:1},n)),void 0,!0):e.unref(T).header?e.renderSlot(s.$slots,"header",e.normalizeProps(e.mergeProps({key:2},n)),void 0,!0):(e.openBlock(),e.createElementBlock("span",vt,e.toDisplayString(n.text),1)),n.sortable?(e.openBlock(),e.createElementBlock("i",{key:n.sortType?n.sortType:"none",class:e.normalizeClass(["sortType-icon",{desc:n.sortType==="desc"}])},null,2)):e.createCommentVNode("",!0),e.unref(B)&&e.unref(Ne)(n.value)?(e.openBlock(),e.createElementBlock("span",Ft,e.toDisplayString(e.unref(Be)(n.value)),1)):e.createCommentVNode("",!0)],2))],14,Lt))),128))])])],8,wt),e.unref(P)?(e.openBlock(),e.createElementBlock("div",zt,[Dt,e.createElementVNode("div",Mt,[Kt.value?e.renderSlot(s.$slots,"loading",{key:0},void 0,!0):(e.openBlock(),e.createBlock(nt,{key:1}))])])):e.createCommentVNode("",!0),!e.unref(U).length&&!e.unref(P)?(e.openBlock(),e.createElementBlock("div",Ht,[e.renderSlot(s.$slots,"empty-message",{},()=>[e.createTextVNode(e.toDisplayString(s.emptyMessage),1)],!0)])):e.createCommentVNode("",!0)],2),s.hideFooter?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",Ot,[s.hideRowsPerPage?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",jt,[e.createTextVNode(e.toDisplayString(s.rowsPerPageMessage)+" ",1),e.createVNode(Ze,{modelValue:e.unref(W),"onUpdate:modelValue":L[0]||(L[0]=n=>e.isRef(W)?W.value=n:null),"rows-items":e.unref(we)},null,8,["modelValue","rows-items"])])),e.createElementVNode("div",Wt,e.toDisplayString(`${e.unref($e)}\u2013${e.unref(Ve)}`)+" "+e.toDisplayString(e.unref(K))+" "+e.toDisplayString(e.unref(ie)),1),Gt.value?e.renderSlot(s.$slots,"pagination",e.normalizeProps(e.mergeProps({key:1},{isFirstPage:e.unref(ee),isLastPage:e.unref(Z),currentPaginationNumber:e.unref(D),maxPaginationNumber:e.unref(Y),nextPage:e.unref(te),prevPage:e.unref(ae)})),void 0,!0):(e.openBlock(),e.createBlock(mt,{key:2,"is-first-page":e.unref(ee),"is-last-page":e.unref(Z),onClickNextPage:e.unref(te),onClickPrevPage:e.unref(ae)},e.createSlots({_:2},[s.buttonsPagination?{name:"buttonsPagination",fn:e.withCtx(()=>[e.createVNode(dt,{"current-pagination-number":e.unref(D),"max-pagination-number":e.unref(Y),onUpdatePage:e.unref(ne)},null,8,["current-pagination-number","max-pagination-number","onUpdatePage"])]),key:"0"}:void 0]),1032,["is-first-page","is-last-page","onClickNextPage","onClickPrevPage"]))]))],2))}});var _e=M(qt,[["__scopeId","data-v-6e3c351c"]]);return typeof window!="undefined"&&window.Vue&&window.Vue.createApp({}).component("Vue3EasyDataTable",_e),_e});
