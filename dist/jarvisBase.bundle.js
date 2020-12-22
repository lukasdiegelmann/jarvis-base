exports.jarvisBase=(()=>{"use strict";var __webpack_modules__={964:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});const a=require("@babel/runtime/helpers/toConsumableArray");var n=r.n(a);const i=require("chokidar");var o=r.n(i);const c=require("chalk");var s=r.n(c);const l=function e(t,r){switch(t){case"low/tag":var a=r;return"".concat(a.braces[0]).concat(s().bold(a.formatting?a.formatting(a.string):a.string)).concat(a.braces[1]);case"low/shift":var n=r;return"|".concat(" ".repeat(n.width)).concat(JSON.stringify(n.string).replace(/\\n/g,"\n|".concat(" ".repeat(n.width))).split("").filter((function(e,t,r){return 0!==t&&t!==r.length-1})).join(""));case"low/line-break":for(var i=r,o=i.string.split(""),c="",l=0;l<o.length;l++)l%i.range==0&&0!==l&&(c+="\n"),c+=o[l];return c;case"low/tag/jarvis-base":return e("low/tag",{braces:"{}",formatting:s().underline.cyan,string:"@jarvis/base"});case"high/terminal/simple/prefix":var p=r;return"↳ ".concat(e("low/tag/jarvis-base",{})," → ").concat(e("low/tag",{braces:"[]",string:"entryPath"})," ").concat(p.entryPath," • ").concat(e("low/tag",{braces:"[]",string:"mode"})," ").concat(p.compilationMode," >>");case"high/terminal/simple/compiling":return"".concat(e("high/terminal/simple/prefix",r)," ").concat(s().bold.cyan("compiling..."));case"high/terminal/simple/done":var u=r;return"".concat(e("high/terminal/simple/prefix",u)," ").concat(e("low/tag",{braces:"()",string:"time"})," ").concat(u.webpackStats.endTime-u.webpackStats.startTime,"ms • ").concat(e("low/tag",{braces:"()",string:"state"})," ").concat(u.webpackStats.hasErrors()?s().bold.red("ERR!"):u.webpackStats.hasWarnings()?s().bold.yellow("WRN!"):s().bold.green("SCS!"));case"high/terminal/simple/log":var h=r;return"".concat(e("high/terminal/simple/prefix",h)," ").concat(e("low/tag",{braces:"()",string:"output"})," ").concat(h.log);case"high/terminal/complex/header":var d=r;return"(".concat(e("low/tag",{braces:"[]",string:"entryPath"})," ").concat(d.entryPath," • ").concat(e("low/tag",{braces:"[]",string:"mode"})," ").concat(d.compilationMode," >> ").concat(e("low/tag",{braces:"()",string:"time"})," ").concat(d.webpackStats.endTime-d.webpackStats.startTime,"ms • ").concat(e("low/tag",{braces:"()",string:"state"})," ").concat(d.webpackStats.hasErrors()?s().bold.red("ERR!"):d.webpackStats.hasWarnings()?s().bold.yellow("WRN!"):s().bold.green("SCS!"),")");case"high/error":var m=r;return"↳ ".concat(e("low/tag/jarvis-base",{})," → ").concat(e("low/tag",{braces:"()",string:m.name,formatting:s().red}),"\n•\n").concat(e("low/shift",{width:1,string:e("low/line-break",{range:process.stdout.columns-10,string:m.message})}),"\n•").concat(m.stack?"\n".concat(e("low/shift",{width:1,string:e("low/line-break",{range:process.stdout.columns-10,string:m.stack})}),"\n•"):"","\n\n")}};var p=r(622),u=r.n(p),h=function(e,t){var r=e.filter((function(e){return e.match(new RegExp("-+".concat(t,"=.+")))}))[0];return r?r.split("=")[1]:null};const d=require("fs");var m=r.n(d);const g=require("ajv");var f=r.n(g),_=r(159);const b=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema","type":"object","properties":{"bundle":{"type":"array","items":{"type":"object","properties":{"header":{"type":"object","properties":{"milieu":{"type":"object","properties":{"cwdPath":{"type":"string"},"envPath":{"type":"string"}},"required":["cwdPath"],"additionalProperties":false},"behavior":{"type":"object","properties":{"isQuiet":{"type":"boolean"},"shouldExecute":{"type":"boolean"},"shouldJustInit":{"type":"boolean"}},"additionalProperties":false}},"required":["milieu"],"additionalProperties":false},"config":{"type":"object"}}}},"inject":{"type":"array","items":{"type":"object","properties":{"key":{"type":"string"},"value":{}},"required":["key","value"],"additionalProperties":false}}}}'),v=require("@reduxjs/toolkit");var w=(0,v.createSlice)({name:"handleInjection",initialState:{revertFunction:null},reducers:{setRevertFunction:function(e,t){var r=t.payload;e.revertFunction=r}}}),y=w.actions;const P=w;var k=(0,v.createSlice)({name:"args",initialState:{processArgs:{compilation:{header:{behavior:{isQuiet:!1,shouldExecute:!1,shouldJustInit:!1}},mode:"development"},output:"simple",milieu:{projectPath:u().resolve(process.cwd(),"./package.json"),compilePath:null}}},reducers:{setProcessArgs:function(e,t){var r=t.payload;e.processArgs=r},setProjectArgs:function(e,t){var r=t.payload;e.projectArgs=r}}}),j=k.actions;const S=k,O=require("@babel/runtime/helpers/defineProperty");var E=r.n(O);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=(0,v.createSlice)({name:"args",initialState:{internals:[]},reducers:{setInternal:function(e,t){var r=t.payload;e.internals[r.id]=A(A({},e.internals[r.id]),r.internal)}}}),x=D.actions;const q=D;var C=(0,v.combineReducers)({args:S.reducer,handleInjection:P.reducer,observeCompilation:q.reducer});const R=(0,v.createStore)(C),M=require("json-format");var W=r.n(M);const T=require("blessed");var B=r.n(T);const F=require("webpack-format-messages");var J=r.n(F),L=function(e,t){return function(r,a){switch(r){case 0:e.init({linearID:a.id,focusPath:t});break;case 1:e.fin({focusPath:t,linearID:a.id,webpackStats:a.webpackStats});break;case 2:e.log({focusPath:t,linearID:a.id,log:a.log})}}};const N=require("child_process");var U=r.n(N);const K=require("webpack");var Q=r.n(K);const $=function(e,t){for(var r=R.getState().args,a=r.processArgs,n=r.projectArgs,i=function(r){var i=n.withoutAtomics["@jarvis/base/config"].bundle[r],o=i.header,c=i.config,s="".concat(e,":").concat(a.compilation.mode).replace(/\\/g,"/"),l="^".concat(o.milieu.cwdPath,".*:").concat(c.mode).replace(/\\/g,"/"),p=R.getState().observeCompilation.internals[r];if(o.behavior||(o.behavior={}),p||(R.dispatch(x.setInternal({id:r,internal:{isInitiated:!1,isRunning:!1,child:null}})),p=R.getState().observeCompilation.internals[r]),s.match(new RegExp(l))&&(!p.isInitiated||!o.behavior.shouldJustInit)&&!p.isRunning){R.dispatch(x.setInternal({id:r,internal:{isInitiated:!0,isRunning:!0}})),(p=R.getState().observeCompilation.internals[r]).child&&p.child.kill();var h=Q()(c);o.behavior.isQuiet||h.hooks.compilation.tap("invalid",(function(){return t(0,{id:r})})),h.hooks.done.tap("done",(function(e){if(R.dispatch(x.setInternal({id:r,internal:{isRunning:!1}})),o.behavior.isQuiet||t(1,{id:r,webpackStats:e}),o.behavior.shouldExecute){var a=u().resolve(c.output.path,c.output.filename),n=o.milieu.envPath?JSON.parse(m().readFileSync(o.milieu.envPath,{encoding:"utf8"})):void 0,i=U().spawn("node",[a],{cwd:c.output.path,env:n});i.stdout.on("data",(function(e){t(2,{id:r,log:e.toString("utf8")})})),i.stderr.on("data",(function(e){t(2,{id:r,log:e.toString("utf8")})})),R.dispatch(x.setInternal({id:r,internal:{child:i}}))}})),h.run((function(e){if(e)throw e}))}},o=0;o<n.withoutAtomics["@jarvis/base/config"].bundle.length;o++)i(o)};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}const Y=function(e){process.on("uncaughtException",(function(e){process.stdout.write(l("high/error",e))})),process.on("unhandledRejection",(function(e){process.stdout.write(l("high/error",e))})),R.dispatch(j.setProcessArgs(function(e){var t,r,a,n={compilation:{mode:h(e,"mode"),header:h(e,"header")},output:h(e,"output"),milieu:{projectPath:h(e,"projectPath"),compilePath:h(e,"compilePath")}};if(!n.compilation.mode||!n.compilation.mode.match(/d|development|p|production/))throw{name:"ProcessArgsError",message:"You have to specify a valid compilation mode - '".concat(n.compilation.mode,"' is not a valid compilation mode.")};if(!n.milieu.projectPath)throw{name:"ProcessArgsError",message:"You have to specify a valid project path - '".concat(n.milieu.projectPath,"' is not a valid project path.")};if(!n.output||!n.output.match(/simple|complex/))throw{name:"ProcessArgsError",message:"You have to specify a valid output method - '".concat(n.output,"' is not a valid output method.")};return{compilation:{mode:(null!==(t=n.compilation.mode)&&void 0!==t?t:"").match(/d|development/)?"development":"production",header:JSON.parse(null!==(r=n.compilation.header)&&void 0!==r?r:"{}")},output:"complex"===n.output?"complex":"simple",milieu:{projectPath:null!==(a=u().resolve(process.cwd(),n.milieu.projectPath))&&void 0!==a?a:u().resolve(process.cwd(),"./package.json"),compilePath:h(e,"compilePath")?u().resolve(process.cwd(),n.milieu.compilePath):null}}}(e))),new Promise((function(e,t){var r=R.getState();m().readFile(r.args.processArgs.milieu.projectPath,{encoding:"utf8"},(function(a,n){a&&t({name:"ProjectArgsError",message:"Could not find file at '".concat(r.args.processArgs.milieu.projectPath,"'. This is probably due to an incorrect current working directory.")});var i=JSON.parse(n);i["@jarvis/base/config"]||t({name:"ProjectArgsError",message:"Property '@jarvis/base/config' could not be found on project configuration. Please define a @jarvis/base config."}),(new(f())).compile(b)(i["@jarvis/base/config"])?e({withAtomics:i,withoutAtomics:(0,_.Z)(JSON.parse(JSON.stringify(i)))}):t({name:"ProjectArgsError",message:"Invalid jarvis config received. Please compare to json-schema: \n\n".concat(W()(b))})}))})).then((function(e){R.dispatch(j.setProjectArgs(e));var t=R.getState().args,r=t.processArgs,a=t.projectArgs,i=function(e){switch(e){case"complex":return t=[],r=R.getState().args.processArgs,a=B().screen({smartCSR:!0,autoPadding:!0,cursor:{artificial:!0,shape:"line",blink:!0,color:"black"}}),(n=B().list({width:"100%",height:"100%"})).on("prerender",(function(){for(var e=0;e<n.children.length;e++)n.children[e].width="".concat(Math.floor(100/n.children.length),"%"),n.children[e].left="".concat(Math.floor(100*e/n.children.length),"%")})),a.key(["right"],(function(){for(var e=0;e<n.children.length;e++)if(n.children[e].children[1].focused){var t=e+1<n.children.length-1?e+1:n.children.length-1;n.children[t].children[1].focus(),a.render();break}})),a.key(["left"],(function(){for(var e=0;e<n.children.length;e++)if(n.children[e].children[1].focused){var t=e-1>=0?e-1:0;n.children[t].children[1].focus(),a.render();break}})),a.key(["C-c"],(function(){R.getState().handleInjection.revertFunction().then((function(){return process.exit(0)}))})),a.append(n),a.render(),{type:"complex",fin:function(e){t[e.linearID].invalidateProgress&&t[e.linearID].invalidateProgress();var i=t[e.linearID].id;n.children[i].children[0].content=l("high/terminal/complex/header",{compilationMode:r.compilation.mode,entryPath:u().relative(process.cwd(),e.focusPath),webpackStats:e.webpackStats}),a.render()},init:function(e){t[e.linearID]||n.append(B().box({width:"100%",height:"100%",border:{type:"line"},children:[B().box({width:"100%-2",height:1,align:"center"}),B().log({width:"100%-2",height:"100%-3",top:1,alwaysScroll:!0,scrollable:!0,focusable:!0,keys:!0,scrollbar:{ch:s().inverse(" ")}}),B().progressbar({orientation:"horizontal",width:"100%-2",height:"100%-2",hidden:!0,style:{bar:{fg:"white"}},ch:s().inverse(" ")})]}));var r=(t[e.linearID]={id:n.children.length-1}).id,i=!1;!function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return setTimeout((function(){if(i)n.children[r].children[2].hidden=!0,a.render();else{var o=t+(100-t)/8;n.children[r].children[2].filled=o,n.children[r].children[2].hidden=!1,a.render(),e(o)}}),100)}(),n.children[r].children[1].content="",n.children[r].children[1].focus(),a.render(),t[e.linearID].invalidateProgress=function(){return i=!0}},log:function(e){var r=t[e.linearID].id;n.children[r].children[1].log(e.log)}};case"simple":return function(){var e=R.getState().args.processArgs;return{type:"simple",fin:function(t){process.stdout.write(l("high/terminal/simple/done",{compilationMode:e.compilation.mode,entryPath:u().relative(process.cwd(),t.focusPath),webpackStats:t.webpackStats})+"\n"),t.webpackStats.hasWarnings()&&process.stdout.write("".concat(J()(t.webpackStats).warnings.reduce((function(e,t){return"".concat(e,"\n").concat(t)}),""),"\n")),t.webpackStats.hasErrors()&&process.stdout.write("".concat(J()(t.webpackStats).errors.reduce((function(e,t){return"".concat(e,"\n").concat(t)}),""),"\n"))},init:function(t){process.stdout.write(l("high/terminal/simple/compiling",{compilationMode:e.compilation.mode,entryPath:u().relative(process.cwd(),t.focusPath)})+"\n")},log:function(t){process.stdout.write(l("high/terminal/simple/log",{compilationMode:e.compilation.mode,entryPath:u().relative(process.cwd(),t.focusPath),log:t.log})+"\n")}}}()}var t,r,a,n}(r.output);if(r.milieu.compilePath)$(r.milieu.compilePath,L(i,r.milieu.compilePath));else{R.dispatch(y.setRevertFunction(function(){var e=R.getState().args,t=e.processArgs,r=e.projectArgs,a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r.withoutAtomics);return r.withoutAtomics["@jarvis/base/config"].inject.forEach((function(e){return a[e.key]=e.value})),m().writeFile(t.milieu.projectPath,W()(a),(function(e){if(e)throw{name:"InjectionError",message:"Could not write to file '".concat(t.milieu.projectPath,"'. This could be related to an internal error, but please check the path anyways.")}})),function(){return new Promise((function(e,a){m().writeFile(t.milieu.projectPath,W()(r.withAtomics),(function(r){r&&a({name:"InjectionError",message:"Could not write to file '".concat(t.milieu.projectPath,"'. This could be related to an internal error, but please check the path anyways.")}),e(void 0)}))}))}}())),function(e){for(var t=["SIGINT","SIGTERM","SIGQUIT","SIGKILL","beforeExit"],r=0;r<t.length;r++){var a=t[r];process.on(a,(function(){e().then((function(){return process.exit()}))}))}}(R.getState().handleInjection.revertFunction);var c=n()(new Set(a.withoutAtomics["@jarvis/base/config"].bundle.map((function(e){return e.header.milieu.cwdPath}))));o().watch(c,{ignoreInitial:!0,persistent:!0}).on("all",(function(e,t){$(t,L(i,t))}))}}))}},159:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(727),_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__),path__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(622),path__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__),getAtomicsData=function(e){var t=JSON.parse(JSON.stringify(e)),r=[],a={metaInfo:{openCurlyBraces:0,startIndex:0,isEscaped:!1},key:{isWatching:!1,container:[]},value:{isWatching:!1,container:[]}};for(var n in t){var i=t[n],o=!a.key.isWatching&&!a.value.isWatching;if(i.match(/\\/)&&o)a.metaInfo.isEscaped=!a.metaInfo.isEscaped;else if(i.match(/\$/)&&o)a.key.isWatching=!0,a.metaInfo.startIndex=parseInt(n);else if(!i.match(/{/)||(a.metaInfo.openCurlyBraces++,a.key.isWatching&&!a.value.isWatching&&(a.key.isWatching=!1,a.value.isWatching=!0),a.metaInfo.openCurlyBraces-1)){if(i.match(/}/)){if(a.metaInfo.openCurlyBraces--,!a.metaInfo.openCurlyBraces){if(!a.metaInfo.isEscaped){var c=a.key.container.join(""),s=a.value.container.join(""),l=[a.metaInfo.startIndex,parseInt(n)];r.push({key:c,value:s,pos:l})}a={metaInfo:{openCurlyBraces:0,startIndex:0,isEscaped:!1},key:{isWatching:!1,container:[]},value:{isWatching:!1,container:[]}}}if(a.metaInfo.openCurlyBraces<0)throw{name:"AtomicsParsingError",message:"Unexpected curly brace at '".concat(n,"' in ").concat(t,".")}}a.key.isWatching?a.key.container.push(i):a.value.isWatching&&a.value.container.push(i)}}return r},useAtomicsData=function useAtomicsData(atomicsData){if(atomicsData.key.match(/^.{0}$/))return eval(atomicsData.value)();if(atomicsData.key.match(/^regexp?$/))return new RegExp(atomicsData.value);if(atomicsData.key.match(/^abspath$/))return path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(),atomicsData.value);throw{name:"AtomicsParsingError",message:"'".concat(atomicsData.key,"' is not a valid atomics key.")}},replaceAtomics=function e(t){switch(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(t)){case"object":for(var r in t)t[r]=e(t[r]);break;case"string":var a=getAtomicsData(t);if(a.length)if(a[0].pos[0]+a[0].pos[1]===t.length-1)t=useAtomicsData(a[0]);else{for(var n=t.split(""),i="",o=0;o<n.length;o++)if(a.length){if(a[0].pos[0]===o){i+=useAtomicsData(a[0]),o+=a[0].pos[1]-a[0].pos[0],a.shift();continue}i+=n[o]}t=i}}return t};const __WEBPACK_DEFAULT_EXPORT__=replaceAtomics},727:e=>{e.exports=require("@babel/runtime/helpers/typeof")},622:e=>{e.exports=require("path")}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}return __webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__(964)})();