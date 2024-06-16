import type { SellResult } from "../models/eft/ragfair/IRagfairOffer.ts";
import type { IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class RagfairSellHelper {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, timeUtil: TimeUtil, databaseServer: DatabaseServer, configServer: ConfigServer);
    /**
     * Get the percent chance to sell an item based on its average listed price vs player chosen listing price
     * @param averageOfferPriceRub Price of average offer in roubles
     * @param playerListedPriceRub Price player listed item for in roubles
     * @param qualityMultiplier Quality multipler of item being sold
     * @returns percent value
     */
    calculateSellChance(averageOfferPriceRub: number, playerListedPriceRub: number, qualityMultiplier: number): number;
    /**
     * Get array of item count and sell time (empty array = no sell)
     * @param sellChancePercent chance item will sell
     * @param itemSellCount count of items to sell
     * @returns Array of purchases of item(s) listed
     */
    rollForSale(sellChancePercent: number, itemSellCount: number): SellResult[];
}
