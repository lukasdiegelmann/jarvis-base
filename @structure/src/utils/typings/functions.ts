import { Stats } from "webpack";
import { Exception, SimpleTerminal, ComplexTerminal, AtomicsData, JarvisConfig, Args } from "./lib";

/* -------------------------------------------------------------------------- */
/*                                 ./master.ts                                */
/* -------------------------------------------------------------------------- */

export type Main = (processArgv: string[]) => void;

/* -------------------------------------------------------------------------- */
/*                   ./src/scaffolding/atomics-switching.ts                   */
/* -------------------------------------------------------------------------- */

export type HandleException = (exception: Exception) => void;

/* -------------------------------------------------------------------------- */
/*                  ./src/scaffolding/process-argv-parsing.ts                 */
/* -------------------------------------------------------------------------- */

export type SearchArgValue = (processArgv: string[], search: string) => string | null;
export type ParseProcessArgv = (processArgv: string[]) => Args["processArgs"];

/* -------------------------------------------------------------------------- */
/*                ./src/scaffolding/jarvis-config-approving.ts                */
/* -------------------------------------------------------------------------- */

export type ParseProcessArgs = (processArgs: Args["processArgs"]) => Promise<Args["projectArgs"]>;

/* -------------------------------------------------------------------------- */
/*                  ./src/scaffolding/terminal-fabricating.ts                 */
/* -------------------------------------------------------------------------- */

export type FabricateSimpleTerminal = () => SimpleTerminal;
export type FabricateComplexTerminal = (args: Args) => ComplexTerminal;
export type FabricateTerminal = <T extends SimpleTerminal["type"] | ComplexTerminal["type"]>(
    args: Args,
    type: T
) => T extends SimpleTerminal["type"] ? SimpleTerminal : ComplexTerminal;

/* -------------------------------------------------------------------------- */
/*                   ./src/scaffolding/atomics-replacing.ts                   */
/* -------------------------------------------------------------------------- */

export type GetAtomicsData = (value: string) => AtomicsData[];
export type UseAtomicsData = (atomicsData: AtomicsData) => RegExp | (() => unknown) | string;
export type ReplaceAtomicsData = (value: unknown) => unknown;

/* -------------------------------------------------------------------------- */
/*                 ./src/scaffolding/compilation-execution.ts                 */
/* -------------------------------------------------------------------------- */

export type ObserveCompilation = (
    processArgs: Args["processArgs"],
    bundleConfigs: JarvisConfig["bundle"],
    entryPoint: string
) => () => void;
