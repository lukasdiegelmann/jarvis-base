/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.jarvisBase =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./@structure/assets/json/jarvis-config.json":
/*!***************************************************!*\
  !*** ./@structure/assets/json/jarvis-config.json ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse(\"{\\\"$schema\\\":\\\"http://json-schema.org/draft-07/schema\\\",\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"bundle\\\":{\\\"type\\\":\\\"array\\\",\\\"items\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"header\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"milieu\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"cwdPath\\\":{\\\"type\\\":\\\"string\\\"},\\\"envPath\\\":{\\\"type\\\":\\\"string\\\"}},\\\"required\\\":[\\\"cwdPath\\\"],\\\"additionalProperties\\\":false},\\\"behavior\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"isQuiet\\\":{\\\"type\\\":\\\"boolean\\\"},\\\"shouldExecute\\\":{\\\"type\\\":\\\"boolean\\\"},\\\"shouldJustInit\\\":{\\\"type\\\":\\\"boolean\\\"}},\\\"additionalProperties\\\":false}},\\\"required\\\":[\\\"milieu\\\"],\\\"additionalProperties\\\":false},\\\"config\\\":{\\\"type\\\":\\\"object\\\"}}}},\\\"inject\\\":{\\\"type\\\":\\\"array\\\",\\\"items\\\":{\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"key\\\":{\\\"type\\\":\\\"string\\\"},\\\"value\\\":{}},\\\"required\\\":[\\\"key\\\",\\\"value\\\"],\\\"additionalProperties\\\":false}}}}\");\n\n//# sourceURL=webpack://jarvisBase/./@structure/assets/json/jarvis-config.json?");

/***/ }),

/***/ "./@structure/master.ts":
/*!******************************!*\
  !*** ./@structure/master.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chokidar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chokidar */ \"chokidar\");\n/* harmony import */ var chokidar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chokidar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_scaffolding_error_handling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/scaffolding/error-handling */ \"./@structure/src/scaffolding/error-handling.ts\");\n/* harmony import */ var _src_scaffolding_exit_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/scaffolding/exit-process */ \"./@structure/src/scaffolding/exit-process.ts\");\n/* harmony import */ var _src_plugins_process_argv_parsing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/plugins/process-argv-parsing */ \"./@structure/src/plugins/process-argv-parsing.ts\");\n/* harmony import */ var _src_plugins_process_args_parsing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/plugins/process-args-parsing */ \"./@structure/src/plugins/process-args-parsing.ts\");\n/* harmony import */ var _src_plugins_terminal_fabricating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/plugins/terminal-fabricating */ \"./@structure/src/plugins/terminal-fabricating.ts\");\n/* harmony import */ var _src_plugins_compilation_observing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/plugins/compilation-observing */ \"./@structure/src/plugins/compilation-observing.ts\");\n/* harmony import */ var _src_plugins_injection_handling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/plugins/injection-handling */ \"./@structure/src/plugins/injection-handling.ts\");\n/* harmony import */ var _src_utils_state_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/utils/state/store */ \"./@structure/src/utils/state/store.ts\");\n/* harmony import */ var _src_utils_state_slices_args_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/utils/state/slices/args-slice */ \"./@structure/src/utils/state/slices/args-slice.ts\");\n/* harmony import */ var _src_utils_state_slices_handle_injections_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/utils/state/slices/handle-injections-slice */ \"./@structure/src/utils/state/slices/handle-injections-slice.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar main = function main(processArgv) {\n  (0,_src_scaffolding_error_handling__WEBPACK_IMPORTED_MODULE_2__.default)();\n  _src_utils_state_store__WEBPACK_IMPORTED_MODULE_9__.default.dispatch(_src_utils_state_slices_args_slice__WEBPACK_IMPORTED_MODULE_10__.argsSliceActions.setProcessArgs((0,_src_plugins_process_argv_parsing__WEBPACK_IMPORTED_MODULE_4__.default)(processArgv)));\n  (0,_src_plugins_process_args_parsing__WEBPACK_IMPORTED_MODULE_5__.default)().then(function (newlyprojectArgs) {\n    _src_utils_state_store__WEBPACK_IMPORTED_MODULE_9__.default.dispatch(_src_utils_state_slices_args_slice__WEBPACK_IMPORTED_MODULE_10__.argsSliceActions.setProjectArgs(newlyprojectArgs));\n    var _store$getState$args = _src_utils_state_store__WEBPACK_IMPORTED_MODULE_9__.default.getState().args,\n        processArgs = _store$getState$args.processArgs,\n        projectArgs = _store$getState$args.projectArgs;\n    var terminal = (0,_src_plugins_terminal_fabricating__WEBPACK_IMPORTED_MODULE_6__.default)(processArgs.output);\n\n    if (processArgs.milieu.compilePath) {\n      (0,_src_plugins_compilation_observing__WEBPACK_IMPORTED_MODULE_7__.default)(processArgs.milieu.compilePath, (0,_src_plugins_terminal_fabricating__WEBPACK_IMPORTED_MODULE_6__.createTerminalListener)(terminal, processArgs.milieu.compilePath));\n    } else {\n      _src_utils_state_store__WEBPACK_IMPORTED_MODULE_9__.default.dispatch(_src_utils_state_slices_handle_injections_slice__WEBPACK_IMPORTED_MODULE_11__.handleInjectionSliceActions.setRevertFunction((0,_src_plugins_injection_handling__WEBPACK_IMPORTED_MODULE_8__.default)()));\n      var revertFunction = _src_utils_state_store__WEBPACK_IMPORTED_MODULE_9__.default.getState().handleInjection.revertFunction;\n      (0,_src_scaffolding_exit_process__WEBPACK_IMPORTED_MODULE_3__.default)(revertFunction);\n\n      var chokidarWatchPaths = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new Set(projectArgs.withoutAtomics[\"@jarvis/base/config\"].bundle.map(function (a) {\n        return a.header.milieu.cwdPath;\n      })));\n\n      var chokidarWatcher = chokidar__WEBPACK_IMPORTED_MODULE_1___default().watch(chokidarWatchPaths, {\n        ignoreInitial: true,\n        persistent: true\n      });\n      chokidarWatcher.on(\"all\", function (_eventName, filePath) {\n        (0,_src_plugins_compilation_observing__WEBPACK_IMPORTED_MODULE_7__.default)(filePath, (0,_src_plugins_terminal_fabricating__WEBPACK_IMPORTED_MODULE_6__.createTerminalListener)(terminal, filePath));\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://jarvisBase/./@structure/master.ts?");

