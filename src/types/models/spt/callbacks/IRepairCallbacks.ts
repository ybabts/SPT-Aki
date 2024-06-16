import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IRepairActionDataRequest } from "../../../models/eft/repair/IRepairActionDataRequest.ts";
import type { ITraderRepairActionDataRequest } from "../../../models/eft/repair/ITraderRepairActionDataRequest.ts";
export interface IRepairCallbacks {
    traderRepair(pmcData: IPmcData, body: ITraderRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
    repair(pmcData: IPmcData, body: IRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
}
