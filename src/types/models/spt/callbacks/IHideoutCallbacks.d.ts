import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IHideoutContinuousProductionStartRequestData } from "../../../models/eft/hideout/IHideoutContinuousProductionStartRequestData.d.ts";
import { IHideoutPutItemInRequestData } from "../../../models/eft/hideout/IHideoutPutItemInRequestData.d.ts";
import { IHideoutScavCaseStartRequestData } from "../../../models/eft/hideout/IHideoutScavCaseStartRequestData.d.ts";
import { IHideoutSingleProductionStartRequestData } from "../../../models/eft/hideout/IHideoutSingleProductionStartRequestData.d.ts";
import { IHideoutTakeItemOutRequestData } from "../../../models/eft/hideout/IHideoutTakeItemOutRequestData.d.ts";
import { IHideoutTakeProductionRequestData } from "../../../models/eft/hideout/IHideoutTakeProductionRequestData.d.ts";
import { IHideoutToggleAreaRequestData } from "../../../models/eft/hideout/IHideoutToggleAreaRequestData.d.ts";
import { IHideoutUpgradeCompleteRequestData } from "../../../models/eft/hideout/IHideoutUpgradeCompleteRequestData.d.ts";
import { IHideoutUpgradeRequestData } from "../../../models/eft/hideout/IHideoutUpgradeRequestData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
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
