import { HideoutController } from "../controllers/HideoutController.d.ts";
import { OnUpdate } from "../di/OnUpdate.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IHandleQTEEventRequestData } from "../models/eft/hideout/IHandleQTEEventRequestData.d.ts";
import { IHideoutCancelProductionRequestData } from "../models/eft/hideout/IHideoutCancelProductionRequestData.d.ts";
import { IHideoutContinuousProductionStartRequestData } from "../models/eft/hideout/IHideoutContinuousProductionStartRequestData.d.ts";
import { IHideoutImproveAreaRequestData } from "../models/eft/hideout/IHideoutImproveAreaRequestData.d.ts";
import { IHideoutPutItemInRequestData } from "../models/eft/hideout/IHideoutPutItemInRequestData.d.ts";
import { IHideoutScavCaseStartRequestData } from "../models/eft/hideout/IHideoutScavCaseStartRequestData.d.ts";
import { IHideoutSingleProductionStartRequestData } from "../models/eft/hideout/IHideoutSingleProductionStartRequestData.d.ts";
import { IHideoutTakeItemOutRequestData } from "../models/eft/hideout/IHideoutTakeItemOutRequestData.d.ts";
import { IHideoutTakeProductionRequestData } from "../models/eft/hideout/IHideoutTakeProductionRequestData.d.ts";
import { IHideoutToggleAreaRequestData } from "../models/eft/hideout/IHideoutToggleAreaRequestData.d.ts";
import { IHideoutUpgradeCompleteRequestData } from "../models/eft/hideout/IHideoutUpgradeCompleteRequestData.d.ts";
import { IHideoutUpgradeRequestData } from "../models/eft/hideout/IHideoutUpgradeRequestData.d.ts";
import { IRecordShootingRangePoints } from "../models/eft/hideout/IRecordShootingRangePoints.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IHideoutConfig } from "../models/spt/config/IHideoutConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
export declare class HideoutCallbacks implements OnUpdate {
    protected hideoutController: HideoutController;
    protected configServer: ConfigServer;
    protected hideoutConfig: IHideoutConfig;
    constructor(hideoutController: HideoutController, // TODO: delay needed
        configServer: ConfigServer);
    /**
     * Handle HideoutUpgrade event
     */
    upgrade(pmcData: IPmcData, body: IHideoutUpgradeRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Handle HideoutUpgradeComplete event
     */
    upgradeComplete(pmcData: IPmcData, body: IHideoutUpgradeCompleteRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Handle HideoutPutItemsInAreaSlots
     */
    putItemsInAreaSlots(pmcData: IPmcData, body: IHideoutPutItemInRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutTakeItemsFromAreaSlots event
     */
    takeItemsFromAreaSlots(pmcData: IPmcData, body: IHideoutTakeItemOutRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutToggleArea event
     */
    toggleArea(pmcData: IPmcData, body: IHideoutToggleAreaRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutSingleProductionStart event
     */
    singleProductionStart(pmcData: IPmcData, body: IHideoutSingleProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutScavCaseProductionStart event
     */
    scavCaseProductionStart(pmcData: IPmcData, body: IHideoutScavCaseStartRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutContinuousProductionStart
     */
    continuousProductionStart(pmcData: IPmcData, body: IHideoutContinuousProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutTakeProduction event
     */
    takeProduction(pmcData: IPmcData, body: IHideoutTakeProductionRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutQuickTimeEvent
     */
    handleQTEEvent(pmcData: IPmcData, request: IHandleQTEEventRequestData, sessionId: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Handle client/game/profile/items/moving - RecordShootingRangePoints
     */
    recordShootingRangePoints(pmcData: IPmcData, request: IRecordShootingRangePoints, sessionId: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Handle client/game/profile/items/moving - RecordShootingRangePoints
     */
    improveArea(pmcData: IPmcData, request: IHideoutImproveAreaRequestData, sessionId: string): IItemEventRouterResponse;
    /**
     * Handle client/game/profile/items/moving - HideoutCancelProductionCommand
     */
    cancelProduction(pmcData: IPmcData, request: IHideoutCancelProductionRequestData, sessionId: string): IItemEventRouterResponse;
    onUpdate(timeSinceLastRun: number): Promise<boolean>;
    getRoute(): string;
}
