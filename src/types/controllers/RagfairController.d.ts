import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator.d.ts";
import { HandbookHelper } from "../helpers/HandbookHelper.d.ts";
import { InventoryHelper } from "../helpers/InventoryHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { PaymentHelper } from "../helpers/PaymentHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { RagfairHelper } from "../helpers/RagfairHelper.d.ts";
import { RagfairOfferHelper } from "../helpers/RagfairOfferHelper.d.ts";
import { RagfairSellHelper } from "../helpers/RagfairSellHelper.d.ts";
import { RagfairSortHelper } from "../helpers/RagfairSortHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { ITraderAssort } from "../models/eft/common/tables/ITrader.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile.d.ts";
import { IAddOfferRequestData, Requirement } from "../models/eft/ragfair/IAddOfferRequestData.d.ts";
import { IExtendOfferRequestData } from "../models/eft/ragfair/IExtendOfferRequestData.d.ts";
import { IGetItemPriceResult } from "../models/eft/ragfair/IGetItemPriceResult.d.ts";
import { IGetMarketPriceRequestData } from "../models/eft/ragfair/IGetMarketPriceRequestData.d.ts";
import { IGetOffersResult } from "../models/eft/ragfair/IGetOffersResult.d.ts";
import { IGetRagfairOfferByIdRequest } from "../models/eft/ragfair/IGetRagfairOfferByIdRequest.d.ts";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.d.ts";
import { IRemoveOfferRequestData } from "../models/eft/ragfair/IRemoveOfferRequestData.d.ts";
import { ISearchRequestData } from "../models/eft/ragfair/ISearchRequestData.d.ts";
import { IProcessBuyTradeRequestData } from "../models/eft/trade/IProcessBuyTradeRequestData.d.ts";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { RagfairServer } from "../servers/RagfairServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { PaymentService } from "../services/PaymentService.d.ts";
import { RagfairOfferService } from "../services/RagfairOfferService.d.ts";
import { RagfairPriceService } from "../services/RagfairPriceService.d.ts";
import { RagfairRequiredItemsService } from "../services/RagfairRequiredItemsService.d.ts";
import { RagfairTaxService } from "../services/RagfairTaxService.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
/**
 * Handle RagfairCallback events
 */
