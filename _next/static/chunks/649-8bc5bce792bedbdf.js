"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[649],{1045:function(e,n,t){t.d(n,{H:function(){return l}});var r=t(2322),o=t(7729),i=t.n(o),s=t(5632);function l(e){var n;let{url:t="https://tamagui.dev",pathname:o,title:l="Tamagui",description:a="",poster:d,...u}=e,c=(0,s.useRouter)(),k=null!==(n=u.image)&&void 0!==n?n:d?"".concat(t,"/").concat(d):"".concat(t,"/social.png"),h=o||c.asPath;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:l}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(t).concat(h)}),(0,r.jsx)("meta",{property:"og:title",content:l}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:image",content:k}),(0,r.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}t(2784)},4476:function(e,n,t){t.d(n,{E:function(){return u}});var r=t(2322),o=t(2685),i=t(4176),s=t(899),l=t(6030),a=t(2832);(0,o.Gy)({Image:a.Z});let d=(0,i.z)(a.Z,{name:"Image",position:"relative",source:{uri:""},zIndex:1}),u=d.extractable(e=>{let n=(0,s.p)(e),{src:t,...o}=n,i="string"==typeof t?{uri:t,...l.$L&&{width:n.width,height:n.height}}:t;return(0,r.jsx)(d,{source:i,...o})})},891:function(e,n,t){t.d(n,{o:function(){return j}});var r=t(2322),o=t(3237),i=t(4176),s=t(3666),l=t(8768),a=t(5721),d=t(2784),u=t(4545),c=t(3819),k=t(7882),h=t(7465);let x=e=>"currentcolor"===e||"currentColor"===e||"inherit"===e||0===e.indexOf("var(");function f({colors:e,locations:n,startPoint:t,endPoint:r,...o}){let[i,s]=d.useState(null),{width:l=1,height:a=1}=i??{},u=d.useMemo(()=>(function(e,n,t,r,o=1,i=1){let s=e.map((e,t)=>{let r=function(e,n=1){if(null==e)return;if("string"==typeof e&&x(e))return e;let t=(0,k.a)(e);if(null!=t){let e=((t>>24&255)/255*n).toFixed(2);return`rgba(${t>>16&255},${t>>8&255},${255&t},${e})`}}(e),o=r;if(n&&n[t]){let e=Math.max(0,Math.min(1,n[t]));o+=` ${100*e}%`}return o}),l=function(e,n,t,r){let o,i;let[s,l]=(o=[0,0],Array.isArray(t)&&(o=[null!=t[0]?t[0]:0,null!=t[1]?t[1]:0]),i=[0,1],Array.isArray(r)&&(i=[null!=r[0]?r[0]:0,null!=r[1]?r[1]:1]),[o,i]);s[0]*=e,l[0]*=e,s[1]*=n,l[1]*=n;let a=l[1]-s[1],d=l[0]-s[0];return 90+180*Math.atan2(a,d)/Math.PI}(o,i,t,r);return`linear-gradient(${l}deg, ${s.join(", ")})`})(e,n,t,r,l,a),[e,n,t,r,l,a]);return d.createElement(h.Z,{...o,style:[o.style,{backgroundImage:u}],onLayout:e=>{let{x:n,y:t,width:r,height:l}=e.nativeEvent.layout,a=i??{x:0,y:0,width:1,height:1};(n!==a.x||t!==a.y||r!==a.width||l!==a.height)&&s({x:n,y:t,width:r,height:l}),o.onLayout&&o.onLayout(e)}})}class p extends d.Component{render(){let{colors:e,locations:n,start:t,end:r,...o}=this.props,i=n;return n&&e.length!==n.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),i=n.slice(0,e.length)),d.createElement(f,{...o,colors:c.Z.select({web:e,default:e.map(k.a)}),locations:i,startPoint:m(t),endPoint:m(r)})}}function m(e){if(e){if(Array.isArray(e)&&2!==e.length){console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}");return}return Array.isArray(e)?e:[e.x,e.y]}}let j=a.FA.extractable((0,o.Y)(d.forwardRef((e,n)=>{let{start:t,end:o,colors:i,locations:s,children:l,...a}=e,d=y(i||[]);return(0,r.jsx)(L,{ref:n,...a,children:(0,r.jsx)(p,{start:t,end:o,colors:d,locations:s,style:u.Z.absoluteFill,children:l})})}))),L=(0,i.z)(a.FA,{name:"LinearGradient",overflow:"hidden",position:"relative"}),y=e=>{let n=(0,s.Fg)();return e.map(e=>"$"===e[0]?(0,l.E0)(n[e]||e):e)}},6270:function(e,n,t){t.d(n,{HC:function(){return b}});var r=t(2322),o=t(4176),i=t(2137),s=t(8768),l=t(6086),a=t(5840),d=t(9415),u=t(3237),c=t(3393),k=t(3235),h=t(2219),x=t(5721),f=t(9130),p=t(7813),m=t(2784);let j="ListItem",L=(0,o.z)(h.K,{name:j,tag:"li",alignItems:"center",flexWrap:"nowrap",width:"100%",borderColor:"$borderColor",maxWidth:"100%",overflow:"hidden",flexDirection:"row",variants:{size:{"...size":(e,n)=>{let{tokens:t}=n;return{minHeight:t.size[e],paddingHorizontal:t.space[e],paddingVertical:(0,k.getSpace)(e,-2)}}},active:{true:{hoverStyle:{backgroundColor:"$background"}}},disabled:{true:{opacity:.5,pointerEvents:"none"}}},defaultVariants:{size:"$true"}}),y=(0,o.z)(f.J,{name:"ListItemText",color:"$color",userSelect:"none",flexGrow:1,flexShrink:1,ellipse:!0,cursor:"default"}),g=(0,o.z)(y,{name:"ListItemSubtitle",color:"$colorPress",marginTop:"$-2",opacity:.65,maxWidth:"100%",size:"$3"}),$=(0,o.z)(y,{name:"ListItemTitle"}),v=function(e){var n;let{Text:t=y,Subtitle:o=g,Title:d=$}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{Text:y,Subtitle:g,Title:$},{children:u,icon:h,iconAfter:f,noTextWrap:m,theme:j,space:L,spaceFlex:v,scaleIcon:w=1,scaleSpace:W=1,subTitle:b,color:z,fontWeight:H,letterSpacing:C,fontSize:S,fontFamily:B,textAlign:A,textProps:N,title:I,...F}=e,E=(0,i.lA)(e),T=E.size||"$true",P="$".concat(+String(T).replace("$","")-1),Z=(0,c.yv)(T)*w,M=(0,k.useGetThemedIcon)({size:Z,color:z}),[R,_]=[h,f].map(M),U=(0,s.Ve)(null!==(n=(0,l.lz)().space[E.space])&&void 0!==n?n:Z)*W,G=(0,p.k)(t,E);return{props:{fontFamily:B,...F,children:(0,r.jsxs)(r.Fragment,{children:[R?(0,r.jsxs)(r.Fragment,{children:[R,(0,r.jsx)(a.LZ,{size:U})]}):null,I||b?(0,r.jsxs)(x.FA,{flex:1,children:["all"===m?I:(0,r.jsx)(d,{size:T,children:I}),b?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.LZ,{flex:!0,size:.333*U}),"string"==typeof b&&"all"!==m?(0,r.jsx)(o,{size:P,children:b}):b]}):null,G]}):G,_?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.LZ,{size:U}),_]}):null]})}}},w=(0,m.forwardRef)((e,n)=>{let{props:t}=v(e);return(0,r.jsx)(L,{ref:n,justifyContent:"space-between",...t})}),W={inlineProps:new Set(["color","fontWeight","fontSize","fontFamily","letterSpacing","textAlign"])},b=(0,d.$)(L.extractable((0,u.Y)(w,{componentName:j}),W),{Text:y,Subtitle:g})},3847:function(e,n,t){t.d(n,{r:function(){return l}});var r=t(2322),o=t(6030),i=t(5721),s=t(2784);function l(e){let{children:n,columns:t,itemMinWidth:l=200,gap:a}=e;if(o.$L)return(0,r.jsx)("div",{style:{gap:a,display:"grid",justifyContent:"stretch",gridTemplateColumns:"repeat( auto-fit, minmax(".concat(l,"px, 1fr) )")},children:n});let d=s.Children.toArray(n);return(0,r.jsx)(i.sL,{alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:d.map((e,n)=>e?(0,r.jsx)(i.sL,{flex:1,minWidth:l,marginRight:a,marginBottom:a,children:e},n):null)})}},858:function(e,n,t){t.d(n,{Zb:function(){return h}});var r=t(2322),o=t(4176),i=t(9415),s=t(9694),l=t(2219),a=t(2784);let d=(0,o.z)(l.K,{name:"Card",backgroundColor:"$background",position:"relative",overflow:"hidden",variants:{size:{"...size":(e,{tokens:n})=>({borderRadius:n.radius[e]??e})}},defaultVariants:{size:"$true"}}),u=(0,o.z)(l.K,{name:"CardHeader",zIndex:10,backgroundColor:"transparent",marginBottom:"auto",variants:{size:{"...size":(e,{tokens:n})=>({padding:n.space[e]??e})}}}),c=(0,o.z)(u,{name:"CardFooter",zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}),k=(0,o.z)(l.K,{name:"CardBackground",zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}),h=(0,i.$)(d.extractable((0,a.forwardRef)(({size:e,__scopeCard:n,children:t,...o},i)=>(0,r.jsx)(d,{ref:i,...o,children:a.Children.map(t,n=>(0,s.y)(n)&&!n.props.size?(0,a.cloneElement)(n,{size:e}):n)}))),{Header:u,Footer:c,Background:k})},2029:function(e,n,t){t.d(n,{K:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.x1,{x1:"12",y1:"5",x2:"12",y2:"19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"19 12 12 19 5 12",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="ArrowDown";let a=(0,o.memo)((0,s.H)(l))},5503:function(e,n,t){t.d(n,{J:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.aH,{points:"20 6 9 17 4 12",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="Check";let a=(0,o.memo)((0,s.H)(l))},1255:function(e,n,t){t.d(n,{s:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.aH,{points:"15 18 9 12 15 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="ChevronLeft";let a=(0,o.memo)((0,s.H)(l))},9941:function(e,n,t){t.d(n,{_:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.aH,{points:"9 18 15 12 9 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="ChevronRight";let a=(0,o.memo)((0,s.H)(l))},3161:function(e,n,t){t.d(n,{E:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.aH,{points:"16 18 22 12 16 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"8 6 2 12 8 18",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Code";let a=(0,o.memo)((0,s.H)(l))},3557:function(e,n,t){t.d(n,{C:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.y$,{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Copy";let a=(0,o.memo)((0,s.H)(l))},5920:function(e,n,t){t.d(n,{x:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.UL,{x:"9",y:"9",width:"6",height:"6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"9",y1:"2",x2:"9",y2:"4",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"15",y1:"2",x2:"15",y2:"4",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"9",y1:"21",x2:"9",y2:"22",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"15",y1:"20",x2:"15",y2:"22",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"20",y1:"9",x2:"22",y2:"9",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"20",y1:"14",x2:"22",y2:"14",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"2",y1:"9",x2:"4",y2:"9",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"2",y1:"14",x2:"4",y2:"14",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Cpu";let a=(0,o.memo)((0,s.H)(l))},2930:function(e,n,t){t.d(n,{N:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.mg,{points:"13 19 22 12 13 5 13 19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.mg,{points:"2 19 11 12 2 5 2 19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="FastForward";let a=(0,o.memo)((0,s.H)(l))},726:function(e,n,t){t.d(n,{S:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.mg,{points:"12 2 2 7 12 12 22 7 12 2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"2 17 12 22 22 17",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"2 12 12 17 22 12",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Layers";let a=(0,o.memo)((0,s.H)(l))},1190:function(e,n,t){t.d(n,{H:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.y$,{d:"M7 11V7a5 5 0 0 1 10 0v4",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Lock";let a=(0,o.memo)((0,s.H)(l))},7576:function(e,n,t){t.d(n,{$:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.y$,{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.Cd,{cx:"12",cy:"10",r:"3",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="MapPin";let a=(0,o.memo)((0,s.H)(l))},6935:function(e,n,t){t.d(n,{d:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"6",y:"4",width:"4",height:"16",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.UL,{x:"14",y:"4",width:"4",height:"16",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Pause";let a=(0,o.memo)((0,s.H)(l))},4128:function(e,n,t){t.d(n,{s:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.mg,{points:"5 3 19 12 5 21 5 3",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="Play";let a=(0,o.memo)((0,s.H)(l))},5032:function(e,n,t){t.d(n,{F:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.mg,{points:"11 19 2 12 11 5 11 19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.mg,{points:"22 19 13 12 22 5 22 19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Rewind";let a=(0,o.memo)((0,s.H)(l))},2800:function(e,n,t){t.d(n,{U:function(){return a}});var r=t(2322),o=t(2784),i=t(1862),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...o}=e;return(0,r.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.mg,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="Star";let a=(0,o.memo)((0,s.H)(l))},8682:function(e,n,t){t.d(n,{Q:function(){return u}});var r=t(2322),o=t(3630),i=t(4128),s=t(3554),l=t(3284),a=t(8785),d=t(9145);function u(e){let[n,t]=(0,s.T)({strategy:"most-recent-wins",prop:e.position,defaultProp:0}),u=c[n],k=(0,l.z)(()=>{t(e=>(e+1)%c.length)});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.b,{animation:e.animation||"bouncy",onPress:k,size:104,boc:"$borderColor",bw:1,br:"$9",bc:"$color9",hoverStyle:{scale:1.1},pressStyle:{scale:.9},...u,children:e.children||(0,r.jsx)(o.K7,{downscale:.75})}),(0,r.jsx)(d.zx,{pos:"absolute",b:20,l:20,icon:i.s,theme:e.tint,size:"$5",circular:!0,onPress:k})]})}let c=[{x:0,y:0,scale:1,rotate:"0deg"},{x:-50,y:-50,scale:.5,rotate:"-45deg",hoverStyle:{scale:.6},pressStyle:{scale:.4}},{x:50,y:50,scale:1,rotate:"180deg",hoverStyle:{scale:1.1},pressStyle:{scale:.9}}]},1428:function(e,n,t){t.d(n,{O:function(){return s},q:function(){return l}});var r=t(2784),o=t(6030),i=t(3284);function s(e,{once:n,...t}={}){let[i,s]=(0,r.useState)([]);return o.$L&&l(e,e=>{let t=e.some(e=>null==e?void 0:e.isIntersecting);(!n||t)&&s(n=>{let t=e.map(e=>(null==e?void 0:e.isIntersecting)??!1);return n.length===t.length&&n.every((e,n)=>e===t[n])?n:t})},t),Array.isArray(e)?i:i[0]}function l(e,n,{threshold:t=0,root:o,rootMargin:s}={},l=[]){let a=(0,i.z)(n);(0,r.useEffect)(()=>{let n=Array.isArray(e)?e:[e];if(!n.length)return;let r=null,i=[],l=new IntersectionObserver(e=>{i=n.map((n,t)=>e.find(e=>e.target===n.current)??i[t]??null),null==r||r(),r=a(i)||null},{threshold:t,root:o,rootMargin:s});for(let e of n)e.current&&l.observe(e.current);return()=>{null==r||r(),l.disconnect()}},[a,e,o,s,t,...l])}}}]);