/***/ }),

/***/ "./@structure/src/plugins/atomics-replacing.ts":
/*!*****************************************************!*\
  !*** ./@structure/src/plugins/atomics-replacing.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"@babel/runtime/helpers/typeof\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar getAtomicsData = function getAtomicsData(newlyValue) {\n  var value = JSON.parse(JSON.stringify(newlyValue));\n  var atomicsData = [];\n  var watchInfo = {\n    metaInfo: {\n      openCurlyBraces: 0,\n      startIndex: 0,\n      isEscaped: false\n    },\n    key: {\n      isWatching: false,\n      container: []\n    },\n    value: {\n      isWatching: false,\n      container: []\n    }\n  };\n\n  for (var i in value) {\n    var _char = value[i];\n    var isNotWatching = !watchInfo.key.isWatching && !watchInfo.value.isWatching;\n\n    if (_char.match(/\\\\/) && isNotWatching) {\n      watchInfo.metaInfo.isEscaped = !watchInfo.metaInfo.isEscaped;\n      continue;\n    }\n\n    if (_char.match(/\\$/) && isNotWatching) {\n      watchInfo.key.isWatching = true;\n      watchInfo.metaInfo.startIndex = parseInt(i);\n      continue;\n    }\n\n    if (_char.match(/{/)) {\n      watchInfo.metaInfo.openCurlyBraces++;\n\n      if (watchInfo.key.isWatching && !watchInfo.value.isWatching) {\n        watchInfo.key.isWatching = false;\n        watchInfo.value.isWatching = true;\n      }\n\n      if (!(watchInfo.metaInfo.openCurlyBraces - 1)) {\n        continue;\n      }\n    }\n\n    if (_char.match(/}/)) {\n      watchInfo.metaInfo.openCurlyBraces--;\n\n      if (!watchInfo.metaInfo.openCurlyBraces) {\n        if (!watchInfo.metaInfo.isEscaped) {\n          var key = watchInfo.key.container.join(\"\");\n\n          var _value = watchInfo.value.container.join(\"\");\n\n          var pos = [watchInfo.metaInfo.startIndex, parseInt(i)];\n          atomicsData.push({\n            key: key,\n            value: _value,\n            pos: pos\n          });\n        }\n\n        watchInfo = {\n          metaInfo: {\n            openCurlyBraces: 0,\n            startIndex: 0,\n            isEscaped: false\n          },\n          key: {\n            isWatching: false,\n            container: []\n          },\n          value: {\n            isWatching: false,\n            container: []\n          }\n        };\n      }\n\n      if (watchInfo.metaInfo.openCurlyBraces < 0) {\n        throw {\n          name: \"AtomicsParsingError\",\n          message: \"Unexpected curly brace at '\".concat(i, \"' in \").concat(value, \".\")\n        };\n      }\n    }\n\n    if (watchInfo.key.isWatching) {\n      watchInfo.key.container.push(_char);\n      continue;\n    }\n\n    if (watchInfo.value.isWatching) {\n      watchInfo.value.container.push(_char);\n      continue;\n    }\n  }\n\n  return atomicsData;\n};\n\nvar useAtomicsData = function useAtomicsData(atomicsData) {\n  if (atomicsData.key.match(/^.{0}$/)) {\n    return eval(atomicsData.value)();\n  }\n\n  if (atomicsData.key.match(/^regexp?$/)) {\n    return new RegExp(atomicsData.value);\n  }\n\n  if (atomicsData.key.match(/^abspath$/)) {\n    return path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), atomicsData.value);\n  }\n\n  throw {\n    name: \"AtomicsParsingError\",\n    message: \"'\".concat(atomicsData.key, \"' is not a valid atomics key.\")\n  };\n};\n\nvar replaceAtomics = function replaceAtomics(structure) {\n  switch (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(structure)) {\n    case \"object\":\n      for (var i in structure) {\n        structure[i] = replaceAtomics(structure[i]);\n      }\n\n      break;\n\n    case \"string\":\n      {\n        var atomicData = getAtomicsData(structure);\n\n        if (atomicData.length) {\n          if (atomicData[0].pos[0] + atomicData[0].pos[1] === structure.length - 1) {\n            structure = useAtomicsData(atomicData[0]);\n          } else {\n            var chars = structure.split(\"\");\n            var newValue = \"\";\n\n            for (var _i = 0; _i < chars.length; _i++) {\n              if (atomicData.length) {\n                if (atomicData[0].pos[0] === _i) {\n                  newValue += useAtomicsData(atomicData[0]);\n                  _i += atomicData[0].pos[1] - atomicData[0].pos[0];\n                  atomicData.shift();\n                  continue;\n                }\n\n                newValue += chars[_i];\n              }\n            }\n\n            structure = newValue;\n          }\n        }\n\n        break;\n      }\n  }\n\n  return structure;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceAtomics);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/plugins/atomics-replacing.ts?");

/***/ }),

