import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IProcessBaseTradeRequestData } from "../../../models/eft/trade/IProcessBaseTradeRequestData.d.ts";
import { IProcessRagfairTradeRequestData } from "../../../models/eft/trade/IProcessRagfairTradeRequestData.d.ts";
export interface ITradeCallbacks {
    processTrade(pmcData: IPmcData, body: IProcessBaseTradeRequestData, sessionID: string): IItemEventRouterResponse;
    processRagfairTrade(pmcData: IPmcData, body: IProcessRagfairTradeRequestData, sessionID: string): IItemEventRouterResponse;
}
