import { HealthController } from "../controllers/HealthController.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IHealthTreatmentRequestData } from "../models/eft/health/IHealthTreatmentRequestData.d.ts";
import { IOffraidEatRequestData } from "../models/eft/health/IOffraidEatRequestData.d.ts";
import { IOffraidHealRequestData } from "../models/eft/health/IOffraidHealRequestData.d.ts";
import { ISyncHealthRequestData } from "../models/eft/health/ISyncHealthRequestData.d.ts";
import { IWorkoutData } from "../models/eft/health/IWorkoutData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
