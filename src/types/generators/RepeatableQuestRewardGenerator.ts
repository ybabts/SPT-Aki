import type { HandbookHelper } from "../helpers/HandbookHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { PresetHelper } from "../helpers/PresetHelper.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { IQuestReward, IQuestRewards } from "../models/eft/common/tables/IQuest.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { IBaseQuestConfig, IQuestConfig, IRepeatableQuestConfig } from "../models/spt/config/IQuestConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { ItemFilterService } from "../services/ItemFilterService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { SeasonalEventService } from "../services/SeasonalEventService.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { MathUtil } from "../utils/MathUtil.ts";
import type { ObjectId } from "../utils/ObjectId.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class RepeatableQuestRewardGenerator {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected mathUtil: MathUtil;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected presetHelper: PresetHelper;
    protected handbookHelper: HandbookHelper;
    protected localisationService: LocalisationService;
    protected objectId: ObjectId;
    protected itemFilterService: ItemFilterService;
    protected seasonalEventService: SeasonalEventService;
    protected configServer: ConfigServer;
    protected questConfig: IQuestConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, mathUtil: MathUtil, jsonUtil: JsonUtil, databaseServer: DatabaseServer, itemHelper: ItemHelper, presetHelper: PresetHelper, handbookHelper: HandbookHelper, localisationService: LocalisationService, objectId: ObjectId, itemFilterService: ItemFilterService, seasonalEventService: SeasonalEventService, configServer: ConfigServer);
    /**
     * Generate the reward for a mission. A reward can consist of
     * - Experience
     * - Money
     * - Items
     * - Trader Reputation
     *
     * The reward is dependent on the player level as given by the wiki. The exact mapping of pmcLevel to
     * experience / money / items / trader reputation can be defined in QuestConfig.js
     *
     * There's also a random variation of the reward the spread of which can be also defined in the config.
     *
     * Additionally, a scaling factor w.r.t. quest difficulty going from 0.2...1 can be used
     *
     * @param   {integer}   pmcLevel            player's level
     * @param   {number}    difficulty          a reward scaling factor from 0.2 to 1
     * @param   {string}    traderId            the trader for reputation gain (and possible in the future filtering of reward item type based on trader)
     * @param   {object}    repeatableConfig    The configuration for the repeatable kind (daily, weekly) as configured in QuestConfig for the requested quest
     * @returns {object}                        object of "Reward"-type that can be given for a repeatable mission
     */
    generateReward(pmcLevel: number, difficulty: number, traderId: string, repeatableConfig: IRepeatableQuestConfig, questConfig: IBaseQuestConfig): IQuestRewards;
    /**
     * @param rewardItems List of reward items to filter
     * @param roublesBudget The budget remaining for rewards
     * @param minPrice The minimum priced item to include
     * @returns True if any items remain in `rewardItems`, false otherwise
     */
    protected filterRewardPoolWithinBudget(rewardItems: ITemplateItem[], roublesBudget: number, minPrice: number): ITemplateItem[];
    /**
     * Get a randomised number a reward items stack size should be based on its handbook price
     * @param item Reward item to get stack size for
     * @returns Stack size value
     */
    protected getRandomisedRewardItemStackSizeByPrice(item: ITemplateItem): number;
    /**
     * Should reward item have stack size increased (25% chance)
     * @param item Item to possibly increase stack size of
     * @param maxRoublePriceToStack Maximum rouble price an item can be to still be chosen for stacking
     * @returns True if it should
     */
    protected canIncreaseRewardItemStackSize(item: ITemplateItem, maxRoublePriceToStack: number): boolean;
    protected calculateAmmoStackSizeThatFitsBudget(itemSelected: ITemplateItem, roublesBudget: number, rewardNumItems: number): number;
    /**
     * Select a number of items that have a colelctive value of the passed in parameter
     * @param repeatableConfig Config
     * @param roublesBudget Total value of items to return
     * @returns Array of reward items that fit budget
     */
    protected chooseRewardItemsWithinBudget(repeatableConfig: IRepeatableQuestConfig, roublesBudget: number, traderId: string): ITemplateItem[];
    /**
     * Helper to create a reward item structured as required by the client
     *
     * @param   {string}    tpl             ItemId of the rewarded item
     * @param   {integer}   value           Amount of items to give
     * @param   {integer}   index           All rewards will be appended to a list, for unknown reasons the client wants the index
     * @returns {object}                    Object of "Reward"-item-type
     */
    protected generateRewardItem(tpl: string, value: number, index: number, preset?: Item[]): IQuestReward;
    /**
     * Picks rewardable items from items.json. This means they need to fit into the inventory and they shouldn't be keys (debatable)
     * @param repeatableQuestConfig Config file
     * @returns List of rewardable items [[_tpl, itemTemplate],...]
     */
    getRewardableItems(repeatableQuestConfig: IRepeatableQuestConfig, traderId: string): [string, ITemplateItem][];
    /**
     * Checks if an id is a valid item. Valid meaning that it's an item that may be a reward
     * or content of bot loot. Items that are tested as valid may be in a player backpack or stash.
     * @param {string} tpl template id of item to check
     * @returns True if item is valid reward
     */
    protected isValidRewardItem(tpl: string, repeatableQuestConfig: IRepeatableQuestConfig, itemBaseWhitelist: string[]): boolean;
    protected addMoneyReward(traderId: string, rewards: IQuestRewards, rewardRoubles: number, rewardIndex: number): void;
}
