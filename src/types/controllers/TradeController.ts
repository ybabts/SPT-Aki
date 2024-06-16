import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { TradeHelper } from "../helpers/TradeHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITraderBase } from "../models/eft/common/tables/ITrader.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.ts";
import type { IProcessBaseTradeRequestData } from "../models/eft/trade/IProcessBaseTradeRequestData.ts";
import type { IOfferRequest, IProcessRagfairTradeRequestData } from "../models/eft/trade/IProcessRagfairTradeRequestData.ts";
import type { ISellScavItemsToFenceRequestData } from "../models/eft/trade/ISellScavItemsToFenceRequestData.ts";
import type { Traders } from "../models/enums/Traders.ts";
import type { IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ITraderConfig } from "../models/spt/config/ITraderConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { RagfairServer } from "../servers/RagfairServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { MailSendService } from "../services/MailSendService.ts";
import type { RagfairPriceService } from "../services/RagfairPriceService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class TradeController {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected eventOutputHolder: EventOutputHolder;
    protected tradeHelper: TradeHelper;
    protected timeUtil: TimeUtil;
    protected randomUtil: RandomUtil;
    protected hashUtil: HashUtil;
    protected itemHelper: ItemHelper;
    protected profileHelper: ProfileHelper;
    protected traderHelper: TraderHelper;
    protected jsonUtil: JsonUtil;
    protected ragfairServer: RagfairServer;
    protected httpResponse: HttpResponseUtil;
    protected localisationService: LocalisationService;
    protected ragfairPriceService: RagfairPriceService;
    protected mailSendService: MailSendService;
    protected configServer: ConfigServer;
    protected roubleTpl: string;
    protected ragfairConfig: IRagfairConfig;
    protected traderConfig: ITraderConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, eventOutputHolder: EventOutputHolder, tradeHelper: TradeHelper, timeUtil: TimeUtil, randomUtil: RandomUtil, hashUtil: HashUtil, itemHelper: ItemHelper, profileHelper: ProfileHelper, traderHelper: TraderHelper, jsonUtil: JsonUtil, ragfairServer: RagfairServer, httpResponse: HttpResponseUtil, localisationService: LocalisationService, ragfairPriceService: RagfairPriceService, mailSendService: MailSendService, configServer: ConfigServer);
    /** Handle TradingConfirm event */
    confirmTrading(pmcData: IPmcData, request: IProcessBaseTradeRequestData, sessionID: string): IItemEventRouterResponse;
    /** Handle RagFairBuyOffer event */
    confirmRagfairTrading(pmcData: IPmcData, request: IProcessRagfairTradeRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Buy an item off the flea sold by a trader
     * @param sessionId Session id
     * @param pmcData Player profile
     * @param fleaOffer Offer being purchased
     * @param requestOffer request data from client
     * @param output Output to send back to client
     */
    protected buyTraderItemFromRagfair(sessionId: string, pmcData: IPmcData, fleaOffer: IRagfairOffer, requestOffer: IOfferRequest, output: IItemEventRouterResponse): void;
    /**
     * Buy an item off the flea sold by a PMC
     * @param sessionId Session id
     * @param pmcData Player profile
     * @param fleaOffer Offer being purchased
     * @param requestOffer Request data from client
     * @param output Output to send back to client
     */
    protected buyPmcItemFromRagfair(sessionId: string, pmcData: IPmcData, fleaOffer: IRagfairOffer, requestOffer: IOfferRequest, output: IItemEventRouterResponse): void;
    /**
     * Does Player have necessary trader loyalty to purchase flea offer
     * @param sellerIsTrader is seller trader
     * @param fleaOffer FLea offer being bought
     * @param pmcData Player profile
     * @returns True if player can buy offer
     */
    protected playerLacksTraderLoyaltyLevelToBuyOffer(fleaOffer: IRagfairOffer, pmcData: IPmcData): boolean;
    /** Handle SellAllFromSavage event */
    sellScavItemsToFence(pmcData: IPmcData, request: ISellScavItemsToFenceRequestData, sessionId: string): IItemEventRouterResponse;
    /**
     * Send the specified rouble total to player as mail
     * @param sessionId Session id
     * @param trader Trader to sell items to
     * @param output IItemEventRouterResponse
     */
    protected mailMoneyToPlayer(sessionId: string, roublesToSend: number, trader: Traders): void;
    /**
     * Looks up an items children and gets total handbook price for them
     * @param parentItemId parent item that has children we want to sum price of
     * @param items All items (parent + children)
     * @param handbookPrices Prices of items from handbook
     * @param traderDetails Trader being sold to to perform buy category check against
     * @returns Rouble price
     */
    protected getPriceOfItemAndChildren(parentItemId: string, items: Item[], handbookPrices: Record<string, number>, traderDetails: ITraderBase): number;
}
