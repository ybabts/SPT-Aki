import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IProcessBaseTradeRequestData } from "../../../models/eft/trade/IProcessBaseTradeRequestData.ts";
import type { IProcessRagfairTradeRequestData } from "../../../models/eft/trade/IProcessRagfairTradeRequestData.ts";
export interface ITradeCallbacks {
    processTrade(pmcData: IPmcData, body: IProcessBaseTradeRequestData, sessionID: string): IItemEventRouterResponse;
    processRagfairTrade(pmcData: IPmcData, body: IProcessRagfairTradeRequestData, sessionID: string): IItemEventRouterResponse;
}
