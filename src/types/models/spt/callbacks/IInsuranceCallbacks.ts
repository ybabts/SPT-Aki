import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IGetInsuranceCostRequestData } from "../../../models/eft/insurance/IGetInsuranceCostRequestData.ts";
import type { IInsureRequestData } from "../../../models/eft/insurance/IInsureRequestData.ts";
import type { IAkiProfile } from "../../../models/eft/profile/IAkiProfile.ts";
export interface IInsuranceCallbacks {
    onLoad(sessionID: string): IAkiProfile;
    getInsuranceCost(url: string, info: IGetInsuranceCostRequestData, sessionID: string): any;
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): any;
    update(secondsSinceLastRun: number): boolean;
}
