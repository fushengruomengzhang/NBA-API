import{a as e,i as t,o as n,t as r}from"./chunk-ASOPGD6M.DltKKES-.js";import{t as i}from"./arc.BxRpa0BE.js";import{$ as a,C as o,F as s,M as c,N as l,R as u,b as d,et as f,g as p,p as m,rt as h}from"./src.Dd64n0YI.js";var g=function(){var e=p(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),t=[6,8,10,11,12,14,16,17,18],n=[1,9],r=[1,10],i=[1,11],a=[1,12],o=[1,13],s=[1,14],c={trace:p(function(){},`trace`),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:`error`,4:`journey`,6:`EOF`,8:`SPACE`,10:`NEWLINE`,11:`title`,12:`acc_title`,13:`acc_title_value`,14:`acc_descr`,15:`acc_descr_value`,16:`acc_descr_multiline_value`,17:`section`,18:`taskName`,19:`taskData`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:p(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 9:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 10:case 11:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 12:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 13:r.addTask(a[s-1],a[s]),this.$=`task`}},`anonymous`),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:n,12:r,14:i,16:a,17:o,18:s},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:15,11:n,12:r,14:i,16:a,17:o,18:s},e(t,[2,5]),e(t,[2,6]),e(t,[2,8]),{13:[1,16]},{15:[1,17]},e(t,[2,11]),e(t,[2,12]),{19:[1,18]},e(t,[2,4]),e(t,[2,9]),e(t,[2,10]),e(t,[2,13])],defaultActions:{},parseError:p(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),parse:p(function(e){var t=this,n=[0],r=[],i=[null],a=[],o=this.table,s=``,c=0,l=0,u=0,d=2,f=1,m=a.slice.call(arguments,1),h=Object.create(this.lexer),g={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(g.yy[_]=this.yy[_]);h.setInput(e,g.yy),g.yy.lexer=h,g.yy.parser=this,h.yylloc===void 0&&(h.yylloc={});var v=h.yylloc;a.push(v);var y=h.options&&h.options.ranges;this.parseError=typeof g.yy.parseError==`function`?g.yy.parseError:Object.getPrototypeOf(this).parseError;function b(e){n.length-=2*e,i.length-=e,a.length-=e}p(b,`popStack`);function x(){var e=r.pop()||h.lex()||f;return typeof e!=`number`&&(e instanceof Array&&(r=e,e=r.pop()),e=t.symbols_[e]||e),e}p(x,`lex`);for(var S,C,w,T,E,D={},O,k,A,j;;){if(w=n[n.length-1],this.defaultActions[w]?T=this.defaultActions[w]:(S??=x(),T=o[w]&&o[w][S]),T===void 0||!T.length||!T[0]){var M=``;for(O in j=[],o[w])this.terminals_[O]&&O>d&&j.push(`'`+this.terminals_[O]+`'`);M=h.showPosition?`Parse error on line `+(c+1)+`:
`+h.showPosition()+`
Expecting `+j.join(`, `)+`, got '`+(this.terminals_[S]||S)+`'`:`Parse error on line `+(c+1)+`: Unexpected `+(S==f?`end of input`:`'`+(this.terminals_[S]||S)+`'`),this.parseError(M,{text:h.match,token:this.terminals_[S]||S,line:h.yylineno,loc:v,expected:j})}if(T[0]instanceof Array&&T.length>1)throw Error(`Parse Error: multiple actions possible at state: `+w+`, token: `+S);switch(T[0]){case 1:n.push(S),i.push(h.yytext),a.push(h.yylloc),n.push(T[1]),S=null,C?(S=C,C=null):(l=h.yyleng,s=h.yytext,c=h.yylineno,v=h.yylloc,u>0&&u--);break;case 2:if(k=this.productions_[T[1]][1],D.$=i[i.length-k],D._$={first_line:a[a.length-(k||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(k||1)].first_column,last_column:a[a.length-1].last_column},y&&(D._$.range=[a[a.length-(k||1)].range[0],a[a.length-1].range[1]]),E=this.performAction.apply(D,[s,l,c,g.yy,T[1],i,a].concat(m)),E!==void 0)return E;k&&(n=n.slice(0,-1*k*2),i=i.slice(0,-1*k),a=a.slice(0,-1*k)),n.push(this.productions_[T[1]][0]),i.push(D.$),a.push(D._$),A=o[n[n.length-2]][n[n.length-1]],n.push(A);break;case 3:return!0}}return!0},`parse`)};c.lexer=function(){return{EOF:1,parseError:p(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),setInput:p(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:p(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:p(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:p(function(){return this._more=!0,this},`more`),reject:p(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:p(function(e){this.unput(this.match.slice(e))},`less`),pastInput:p(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:p(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:p(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:p(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:p(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e!==!1&&e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:p(function(){return this.next()||this.lex()},`lex`),begin:p(function(e){this.conditionStack.push(e)},`begin`),popState:p(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),_currentRules:p(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),topState:p(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),pushState:p(function(e){this.begin(e)},`pushState`),stateStackSize:p(function(){return this.conditionStack.length},`stateStackSize`),options:{"case-insensitive":!0},performAction:p(function(e,t,n,r){switch(n){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin(`acc_title`),12;case 8:return this.popState(),`acc_title_value`;case 9:return this.begin(`acc_descr`),14;case 10:return this.popState(),`acc_descr_value`;case 11:this.begin(`acc_descr_multiline`);break;case 12:this.popState();break;case 13:return`acc_descr_multiline_value`;case 14:return 17;case 15:return 18;case 16:return 19;case 17:return`:`;case 18:return 6;case 19:return`INVALID`}},`anonymous`),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}}}();function l(){this.yy={}}return p(l,`Parser`),l.prototype=c,c.Parser=l,new l}();g.parser=g;var _=g,v=``,y=[],b=[],x=[],S=p(function(){y.length=0,b.length=0,v=``,x.length=0,d()},`clear`),C=p(function(e){v=e,y.push(e)},`addSection`),w=p(function(){return y},`getSections`),T=p(function(){let e=k(),t=0;for(;!e&&t<100;)e=k(),t++;return b.push(...x),b},`getTasks`),E=p(function(){let e=[];return b.forEach(t=>{t.people&&e.push(...t.people)}),[...new Set(e)].sort()},`updateActors`),D=p(function(e,t){let n=t.substr(1).split(`:`),r=0,i=[];n.length===1?(r=Number(n[0]),i=[]):(r=Number(n[0]),i=n[1].split(`,`));let a=i.map(e=>e.trim()),o={section:v,type:v,people:a,task:e,score:r};x.push(o)},`addTask`),O=p(function(e){let t={section:v,type:v,description:e,task:e,classes:[]};b.push(t)},`addTaskOrg`),k=p(function(){let e=p(function(e){return x[e].processed},`compileTask`),t=!0;for(let[n,r]of x.entries())e(n),t&&=r.processed;return t},`compileTasks`),A={getConfig:p(()=>s().journey,`getConfig`),clear:S,setDiagramTitle:h,getDiagramTitle:u,setAccTitle:f,getAccTitle:l,setAccDescription:a,getAccDescription:c,addSection:C,getSections:w,getTasks:T,addTask:D,addTaskOrg:O,getActors:p(function(){return E()},`getActors`)},j=p(e=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${e.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${e.textColor}
  }

  .legend {
    fill: ${e.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${e.textColor}
  }

  .face {
    ${e.faceColor?`fill: ${e.faceColor}`:`fill: #FFF8DC`};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${e.fillType0?`fill: ${e.fillType0}`:``};
  }
  .task-type-1, .section-type-1  {
    ${e.fillType0?`fill: ${e.fillType1}`:``};
  }
  .task-type-2, .section-type-2  {
    ${e.fillType0?`fill: ${e.fillType2}`:``};
  }
  .task-type-3, .section-type-3  {
    ${e.fillType0?`fill: ${e.fillType3}`:``};
  }
  .task-type-4, .section-type-4  {
    ${e.fillType0?`fill: ${e.fillType4}`:``};
  }
  .task-type-5, .section-type-5  {
    ${e.fillType0?`fill: ${e.fillType5}`:``};
  }
  .task-type-6, .section-type-6  {
    ${e.fillType0?`fill: ${e.fillType6}`:``};
  }
  .task-type-7, .section-type-7  {
    ${e.fillType0?`fill: ${e.fillType7}`:``};
  }

  .actor-0 {
    ${e.actor0?`fill: ${e.actor0}`:``};
  }
  .actor-1 {
    ${e.actor1?`fill: ${e.actor1}`:``};
  }
  .actor-2 {
    ${e.actor2?`fill: ${e.actor2}`:``};
  }
  .actor-3 {
    ${e.actor3?`fill: ${e.actor3}`:``};
  }
  .actor-4 {
    ${e.actor4?`fill: ${e.actor4}`:``};
  }
  .actor-5 {
    ${e.actor5?`fill: ${e.actor5}`:``};
  }
`,`getStyles`),M=p(function(e,n){return t(e,n)},`drawRect`),N=p(function(e,t){let n=e.append(`circle`).attr(`cx`,t.cx).attr(`cy`,t.cy).attr(`class`,`face`).attr(`r`,15).attr(`stroke-width`,2).attr(`overflow`,`visible`),r=e.append(`g`);r.append(`circle`).attr(`cx`,t.cx-5).attr(`cy`,t.cy-5).attr(`r`,1.5).attr(`stroke-width`,2).attr(`fill`,`#666`).attr(`stroke`,`#666`),r.append(`circle`).attr(`cx`,t.cx+5).attr(`cy`,t.cy-5).attr(`r`,1.5).attr(`stroke-width`,2).attr(`fill`,`#666`).attr(`stroke`,`#666`);function a(e){let n=i().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(15/2).outerRadius(15/2.2);e.append(`path`).attr(`class`,`mouth`).attr(`d`,n).attr(`transform`,`translate(`+t.cx+`,`+(t.cy+2)+`)`)}p(a,`smile`);function o(e){let n=i().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(15/2).outerRadius(15/2.2);e.append(`path`).attr(`class`,`mouth`).attr(`d`,n).attr(`transform`,`translate(`+t.cx+`,`+(t.cy+7)+`)`)}p(o,`sad`);function s(e){e.append(`line`).attr(`class`,`mouth`).attr(`stroke`,2).attr(`x1`,t.cx-5).attr(`y1`,t.cy+7).attr(`x2`,t.cx+5).attr(`y2`,t.cy+7).attr(`class`,`mouth`).attr(`stroke-width`,`1px`).attr(`stroke`,`#666`)}return p(s,`ambivalent`),t.score>3?a(r):t.score<3?o(r):s(r),n},`drawFace`),P=p(function(e,t){let n=e.append(`circle`);return n.attr(`cx`,t.cx),n.attr(`cy`,t.cy),n.attr(`class`,`actor-`+t.pos),n.attr(`fill`,t.fill),n.attr(`stroke`,t.stroke),n.attr(`r`,t.r),n.class!==void 0&&n.attr(`class`,n.class),t.title!==void 0&&n.append(`title`).text(t.title),n},`drawCircle`),F=p(function(t,n){return e(t,n)},`drawText`),I=p(function(e,t){function n(e,t,n,r,i){return e+`,`+t+` `+(e+n)+`,`+t+` `+(e+n)+`,`+(t+r-i)+` `+(e+n-i*1.2)+`,`+(t+r)+` `+e+`,`+(t+r)}p(n,`genPoints`);let r=e.append(`polygon`);r.attr(`points`,n(t.x,t.y,50,20,7)),r.attr(`class`,`labelBox`),t.y+=t.labelMargin,t.x+=.5*t.labelMargin,F(e,t)},`drawLabel`),L=p(function(e,t,r){let i=e.append(`g`),a=n();a.x=t.x,a.y=t.y,a.fill=t.fill,a.width=r.width*t.taskCount+r.diagramMarginX*(t.taskCount-1),a.height=r.height,a.class=`journey-section section-type-`+t.num,a.rx=3,a.ry=3,M(i,a),V(r)(t.text,i,a.x,a.y,a.width,a.height,{class:`journey-section section-type-`+t.num},r,t.colour)},`drawSection`),R=-1,z=p(function(e,t,r){let i=t.x+r.width/2,a=e.append(`g`);R++,a.append(`line`).attr(`id`,`task`+R).attr(`x1`,i).attr(`y1`,t.y).attr(`x2`,i).attr(`y2`,450).attr(`class`,`task-line`).attr(`stroke-width`,`1px`).attr(`stroke-dasharray`,`4 2`).attr(`stroke`,`#666`),N(a,{cx:i,cy:300+(5-t.score)*30,score:t.score});let o=n();o.x=t.x,o.y=t.y,o.fill=t.fill,o.width=r.width,o.height=r.height,o.class=`task task-type-`+t.num,o.rx=3,o.ry=3,M(a,o);let s=t.x+14;t.people.forEach(e=>{let n=t.actors[e].color,r={cx:s,cy:t.y,r:7,fill:n,stroke:`#000`,title:e,pos:t.actors[e].position};P(a,r),s+=10}),V(r)(t.task,a,o.x,o.y,o.width,o.height,{class:`task`},r,t.colour)},`drawTask`),B=p(function(e,t){r(e,t)},`drawBackgroundRect`),V=function(){function e(e,t,n,i,a,o,s,c){r(t.append(`text`).attr(`x`,n+a/2).attr(`y`,i+o/2+5).style(`font-color`,c).style(`text-anchor`,`middle`).text(e),s)}p(e,`byText`);function t(e,t,n,i,a,o,s,c,l){let{taskFontSize:u,taskFontFamily:d}=c,f=e.split(/<br\s*\/?>/gi);for(let e=0;e<f.length;e++){let c=e*u-u*(f.length-1)/2,p=t.append(`text`).attr(`x`,n+a/2).attr(`y`,i).attr(`fill`,l).style(`text-anchor`,`middle`).style(`font-size`,u).style(`font-family`,d);p.append(`tspan`).attr(`x`,n+a/2).attr(`dy`,c).text(f[e]),p.attr(`y`,i+o/2).attr(`dominant-baseline`,`central`).attr(`alignment-baseline`,`central`),r(p,s)}}p(t,`byTspan`);function n(e,n,i,a,o,s,c,l){let u=n.append(`switch`),d=u.append(`foreignObject`).attr(`x`,i).attr(`y`,a).attr(`width`,o).attr(`height`,s).attr(`position`,`fixed`).append(`xhtml:div`).style(`display`,`table`).style(`height`,`100%`).style(`width`,`100%`);d.append(`div`).attr(`class`,`label`).style(`display`,`table-cell`).style(`text-align`,`center`).style(`vertical-align`,`middle`).text(e),t(e,u,i,a,o,s,c,l),r(d,c)}p(n,`byFo`);function r(e,t){for(let n in t)n in t&&e.attr(n,t[n])}return p(r,`_setTextAttrs`),function(r){return r.textPlacement===`fo`?n:r.textPlacement===`old`?e:t}}(),H={drawRect:M,drawCircle:P,drawSection:L,drawText:F,drawLabel:I,drawTask:z,drawBackgroundRect:B,initGraphics:p(function(e){e.append(`defs`).append(`marker`).attr(`id`,`arrowhead`).attr(`refX`,5).attr(`refY`,2).attr(`markerWidth`,6).attr(`markerHeight`,4).attr(`orient`,`auto`).append(`path`).attr(`d`,`M 0,0 V 4 L6,2 Z`)},`initGraphics`)},U=p(function(e){Object.keys(e).forEach(function(t){K[t]=e[t]})},`setConf`),W={};function G(e){let t=s().journey,n=60;Object.keys(W).forEach(r=>{let i=W[r].color,a={cx:20,cy:n,r:7,fill:i,stroke:`#000`,pos:W[r].position};H.drawCircle(e,a);let o={x:40,y:n+7,fill:`#666`,text:r,textMargin:t.boxTextMargin|5};H.drawText(e,o),n+=20})}p(G,`drawActorLegend`);var K=s().journey,q=K.leftMargin,J=p(function(e,t,n,r){let i=s().journey,a=s().securityLevel,c;a===`sandbox`&&(c=m(`#i`+t));let l=m(a===`sandbox`?c.nodes()[0].contentDocument.body:`body`);Y.init();let u=l.select(`#`+t);H.initGraphics(u);let d=r.db.getTasks(),f=r.db.getDiagramTitle(),p=r.db.getActors();for(let e in W)delete W[e];let h=0;p.forEach(e=>{W[e]={color:i.actorColours[h%i.actorColours.length],position:h},h++}),G(u),Y.insert(0,0,q,Object.keys(W).length*50),Q(u,d,0);let g=Y.getBounds();f&&u.append(`text`).text(f).attr(`x`,q).attr(`font-size`,`4ex`).attr(`font-weight`,`bold`).attr(`y`,25);let _=g.stopy-g.starty+2*i.diagramMarginY,v=q+g.stopx+2*i.diagramMarginX;o(u,_,v,i.useMaxWidth),u.append(`line`).attr(`x1`,q).attr(`y1`,i.height*4).attr(`x2`,v-q-4).attr(`y2`,i.height*4).attr(`stroke-width`,4).attr(`stroke`,`black`).attr(`marker-end`,`url(#arrowhead)`);let y=f?70:0;u.attr(`viewBox`,`${g.startx} -25 ${v} ${_+y}`),u.attr(`preserveAspectRatio`,`xMinYMin meet`),u.attr(`height`,_+y+25)},`draw`),Y={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:p(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},`init`),updateVal:p(function(e,t,n,r){e[t]=e[t]===void 0?n:r(n,e[t])},`updateVal`),updateBounds:p(function(e,t,n,r){let i=s().journey,a=this,o=0;function c(s){return p(function(c){o++;let l=a.sequenceItems.length-o+1;a.updateVal(c,`starty`,t-l*i.boxMargin,Math.min),a.updateVal(c,`stopy`,r+l*i.boxMargin,Math.max),a.updateVal(Y.data,`startx`,e-l*i.boxMargin,Math.min),a.updateVal(Y.data,`stopx`,n+l*i.boxMargin,Math.max),s!==`activation`&&(a.updateVal(c,`startx`,e-l*i.boxMargin,Math.min),a.updateVal(c,`stopx`,n+l*i.boxMargin,Math.max),a.updateVal(Y.data,`starty`,t-l*i.boxMargin,Math.min),a.updateVal(Y.data,`stopy`,r+l*i.boxMargin,Math.max))},`updateItemBounds`)}p(c,`updateFn`),this.sequenceItems.forEach(c())},`updateBounds`),insert:p(function(e,t,n,r){let i=Math.min(e,n),a=Math.max(e,n),o=Math.min(t,r),s=Math.max(t,r);this.updateVal(Y.data,`startx`,i,Math.min),this.updateVal(Y.data,`starty`,o,Math.min),this.updateVal(Y.data,`stopx`,a,Math.max),this.updateVal(Y.data,`stopy`,s,Math.max),this.updateBounds(i,o,a,s)},`insert`),bumpVerticalPos:p(function(e){this.verticalPos+=e,this.data.stopy=this.verticalPos},`bumpVerticalPos`),getVerticalPos:p(function(){return this.verticalPos},`getVerticalPos`),getBounds:p(function(){return this.data},`getBounds`)},X=K.sectionFills,Z=K.sectionColours,Q=p(function(e,t,n){let r=s().journey,i=``,a=n+(r.height*2+r.diagramMarginY),o=0,c=`#CCC`,l=`black`,u=0;for(let[n,s]of t.entries()){if(i!==s.section){c=X[o%X.length],u=o%X.length,l=Z[o%Z.length];let a=0,d=s.section;for(let e=n;e<t.length&&t[e].section==d;e++)a+=1;let f={x:n*r.taskMargin+n*r.width+q,y:50,text:s.section,fill:c,num:u,colour:l,taskCount:a};H.drawSection(e,f,r),i=s.section,o++}let d=s.people.reduce((e,t)=>(W[t]&&(e[t]=W[t]),e),{});s.x=n*r.taskMargin+n*r.width+q,s.y=a,s.width=r.diagramMarginX,s.height=r.diagramMarginY,s.colour=l,s.fill=c,s.num=u,s.actors=d,H.drawTask(e,s,r),Y.insert(s.x,s.y,s.x+s.width+r.taskMargin,450)}},`drawTasks`),$={setConf:U,draw:J},ee={parser:_,db:A,renderer:$,styles:j,init:p(e=>{$.setConf(e.journey),A.clear()},`init`)};export{ee as diagram};