/***/ "./@structure/src/plugins/compilation-observing.ts":
/*!*********************************************************!*\
  !*** ./@structure/src/plugins/compilation-observing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/state/store */ \"./@structure/src/utils/state/store.ts\");\n/* harmony import */ var _utils_state_slices_compilation_observing_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/state/slices/compilation-observing-slice */ \"./@structure/src/utils/state/slices/compilation-observing-slice.ts\");\n\n\n\n\n\n\n\nvar observeCompilation = function observeCompilation(focus, listener) {\n  var _store$getState$args = _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.getState().args,\n      processArgs = _store$getState$args.processArgs,\n      projectArgs = _store$getState$args.projectArgs;\n\n  var _loop = function _loop(i) {\n    var _projectArgs$withoutA = projectArgs.withoutAtomics[\"@jarvis/base/config\"].bundle[i],\n        header = _projectArgs$withoutA.header,\n        config = _projectArgs$withoutA.config;\n    var focusTemplate = \"\".concat(focus, \":\").concat(processArgs.compilation.mode).replace(/\\\\/g, \"/\");\n    var configTemplate = \"^\".concat(header.milieu.cwdPath, \".*:\").concat(config.mode).replace(/\\\\/g, \"/\");\n    var internal = _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.getState().observeCompilation.internals[i];\n    if (!header.behavior) header.behavior = {};\n\n    if (!internal) {\n      _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.dispatch(_utils_state_slices_compilation_observing_slice__WEBPACK_IMPORTED_MODULE_5__.observeCompilationSliceActions.setInternal({\n        id: i,\n        internal: {\n          isInitiated: false,\n          isRunning: false,\n          child: null\n        }\n      }));\n      internal = _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.getState().observeCompilation.internals[i];\n    }\n\n    if (focusTemplate.match(new RegExp(configTemplate)) && !(internal.isInitiated && header.behavior.shouldJustInit) && !internal.isRunning) {\n      _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.dispatch(_utils_state_slices_compilation_observing_slice__WEBPACK_IMPORTED_MODULE_5__.observeCompilationSliceActions.setInternal({\n        id: i,\n        internal: {\n          isInitiated: true,\n          isRunning: true\n        }\n      }));\n      internal = _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.getState().observeCompilation.internals[i];\n\n      if (internal.child) {\n        internal.child.kill();\n      }\n\n      var webpackCompiler = webpack__WEBPACK_IMPORTED_MODULE_3___default()(config);\n\n      if (!header.behavior.isQuiet) {\n        webpackCompiler.hooks.compilation.tap(\"invalid\", function () {\n          return listener(0, {\n            id: i\n          });\n        });\n      }\n\n      webpackCompiler.hooks.done.tap(\"done\", function (webpackStats) {\n        _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.dispatch(_utils_state_slices_compilation_observing_slice__WEBPACK_IMPORTED_MODULE_5__.observeCompilationSliceActions.setInternal({\n          id: i,\n          internal: {\n            isRunning: false\n          }\n        }));\n\n        if (!header.behavior.isQuiet) {\n          listener(1, {\n            id: i,\n            webpackStats: webpackStats\n          });\n        }\n\n        if (header.behavior.shouldExecute) {\n          var execFilePath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(config.output.path, config.output.filename);\n          var environmentVariables = header.milieu.envPath ? JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(header.milieu.envPath, {\n            encoding: \"utf8\"\n          })) : undefined;\n          var child = child_process__WEBPACK_IMPORTED_MODULE_1___default().spawn(\"node\", [execFilePath], {\n            cwd: config.output.path,\n            env: environmentVariables\n          });\n          child.stdout.on(\"data\", function (buffer) {\n            listener(2, {\n              id: i,\n              log: buffer.toString(\"utf8\")\n            });\n          });\n          child.stderr.on(\"data\", function (buffer) {\n            listener(2, {\n              id: i,\n              log: buffer.toString(\"utf8\")\n            });\n          });\n          _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.dispatch(_utils_state_slices_compilation_observing_slice__WEBPACK_IMPORTED_MODULE_5__.observeCompilationSliceActions.setInternal({\n            id: i,\n            internal: {\n              child: child\n            }\n          }));\n        }\n      });\n      webpackCompiler.run(function (err) {\n        if (err) {\n          throw err;\n        }\n      });\n    }\n  };\n\n  for (var i = 0; i < projectArgs.withoutAtomics[\"@jarvis/base/config\"].bundle.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeCompilation);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/plugins/compilation-observing.ts?");

/***/ }),

