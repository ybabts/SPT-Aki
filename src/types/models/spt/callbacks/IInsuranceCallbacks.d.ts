import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IGetInsuranceCostRequestData } from "../../../models/eft/insurance/IGetInsuranceCostRequestData.d.ts";
import { IInsureRequestData } from "../../../models/eft/insurance/IInsureRequestData.d.ts";
import { IAkiProfile } from "../../../models/eft/profile/IAkiProfile.d.ts";
export interface IInsuranceCallbacks {
    onLoad(sessionID: string): IAkiProfile;
    getInsuranceCost(url: string, info: IGetInsuranceCostRequestData, sessionID: string): any;
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): any;
    update(secondsSinceLastRun: number): boolean;
}
