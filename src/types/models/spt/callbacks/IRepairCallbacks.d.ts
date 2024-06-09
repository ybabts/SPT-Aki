import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IRepairActionDataRequest } from "../../../models/eft/repair/IRepairActionDataRequest.d.ts";
import { ITraderRepairActionDataRequest } from "../../../models/eft/repair/ITraderRepairActionDataRequest.d.ts";
export interface IRepairCallbacks {
    traderRepair(pmcData: IPmcData, body: ITraderRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
    repair(pmcData: IPmcData, body: IRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
}