/***/ "./@structure/src/plugins/injection-handling.ts":
/*!******************************************************!*\
  !*** ./@structure/src/plugins/injection-handling.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var json_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-format */ \"json-format\");\n/* harmony import */ var json_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_format__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/state/store */ \"./@structure/src/utils/state/store.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar handleInjection = function handleInjection() {\n  var _store$getState$args = _utils_state_store__WEBPACK_IMPORTED_MODULE_3__.default.getState().args,\n      processArgs = _store$getState$args.processArgs,\n      projectArgs = _store$getState$args.projectArgs;\n\n  var printToProject = _objectSpread({}, projectArgs.withoutAtomics);\n\n  if (projectArgs.withoutAtomics[\"@jarvis/base/config\"].inject) {\n    projectArgs.withoutAtomics[\"@jarvis/base/config\"].inject.forEach(function (injection) {\n      return printToProject[injection.key] = injection.value;\n    });\n  }\n\n  fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile(processArgs.milieu.projectPath, json_format__WEBPACK_IMPORTED_MODULE_2___default()(printToProject), function (err) {\n    if (err) throw {\n      name: \"InjectionError\",\n      message: \"Could not write to file '\".concat(processArgs.milieu.projectPath, \"'. This could be related to an internal error, but please check the path anyways.\")\n    };\n  });\n  return function () {\n    return new Promise(function (resolve, reject) {\n      fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile(processArgs.milieu.projectPath, json_format__WEBPACK_IMPORTED_MODULE_2___default()(projectArgs.withAtomics), function (err) {\n        if (err) {\n          reject({\n            name: \"InjectionError\",\n            message: \"Could not write to file '\".concat(processArgs.milieu.projectPath, \"'. This could be related to an internal error, but please check the path anyways.\")\n          });\n        }\n\n        resolve(undefined);\n      });\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleInjection);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/plugins/injection-handling.ts?");

/***/ }),

/***/ "./@structure/src/plugins/process-args-parsing.ts":
/*!********************************************************!*\
  !*** ./@structure/src/plugins/process-args-parsing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ajv */ \"ajv\");\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atomics_replacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atomics-replacing */ \"./@structure/src/plugins/atomics-replacing.ts\");\n/* harmony import */ var _assets_json_jarvis_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/json/jarvis-config.json */ \"./@structure/assets/json/jarvis-config.json\");\n/* harmony import */ var _utils_state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/state/store */ \"./@structure/src/utils/state/store.ts\");\n/* harmony import */ var json_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! json-format */ \"json-format\");\n/* harmony import */ var json_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(json_format__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar parseProcessArgs = function parseProcessArgs() {\n  return new Promise(function (resolve, reject) {\n    var state = _utils_state_store__WEBPACK_IMPORTED_MODULE_4__.default.getState();\n    fs__WEBPACK_IMPORTED_MODULE_0___default().readFile(state.args.processArgs.milieu.projectPath, {\n      encoding: \"utf8\"\n    }, function (err, data) {\n      if (err) {\n        reject({\n          name: \"ProjectArgsError\",\n          message: \"Could not find file at '\".concat(state.args.processArgs.milieu.projectPath, \"'. This is probably due to an incorrect current working directory.\")\n        });\n      }\n\n      var json = JSON.parse(data);\n\n      if (!json[\"@jarvis/base/config\"]) {\n        reject({\n          name: \"ProjectArgsError\",\n          message: \"Property '@jarvis/base/config' could not be found on project configuration. Please define a @jarvis/base config.\"\n        });\n      }\n\n      if (new (ajv__WEBPACK_IMPORTED_MODULE_1___default())().compile(_assets_json_jarvis_config_json__WEBPACK_IMPORTED_MODULE_3__)(json[\"@jarvis/base/config\"])) {\n        resolve({\n          withAtomics: json,\n          withoutAtomics: (0,_atomics_replacing__WEBPACK_IMPORTED_MODULE_2__.default)(JSON.parse(JSON.stringify(json)))\n        });\n      } else {\n        reject({\n          name: \"ProjectArgsError\",\n          message: \"Invalid jarvis config received. Please compare to json-schema: \\n\\n\".concat(json_format__WEBPACK_IMPORTED_MODULE_5___default()(_assets_json_jarvis_config_json__WEBPACK_IMPORTED_MODULE_3__))\n        });\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseProcessArgs);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/plugins/process-args-parsing.ts?");

/***/ }),

/***/ "./@structure/src/plugins/process-argv-parsing.ts":
/*!********************************************************!*\
  !*** ./@structure/src/plugins/process-argv-parsing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar searchArgValue = function searchArgValue(processArgv, search) {\n  var arg = processArgv.filter(function (a) {\n    return a.match(new RegExp(\"-+\".concat(search, \"=.+\")));\n  })[0];\n  return arg ? arg.split(\"=\")[1] : null;\n};\n\nvar parseProcessArgv = function parseProcessArgv(processArgv) {\n  var _argValues$compilatio, _argValues$compilatio2, _path$resolve;\n\n  var argValues = {\n    compilation: {\n      mode: searchArgValue(processArgv, \"mode\"),\n      header: searchArgValue(processArgv, \"header\")\n    },\n    output: searchArgValue(processArgv, \"output\"),\n    milieu: {\n      projectPath: searchArgValue(processArgv, \"projectPath\"),\n      compilePath: searchArgValue(processArgv, \"compilePath\")\n    }\n  };\n\n  if (!argValues.compilation.mode || !argValues.compilation.mode.match(/d|development|p|production/)) {\n    throw {\n      name: \"ProcessArgsError\",\n      message: \"You have to specify a valid compilation mode - '\".concat(argValues.compilation.mode, \"' is not a valid compilation mode.\")\n    };\n  }\n\n  if (!argValues.milieu.projectPath) {\n    throw {\n      name: \"ProcessArgsError\",\n      message: \"You have to specify a valid project path - '\".concat(argValues.milieu.projectPath, \"' is not a valid project path.\")\n    };\n  }\n\n  if (!argValues.output || !argValues.output.match(/simple|complex/)) {\n    throw {\n      name: \"ProcessArgsError\",\n      message: \"You have to specify a valid output method - '\".concat(argValues.output, \"' is not a valid output method.\")\n    };\n  }\n\n  return {\n    compilation: {\n      mode: ((_argValues$compilatio = argValues.compilation.mode) !== null && _argValues$compilatio !== void 0 ? _argValues$compilatio : \"\").match(/d|development/) ? \"development\" : \"production\",\n      header: JSON.parse((_argValues$compilatio2 = argValues.compilation.header) !== null && _argValues$compilatio2 !== void 0 ? _argValues$compilatio2 : \"{}\")\n    },\n    output: argValues.output === \"complex\" ? \"complex\" : \"simple\",\n    milieu: {\n      projectPath: (_path$resolve = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), argValues.milieu.projectPath)) !== null && _path$resolve !== void 0 ? _path$resolve : path__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), \"./package.json\"),\n      compilePath: searchArgValue(processArgv, \"compilePath\") ? path__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), argValues.milieu.compilePath) : null\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseProcessArgv);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/plugins/process-argv-parsing.ts?");

/***/ }),

