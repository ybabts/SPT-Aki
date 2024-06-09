import { PMCLootGenerator } from "../generators/PMCLootGenerator.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { IBotType } from "../models/eft/common/tables/IBotType.d.ts";
import { ITemplateItem, Props } from "../models/eft/common/tables/ITemplateItem.d.ts";
import { IBotLootCache, LootCacheType } from "../models/spt/bots/IBotLootCache.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { RagfairPriceService } from "../services/RagfairPriceService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
export declare class BotLootCacheService {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected itemHelper: ItemHelper;
    protected databaseServer: DatabaseServer;
    protected pmcLootGenerator: PMCLootGenerator;
    protected localisationService: LocalisationService;
    protected ragfairPriceService: RagfairPriceService;
    protected lootCache: Record<string, IBotLootCache>;
    constructor(logger: ILogger, jsonUtil: JsonUtil, itemHelper: ItemHelper, databaseServer: DatabaseServer, pmcLootGenerator: PMCLootGenerator, localisationService: LocalisationService, ragfairPriceService: RagfairPriceService);
    /**
     * Remove cached bot loot data
     */
    clearCache(): void;
    /**
     * Get the fully created loot array, ordered by price low to high
     * @param botRole bot to get loot for
     * @param isPmc is the bot a pmc
     * @param lootType what type of loot is needed (backpack/pocket/stim/vest etc)
     * @param botJsonTemplate Base json db file for the bot having its loot generated
     * @returns ITemplateItem array
     */
    getLootFromCache(botRole: string, isPmc: boolean, lootType: LootCacheType, botJsonTemplate: IBotType): Record<string, number>;
    /**
     * Generate loot for a bot and store inside a private class property
     * @param botRole bots role (assault / pmcBot etc)
     * @param isPmc Is the bot a PMC (alteres what loot is cached)
     * @param botJsonTemplate db template for bot having its loot generated
     */
    protected addLootToCache(botRole: string, isPmc: boolean, botJsonTemplate: IBotType): void;
    /**
     * Add unique items into combined pool
     * @param poolToAddTo Pool of items to add to
     * @param itemsToAdd items to add to combined pool if unique
     */
    protected addUniqueItemsToPool(poolToAddTo: ITemplateItem[], itemsToAdd: ITemplateItem[]): void;
    protected addItemsToPool(poolToAddTo: Record<string, number>, poolOfItemsToAdd: Record<string, number>): void;
    /**
     * Ammo/grenades have this property
     * @param props
     * @returns
     */
    protected isBulletOrGrenade(props: Props): boolean;
    /**
     * Internal and external magazine have this property
     * @param props
     * @returns
     */
    protected isMagazine(props: Props): boolean;
    /**
     * Medical use items (e.g. morphine/lip balm/grizzly)
     * @param props
     * @returns
     */
    protected isMedicalItem(props: Props): boolean;
    /**
     * Grenades have this property (e.g. smoke/frag/flash grenades)
     * @param props
     * @returns
     */
    protected isGrenade(props: Props): boolean;
    protected isFood(tpl: string): boolean;
    protected isDrink(tpl: string): boolean;
    protected isCurrency(tpl: string): boolean;
    /**
     * Check if a bot type exists inside the loot cache
     * @param botRole role to check for
     * @returns true if they exist
     */
    protected botRoleExistsInCache(botRole: string): boolean;
    /**
     * If lootcache is null, init with empty property arrays
     * @param botRole Bot role to hydrate
     */
    protected initCacheForBotRole(botRole: string): void;
    /**
     * Compares two item prices by their flea (or handbook if that doesnt exist) price
     * -1 when a < b
     * 0 when a === b
     * 1 when a > b
     * @param itemAPrice
     * @param itemBPrice
     * @returns
     */
    protected compareByValue(itemAPrice: number, itemBPrice: number): number;
}