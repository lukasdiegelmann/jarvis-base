import { Stats } from "webpack";

export type ObserveCompilation = (
    focus: string,
    listener: <C extends 0 | 1 | 2>(
        eventCode: C,
        ...data: C extends 1 ? [Stats, number] : C extends 2 ? [string, number] : [number]
    ) => void
) => void;