export declare class RagfairController {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected httpResponse: HttpResponseUtil;
    protected eventOutputHolder: EventOutputHolder;
    protected ragfairServer: RagfairServer;
    protected ragfairPriceService: RagfairPriceService;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected saveServer: SaveServer;
    protected ragfairSellHelper: RagfairSellHelper;
    protected ragfairTaxService: RagfairTaxService;
    protected ragfairSortHelper: RagfairSortHelper;
    protected ragfairOfferHelper: RagfairOfferHelper;
    protected profileHelper: ProfileHelper;
    protected paymentService: PaymentService;
    protected handbookHelper: HandbookHelper;
    protected paymentHelper: PaymentHelper;
    protected inventoryHelper: InventoryHelper;
    protected traderHelper: TraderHelper;
    protected ragfairHelper: RagfairHelper;
    protected ragfairOfferService: RagfairOfferService;
    protected ragfairRequiredItemsService: RagfairRequiredItemsService;
    protected ragfairOfferGenerator: RagfairOfferGenerator;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, timeUtil: TimeUtil, httpResponse: HttpResponseUtil, eventOutputHolder: EventOutputHolder, ragfairServer: RagfairServer, ragfairPriceService: RagfairPriceService, databaseServer: DatabaseServer, itemHelper: ItemHelper, saveServer: SaveServer, ragfairSellHelper: RagfairSellHelper, ragfairTaxService: RagfairTaxService, ragfairSortHelper: RagfairSortHelper, ragfairOfferHelper: RagfairOfferHelper, profileHelper: ProfileHelper, paymentService: PaymentService, handbookHelper: HandbookHelper, paymentHelper: PaymentHelper, inventoryHelper: InventoryHelper, traderHelper: TraderHelper, ragfairHelper: RagfairHelper, ragfairOfferService: RagfairOfferService, ragfairRequiredItemsService: RagfairRequiredItemsService, ragfairOfferGenerator: RagfairOfferGenerator, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Handles client/ragfair/find
     * Returns flea offers that match required search parameters
     * @param sessionID Player id
     * @param searchRequest Search request data
     * @returns IGetOffersResult
     */
    getOffers(sessionID: string, searchRequest: ISearchRequestData): IGetOffersResult;
    /**
     * Handle client/ragfair/offer/findbyid
     * Occurs when searching for `#x` on flea
     * @param sessionId Player id
     * @param request Request data
     * @returns IRagfairOffer
     */
    getOfferById(sessionId: string, request: IGetRagfairOfferByIdRequest): IRagfairOffer;
    /**
     * Get offers for the client based on type of search being performed
     * @param searchRequest Client search request data
     * @param itemsToAdd Comes from ragfairHelper.filterCategories()
     * @param traderAssorts Trader assorts
     * @param pmcProfile Player profile
     * @returns array of offers
     */
    protected getOffersForSearchType(searchRequest: ISearchRequestData, itemsToAdd: string[], traderAssorts: Record<string, ITraderAssort>, pmcProfile: IPmcData): IRagfairOffer[];
    /**
     * Get categories for the type of search being performed, linked/required/all
     * @param searchRequest Client search request data
     * @param offers Ragfair offers to get categories for
     * @returns record with templates + counts
     */
    protected getSpecificCategories(pmcProfile: IPmcData, searchRequest: ISearchRequestData, offers: IRagfairOffer[]): Record<string, number>;
    /**
     * Add index to all offers passed in (0-indexed)
     * @param offers Offers to add index value to
     */
    protected addIndexValueToOffers(offers: IRagfairOffer[]): void;
    /**
     * Update a trader flea offer with buy restrictions stored in the traders assort
     * @param offer Flea offer to update
     * @param fullProfile Players full profile
     */
    protected setTraderOfferPurchaseLimits(offer: IRagfairOffer, fullProfile: IAkiProfile): void;
    /**
     * Adjust ragfair offer stack count to match same value as traders assort stack count
     * @param offer Flea offer to adjust stack size of
     */
    protected setTraderOfferStackSize(offer: IRagfairOffer): void;
    /**
     * Is the flea search being performed a 'linked' search type
     * @param info Search request
     * @returns True if it is a 'linked' search type
     */
    protected isLinkedSearch(info: ISearchRequestData): boolean;
    /**
     * Is the flea search being performed a 'required' search type
     * @param info Search request
     * @returns True if it is a 'required' search type
     */
    protected isRequiredSearch(info: ISearchRequestData): boolean;
    /**
     * Check all profiles and sell player offers / send player money for listing if it sold
     */
    update(): void;
    /**
     * Called when creating an offer on flea, fills values in top right corner
     * @param getPriceRequest
     * @returns min/avg/max values for an item based on flea offers available
     */
    getItemMinAvgMaxFleaPriceValues(getPriceRequest: IGetMarketPriceRequestData): IGetItemPriceResult;
    /**
     * List item(s) on flea for sale
     * @param pmcData Player profile
     * @param offerRequest Flea list creation offer
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    addPlayerOffer(pmcData: IPmcData, offerRequest: IAddOfferRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Charge player a listing fee for using flea, pulls charge from data previously sent by client
     * @param sessionID Player id
     * @param rootItem Base item being listed (used when client tax cost not found and must be done on server)
     * @param pmcData Player profile
     * @param requirementsPriceInRub Rouble cost player chose for listing (used when client tax cost not found and must be done on server)
     * @param itemStackCount How many items were listed in player (used when client tax cost not found and must be done on server)
     * @param offerRequest Add offer request object from client
     * @param output IItemEventRouterResponse
     * @returns True if charging tax to player failed
     */
    protected chargePlayerTaxFee(sessionID: string, rootItem: Item, pmcData: IPmcData, requirementsPriceInRub: number, itemStackCount: number, offerRequest: IAddOfferRequestData, output: IItemEventRouterResponse): boolean;
    /**
     * Is the item to be listed on the flea valid
     * @param offerRequest Client offer request
     * @param errorMessage message to show to player when offer is invalid
     * @returns Is offer valid
     */
    protected isValidPlayerOfferRequest(offerRequest: IAddOfferRequestData, errorMessage: string): boolean;
    /**
     * Get the handbook price in roubles for the items being listed
     * @param requirements
     * @returns Rouble price
     */
    protected calculateRequirementsPriceInRub(requirements: Requirement[]): number;
    /**
     * Using item ids from flea offer request, find corresponding items from player inventory and return as array
     * @param pmcData Player profile
     * @param itemIdsFromFleaOfferRequest Ids from request
     * @returns Array of items from player inventory
     */
    protected getItemsToListOnFleaFromInventory(pmcData: IPmcData, itemIdsFromFleaOfferRequest: string[]): {
        items: Item[] | null;
        errorMessage: string | null;
    };
    createPlayerOffer(sessionId: string, requirements: Requirement[], items: Item[], sellInOnePiece: boolean): IRagfairOffer;
    getAllFleaPrices(): Record<string, number>;
    getStaticPrices(): Record<string, number>;
    /**
     * User requested removal of the offer, actually reduces the time to 71 seconds,
     * allowing for the possibility of extending the auction before it's end time
     * @param removeRequest Remove offer request
     * @param sessionId Players id
     * @returns IItemEventRouterResponse
     */
    removeOffer(removeRequest: IRemoveOfferRequestData, sessionId: string): IItemEventRouterResponse;
    /**
     * Extend a ragfair offers listing time
     * @param extendRequest Extend offer request
     * @param sessionId Players id
     * @returns IItemEventRouterResponse
     */
    extendOffer(extendRequest: IExtendOfferRequestData, sessionId: string): IItemEventRouterResponse;
    /**
     * Create a basic trader request object with price and currency type
     * @param currency What currency: RUB, EURO, USD
     * @param value Amount of currency
     * @returns IProcessBuyTradeRequestData
     */
    protected createBuyTradeRequestObject(currency: string, value: number): IProcessBuyTradeRequestData;
}
