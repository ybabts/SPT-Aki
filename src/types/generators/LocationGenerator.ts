import type { ContainerHelper } from "../helpers/ContainerHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { PresetHelper } from "../helpers/PresetHelper.ts";
import type { IContainerMinMax, IStaticContainer } from "../models/eft/common/ILocation.ts";
import type { ILocationBase } from "../models/eft/common/ILocationBase.ts";
import type { ILooseLoot, Spawnpoint, SpawnpointTemplate, SpawnpointsForced } from "../models/eft/common/ILooseLoot.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { IStaticAmmoDetails, IStaticContainerData, IStaticForcedProps, IStaticLootDetails } from "../models/eft/common/tables/ILootBase.ts";
import type { ILocationConfig } from "../models/spt/config/ILocationConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { SeasonalEventService } from "../services/SeasonalEventService.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { MathUtil } from "../utils/MathUtil.ts";
import type { ObjectId } from "../utils/ObjectId.ts";
import type { ProbabilityObjectArray, RandomUtil } from "../utils/RandomUtil.ts";
export interface IContainerItem {
    items: Item[];
    width: number;
    height: number;
}
export interface IContainerGroupCount {
    /** Containers this group has + probabilty to spawn */
    containerIdsWithProbability: Record<string, number>;
    /** How many containers the map should spawn with this group id */
    chosenCount: number;
}
export declare class LocationGenerator {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected jsonUtil: JsonUtil;
    protected objectId: ObjectId;
    protected randomUtil: RandomUtil;
    protected itemHelper: ItemHelper;
    protected mathUtil: MathUtil;
    protected seasonalEventService: SeasonalEventService;
    protected containerHelper: ContainerHelper;
    protected presetHelper: PresetHelper;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected locationConfig: ILocationConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, jsonUtil: JsonUtil, objectId: ObjectId, randomUtil: RandomUtil, itemHelper: ItemHelper, mathUtil: MathUtil, seasonalEventService: SeasonalEventService, containerHelper: ContainerHelper, presetHelper: PresetHelper, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Create an array of container objects with randomised loot
     * @param locationBase Map base to generate containers for
     * @param staticAmmoDist Static ammo distribution - database.loot.staticAmmo
     * @returns Array of container objects
     */
    generateStaticContainers(locationBase: ILocationBase, staticAmmoDist: Record<string, IStaticAmmoDetails[]>): SpawnpointTemplate[];
    /**
     * Get containers with a non-100% chance to spawn OR are NOT on the container type randomistion blacklist
     * @param staticContainers
     * @returns IStaticContainerData array
     */
    protected getRandomisableContainersOnMap(staticContainers: IStaticContainerData[]): IStaticContainerData[];
    /**
     * Get containers with 100% spawn rate or have a type on the randomistion ignore list
     * @param staticContainersOnMap
     * @returns IStaticContainerData array
     */
    protected getGuaranteedContainers(staticContainersOnMap: IStaticContainerData[]): IStaticContainerData[];
    /**
     * Choose a number of containers based on their probabilty value to fulfil the desired count in containerData.chosenCount
     * @param groupId Name of the group the containers are being collected for
     * @param containerData Containers and probability values for a groupId
     * @returns List of chosen container Ids
     */
    protected getContainersByProbabilty(groupId: string, containerData: IContainerGroupCount): string[];
    /**
     * Get a mapping of each groupid and the containers in that group + count of containers to spawn on map
     * @param containersGroups Container group values
     * @returns dictionary keyed by groupId
     */
    protected getGroupIdToContainerMappings(staticContainerGroupData: IStaticContainer | Record<string, IContainerMinMax>, staticContainersOnMap: IStaticContainerData[]): Record<string, IContainerGroupCount>;
    /**
     * Choose loot to put into a static container based on weighting
     * Handle forced items + seasonal item removal when not in season
     * @param staticContainer The container itself we will add loot to
     * @param staticForced Loot we need to force into the container
     * @param staticLootDist staticLoot.json
     * @param staticAmmoDist staticAmmo.json
     * @param locationName Name of the map to generate static loot for
     * @returns IStaticContainerProps
     */
    protected addLootToContainer(staticContainer: IStaticContainerData, staticForced: IStaticForcedProps[], staticLootDist: Record<string, IStaticLootDetails>, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): IStaticContainerData;
    /**
     * Get a 2d grid of a containers item slots
     * @param containerTpl Tpl id of the container
     * @returns number[][]
     */
    protected getContainerMapping(containerTpl: string): number[][];
    /**
     * Look up a containers itemcountDistribution data and choose an item count based on the found weights
     * @param containerTypeId Container to get item count for
     * @param staticLootDist staticLoot.json
     * @param locationName Map name (to get per-map multiplier for from config)
     * @returns item count
     */
    protected getWeightedCountOfContainerItems(containerTypeId: string, staticLootDist: Record<string, IStaticLootDetails>, locationName: string): number;
    /**
     * Get all possible loot items that can be placed into a container
     * Do not add seasonal items if found + current date is inside seasonal event
     * @param containerTypeId Contianer to get possible loot for
     * @param staticLootDist staticLoot.json
     * @returns ProbabilityObjectArray of item tpls + probabilty
     */
    protected getPossibleLootItemsForContainer(containerTypeId: string, staticLootDist: Record<string, IStaticLootDetails>): ProbabilityObjectArray<string, number>;
    protected getLooseLootMultiplerForLocation(location: string): number;
    protected getStaticLootMultiplerForLocation(location: string): number;
    /**
     * Create array of loose + forced loot using probability system
     * @param dynamicLootDist
     * @param staticAmmoDist
     * @param locationName Location to generate loot for
     * @returns Array of spawn points with loot in them
     */
    generateDynamicLoot(dynamicLootDist: ILooseLoot, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): SpawnpointTemplate[];
    /**
     * Add forced spawn point loot into loot parameter array
     * @param lootLocationTemplates array to add forced loot spawn locations to
     * @param forcedSpawnPoints forced Forced loot locations that must be added
     * @param locationName Name of map currently having force loot created for
     */
    protected addForcedLoot(lootLocationTemplates: SpawnpointTemplate[], forcedSpawnPoints: SpawnpointsForced[], locationName: string): void;
    /**
     * Create array of item (with child items) and return
     * @param chosenComposedKey Key we want to look up items for
     * @param spawnPoint Dynamic spawn point item we want will be placed in
     * @param staticAmmoDist ammo distributions
     * @returns IContainerItem
     */
    protected createDynamicLootItem(chosenComposedKey: string, spawnPoint: Spawnpoint, staticAmmoDist: Record<string, IStaticAmmoDetails[]>): IContainerItem;
    /**
     * Replace the _id value for base item + all children items parentid value
     * @param itemWithChildren Item with mods to update
     * @param newId new id to add on chidren of base item
     */
    protected reparentItemAndChildren(itemWithChildren: Item[], newId?: string): void;
    /**
     * Find an item in array by its _tpl, handle differently if chosenTpl is a weapon
     * @param items Items array to search
     * @param chosenTpl Tpl we want to get item with
     * @returns Item object
     */
    protected getItemInArray(items: Item[], chosenTpl: string): Item;
    protected createStaticLootItem(chosenTpl: string, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, parentId?: string): IContainerItem;
}
