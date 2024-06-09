import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { ISuit } from "../models/eft/common/tables/ITrader.d.ts";
import { ClothingItem, IBuyClothingRequestData } from "../models/eft/customization/IBuyClothingRequestData.d.ts";
import { IWearClothingRequestData } from "../models/eft/customization/IWearClothingRequestData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
export declare class CustomizationController {
    protected logger: ILogger;
    protected eventOutputHolder: EventOutputHolder;
    protected databaseServer: DatabaseServer;
    protected saveServer: SaveServer;
    protected localisationService: LocalisationService;
    protected profileHelper: ProfileHelper;
    protected readonly clothingIds: {
        lowerParentId: string;
        upperParentId: string;
    };
    constructor(logger: ILogger, eventOutputHolder: EventOutputHolder, databaseServer: DatabaseServer, saveServer: SaveServer, localisationService: LocalisationService, profileHelper: ProfileHelper);
    /**
     * Get purchasable clothing items from trader that match players side (usec/bear)
     * @param traderID trader to look up clothing for
     * @param sessionID Session id
     * @returns ISuit array
     */
    getTraderSuits(traderID: string, sessionID: string): ISuit[];
    /**
     * Handle CustomizationWear event
     * Equip one to many clothing items to player
     */
    wearClothing(pmcData: IPmcData, wearClothingRequest: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle CustomizationBuy event
     * Purchase/unlock a clothing item from a trader
     * @param pmcData Player profile
     * @param buyClothingRequest Request object
     * @param sessionId Session id
     * @returns IItemEventRouterResponse
     */
    buyClothing(pmcData: IPmcData, buyClothingRequest: IBuyClothingRequestData, sessionId: string): IItemEventRouterResponse;
    protected getTraderClothingOffer(sessionId: string, offerId: string): ISuit;
    /**
     * Has an outfit been purchased by a player
     * @param suitId clothing id
     * @param sessionID Session id of profile to check for clothing in
     * @returns true if already purchased
     */
    protected outfitAlreadyPurchased(suitId: string, sessionID: string): boolean;
    /**
     * Update output object and player profile with purchase details
     * @param sessionId Session id
     * @param pmcData Player profile
     * @param clothingItems Clothing purchased
     * @param output Client response
     */
    protected payForClothingItems(sessionId: string, pmcData: IPmcData, clothingItems: ClothingItem[], output: IItemEventRouterResponse): void;
    /**
     * Update output object and player profile with purchase details for single piece of clothing
     * @param sessionId Session id
     * @param pmcData Player profile
     * @param clothingItem Clothing item purchased
     * @param output Client response
     */
    protected payForClothingItem(sessionId: string, pmcData: IPmcData, clothingItem: ClothingItem, output: IItemEventRouterResponse): void;
    protected getAllTraderSuits(sessionID: string): ISuit[];
}
