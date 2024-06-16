import type { HealthHelper } from "../helpers/HealthHelper.ts";
import type { InventoryHelper } from "../helpers/InventoryHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IHealthTreatmentRequestData } from "../models/eft/health/IHealthTreatmentRequestData.ts";
import type { IOffraidEatRequestData } from "../models/eft/health/IOffraidEatRequestData.ts";
import type { IOffraidHealRequestData } from "../models/eft/health/IOffraidHealRequestData.ts";
import type { ISyncHealthRequestData } from "../models/eft/health/ISyncHealthRequestData.ts";
import type { IWorkoutData } from "../models/eft/health/IWorkoutData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { PaymentService } from "../services/PaymentService.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
export declare class HealthController {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected eventOutputHolder: EventOutputHolder;
    protected itemHelper: ItemHelper;
    protected paymentService: PaymentService;
    protected inventoryHelper: InventoryHelper;
    protected localisationService: LocalisationService;
    protected httpResponse: HttpResponseUtil;
    protected healthHelper: HealthHelper;
    constructor(logger: ILogger, jsonUtil: JsonUtil, eventOutputHolder: EventOutputHolder, itemHelper: ItemHelper, paymentService: PaymentService, inventoryHelper: InventoryHelper, localisationService: LocalisationService, httpResponse: HttpResponseUtil, healthHelper: HealthHelper);
    /**
     * stores in-raid player health
     * @param pmcData Player profile
     * @param info Request data
     * @param sessionID Player id
     * @param addEffects Should effects found be added or removed from profile
     * @param deleteExistingEffects Should all prior effects be removed before apply new ones
     */
    saveVitality(pmcData: IPmcData, info: ISyncHealthRequestData, sessionID: string, addEffects?: boolean, deleteExistingEffects?: boolean): void;
    /**
     * When healing in menu
     * @param pmcData Player profile
     * @param request Healing request
     * @param sessionID Player id
     * @returns IItemEventRouterResponse
     */
    offraidHeal(pmcData: IPmcData, request: IOffraidHealRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle Eat event
     * Consume food/water outside of a raid
     * @param pmcData Player profile
     * @param request Eat request
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    offraidEat(pmcData: IPmcData, request: IOffraidEatRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle RestoreHealth event
     * Occurs on post-raid healing page
     * @param pmcData player profile
     * @param healthTreatmentRequest Request data from client
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    healthTreatment(pmcData: IPmcData, healthTreatmentRequest: IHealthTreatmentRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * applies skills from hideout workout.
     * @param pmcData Player profile
     * @param info Request data
     * @param sessionID
     */
    applyWorkoutChanges(pmcData: IPmcData, info: IWorkoutData, sessionId: string): void;
}
