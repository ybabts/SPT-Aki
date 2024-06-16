import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IHideoutContinuousProductionStartRequestData } from "../../../models/eft/hideout/IHideoutContinuousProductionStartRequestData.ts";
import type { IHideoutPutItemInRequestData } from "../../../models/eft/hideout/IHideoutPutItemInRequestData.ts";
import type { IHideoutScavCaseStartRequestData } from "../../../models/eft/hideout/IHideoutScavCaseStartRequestData.ts";
import type { IHideoutSingleProductionStartRequestData } from "../../../models/eft/hideout/IHideoutSingleProductionStartRequestData.ts";
import type { IHideoutTakeItemOutRequestData } from "../../../models/eft/hideout/IHideoutTakeItemOutRequestData.ts";
import type { IHideoutTakeProductionRequestData } from "../../../models/eft/hideout/IHideoutTakeProductionRequestData.ts";
import type { IHideoutToggleAreaRequestData } from "../../../models/eft/hideout/IHideoutToggleAreaRequestData.ts";
import type { IHideoutUpgradeCompleteRequestData } from "../../../models/eft/hideout/IHideoutUpgradeCompleteRequestData.ts";
import type { IHideoutUpgradeRequestData } from "../../../models/eft/hideout/IHideoutUpgradeRequestData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
export interface IHideoutCallbacks {
    upgrade(pmcData: IPmcData, body: IHideoutUpgradeRequestData, sessionID: string): IItemEventRouterResponse;
    upgradeComplete(pmcData: IPmcData, body: IHideoutUpgradeCompleteRequestData, sessionID: string): IItemEventRouterResponse;
    putItemsInAreaSlots(pmcData: IPmcData, body: IHideoutPutItemInRequestData, sessionID: string): IItemEventRouterResponse;
    takeItemsFromAreaSlots(pmcData: IPmcData, body: IHideoutTakeItemOutRequestData, sessionID: string): IItemEventRouterResponse;
    toggleArea(pmcData: IPmcData, body: IHideoutToggleAreaRequestData, sessionID: string): IItemEventRouterResponse;
    singleProductionStart(pmcData: IPmcData, body: IHideoutSingleProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    scavCaseProductionStart(pmcData: IPmcData, body: IHideoutScavCaseStartRequestData, sessionID: string): IItemEventRouterResponse;
    continuousProductionStart(pmcData: IPmcData, body: IHideoutContinuousProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    takeProduction(pmcData: IPmcData, body: IHideoutTakeProductionRequestData, sessionID: string): IItemEventRouterResponse;
    update(timeSinceLastRun: number): boolean;
}
