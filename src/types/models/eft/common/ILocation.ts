import type { Exit, ILocationBase } from "../../eft/common/ILocationBase.ts";
import type { ILooseLoot } from "../../eft/common/ILooseLoot.ts";
export interface ILocation {
    base: ILocationBase;
    looseLoot: ILooseLoot;
    statics: IStaticContainer;
    allExtracts: Exit[];
}
export interface IStaticContainer {
    containersGroups: Record<string, IContainerMinMax>;
    containers: Record<string, IContainerData>;
}
export interface IContainerMinMax {
    minContainers: number;
    maxContainers: number;
    current?: number;
    chosenCount?: number;
}
export interface IContainerData {
    groupId: string;
}
