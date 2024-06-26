import type { HandbookHelper } from "../helpers/HandbookHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { PresetHelper } from "../helpers/PresetHelper.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { ITraderConfig } from "../models/spt/config/ITraderConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { FenceService } from "../services/FenceService.ts";
import type { ItemFilterService } from "../services/ItemFilterService.ts";
import type { SeasonalEventService } from "../services/SeasonalEventService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
export declare class FenceBaseAssortGenerator {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    protected itemHelper: ItemHelper;
    protected presetHelper: PresetHelper;
    protected itemFilterService: ItemFilterService;
    protected seasonalEventService: SeasonalEventService;
    protected configServer: ConfigServer;
    protected fenceService: FenceService;
    protected traderConfig: ITraderConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, jsonUtil: JsonUtil, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, itemHelper: ItemHelper, presetHelper: PresetHelper, itemFilterService: ItemFilterService, seasonalEventService: SeasonalEventService, configServer: ConfigServer, fenceService: FenceService);
    /**
     * Create base fence assorts dynamically and store in memory
     */
    generateFenceBaseAssorts(): void;
    /**
     * Check ammo in boxes + loose ammos has a penetration value above the configured value in trader.json / ammoMaxPenLimit
     * @param rootItemDb Ammo box or ammo item from items.db
     * @returns True if penetration value is above limit set in config
     */
    protected isAmmoAbovePenetrationLimit(rootItemDb: ITemplateItem): boolean;
    /**
     * Get the penetration power value of an ammo, works with ammo boxes and raw ammos
     * @param rootItemDb Ammo box or ammo item from items.db
     * @returns Penetration power of passed in item, null if it doesnt have a power
     */
    protected getAmmoPenetrationPower(rootItemDb: ITemplateItem): number;
    /**
     * Add soft inserts + armor plates to an armor
     * @param armor Armor item array to add mods into
     * @param itemDbDetails Armor items db template
     */
    protected addChildrenToArmorModSlots(armor: Item[], itemDbDetails: ITemplateItem): void;
    /**
     * Check if item is valid for being added to fence assorts
     * @param item Item to check
     * @returns true if valid fence item
     */
    protected isValidFenceItem(item: ITemplateItem): boolean;
}
