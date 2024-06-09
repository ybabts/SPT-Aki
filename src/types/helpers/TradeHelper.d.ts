import { InventoryHelper } from "../helpers/InventoryHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { TraderAssortHelper } from "../helpers/TraderAssortHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IProcessBuyTradeRequestData } from "../models/eft/trade/IProcessBuyTradeRequestData.d.ts";
import { IProcessSellTradeRequestData } from "../models/eft/trade/IProcessSellTradeRequestData.d.ts";
import { IInventoryConfig } from "../models/spt/config/IInventoryConfig.d.ts";
import { ITraderConfig } from "../models/spt/config/ITraderConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { RagfairServer } from "../servers/RagfairServer.d.ts";
import { FenceService } from "../services/FenceService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { PaymentService } from "../services/PaymentService.d.ts";
import { TraderPurchasePersisterService } from "../services/TraderPurchasePersisterService.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
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
