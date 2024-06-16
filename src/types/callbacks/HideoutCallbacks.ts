import type { HideoutController } from "../controllers/HideoutController.ts";
import type { OnUpdate } from "../di/OnUpdate.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IHandleQTEEventRequestData } from "../models/eft/hideout/IHandleQTEEventRequestData.ts";
import type { IHideoutCancelProductionRequestData } from "../models/eft/hideout/IHideoutCancelProductionRequestData.ts";
import type { IHideoutContinuousProductionStartRequestData } from "../models/eft/hideout/IHideoutContinuousProductionStartRequestData.ts";
import type { IHideoutImproveAreaRequestData } from "../models/eft/hideout/IHideoutImproveAreaRequestData.ts";
import type { IHideoutPutItemInRequestData } from "../models/eft/hideout/IHideoutPutItemInRequestData.ts";
import type { IHideoutScavCaseStartRequestData } from "../models/eft/hideout/IHideoutScavCaseStartRequestData.ts";
import type { IHideoutSingleProductionStartRequestData } from "../models/eft/hideout/IHideoutSingleProductionStartRequestData.ts";
import type { IHideoutTakeItemOutRequestData } from "../models/eft/hideout/IHideoutTakeItemOutRequestData.ts";
import type { IHideoutTakeProductionRequestData } from "../models/eft/hideout/IHideoutTakeProductionRequestData.ts";
import type { IHideoutToggleAreaRequestData } from "../models/eft/hideout/IHideoutToggleAreaRequestData.ts";
import type { IHideoutUpgradeCompleteRequestData } from "../models/eft/hideout/IHideoutUpgradeCompleteRequestData.ts";
import type { IHideoutUpgradeRequestData } from "../models/eft/hideout/IHideoutUpgradeRequestData.ts";
import type { IRecordShootingRangePoints } from "../models/eft/hideout/IRecordShootingRangePoints.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IHideoutConfig } from "../models/spt/config/IHideoutConfig.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
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
