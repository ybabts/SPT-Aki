import type { BotWeaponGenerator } from "../generators/BotWeaponGenerator.ts";
import type { BotGeneratorHelper } from "../helpers/BotGeneratorHelper.ts";
import type { BotHelper } from "../helpers/BotHelper.ts";
import type { HandbookHelper } from "../helpers/HandbookHelper.ts";
import type { InventoryHelper } from "../helpers/InventoryHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.ts";
import type { Inventory as PmcInventory } from "../models/eft/common/tables/IBotBase.ts";
import type { IBotType, Inventory, ModsChances } from "../models/eft/common/tables/IBotType.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { EquipmentSlots } from "../models/enums/EquipmentSlots.ts";
import type { IItemSpawnLimitSettings } from "../models/spt/bots/IItemSpawnLimitSettings.ts";
import type { IBotConfig } from "../models/spt/config/IBotConfig.ts";
import type { IPmcConfig } from "../models/spt/config/IPmcConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { BotLootCacheService } from "../services/BotLootCacheService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class BotLootGenerator {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected itemHelper: ItemHelper;
    protected jsonUtil: JsonUtil;
    protected inventoryHelper: InventoryHelper;
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected botWeaponGenerator: BotWeaponGenerator;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected botHelper: BotHelper;
    protected botLootCacheService: BotLootCacheService;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    protected pmcConfig: IPmcConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, itemHelper: ItemHelper, jsonUtil: JsonUtil, inventoryHelper: InventoryHelper, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, botGeneratorHelper: BotGeneratorHelper, botWeaponGenerator: BotWeaponGenerator, weightedRandomHelper: WeightedRandomHelper, botHelper: BotHelper, botLootCacheService: BotLootCacheService, localisationService: LocalisationService, configServer: ConfigServer);
    protected getItemSpawnLimitsForBot(botRole: string): IItemSpawnLimitSettings;
    /**
     * Add loot to bots containers
     * @param sessionId Session id
     * @param botJsonTemplate Base json db file for the bot having its loot generated
     * @param isPmc Will bot be a pmc
     * @param botRole Role of bot, e.g. asssult
     * @param botInventory Inventory to add loot to
     * @param botLevel Level of bot
     */
    generateLoot(sessionId: string, botJsonTemplate: IBotType, isPmc: boolean, botRole: string, botInventory: PmcInventory, botLevel: number): void;
    /**
     * Get an array of the containers a bot has on them (pockets/backpack/vest)
     * @param botInventory Bot to check
     * @returns Array of available slots
     */
    protected getAvailableContainersBotCanStoreItemsIn(botInventory: PmcInventory): EquipmentSlots[];
    /**
     * Force healing items onto bot to ensure they can heal in-raid
     * @param botInventory Inventory to add items to
     * @param botRole Role of bot (sptBear/sptUsec)
     */
    protected addForcedMedicalItemsToPmcSecure(botInventory: PmcInventory, botRole: string): void;
    /**
     * Get a biased random number
     * @param min Smallest size
     * @param max Biggest size
     * @param nValue Value to bias choice
     * @returns Chosen number
     */
    protected getRandomisedCount(min: number, max: number, nValue: number): number;
    /**
     * Take random items from a pool and add to an inventory until totalItemCount or totalValueLimit or space limit is reached
     * @param pool Pool of items to pick from with weight
     * @param equipmentSlots What equipment slot will the loot items be added to
     * @param totalItemCount Max count of items to add
     * @param inventoryToAddItemsTo Bot inventory loot will be added to
     * @param botRole Role of the bot loot is being generated for (assault/pmcbot)
     * @param itemSpawnLimits Item spawn limits the bot must adhere to
     * @param totalValueLimitRub Total value of loot allowed in roubles
     * @param isPmc Is bot being generated for a pmc
     */
    protected addLootFromPool(pool: Record<string, number>, equipmentSlots: string[], totalItemCount: number, inventoryToAddItemsTo: PmcInventory, botRole: string, itemSpawnLimits?: IItemSpawnLimitSettings, totalValueLimitRub?: number, isPmc?: boolean, containersIdFull?: Set<string>): void;
    protected createWalletLoot(walletId: string): Item[][];
    /**
     * Some items need child items to function, add them to the itemToAddChildrenTo array
     * @param itemToAddTemplate Db template of item to check
     * @param itemToAddChildrenTo Item to add children to
     * @param isPmc Is the item being generated for a pmc (affects money/ammo stack sizes)
     * @param botRole role bot has that owns item
     */
    protected addRequiredChildItemsToParent(itemToAddTemplate: ITemplateItem, itemToAddChildrenTo: Item[], isPmc: boolean, botRole: string): void;
    /**
     * Add generated weapons to inventory as loot
     * @param botInventory inventory to add preset to
     * @param equipmentSlot slot to place the preset in (backpack)
     * @param templateInventory bots template, assault.json
     * @param modChances chances for mods to spawn on weapon
     * @param botRole bots role .e.g. pmcBot
     * @param isPmc are we generating for a pmc
     */
    protected addLooseWeaponsToInventorySlot(sessionId: string, botInventory: PmcInventory, equipmentSlot: string, templateInventory: Inventory, modChances: ModsChances, botRole: string, isPmc: boolean, botLevel: number, containersIdFull?: Set<string>): void;
    /**
     * Hydrate item limit array to contain items that have a limit for a specific bot type
     * All values are set to 0
     * @param botRole Role the bot has
     * @param limitCount
     */
    protected initItemLimitArray(botRole: string, limitCount: Record<string, number>): void;
    /**
     * Check if an item has reached its bot-specific spawn limit
     * @param itemTemplate Item we check to see if its reached spawn limit
     * @param botRole Bot type
     * @param itemSpawnLimits
     * @returns true if item has reached spawn limit
     */
    protected itemHasReachedSpawnLimit(itemTemplate: ITemplateItem, botRole: string, itemSpawnLimits: IItemSpawnLimitSettings): boolean;
    /**
     * Randomise the stack size of a money object, uses different values for pmc or scavs
     * @param botRole Role bot has that has money stack
     * @param itemTemplate item details from db
     * @param moneyItem Money item to randomise
     */
    protected randomiseMoneyStackSize(botRole: string, itemTemplate: ITemplateItem, moneyItem: Item): void;
    /**
     * Randomise the size of an ammo stack
     * @param isPmc Is ammo on a PMC bot
     * @param itemTemplate item details from db
     * @param ammoItem Ammo item to randomise
     */
    protected randomiseAmmoStackSize(isPmc: boolean, itemTemplate: ITemplateItem, ammoItem: Item): void;
    /**
     * Get spawn limits for a specific bot type from bot.json config
     * If no limit found for a non pmc bot, fall back to defaults
     * @param botRole what role does the bot have
     * @returns Dictionary of tplIds and limit
     */
    protected getItemSpawnLimitsForBotType(botRole: string): Record<string, number>;
    /**
     * Get the parentId or tplId of item inside spawnLimits object if it exists
     * @param itemTemplate item we want to look for in spawn limits
     * @param spawnLimits Limits to check for item
     * @returns id as string, otherwise undefined
     */
    protected getMatchingIdFromSpawnLimits(itemTemplate: ITemplateItem, spawnLimits: Record<string, number>): string;
}