/***/ "./@structure/src/plugins/terminal-fabricating.ts":
/*!********************************************************!*\
  !*** ./@structure/src/plugins/terminal-fabricating.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTerminalListener\": () => /* binding */ createTerminalListener,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var blessed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blessed */ \"blessed\");\n/* harmony import */ var blessed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blessed__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_format_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-format-messages */ \"webpack-format-messages\");\n/* harmony import */ var webpack_format_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_format_messages__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_logging_string_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/logging/string-constructor */ \"./@structure/src/utils/logging/string-constructor.ts\");\n/* harmony import */ var _utils_state_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/state/store */ \"./@structure/src/utils/state/store.ts\");\n\n\n\n\n\n\n\nvar fabricateComplexTerminal = function fabricateComplexTerminal() {\n  var internalState = [];\n  var processArgs = _utils_state_store__WEBPACK_IMPORTED_MODULE_5__.default.getState().args.processArgs; // @ts-ignore\n\n  var screen = blessed__WEBPACK_IMPORTED_MODULE_1___default().screen({\n    smartCSR: true,\n    autoPadding: true,\n    cursor: {\n      artificial: true,\n      shape: \"line\",\n      blink: true,\n      color: \"black\"\n    }\n  }); // @ts-ignore\n\n  var processesPanel = blessed__WEBPACK_IMPORTED_MODULE_1___default().list({\n    width: \"100%\",\n    height: \"100%\"\n  });\n  processesPanel.on(\"prerender\", function () {\n    for (var i = 0; i < processesPanel.children.length; i++) {\n      processesPanel.children[i].width = \"\".concat(Math.floor(100 / processesPanel.children.length), \"%\");\n      processesPanel.children[i].left = \"\".concat(Math.floor(100 * i / processesPanel.children.length), \"%\");\n    }\n  });\n  screen.key([\"right\"], function () {\n    for (var i = 0; i < processesPanel.children.length; i++) {\n      if (processesPanel.children[i].children[1].focused) {\n        var k = i + 1 < processesPanel.children.length - 1 ? i + 1 : processesPanel.children.length - 1;\n        processesPanel.children[k].children[1].focus();\n        screen.render();\n        break;\n      }\n    }\n  });\n  screen.key([\"left\"], function () {\n    for (var i = 0; i < processesPanel.children.length; i++) {\n      if (processesPanel.children[i].children[1].focused) {\n        var k = i - 1 >= 0 ? i - 1 : 0;\n        processesPanel.children[k].children[1].focus();\n        screen.render();\n        break;\n      }\n    }\n  });\n  screen.key([\"C-c\"], function () {\n    _utils_state_store__WEBPACK_IMPORTED_MODULE_5__.default.getState().handleInjection.revertFunction().then(function () {\n      return process.exit(0);\n    });\n  });\n  screen.append(processesPanel);\n  screen.render();\n  return {\n    type: \"complex\",\n    fin: function fin(info) {\n      if (internalState[info.linearID].invalidateProgress) {\n        internalState[info.linearID].invalidateProgress();\n      }\n\n      var processPanelID = internalState[info.linearID].id;\n      processesPanel.children[processPanelID].children[0].content = (0,_utils_logging_string_constructor__WEBPACK_IMPORTED_MODULE_4__.default)(\"high/terminal/complex/header\", {\n        compilationMode: processArgs.compilation.mode,\n        entryPath: path__WEBPACK_IMPORTED_MODULE_2___default().relative(process.cwd(), info.focusPath),\n        webpackStats: info.webpackStats\n      });\n      screen.render();\n    },\n    init: function init(info) {\n      if (!internalState[info.linearID]) {\n        processesPanel.append( // @ts-ignore\n        blessed__WEBPACK_IMPORTED_MODULE_1___default().box({\n          width: \"100%\",\n          height: \"100%\",\n          border: {\n            type: \"line\"\n          },\n          children: [// @ts-ignore\n          blessed__WEBPACK_IMPORTED_MODULE_1___default().box({\n            width: \"100%-2\",\n            height: 1,\n            align: \"center\"\n          }), // @ts-ignore\n          blessed__WEBPACK_IMPORTED_MODULE_1___default().log({\n            width: \"100%-2\",\n            height: \"100%-3\",\n            top: 1,\n            alwaysScroll: true,\n            scrollable: true,\n            focusable: true,\n            keys: true,\n            scrollbar: {\n              ch: chalk__WEBPACK_IMPORTED_MODULE_0___default().inverse(\" \")\n            }\n          }), // @ts-ignore\n          blessed__WEBPACK_IMPORTED_MODULE_1___default().progressbar({\n            orientation: \"horizontal\",\n            width: \"100%-2\",\n            height: \"100%-2\",\n            hidden: true,\n            style: {\n              bar: {\n                fg: \"white\"\n              }\n            },\n            ch: chalk__WEBPACK_IMPORTED_MODULE_0___default().inverse(\" \")\n          })]\n        }));\n      }\n\n      var _internalState$info$l = internalState[info.linearID] = {\n        id: processesPanel.children.length - 1\n      },\n          processPanelID = _internalState$info$l.id;\n\n      var isInvalidated = false;\n\n      var progressLoop = function progressLoop() {\n        var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n        return setTimeout(function () {\n          if (!isInvalidated) {\n            var newProgress = progress + (100 - progress) / 8;\n            processesPanel.children[processPanelID].children[2].filled = newProgress;\n            processesPanel.children[processPanelID].children[2].hidden = false;\n            screen.render();\n            progressLoop(newProgress);\n          } else {\n            processesPanel.children[processPanelID].children[2].hidden = true;\n            screen.render();\n          }\n        }, 100);\n      };\n\n      progressLoop();\n      processesPanel.children[processPanelID].children[1].content = \"\";\n      processesPanel.children[processPanelID].children[1].focus();\n      screen.render();\n\n      internalState[info.linearID].invalidateProgress = function () {\n        return isInvalidated = true;\n      };\n    },\n    log: function log(info) {\n      var processPanelID = internalState[info.linearID].id;\n      processesPanel.children[processPanelID].children[1].log(info.log);\n    }\n  };\n};\n\nvar fabricateSimpleTerminal = function fabricateSimpleTerminal() {\n  var processArgs = _utils_state_store__WEBPACK_IMPORTED_MODULE_5__.default.getState().args.processArgs;\n  return {\n    type: \"simple\",\n    fin: function fin(info) {\n      process.stdout.write((0,_utils_logging_string_constructor__WEBPACK_IMPORTED_MODULE_4__.default)(\"high/terminal/simple/done\", {\n        compilationMode: processArgs.compilation.mode,\n        entryPath: path__WEBPACK_IMPORTED_MODULE_2___default().relative(process.cwd(), info.focusPath),\n        webpackStats: info.webpackStats\n      }) + \"\\n\");\n\n      if (info.webpackStats.hasWarnings()) {\n        process.stdout.write(\"\".concat(webpack_format_messages__WEBPACK_IMPORTED_MODULE_3___default()(info.webpackStats).warnings.reduce(function (p, c) {\n          return \"\".concat(p, \"\\n\").concat(c);\n        }, \"\"), \"\\n\"));\n      }\n\n      if (info.webpackStats.hasErrors()) {\n        process.stdout.write(\"\".concat(webpack_format_messages__WEBPACK_IMPORTED_MODULE_3___default()(info.webpackStats).errors.reduce(function (p, c) {\n          return \"\".concat(p, \"\\n\").concat(c);\n        }, \"\"), \"\\n\"));\n      }\n    },\n    init: function init(info) {\n      process.stdout.write((0,_utils_logging_string_constructor__WEBPACK_IMPORTED_MODULE_4__.default)(\"high/terminal/simple/compiling\", {\n        compilationMode: processArgs.compilation.mode,\n        entryPath: path__WEBPACK_IMPORTED_MODULE_2___default().relative(process.cwd(), info.focusPath)\n      }) + \"\\n\");\n    },\n    log: function log(info) {\n      process.stdout.write((0,_utils_logging_string_constructor__WEBPACK_IMPORTED_MODULE_4__.default)(\"high/terminal/simple/log\", {\n        compilationMode: processArgs.compilation.mode,\n        entryPath: path__WEBPACK_IMPORTED_MODULE_2___default().relative(process.cwd(), info.focusPath),\n        log: info.log\n      }) + \"\\n\");\n    }\n  };\n};\n\nvar fabricateTerminal = function fabricateTerminal(type) {\n  switch (type) {\n    case \"complex\":\n      // @ts-expect-error\n      return fabricateComplexTerminal();\n\n    case \"simple\":\n      // @ts-expect-error\n      return fabricateSimpleTerminal();\n  }\n};\n\nvar createTerminalListener = function createTerminalListener(terminal, focusPath) {\n  return function (eventCode, info) {\n    switch (eventCode) {\n      case 0:\n        terminal.init({\n          linearID: info.id,\n          focusPath: focusPath\n        });\n        break;\n\n      case 1:\n        terminal.fin({\n          focusPath: focusPath,\n          linearID: info.id,\n          webpackStats: info.webpackStats\n        });\n        break;\n\n      case 2:\n        terminal.log({\n          focusPath: focusPath,\n          linearID: info.id,\n          log: info.log\n        });\n        break;\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabricateTerminal);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/plugins/terminal-fabricating.ts?");

