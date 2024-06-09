import { TradeController } from "../controllers/TradeController.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IProcessBaseTradeRequestData } from "../models/eft/trade/IProcessBaseTradeRequestData.d.ts";
import { IProcessRagfairTradeRequestData } from "../models/eft/trade/IProcessRagfairTradeRequestData.d.ts";
import { ISellScavItemsToFenceRequestData } from "../models/eft/trade/ISellScavItemsToFenceRequestData.d.ts";
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
