import { HealthHelper } from "../helpers/HealthHelper.d.ts";
import { InventoryHelper } from "../helpers/InventoryHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IHealthTreatmentRequestData } from "../models/eft/health/IHealthTreatmentRequestData.d.ts";
import { IOffraidEatRequestData } from "../models/eft/health/IOffraidEatRequestData.d.ts";
import { IOffraidHealRequestData } from "../models/eft/health/IOffraidHealRequestData.d.ts";
import { ISyncHealthRequestData } from "../models/eft/health/ISyncHealthRequestData.d.ts";
import { IWorkoutData } from "../models/eft/health/IWorkoutData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { PaymentService } from "../services/PaymentService.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
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
