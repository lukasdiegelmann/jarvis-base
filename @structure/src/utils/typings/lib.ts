import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Configuration, Stats } from "webpack";

export type SetterCaseReducer<T, U extends keyof T> = CaseReducer<T, PayloadAction<T[U]>>;

export interface JarvisConfig {
    readonly inject: Readonly<
        {
            key: string;
            value: Record<string, unknown>;
        }[]
    >;
    readonly bundle: Readonly<{
        header: {
            milieu: {
                cwdPath: string;
                envPath?: string;
            };
            behavior?: Partial<{
                isQuiet: boolean;
                shouldExecute: boolean;
                shouldJustInit: boolean;
            }>;
        };
        config: Configuration;
    }>[];
}

interface ProcessArgs {
    readonly milieu: Readonly<{
        projectPath: string;
        compilePath?: string;
    }>;
    readonly output: ComplexTerminal["type"] | SimpleTerminal["type"];
    readonly compilation: Readonly<{
        mode: "development" | "production";
        header: Partial<JarvisConfig["bundle"][0]["header"]>;
    }>;
}

interface ProjectArgs {
    readonly withAtomics: Record<string, unknown> & { "@jarvis/base/config": JarvisConfig };
    readonly withoutAtomics: Record<string, unknown> & { "@jarvis/base/config": JarvisConfig };
}

export interface Args {
    readonly processArgs: ProcessArgs;
    readonly projectArgs: ProjectArgs;
}

export interface Exception {
    readonly errno: number;
    readonly err: string | Error;
}

export interface SimpleTerminal {
    readonly type: "simple";
    readonly init: (info: { focusPath: string }) => void;
    readonly log: (info: { focusPath: string; log: string }) => void;
    readonly fin: (info: { focusPath: string; webpackStats: Stats }) => void;
}

export interface ComplexTerminal {
    readonly type: "complex";
    readonly init: (info: { linearID: number }) => void;
    readonly log: (info: { linearID: number; log: string }) => void;
    readonly fin: (info: { linearID: number; focusPath: string; webpackStats: Stats }) => void;
}

export interface AtomicsData {
    readonly key: string;
    readonly value: string;
    readonly pos: [number, number];
}
