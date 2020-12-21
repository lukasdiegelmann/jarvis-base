import { CaseReducer, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

interface State {
    revertFunction: (() => Promise<undefined>) | null;
}

interface CaseReducers extends SliceCaseReducers<State> {
    setRevertFunction: CaseReducer<State, PayloadAction<State["revertFunction"]>>;
}

const handleInjectionSlice = createSlice<State, CaseReducers>({
    name: "handleInjection",
    initialState: {
        revertFunction: null,
    },
    reducers: {
        setRevertFunction: (state, { payload }) => {
            state.revertFunction = payload;
        },
    },
});

export const handleInjectionSliceActions = handleInjectionSlice.actions;
export default handleInjectionSlice;
