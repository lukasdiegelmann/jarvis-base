import { ComplexTerminal, SimpleTerminal } from "../../utils/typings/lib";

export type FabricateSimpleTerminal = () => SimpleTerminal;
export type FabricateComplexTerminal = () => ComplexTerminal;
export type FabricateTerminal = <T extends SimpleTerminal["type"] | ComplexTerminal["type"]>(
    type: T
) => T extends SimpleTerminal["type"] ? SimpleTerminal : ComplexTerminal;
