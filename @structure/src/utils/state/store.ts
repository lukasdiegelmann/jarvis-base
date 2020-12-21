import handleInjectionSlice from "./slices/handle-injections-slice";
import argsSlice from "./slices/args-slice";
import observeCompilationSlice from "./slices/compilation-observing-slice";
import { createStore, combineReducers } from "@reduxjs/toolkit";

const reducerIntersection = combineReducers({
    args: argsSlice.reducer,
    handleInjection: handleInjectionSlice.reducer,
    observeCompilation: observeCompilationSlice.reducer,
});

const store = createStore(reducerIntersection);

export default store;
