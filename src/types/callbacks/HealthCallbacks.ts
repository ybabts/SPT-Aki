import type { HealthController } from "../controllers/HealthController.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IHealthTreatmentRequestData } from "../models/eft/health/IHealthTreatmentRequestData.ts";
import type { IOffraidEatRequestData } from "../models/eft/health/IOffraidEatRequestData.ts";
import type { IOffraidHealRequestData } from "../models/eft/health/IOffraidHealRequestData.ts";
import type { ISyncHealthRequestData } from "../models/eft/health/ISyncHealthRequestData.ts";
import type { IWorkoutData } from "../models/eft/health/IWorkoutData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class HealthCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected profileHelper: ProfileHelper;
    protected healthController: HealthController;
    constructor(httpResponse: HttpResponseUtil, profileHelper: ProfileHelper, healthController: HealthController);
    /**
     * Custom aki server request found in modules/HealthSynchronizer.cs
     * @param url
     * @param info HealthListener.Instance.CurrentHealth class
     * @param sessionID session id
     * @returns empty response, no data sent back to client
     */
    syncHealth(url: string, info: ISyncHealthRequestData, sessionID: string): IGetBodyResponseData<string>;
    /**
     * Custom aki server request found in modules/QTEPatch.cs
     * @param url
     * @param info HealthListener.Instance.CurrentHealth class
     * @param sessionID session id
     * @returns empty response, no data sent back to client
     */
    handleWorkoutEffects(url: string, info: IWorkoutData, sessionID: string): IGetBodyResponseData<string>;
    /**
     * Handle Eat
     * @returns IItemEventRouterResponse
     */
    offraidEat(pmcData: IPmcData, body: IOffraidEatRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle Heal
     * @returns IItemEventRouterResponse
     */
    offraidHeal(pmcData: IPmcData, body: IOffraidHealRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle RestoreHealth
     * @returns IItemEventRouterResponse
     */
    healthTreatment(pmcData: IPmcData, info: IHealthTreatmentRequestData, sessionID: string): IItemEventRouterResponse;
}
