import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { TradeHelper } from "../helpers/TradeHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { ITraderBase } from "../models/eft/common/tables/ITrader.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.d.ts";
import { IProcessBaseTradeRequestData } from "../models/eft/trade/IProcessBaseTradeRequestData.d.ts";
import { IOfferRequest, IProcessRagfairTradeRequestData } from "../models/eft/trade/IProcessRagfairTradeRequestData.d.ts";
import { ISellScavItemsToFenceRequestData } from "../models/eft/trade/ISellScavItemsToFenceRequestData.d.ts";
import { Traders } from "../models/enums/Traders.d.ts";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig.d.ts";
import { ITraderConfig } from "../models/spt/config/ITraderConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { RagfairServer } from "../servers/RagfairServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { MailSendService } from "../services/MailSendService.d.ts";
import { RagfairPriceService } from "../services/RagfairPriceService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
