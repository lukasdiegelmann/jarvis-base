import { AtomicsData } from "../../utils/typings/lib";

export type GetAtomicsData = (string: string) => AtomicsData[];
export type UseAtomicsData = (atomicsData: AtomicsData) => RegExp | (() => void) | string;
export type ReplaceAtomics = <T>(structure: unknown) => T;
