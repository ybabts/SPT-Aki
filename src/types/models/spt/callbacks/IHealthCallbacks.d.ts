import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IHealthTreatmentRequestData } from "../../../models/eft/health/IHealthTreatmentRequestData.d.ts";
import { IOffraidEatRequestData } from "../../../models/eft/health/IOffraidEatRequestData.d.ts";
import { IOffraidHealRequestData } from "../../../models/eft/health/IOffraidHealRequestData.d.ts";
import { ISyncHealthRequestData } from "../../../models/eft/health/ISyncHealthRequestData.d.ts";
import { IAkiProfile } from "../../../models/eft/profile/IAkiProfile.d.ts";
export interface IHealthCallbacks {
    onLoad(sessionID: string): IAkiProfile;
    syncHealth(url: string, info: ISyncHealthRequestData, sessionID: string): any;
    offraidEat(pmcData: IPmcData, body: IOffraidEatRequestData, sessionID: string): any;
    offraidHeal(pmcData: IPmcData, body: IOffraidHealRequestData, sessionID: string): any;
    healthTreatment(pmcData: IPmcData, info: IHealthTreatmentRequestData, sessionID: string): any;
}
