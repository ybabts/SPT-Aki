import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IHealthTreatmentRequestData } from "../../../models/eft/health/IHealthTreatmentRequestData.ts";
import type { IOffraidEatRequestData } from "../../../models/eft/health/IOffraidEatRequestData.ts";
import type { IOffraidHealRequestData } from "../../../models/eft/health/IOffraidHealRequestData.ts";
import type { ISyncHealthRequestData } from "../../../models/eft/health/ISyncHealthRequestData.ts";
import type { IAkiProfile } from "../../../models/eft/profile/IAkiProfile.ts";
export interface IHealthCallbacks {
    onLoad(sessionID: string): IAkiProfile;
    syncHealth(url: string, info: ISyncHealthRequestData, sessionID: string): any;
    offraidEat(pmcData: IPmcData, body: IOffraidEatRequestData, sessionID: string): any;
    offraidHeal(pmcData: IPmcData, body: IOffraidHealRequestData, sessionID: string): any;
    healthTreatment(pmcData: IPmcData, info: IHealthTreatmentRequestData, sessionID: string): any;
}