/***/ }),

/***/ "./@structure/src/scaffolding/error-handling.ts":
/*!******************************************************!*\
  !*** ./@structure/src/scaffolding/error-handling.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_logging_string_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/logging/string-constructor */ \"./@structure/src/utils/logging/string-constructor.ts\");\n\n\nvar establishErrorHandling = function establishErrorHandling() {\n  process.on(\"uncaughtException\", function (error) {\n    process.stdout.write((0,_utils_logging_string_constructor__WEBPACK_IMPORTED_MODULE_0__.default)(\"high/error\", error));\n  });\n  process.on(\"unhandledRejection\", function (reason) {\n    process.stdout.write((0,_utils_logging_string_constructor__WEBPACK_IMPORTED_MODULE_0__.default)(\"high/error\", reason));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (establishErrorHandling);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/scaffolding/error-handling.ts?");

/***/ }),

/***/ "./@structure/src/scaffolding/exit-process.ts":
/*!****************************************************!*\
  !*** ./@structure/src/scaffolding/exit-process.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar exitProcess = function exitProcess(cleanup) {\n  var signals = [\"SIGINT\", \"SIGTERM\", \"SIGQUIT\", \"SIGKILL\", \"beforeExit\"];\n\n  for (var i = 0; i < signals.length; i++) {\n    var signal = signals[i];\n    process.on(signal, function () {\n      cleanup().then(function () {\n        return process.exit();\n      });\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exitProcess);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/scaffolding/exit-process.ts?");

/***/ }),

