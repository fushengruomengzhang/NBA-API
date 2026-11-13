import{t as e}from"./chunk-TMUBEWPD.jdHx9rSu.js";import{f as t,r as n}from"./chunk-7DKRZKHE.BwVAyp26.js";import{t as r}from"./ordinal.CubZnDHm.js";import{s as i}from"./S3Doc.CqkawH54.js";import{$ as a,C as o,E as s,F as c,M as l,N as u,R as d,U as f,b as p,et as m,g as h,rt as g}from"./src.Dd64n0YI.js";import{t as _}from"./arc.BxRpa0BE.js";import{t as v}from"./mermaid-parser.core.D0Q5Hc3R.js";import{t as y}from"./array.DFfiZ3uO.js";import{n as b}from"./path.BjftfNrB.js";import{p as x}from"./math.CW_wCdht.js";function S(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function C(e){return e}function w(){var e=C,t=S,n=null,r=b(0),i=b(x),a=b(0);function o(o){var s,c=(o=y(o)).length,l,u,d=0,f=Array(c),p=Array(c),m=+r.apply(this,arguments),h=Math.min(x,Math.max(-x,i.apply(this,arguments)-m)),g,_=Math.min(Math.abs(h)/c,a.apply(this,arguments)),v=_*(h<0?-1:1),b;for(s=0;s<c;++s)(b=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=b);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(h-c*v)/d:0;s<c;++s,m=g)l=f[s],b=p[l],g=m+(b>0?b*u:0)+v,p[l]={data:o[l],index:s,value:b,startAngle:m,endAngle:g,padAngle:_};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:b(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:b(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:b(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:b(+e),o):a},o}var T=s.pie,E={sections:new Map,showData:!1,config:T},D=E.sections,O=E.showData,k=structuredClone(T),A={getConfig:h(()=>structuredClone(k),`getConfig`),clear:h(()=>{D=new Map,O=E.showData,p()},`clear`),setDiagramTitle:g,getDiagramTitle:d,setAccTitle:m,getAccTitle:u,setAccDescription:a,getAccDescription:l,addSection:h(({label:e,value:t})=>{D.has(e)||(D.set(e,t),f.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:h(()=>D,`getSections`),setShowData:h(e=>{O=e},`setShowData`),getShowData:h(()=>O,`getShowData`)},j=h((t,n)=>{e(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},`populateDb`),M={parse:h(async e=>{let t=await v(`pie`,e);f.debug(t),j(t,A)},`parse`)},N=h(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),P=h(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return w().value(e=>e.value)(t)},`createPieArcs`),F={parser:M,db:A,renderer:{draw:h((e,a,s,l)=>{f.debug(`rendering pie chart
`+e);let u=l.db,d=c(),p=n(u.getConfig(),d.pie),m=i(a),h=m.append(`g`);h.attr(`transform`,`translate(225,225)`);let{themeVariables:g}=d,[v]=t(g.pieOuterStrokeWidth);v??=2;let y=p.textPosition,b=_().innerRadius(0).outerRadius(185),x=_().innerRadius(185*y).outerRadius(185*y);h.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+v/2).attr(`class`,`pieOuterCircle`);let S=u.getSections(),C=P(S),w=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],T=r(w);h.selectAll(`mySlices`).data(C).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>T(e.data.label)).attr(`class`,`pieCircle`);let E=0;S.forEach(e=>{E+=e}),h.selectAll(`mySlices`).data(C).enter().append(`text`).text(e=>(e.data.value/E*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),h.append(`text`).text(u.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`);let D=h.selectAll(`.legend`).data(T.domain()).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*T.domain().length/2;return`translate(216,`+(t*22-n)+`)`});D.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,T).style(`stroke`,T),D.data(C).append(`text`).attr(`x`,22).attr(`y`,14).text(e=>{let{label:t,value:n}=e.data;return u.getShowData()?`${t} [${n}]`:t});let O=512+Math.max(...D.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));m.attr(`viewBox`,`0 0 ${O} 450`),o(m,450,O,p.useMaxWidth)},`draw`)},styles:N};export{F as diagram};