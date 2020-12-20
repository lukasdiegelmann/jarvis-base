import path from "path";
import { ArgsSlice } from "./store.types";
import { createStore, combineReducers, createSlice } from "@reduxjs/toolkit";

const argsSlice = createSlice<ArgsSlice["initialState"], ArgsSlice["caseReducers"]>({
    name: "args",
    initialState: {
        processArgs: {
            compilation: {
                header: {
                    behavior: {
                        isQuiet: false,
                        shouldExecute: false,
                        shouldJustInit: false,
                    },
                },
                mode: "development",
            },
            milieu: {
                projectPath: path.resolve(process.cwd(), "./package.json"),
                focusedPath: null,
            },
        },
    },
    reducers: {
        setProcessArgs: (state, { payload }) => {
            state.processArgs = payload;
        },
        setProjectArgs: (state, { payload }) => {
            // @ts-ignore
            state.projectArgs = payload;
        },
    },
});

const reducerIntersection = combineReducers({
    args: argsSlice.reducer,
});

const store = createStore(reducerIntersection);

export const argsSliceActions = argsSlice.actions;
export default store;
