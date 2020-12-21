import path from "path";
import { CaseReducer, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { Args } from "../../typings/lib";

type State = Partial<Args>;

interface CaseReducers extends SliceCaseReducers<State> {
    setProcessArgs: CaseReducer<State, PayloadAction<State["processArgs"]>>;
    setProjectArgs: CaseReducer<State, PayloadAction<State["projectArgs"]>>;
}

const argsSlice = createSlice<State, CaseReducers>({
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
            output: "simple",
            milieu: {
                projectPath: path.resolve(process.cwd(), "./package.json"),
                compilePath: null,
            },
        },
    },
    reducers: {
        setProcessArgs: (state, { payload }) => {
            state.processArgs = payload;
        },
        setProjectArgs: (state, { payload }) => {
            (state.projectArgs as Args["projectArgs"]) = payload;
        },
    },
});

export const argsSliceActions = argsSlice.actions;
export default argsSlice;
