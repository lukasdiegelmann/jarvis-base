import { CaseReducer, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { ChildProcess } from "child_process";

interface State {
    internals: {
        isRunning: boolean;
        isInitiated: boolean;
        child: ChildProcess | null;
    }[];
}

interface CaseReducers extends SliceCaseReducers<State> {
    setInternal: CaseReducer<
        State,
        PayloadAction<{ id: number; internal: Partial<State["internals"][0]> }>
    >;
}

const observeCompilationSlice = createSlice<State, CaseReducers>({
    name: "args",
    initialState: {
        internals: [],
    },
    reducers: {
        setInternal: (state, { payload }) => {
            state.internals[payload.id] = { ...state.internals[payload.id], ...payload.internal };
        },
    },
});

export const observeCompilationSliceActions = observeCompilationSlice.actions;
export default observeCompilationSlice;
