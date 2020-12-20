import { Args } from "../../utils/typings/lib";

export type SearchArgValue = (processArgv: string[], search: string) => string | null;
export type ParseProcessArgv = (processArgv: string[]) => Args["processArgs"];
