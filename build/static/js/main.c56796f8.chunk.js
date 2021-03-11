(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{18:function(e,t,r){e.exports=r(29)},23:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(11),i=r.n(o),c=r(2),s=r(3),u=r(8),p=r(4),l=r(9),d=r(5),m=(r(23),"QuizLoad"),f="QuizAnswer",b="QuizSubmit",h="PagerUpdate",O=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).isAnswered=function(e){return e.options.some((function(e){return e.selected}))?"Answered":"Not Answered"},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h2",{className:"text-center font-weight-normal"},"Review Quiz: ",this.props.quiz.name),a.a.createElement("hr",null),a.a.createElement("div",{className:"row text-center"},this.props.quiz.questions.map((function(t,r){return a.a.createElement("div",{key:t.id,className:"col-4 cursor-pointer"},a.a.createElement("div",{id:r,onClick:e.props.move,className:"p-3 mb-2 ".concat("Answered"===e.isAnswered(t)?"bg-info":"bg-warning")},r+1,". ",e.isAnswered(t)))}))))}}]),t}(n.Component),v=r(7);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"onAnswer",value:function(e,t){var r=JSON.parse(JSON.stringify(this.props.quiz)),n=r.questions.find((function(t){return t.id===e.id}));1===n.questionTypeId&&n.options.forEach((function(e){e.selected=!1})),n.options.find((function(e){return e.id===t.id})).selected=!0,this.props.onAnswer(r)}},{key:"render",value:function(){var e=this,t=this.props.quiz.questions?this.props.quiz.questions.slice(this.props.pager.index,this.props.pager.index+this.props.pager.size):[];return a.a.createElement("div",{id:"quiz"},a.a.createElement("h2",{className:"text-center font-weight-normal"},this.props.quiz.name),a.a.createElement("hr",null),t.map((function(t){return a.a.createElement("div",{key:t.id},a.a.createElement("div",{className:"badge badge-primary"}," Question ",e.props.pager.index+1," of ",e.props.pager.count,"."),a.a.createElement("h3",{className:"font-weight-normal"},e.props.pager.index+1,". ",a.a.createElement("span",null,t.name)),a.a.createElement("div",{className:"row text-left options"},t.options.map((function(r){return a.a.createElement("div",{key:r.id,className:"col-6"},a.a.createElement("div",{className:"option"},a.a.createElement("label",{className:"font-weight-normal",htmlFor:r.id},a.a.createElement("input",{id:r.id,checked:r.selected,type:"checkbox",onChange:function(){return e.onAnswer(t,r)}}),r.name)))}))))})),a.a.createElement("hr",null),a.a.createElement("div",{className:"text-center"},this.props.quiz.config.allowBack&&a.a.createElement("button",{id:"first",className:"btn-primary",onClick:this.props.move},"First"),this.props.quiz.config.allowBack&&a.a.createElement("button",{id:"prev",className:"btn-primary",onClick:this.props.move},"Prev"),a.a.createElement("button",{id:"next",className:"btn-primary",onClick:this.props.move},"Next"),a.a.createElement("button",{id:"last",className:"btn-primary",onClick:this.props.move},"Last")))}}]),t}(n.Component),j=Object(v.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.quiz,{},e.mode,{},e.pager)}),(function(e){return{onAnswer:function(t){return e({type:f,payload:t})}}}))(g);var w=function(e){var t=e.questions;return t.forEach((function(e){e.isCorrect=e.options.every((function(e){return e.selected===e.isAnswer}))})),a.a.createElement("div",{className:"result"},a.a.createElement("h2",{className:"text-center font-weight-normal"},"Quiz Result"),t.map((function(e,t){return a.a.createElement("div",{key:e.id,className:"mb-2 ".concat(e.isCorrect?"bg-success":"bg-danger")},a.a.createElement("div",{className:"result-question"},a.a.createElement("h5",null,t+1,". ",e.name),a.a.createElement("div",{className:"row"},e.options.map((function(e){return a.a.createElement("div",{key:e.id,className:"col-6"},a.a.createElement("input",{id:e.id,type:"checkbox",disabled:"disabled",checked:e.selected})," ",e.name)}))),a.a.createElement("div",{className:"m-1 p-1 text-bold ".concat(e.isCorrect?"text-success":"text-danger")},"Your answer is ",e.isCorrect?"Correct":"Wrong",".")))})))};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var z=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).move=function(e){var t=e.target.id,n=0;if((n="first"===t?0:"prev"===t?r.props.pager.index-1:"next"===t?r.props.pager.index+1:"last"===t?r.props.pager.count-1:parseInt(e.target.id,10))>=0&&n<r.props.pager.count){var a={index:n,size:1,count:r.props.pager.count};r.props.onPagerUpdate(a)}},r.setMode=function(e){return r.props.onSubmit(e.target.id)},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"renderMode",value:function(){return"quiz"===this.props.mode?a.a.createElement(j,{move:this.move}):"review"===this.props.mode?a.a.createElement(O,{quiz:this.props.quiz,move:this.move}):a.a.createElement(w,{questions:this.props.quiz.questions||[]})}},{key:"render",value:function(){return a.a.createElement("div",null,this.renderMode(),"submit"!==this.props.mode&&a.a.createElement("div",null,a.a.createElement("hr",null),a.a.createElement("button",{id:"quiz",className:"btn-primary",onClick:this.setMode},"Quiz"),a.a.createElement("button",{id:"review",className:"btn-primary",onClick:this.setMode},"Review"),a.a.createElement("button",{id:"submit",className:"btn-primary",onClick:this.setMode},"Submit Quiz")))}}]),t}(n.Component),q=Object(v.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.quiz,{},e.mode,{},e.pager)}),(function(e){return{onSubmit:function(t){return e({type:b,payload:t})},onPagerUpdate:function(t){return e({type:h,payload:t})}}}))(z);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var k=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={quizes:[{id:"data/javascript.json",name:"Javascript"}],quizId:"data/javascript.json"},r.pager={index:0,size:1,count:1},r.onChange=function(e){r.setState({quizId:e.target.value}),r.load(e.target.value)},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.load(this.state.quizId)}},{key:"load",value:function(e){var t=this,r=e||this.props.quizId;fetch("../".concat(r)).then((function(e){return e.json()})).then((function(e){var r=e;r.questions.forEach((function(e){e.options.forEach((function(e){return e.selected=!1}))})),r.config=Object.assign(t.props.quiz.config||{},r.config),t.pager.count=r.questions.length/t.pager.size,t.props.onQuizLoad(r),t.props.onPagerUpdate(t.pager)}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("header",{className:"p-2"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-4"},a.a.createElement("h3",null,"Quiz Application")))),a.a.createElement(q,{quiz:this.state.quiz,quizId:this.state.quizId,mode:this.state.mode}))}}]),t}(n.Component),N=Object(v.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.quiz)}),(function(e){return{onQuizLoad:function(t){return e({type:m,payload:t})},onPagerUpdate:function(t){return e({type:h,payload:t})}}}))(k),x=r(6),C=r(17),A=function(e){return function(e){return function(t){e(t)}}};function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q={quiz:{config:{allowBack:!0,allowReview:!0,autoMove:!1,duration:0,pageSize:1,requiredAll:!1,richText:!1,shuffleQuestions:!1,shuffleOptions:!1,showClock:!1,showPager:!0,theme:"none"},questions:[]},mode:"quiz",pager:{index:0,size:1,count:1}},I=Object(x.combineReducers)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S({},Q),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return S({},e,{pager:t.payload,mode:"quiz"});case m:return S({},e,{quiz:t.payload});case b:return console.log("quiz.js Submitted."),S({},e,{mode:t.payload});case f:return console.log("quiz.js reducer Quiz Answer called."),S({},e,{quiz:t.payload});default:return e}}}),M=Object(x.createStore)(I,Object(C.composeWithDevTools)(Object(x.applyMiddleware)(A)));i.a.render(a.a.createElement(v.a,{store:M},a.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c56796f8.chunk.js.map