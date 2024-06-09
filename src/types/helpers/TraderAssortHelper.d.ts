import { RagfairAssortGenerator } from "../generators/RagfairAssortGenerator.d.ts";
import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator.d.ts";
import { AssortHelper } from "../helpers/AssortHelper.d.ts";
import { PaymentHelper } from "../helpers/PaymentHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { ITrader, ITraderAssort } from "../models/eft/common/tables/ITrader.d.ts";
import { ITraderConfig } from "../models/spt/config/ITraderConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { FenceService } from "../services/FenceService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { TraderAssortService } from "../services/TraderAssortService.d.ts";
import { TraderPurchasePersisterService } from "../services/TraderPurchasePersisterService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { MathUtil } from "../utils/MathUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
export declare class TraderAssortHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected mathUtil: MathUtil;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected profileHelper: ProfileHelper;
    protected assortHelper: AssortHelper;
    protected paymentHelper: PaymentHelper;
    protected ragfairAssortGenerator: RagfairAssortGenerator;
    protected ragfairOfferGenerator: RagfairOfferGenerator;
    protected traderAssortService: TraderAssortService;
    protected localisationService: LocalisationService;
    protected traderPurchasePersisterService: TraderPurchasePersisterService;
    protected traderHelper: TraderHelper;
    protected fenceService: FenceService;
    protected configServer: ConfigServer;
    protected traderConfig: ITraderConfig;
    protected mergedQuestAssorts: Record<string, Record<string, string>>;
    protected createdMergedQuestAssorts: boolean;
    constructor(logger: ILogger, jsonUtil: JsonUtil, mathUtil: MathUtil, timeUtil: TimeUtil, databaseServer: DatabaseServer, profileHelper: ProfileHelper, assortHelper: AssortHelper, paymentHelper: PaymentHelper, ragfairAssortGenerator: RagfairAssortGenerator, ragfairOfferGenerator: RagfairOfferGenerator, traderAssortService: TraderAssortService, localisationService: LocalisationService, traderPurchasePersisterService: TraderPurchasePersisterService, traderHelper: TraderHelper, fenceService: FenceService, configServer: ConfigServer);
    /**
     * Get a traders assorts
     * Can be used for returning ragfair / fence assorts
     * Filter out assorts not unlocked due to level OR quest completion
     * @param sessionId session id
     * @param traderId traders id
     * @param flea Should assorts player hasn't unlocked be returned - default false
     * @returns a traders' assorts
     */
    getAssort(sessionId: string, traderId: string, flea?: boolean): ITraderAssort;
    /**
     * Reset every traders root item `BuyRestrictionCurrent` property to 0
     * @param assortItems Items to adjust
     */
    protected resetBuyRestrictionCurrentValue(assortItems: Item[]): void;
    /**
     * Create a dict of all assort id = quest id mappings used to work out what items should be shown to player based on the quests they've started/completed/failed
     */
    protected hydrateMergedQuestAssorts(): void;
    /**
     * Reset a traders assorts and move nextResupply value to future
     * Flag trader as needing a flea offer reset to be picked up by flea update() function
     * @param trader trader details to alter
     */
    resetExpiredTrader(trader: ITrader): void;
    /**
     * Does the supplied trader need its assorts refreshed
     * @param traderID Trader to check
     * @returns true they need refreshing
     */
    traderAssortsHaveExpired(traderID: string): boolean;
    /**
     * Iterate over all assorts barter_scheme values, find barters selling for money and multiply by multipler in config
     * @param traderAssort Assorts to multiple price of
     */
    protected multiplyItemPricesByConfigMultiplier(traderAssort: ITraderAssort): void;
    /**
     * Get an array of pristine trader items prior to any alteration by player (as they were on server start)
     * @param traderId trader id
     * @returns array of Items
     */
    protected getPristineTraderAssorts(traderId: string): Item[];
    /**
     * Returns generated ragfair offers in a trader assort format
     * @returns Trader assort object
     */
    protected getRagfairDataAsTraderAssort(): ITraderAssort;
}
