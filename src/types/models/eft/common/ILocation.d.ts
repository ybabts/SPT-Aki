import { Exit, ILocationBase } from "../../eft/common/ILocationBase.d.ts";
import { ILooseLoot } from "../../eft/common/ILooseLoot.d.ts";
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
