import type { TradeController } from "../controllers/TradeController.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IProcessBaseTradeRequestData } from "../models/eft/trade/IProcessBaseTradeRequestData.ts";
import type { IProcessRagfairTradeRequestData } from "../models/eft/trade/IProcessRagfairTradeRequestData.ts";
import type { ISellScavItemsToFenceRequestData } from "../models/eft/trade/ISellScavItemsToFenceRequestData.ts";
export declare class TradeCallbacks {
    protected tradeController: TradeController;
    constructor(tradeController: TradeController);
    /**
     * Handle client/game/profile/items/moving TradingConfirm event
     */
    processTrade(pmcData: IPmcData, body: IProcessBaseTradeRequestData, sessionID: string): IItemEventRouterResponse;
    /** Handle RagFairBuyOffer event */
    processRagfairTrade(pmcData: IPmcData, body: IProcessRagfairTradeRequestData, sessionID: string): IItemEventRouterResponse;
    /** Handle SellAllFromSavage event */
    sellAllFromSavage(pmcData: IPmcData, body: ISellScavItemsToFenceRequestData, sessionID: string): IItemEventRouterResponse;
}