/***/ "./@structure/src/utils/logging/string-constructor.ts":
/*!************************************************************!*\
  !*** ./@structure/src/utils/logging/string-constructor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar constructString = function constructString(component, info) {\n  switch (component) {\n    case \"low/tag\":\n      {\n        var i = info;\n        return \"\".concat(i.braces[0]).concat(chalk__WEBPACK_IMPORTED_MODULE_0___default().bold(i.formatting ? i.formatting(i.string) : i.string)).concat(i.braces[1]);\n      }\n\n    case \"low/shift\":\n      {\n        var _i = info;\n        return \"|\".concat(\" \".repeat(_i.width)).concat(JSON.stringify(_i.string).replace(/\\\\n/g, \"\\n|\".concat(\" \".repeat(_i.width))).split(\"\").filter(function (_a, b, c) {\n          return b !== 0 && b !== c.length - 1;\n        }).join(\"\"));\n      }\n\n    case \"low/line-break\":\n      {\n        var _i2 = info;\n\n        var chars = _i2.string.split(\"\");\n\n        var newStr = \"\";\n\n        for (var k = 0; k < chars.length; k++) {\n          if (k % _i2.range === 0 && k !== 0) {\n            newStr += \"\\n\";\n          }\n\n          newStr += chars[k];\n        }\n\n        return newStr;\n      }\n\n    case \"low/tag/jarvis-base\":\n      {\n        return constructString(\"low/tag\", {\n          braces: \"{}\",\n          formatting: (chalk__WEBPACK_IMPORTED_MODULE_0___default().underline.cyan),\n          string: \"@jarvis/base\"\n        });\n      }\n\n    case \"high/terminal/simple/prefix\":\n      {\n        var _i3 = info;\n        return \"\\u21B3 \".concat(constructString(\"low/tag/jarvis-base\", {}), \" \\u2192 \").concat(constructString(\"low/tag\", {\n          braces: \"[]\",\n          string: \"entryPath\"\n        }), \" \").concat(_i3.entryPath, \" \\u2022 \").concat(constructString(\"low/tag\", {\n          braces: \"[]\",\n          string: \"mode\"\n        }), \" \").concat(_i3.compilationMode, \" >>\");\n      }\n\n    case \"high/terminal/simple/compiling\":\n      {\n        var _i4 = info;\n        return \"\".concat(constructString(\"high/terminal/simple/prefix\", _i4), \" \").concat(chalk__WEBPACK_IMPORTED_MODULE_0___default().bold.cyan(\"compiling...\"));\n      }\n\n    case \"high/terminal/simple/done\":\n      {\n        var _i5 = info;\n        return \"\".concat(constructString(\"high/terminal/simple/prefix\", _i5), \" \").concat(constructString(\"low/tag\", {\n          braces: \"()\",\n          string: \"time\"\n        }), \" \").concat(_i5.webpackStats.endTime - _i5.webpackStats.startTime, \"ms \\u2022 \").concat(constructString(\"low/tag\", {\n          braces: \"()\",\n          string: \"state\"\n        }), \" \").concat(_i5.webpackStats.hasErrors() ? chalk__WEBPACK_IMPORTED_MODULE_0___default().bold.red(\"ERR!\") : _i5.webpackStats.hasWarnings() ? chalk__WEBPACK_IMPORTED_MODULE_0___default().bold.yellow(\"WRN!\") : chalk__WEBPACK_IMPORTED_MODULE_0___default().bold.green(\"SCS!\"));\n      }\n\n    case \"high/terminal/simple/log\":\n      {\n        var _i6 = info;\n        return \"\".concat(constructString(\"high/terminal/simple/prefix\", _i6), \" \").concat(constructString(\"low/tag\", {\n          braces: \"()\",\n          string: \"output\"\n        }), \" \").concat(_i6.log);\n      }\n\n    case \"high/terminal/complex/header\":\n      {\n        var _i7 = info;\n        return \"(\".concat(constructString(\"low/tag\", {\n          braces: \"[]\",\n          string: \"entryPath\"\n        }), \" \").concat(_i7.entryPath, \" \\u2022 \").concat(constructString(\"low/tag\", {\n          braces: \"[]\",\n          string: \"mode\"\n        }), \" \").concat(_i7.compilationMode, \" >> \").concat(constructString(\"low/tag\", {\n          braces: \"()\",\n          string: \"time\"\n        }), \" \").concat(_i7.webpackStats.endTime - _i7.webpackStats.startTime, \"ms \\u2022 \").concat(constructString(\"low/tag\", {\n          braces: \"()\",\n          string: \"state\"\n        }), \" \").concat(_i7.webpackStats.hasErrors() ? chalk__WEBPACK_IMPORTED_MODULE_0___default().bold.red(\"ERR!\") : _i7.webpackStats.hasWarnings() ? chalk__WEBPACK_IMPORTED_MODULE_0___default().bold.yellow(\"WRN!\") : chalk__WEBPACK_IMPORTED_MODULE_0___default().bold.green(\"SCS!\"), \")\");\n      }\n\n    case \"high/error\":\n      {\n        var _i8 = info;\n        return \"\\u21B3 \".concat(constructString(\"low/tag/jarvis-base\", {}), \" \\u2192 \").concat(constructString(\"low/tag\", {\n          braces: \"()\",\n          string: _i8.name,\n          formatting: (chalk__WEBPACK_IMPORTED_MODULE_0___default().red)\n        }), \"\\n\\u2022\\n\").concat(constructString(\"low/shift\", {\n          width: 1,\n          string: constructString(\"low/line-break\", {\n            range: process.stdout.columns - 10,\n            string: _i8.message\n          })\n        }), \"\\n\\u2022\").concat(_i8.stack ? \"\\n\".concat(constructString(\"low/shift\", {\n          width: 1,\n          string: constructString(\"low/line-break\", {\n            range: process.stdout.columns - 10,\n            string: _i8.stack\n          })\n        }), \"\\n\\u2022\") : \"\", \"\\n\\n\");\n      }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructString);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/utils/logging/string-constructor.ts?");

/***/ }),

