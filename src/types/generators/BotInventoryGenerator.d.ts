import { BotEquipmentModGenerator } from "../generators/BotEquipmentModGenerator.d.ts";
import { BotLootGenerator } from "../generators/BotLootGenerator.d.ts";
import { BotWeaponGenerator } from "../generators/BotWeaponGenerator.d.ts";
import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper.d.ts";
import { BotHelper } from "../helpers/BotHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.d.ts";
import { Inventory as PmcInventory } from "../models/eft/common/tables/IBotBase.d.ts";
import { Chances, Generation, IBotType, Inventory, Mods } from "../models/eft/common/tables/IBotType.d.ts";
import { EquipmentSlots } from "../models/enums/EquipmentSlots.d.ts";
import { EquipmentFilterDetails, EquipmentFilters, IBotConfig, RandomisationDetails } from "../models/spt/config/IBotConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { BotEquipmentModPoolService } from "../services/BotEquipmentModPoolService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
export declare class BotInventoryGenerator {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected botWeaponGenerator: BotWeaponGenerator;
    protected botLootGenerator: BotLootGenerator;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected botHelper: BotHelper;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected itemHelper: ItemHelper;
    protected localisationService: LocalisationService;
    protected botEquipmentModPoolService: BotEquipmentModPoolService;
    protected botEquipmentModGenerator: BotEquipmentModGenerator;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, botWeaponGenerator: BotWeaponGenerator, botLootGenerator: BotLootGenerator, botGeneratorHelper: BotGeneratorHelper, botHelper: BotHelper, weightedRandomHelper: WeightedRandomHelper, itemHelper: ItemHelper, localisationService: LocalisationService, botEquipmentModPoolService: BotEquipmentModPoolService, botEquipmentModGenerator: BotEquipmentModGenerator, configServer: ConfigServer);
    /**
     * Add equipment/weapons/loot to bot
     * @param sessionId Session id
     * @param botJsonTemplate Base json db file for the bot having its loot generated
     * @param botRole Role bot has (assault/pmcBot)
     * @param isPmc Is bot being converted into a pmc
     * @param botLevel Level of bot being generated
     * @returns PmcInventory object with equipment/weapons/loot
     */
    generateInventory(sessionId: string, botJsonTemplate: IBotType, botRole: string, isPmc: boolean, botLevel: number): PmcInventory;
    /**
     * Create a pmcInventory object with all the base/generic items needed
     * @returns PmcInventory object
     */
    protected generateInventoryBase(): PmcInventory;
    /**
     * Add equipment to a bot
     * @param templateInventory bot/x.json data from db
     * @param wornItemChances Chances items will be added to bot
     * @param botRole Role bot has (assault/pmcBot)
     * @param botInventory Inventory to add equipment to
     * @param botLevel Level of bot
     */
    protected generateAndAddEquipmentToBot(templateInventory: Inventory, wornItemChances: Chances, botRole: string, botInventory: PmcInventory, botLevel: number): void;
    /**
     * Remove non-armored rigs from parameter data
     * @param templateInventory
     */
    protected filterRigsToThoseWithProtection(templateInventory: Inventory): void;
    /**
     * Remove armored rigs from parameter data
     * @param templateInventory
     */
    protected filterRigsToThoseWithoutProtection(templateInventory: Inventory): void;
    /**
     * Add a piece of equipment with mods to inventory from the provided pools
     * @param settings Values to adjust how item is chosen and added to bot
     * @returns true when item added
     */
    protected generateEquipment(settings: IGenerateEquipmentProperties): boolean;
    /**
     * Get all possible mods for item and filter down based on equipment blacklist from bot.json config
     * @param itemTpl Item mod pool is being retrieved and filtered
     * @param equipmentBlacklist blacklist to filter mod pool with
     * @returns Filtered pool of mods
     */
    protected getFilteredDynamicModsForItem(itemTpl: string, equipmentBlacklist: EquipmentFilterDetails[]): Record<string, string[]>;
    /**
     * Work out what weapons bot should have equipped and add them to bot inventory
     * @param templateInventory bot/x.json data from db
     * @param equipmentChances Chances bot can have equipment equipped
     * @param sessionId Session id
     * @param botInventory Inventory to add weapons to
     * @param botRole assault/pmcBot/bossTagilla etc
     * @param isPmc Is the bot being generated as a pmc
     * @param botLevel level of bot having weapon generated
     * @param itemGenerationLimitsMinMax Limits for items the bot can have
     */
    protected generateAndAddWeaponsToBot(templateInventory: Inventory, equipmentChances: Chances, sessionId: string, botInventory: PmcInventory, botRole: string, isPmc: boolean, itemGenerationLimitsMinMax: Generation, botLevel: number): void;
    /**
     * Calculate if the bot should have weapons in Primary/Secondary/Holster slots
     * @param equipmentChances Chances bot has certain equipment
     * @returns What slots bot should have weapons generated for
     */
    protected getDesiredWeaponsForBot(equipmentChances: Chances): {
        slot: EquipmentSlots;
        shouldSpawn: boolean;
    }[];
    /**
     * Add weapon + spare mags/ammo to bots inventory
     * @param sessionId Session id
     * @param weaponSlot Weapon slot being generated
     * @param templateInventory bot/x.json data from db
     * @param botInventory Inventory to add weapon+mags/ammo to
     * @param equipmentChances Chances bot can have equipment equipped
     * @param botRole assault/pmcBot/bossTagilla etc
     * @param isPmc Is the bot being generated as a pmc
     * @param itemGenerationWeights
     */
    protected addWeaponAndMagazinesToInventory(sessionId: string, weaponSlot: {
        slot: EquipmentSlots;
        shouldSpawn: boolean;
    }, templateInventory: Inventory, botInventory: PmcInventory, equipmentChances: Chances, botRole: string, isPmc: boolean, itemGenerationWeights: Generation, botLevel: number): void;
}
export interface IGenerateEquipmentProperties {
    /** Root Slot being generated */
    rootEquipmentSlot: string;
    /** Equipment pool for root slot being generated */
    rootEquipmentPool: Record<string, number>;
    modPool: Mods;
    /** Dictionary of mod items and their chance to spawn for this bot type */
    spawnChances: Chances;
    /** Role being generated for */
    botRole: string;
    /** Level of bot being generated */
    botLevel: number;
    inventory: PmcInventory;
    botEquipmentConfig: EquipmentFilters;
    /** Settings from bot.json to adjust how item is generated */
    randomisationDetails: RandomisationDetails;
}
