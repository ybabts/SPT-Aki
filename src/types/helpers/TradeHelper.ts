import type { InventoryHelper } from "../helpers/InventoryHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { TraderAssortHelper } from "../helpers/TraderAssortHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IProcessBuyTradeRequestData } from "../models/eft/trade/IProcessBuyTradeRequestData.ts";
import type { IProcessSellTradeRequestData } from "../models/eft/trade/IProcessSellTradeRequestData.ts";
import type { IInventoryConfig } from "../models/spt/config/IInventoryConfig.ts";
import type { ITraderConfig } from "../models/spt/config/ITraderConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { RagfairServer } from "../servers/RagfairServer.ts";
import type { FenceService } from "../services/FenceService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { PaymentService } from "../services/PaymentService.ts";
import type { TraderPurchasePersisterService } from "../services/TraderPurchasePersisterService.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
export declare class TradeHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected eventOutputHolder: EventOutputHolder;
    protected traderHelper: TraderHelper;
    protected itemHelper: ItemHelper;
    protected paymentService: PaymentService;
    protected fenceService: FenceService;
    protected localisationService: LocalisationService;
    protected httpResponse: HttpResponseUtil;
    protected inventoryHelper: InventoryHelper;
    protected ragfairServer: RagfairServer;
    protected traderAssortHelper: TraderAssortHelper;
    protected traderPurchasePersisterService: TraderPurchasePersisterService;
    protected configServer: ConfigServer;
    protected traderConfig: ITraderConfig;
    protected inventoryConfig: IInventoryConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, eventOutputHolder: EventOutputHolder, traderHelper: TraderHelper, itemHelper: ItemHelper, paymentService: PaymentService, fenceService: FenceService, localisationService: LocalisationService, httpResponse: HttpResponseUtil, inventoryHelper: InventoryHelper, ragfairServer: RagfairServer, traderAssortHelper: TraderAssortHelper, traderPurchasePersisterService: TraderPurchasePersisterService, configServer: ConfigServer);
    /**
     * Buy item from flea or trader
     * @param pmcData Player profile
     * @param buyRequestData data from client
     * @param sessionID Session id
     * @param foundInRaid Should item be found in raid
     * @param output IItemEventRouterResponse
     * @returns IItemEventRouterResponse
     */
    buyItem(pmcData: IPmcData, buyRequestData: IProcessBuyTradeRequestData, sessionID: string, foundInRaid: boolean, output: IItemEventRouterResponse): void;
    /**
     * Sell item to trader
     * @param profileWithItemsToSell Profile to remove items from
     * @param profileToReceiveMoney Profile to accept the money for selling item
     * @param sellRequest Request data
     * @param sessionID Session id
     * @param output IItemEventRouterResponse
     */
    sellItem(profileWithItemsToSell: IPmcData, profileToReceiveMoney: IPmcData, sellRequest: IProcessSellTradeRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Traders allow a limited number of purchases per refresh cycle (default 60 mins)
     * @param sessionId Session id
     * @param traderId Trader assort is purchased from
     * @param assortBeingPurchased the item from trader being bought
     * @param assortId Id of assort being purchased
     * @param count How many of the item are being bought
     */
    protected checkPurchaseIsWithinTraderItemLimit(sessionId: string, traderId: string, assortBeingPurchased: Item, assortId: string, count: number): void;
}
