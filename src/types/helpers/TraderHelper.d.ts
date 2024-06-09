import { HandbookHelper } from "../helpers/HandbookHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { ProfileTraderTemplate } from "../models/eft/common/tables/IProfileTemplate.d.ts";
import { ITraderAssort, ITraderBase, LoyaltyLevel } from "../models/eft/common/tables/ITrader.d.ts";
import { Traders } from "../models/enums/Traders.d.ts";
import { ITraderConfig } from "../models/spt/config/ITraderConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { FenceService } from "../services/FenceService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { PlayerService } from "../services/PlayerService.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
export declare class TraderHelper {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected saveServer: SaveServer;
    protected profileHelper: ProfileHelper;
    protected handbookHelper: HandbookHelper;
    protected itemHelper: ItemHelper;
    protected playerService: PlayerService;
    protected localisationService: LocalisationService;
    protected fenceService: FenceService;
    protected timeUtil: TimeUtil;
    protected randomUtil: RandomUtil;
    protected configServer: ConfigServer;
    protected traderConfig: ITraderConfig;
    /** Dictionary of item tpl and the highest trader sell rouble price */
    protected highestTraderPriceItems: Record<string, number>;
    /** Dictionary of item tpl and the highest trader buy back rouble price */
    protected highestTraderBuyPriceItems: Record<string, number>;
    constructor(logger: ILogger, databaseServer: DatabaseServer, saveServer: SaveServer, profileHelper: ProfileHelper, handbookHelper: HandbookHelper, itemHelper: ItemHelper, playerService: PlayerService, localisationService: LocalisationService, fenceService: FenceService, timeUtil: TimeUtil, randomUtil: RandomUtil, configServer: ConfigServer);
    /**
     * Get a trader base object, update profile to reflect players current standing in profile
     * when trader not found in profile
     * @param traderID Traders Id to get
     * @param sessionID Players id
     * @returns Trader base
     */
    getTrader(traderID: string, sessionID: string): ITraderBase;
    /**
     * Get all assort data for a particular trader
     * @param traderId Trader to get assorts for
     * @returns ITraderAssort
     */
    getTraderAssortsByTraderId(traderId: string): ITraderAssort;
    /**
     * Retrieve the Item from a traders assort data by its id
     * @param traderId Trader to get assorts for
     * @param assortId Id of assort to find
     * @returns Item object
     */
    getTraderAssortItemByAssortId(traderId: string, assortId: string): Item;
    /**
     * Reset a profiles trader data back to its initial state as seen by a level 1 player
     * Does NOT take into account different profile levels
     * @param sessionID session id of player
     * @param traderID trader id to reset
     */
    resetTrader(sessionID: string, traderID: string): void;
    /**
     * Get the starting standing of a trader based on the current profiles type (e.g. EoD, Standard etc)
     * @param traderId Trader id to get standing for
     * @param rawProfileTemplate Raw profile from profiles.json to look up standing from
     * @returns Standing value
     */
    protected getStartingStanding(traderId: string, rawProfileTemplate: ProfileTraderTemplate): number;
    /**
     * Alter a traders unlocked status
     * @param traderId Trader to alter
     * @param status New status to use
     * @param sessionId Session id of player
     */
    setTraderUnlockedState(traderId: string, status: boolean, sessionId: string): void;
    /**
     * Add standing to a trader and level them up if exp goes over level threshold
     * @param sessionId Session id of player
     * @param traderId Traders id to add standing to
     * @param standingToAdd Standing value to add to trader
     */
    addStandingToTrader(sessionId: string, traderId: string, standingToAdd: number): void;
    /**
     * Add standing to current standing and clamp value if it goes too low
     * @param currentStanding current trader standing
     * @param standingToAdd stansding to add to trader standing
     * @returns current standing + added standing (clamped if needed)
     */
    protected addStandingValuesTogether(currentStanding: number, standingToAdd: number): number;
    /**
     * Calculate traders level based on exp amount and increments level if over threshold
     * @param traderID trader to check standing of
     * @param pmcData profile to update trader in
     */
    lvlUp(traderID: string, pmcData: IPmcData): void;
    /**
     * Get the next update timestamp for a trader
     * @param traderID Trader to look up update value for
     * @returns future timestamp
     */
    getNextUpdateTimestamp(traderID: string): number;
    /**
     * Get the reset time between trader assort refreshes in seconds
     * @param traderId Trader to look up
     * @returns Time in seconds
     */
    getTraderUpdateSeconds(traderId: string): number;
    getLoyaltyLevel(traderID: string, pmcData: IPmcData): LoyaltyLevel;
    /**
     * Store the purchase of an assort from a trader in the player profile
     * @param sessionID Session id
     * @param newPurchaseDetails New item assort id + count
     */
    addTraderPurchasesToPlayerProfile(sessionID: string, newPurchaseDetails: {
        items: {
            itemId: string;
            count: number;
        }[];
        traderId: string;
    }, itemPurchased: Item): void;
    /**
     * Get the highest rouble price for an item from traders
     * UNUSED
     * @param tpl Item to look up highest pride for
     * @returns highest rouble cost for item
     */
    getHighestTraderPriceRouble(tpl: string): number;
    /**
     * Get the highest price item can be sold to trader for (roubles)
     * @param tpl Item to look up best trader sell-to price
     * @returns Rouble price
     */
    getHighestSellToTraderPrice(tpl: string): number;
    /**
     * Get a trader enum key by its value
     * @param traderId Traders id
     * @returns Traders key
     */
    getTraderById(traderId: string): Traders;
    /**
     * Validates that the provided traderEnumValue exists in the Traders enum. If the value is valid, it returns the
     * same enum value, effectively serving as a trader ID; otherwise, it logs an error and returns an empty string.
     * This method provides a runtime check to prevent undefined behavior when using the enum as a dictionary key.
     *
     * For example, instead of this:
     * `const traderId = Traders[Traders.PRAPOR];`
     *
     * You can use safely use this:
     * `const traderId = this.traderHelper.getValidTraderIdByEnumValue(Traders.PRAPOR);`
     *
     * @param traderEnumValue The trader enum value to validate
     * @returns The validated trader enum value as a string, or an empty string if invalid
     */
    getValidTraderIdByEnumValue(traderEnumValue: Traders): string;
    /**
     * Does the 'Traders' enum has a value that matches the passed in parameter
     * @param key Value to check for
     * @returns True, values exists in Traders enum as a value
     */
    traderEnumHasKey(key: string): boolean;
    /**
     * Accepts a trader id
     * @param traderId Trader id
     * @returns Ttrue if Traders enum has the param as a value
     */
    traderEnumHasValue(traderId: string): boolean;
}