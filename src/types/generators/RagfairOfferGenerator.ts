import type { RagfairAssortGenerator } from "../generators/RagfairAssortGenerator.ts";
import type { HandbookHelper } from "../helpers/HandbookHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { PaymentHelper } from "../helpers/PaymentHelper.ts";
import type { PresetHelper } from "../helpers/PresetHelper.ts";
import type { RagfairServerHelper } from "../helpers/RagfairServerHelper.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { IBarterScheme } from "../models/eft/common/tables/ITrader.ts";
import type { IRagfairOffer, OfferRequirement } from "../models/eft/ragfair/IRagfairOffer.ts";
import type { Dynamic, IArmorPlateBlacklistSettings, IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { FenceService } from "../services/FenceService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { RagfairOfferService } from "../services/RagfairOfferService.ts";
import type { RagfairPriceService } from "../services/RagfairPriceService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class RagfairOfferGenerator {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected ragfairServerHelper: RagfairServerHelper;
    protected handbookHelper: HandbookHelper;
    protected saveServer: SaveServer;
    protected presetHelper: PresetHelper;
    protected ragfairAssortGenerator: RagfairAssortGenerator;
    protected ragfairOfferService: RagfairOfferService;
    protected ragfairPriceService: RagfairPriceService;
    protected localisationService: LocalisationService;
    protected paymentHelper: PaymentHelper;
    protected fenceService: FenceService;
    protected itemHelper: ItemHelper;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    protected allowedFleaPriceItemsForBarter: {
        tpl: string;
        price: number;
    }[];
    /** Internal counter to ensure each offer created has a unique value for its intId property */
    protected offerCounter: number;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, timeUtil: TimeUtil, databaseServer: DatabaseServer, ragfairServerHelper: RagfairServerHelper, handbookHelper: HandbookHelper, saveServer: SaveServer, presetHelper: PresetHelper, ragfairAssortGenerator: RagfairAssortGenerator, ragfairOfferService: RagfairOfferService, ragfairPriceService: RagfairPriceService, localisationService: LocalisationService, paymentHelper: PaymentHelper, fenceService: FenceService, itemHelper: ItemHelper, configServer: ConfigServer);
    /**
     * Create a flea offer and store it in the Ragfair server offers array
     * @param userID Owner of the offer
     * @param time Time offer is listed at
     * @param items Items in the offer
     * @param barterScheme Cost of item (currency or barter)
     * @param loyalLevel Loyalty level needed to buy item
     * @param sellInOnePiece Flags sellInOnePiece to be true
     * @returns IRagfairOffer
     */
    createFleaOffer(userID: string, time: number, items: Item[], barterScheme: IBarterScheme[], loyalLevel: number, sellInOnePiece?: boolean): IRagfairOffer;
    /**
     * Create an offer object ready to send to ragfairOfferService.addOffer()
     * @param userID Owner of the offer
     * @param time Time offer is listed at
     * @param items Items in the offer
     * @param barterScheme Cost of item (currency or barter)
     * @param loyalLevel Loyalty level needed to buy item
     * @param sellInOnePiece Set StackObjectsCount to 1
     * @returns IRagfairOffer
     */
    protected createOffer(userID: string, time: number, items: Item[], barterScheme: IBarterScheme[], loyalLevel: number, sellInOnePiece?: boolean): IRagfairOffer;
    /**
     * Calculate the offer price that's listed on the flea listing
     * @param offerRequirements barter requirements for offer
     * @returns rouble cost of offer
     */
    protected convertOfferRequirementsIntoRoubles(offerRequirements: OfferRequirement[]): number;
    /**
     * Get avatar url from trader table in db
     * @param isTrader Is user we're getting avatar for a trader
     * @param userId persons id to get avatar of
     * @returns url of avatar
     */
    protected getAvatarUrl(isTrader: boolean, userId: string): string;
    /**
     * Convert a count of currency into roubles
     * @param currencyCount amount of currency to convert into roubles
     * @param currencyType Type of currency (euro/dollar/rouble)
     * @returns count of roubles
     */
    protected calculateRoublePrice(currencyCount: number, currencyType: string): number;
    /**
     * Check userId, if its a player, return their pmc _id, otherwise return userId parameter
     * @param userId Users Id to check
     * @returns Users Id
     */
    protected getTraderId(userId: string): string;
    /**
     * Get a flea trading rating for the passed in user
     * @param userId User to get flea rating of
     * @returns Flea rating value
     */
    protected getRating(userId: string): number;
    /**
     * Is the offers user rating growing
     * @param userID user to check rating of
     * @returns true if its growing
     */
    protected getRatingGrowing(userID: string): boolean;
    /**
     * Get number of section until offer should expire
     * @param userID Id of the offer owner
     * @param time Time the offer is posted
     * @returns number of seconds until offer expires
     */
    protected getOfferEndTime(userID: string, time: number): number;
    /**
     * Create multiple offers for items by using a unique list of items we've generated previously
     * @param expiredOffers optional, expired offers to regenerate
     */
    generateDynamicOffers(expiredOffers?: Item[][]): Promise<void>;
    /**
     * @param assortItemWithChildren Item with its children to process into offers
     * @param isExpiredOffer is an expired offer
     * @param config Ragfair dynamic config
     */
    protected createOffersFromAssort(assortItemWithChildren: Item[], isExpiredOffer: boolean, config: Dynamic): Promise<void>;
    /**
     * iterate over an items chidren and look for plates above desired level and remove them
     * @param presetWithChildren preset to check for plates
     * @param plateSettings Settings
     * @returns True if plate removed
     */
    protected removeBannedPlatesFromPreset(presetWithChildren: Item[], plateSettings: IArmorPlateBlacklistSettings): boolean;
    /**
     * Create one flea offer for a specific item
     * @param itemWithChildren Item to create offer for
     * @param isPreset Is item a weapon preset
     * @param itemDetails raw db item details
     * @returns Item array
     */
    protected createSingleOfferForItem(itemWithChildren: Item[], isPreset: boolean, itemDetails: [boolean, ITemplateItem]): Promise<void>;
    /**
     * Generate trader offers on flea using the traders assort data
     * @param traderID Trader to generate offers for
     */
    generateFleaOffersForTrader(traderID: string): void;
    /**
     * Get array of an item with its mods + condition properties (e.g durability)
     * Apply randomisation adjustments to condition if item base is found in ragfair.json/dynamic/condition
     * @param userID id of owner of item
     * @param itemWithMods Item and mods, get condition of first item (only first array item is modified)
     * @param itemDetails db details of first item
     */
    protected randomiseOfferItemUpdProperties(userID: string, itemWithMods: Item[], itemDetails: ITemplateItem): void;
    /**
     * Get the relevant condition id if item tpl matches in ragfair.json/condition
     * @param tpl Item to look for matching condition object
     * @returns condition id
     */
    protected getDynamicConditionIdForTpl(tpl: string): string;
    /**
     * Alter an items condition based on its item base type
     * @param conditionSettingsId also the parentId of item being altered
     * @param itemWithMods Item to adjust condition details of
     * @param itemDetails db item details of first item in array
     */
    protected randomiseItemCondition(conditionSettingsId: string, itemWithMods: Item[], itemDetails: ITemplateItem): void;
    /**
     * Adjust an items durability/maxDurability value
     * @param item item (weapon/armor) to Adjust
     * @param itemDbDetails Weapon details from db
     * @param maxMultiplier Value to multiply max durability by
     * @param currentMultiplier Value to multiply current durability by
     */
    protected randomiseWeaponDurability(item: Item, itemDbDetails: ITemplateItem, maxMultiplier: number, currentMultiplier: number): void;
    /**
     * Randomise the durabiltiy values for an armors plates and soft inserts
     * @param armorWithMods Armor item with its child mods
     * @param currentMultiplier Chosen multipler to use for current durability value
     * @param maxMultiplier Chosen multipler to use for max durability value
     */
    protected randomiseArmorDurabilityValues(armorWithMods: Item[], currentMultiplier: number, maxMultiplier: number): void;
    /**
     * Add missing conditions to an item if needed
     * Durabiltiy for repairable items
     * HpResource for medical items
     * @param item item to add conditions to
     */
    protected addMissingConditions(item: Item): void;
    /**
     * Create a barter-based barter scheme, if not possible, fall back to making barter scheme currency based
     * @param offerItems Items for sale in offer
     * @returns Barter scheme
     */
    protected createBarterBarterScheme(offerItems: Item[]): IBarterScheme[];
    /**
     * Get an array of flea prices + item tpl, cached in generator class inside `allowedFleaPriceItemsForBarter`
     * @returns array with tpl/price values
     */
    protected getFleaPricesAsArray(): {
        tpl: string;
        price: number;
    }[];
    /**
     * Create a random currency-based barter scheme for an array of items
     * @param offerWithChildren Items on offer
     * @param isPackOffer Is the barter scheme being created for a pack offer
     * @param multipler What to multiply the resulting price by
     * @returns Barter scheme for offer
     */
    protected createCurrencyBarterScheme(offerWithChildren: Item[], isPackOffer: boolean, multipler?: number): IBarterScheme[];
}
