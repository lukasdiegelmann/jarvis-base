import { SetterCaseReducer, Args } from "../typings/lib";

export interface ArgsSlice {
    initialState: {
        processArgs: Args["processArgs"];
        projectArgs?: Args["projectArgs"];
    };
    caseReducers: {
        setProcessArgs: SetterCaseReducer<ArgsSlice["initialState"], "processArgs">;
        setProjectArgs: SetterCaseReducer<ArgsSlice["initialState"], "projectArgs">;
    };
}