/***/ "./@structure/src/utils/state/slices/args-slice.ts":
/*!*********************************************************!*\
  !*** ./@structure/src/utils/state/slices/args-slice.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"argsSliceActions\": () => /* binding */ argsSliceActions,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar argsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: \"args\",\n  initialState: {\n    processArgs: {\n      compilation: {\n        header: {\n          behavior: {\n            isQuiet: false,\n            shouldExecute: false,\n            shouldJustInit: false\n          }\n        },\n        mode: \"development\"\n      },\n      output: \"simple\",\n      milieu: {\n        projectPath: path__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), \"./package.json\"),\n        compilePath: null\n      }\n    }\n  },\n  reducers: {\n    setProcessArgs: function setProcessArgs(state, _ref) {\n      var payload = _ref.payload;\n      state.processArgs = payload;\n    },\n    setProjectArgs: function setProjectArgs(state, _ref2) {\n      var payload = _ref2.payload;\n      state.projectArgs = payload;\n    }\n  }\n});\nvar argsSliceActions = argsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (argsSlice);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/utils/state/slices/args-slice.ts?");

/***/ }),

/***/ "./@structure/src/utils/state/slices/compilation-observing-slice.ts":
/*!**************************************************************************!*\
  !*** ./@structure/src/utils/state/slices/compilation-observing-slice.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"observeCompilationSliceActions\": () => /* binding */ observeCompilationSliceActions,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar observeCompilationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: \"args\",\n  initialState: {\n    internals: []\n  },\n  reducers: {\n    setInternal: function setInternal(state, _ref) {\n      var payload = _ref.payload;\n      state.internals[payload.id] = _objectSpread(_objectSpread({}, state.internals[payload.id]), payload.internal);\n    }\n  }\n});\nvar observeCompilationSliceActions = observeCompilationSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeCompilationSlice);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/utils/state/slices/compilation-observing-slice.ts?");

/***/ }),

/***/ "./@structure/src/utils/state/slices/handle-injections-slice.ts":
/*!**********************************************************************!*\
  !*** ./@structure/src/utils/state/slices/handle-injections-slice.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleInjectionSliceActions\": () => /* binding */ handleInjectionSliceActions,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nvar handleInjectionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"handleInjection\",\n  initialState: {\n    revertFunction: null\n  },\n  reducers: {\n    setRevertFunction: function setRevertFunction(state, _ref) {\n      var payload = _ref.payload;\n      state.revertFunction = payload;\n    }\n  }\n});\nvar handleInjectionSliceActions = handleInjectionSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleInjectionSlice);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/utils/state/slices/handle-injections-slice.ts?");

/***/ }),

/***/ "./@structure/src/utils/state/store.ts":
/*!*********************************************!*\
  !*** ./@structure/src/utils/state/store.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _slices_handle_injections_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/handle-injections-slice */ \"./@structure/src/utils/state/slices/handle-injections-slice.ts\");\n/* harmony import */ var _slices_args_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/args-slice */ \"./@structure/src/utils/state/slices/args-slice.ts\");\n/* harmony import */ var _slices_compilation_observing_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/compilation-observing-slice */ \"./@structure/src/utils/state/slices/compilation-observing-slice.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar reducerIntersection = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({\n  args: _slices_args_slice__WEBPACK_IMPORTED_MODULE_1__.default.reducer,\n  handleInjection: _slices_handle_injections_slice__WEBPACK_IMPORTED_MODULE_0__.default.reducer,\n  observeCompilation: _slices_compilation_observing_slice__WEBPACK_IMPORTED_MODULE_2__.default.reducer\n});\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createStore)(reducerIntersection);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://jarvisBase/./@structure/src/utils/state/store.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/***/ ((module) => {

eval("module.exports = require(\"@babel/runtime/helpers/typeof\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22@babel/runtime/helpers/typeof%22?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = require(\"@reduxjs/toolkit\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22@reduxjs/toolkit%22?");

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = require(\"ajv\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22ajv%22?");

/***/ }),

/***/ "blessed":
/*!**************************!*\
  !*** external "blessed" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"blessed\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22blessed%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

eval("module.exports = require(\"chalk\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22chalk%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = require(\"child_process\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22child_process%22?");

/***/ }),

/***/ "chokidar":
/*!***************************!*\
  !*** external "chokidar" ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = require(\"chokidar\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22chokidar%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = require(\"fs\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22fs%22?");

/***/ }),

/***/ "json-format":
/*!******************************!*\
  !*** external "json-format" ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = require(\"json-format\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22json-format%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"webpack\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22webpack%22?");

/***/ }),

/***/ "webpack-format-messages":
/*!******************************************!*\
  !*** external "webpack-format-messages" ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = require(\"webpack-format-messages\");;\n\n//# sourceURL=webpack://jarvisBase/external_%22webpack-format-messages%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./@structure/master.ts");
/******/ })()
;