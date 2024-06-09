import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.d.ts";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.d.ts";
import { IPmcConfig } from "../models/spt/config/IPmcConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { ItemFilterService } from "../services/ItemFilterService.d.ts";
import { RagfairPriceService } from "../services/RagfairPriceService.d.ts";
import { SeasonalEventService } from "../services/SeasonalEventService.d.ts";
/**
 * Handle the generation of dynamic PMC loot in pockets and backpacks
 * and the removal of blacklisted items
 */
export declare class PMCLootGenerator {
    protected itemHelper: ItemHelper;
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected itemFilterService: ItemFilterService;
    protected ragfairPriceService: RagfairPriceService;
    protected seasonalEventService: SeasonalEventService;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected pocketLootPool: Record<string, number>;
    protected vestLootPool: Record<string, number>;
    protected backpackLootPool: Record<string, number>;
    protected pmcConfig: IPmcConfig;
    protected roubleTpl: string;
    constructor(itemHelper: ItemHelper, databaseServer: DatabaseServer, configServer: ConfigServer, itemFilterService: ItemFilterService, ragfairPriceService: RagfairPriceService, seasonalEventService: SeasonalEventService, weightedRandomHelper: WeightedRandomHelper);
    /**
     * Create an array of loot items a PMC can have in their pockets
     * @returns string array of tpls
     */
    generatePMCPocketLootPool(botRole: string): Record<string, number>;
    /**
     * Create an array of loot items a PMC can have in their vests
     * @returns string array of tpls
     */
    generatePMCVestLootPool(botRole: string): Record<string, number>;
    /**
     * Check if item has a width/height that lets it fit into a 2x2 slot
     * 1x1 / 1x2 / 2x1 / 2x2
     * @param item Item to check size of
     * @returns true if it fits
     */
    protected itemFitsInto2By2Slot(item: ITemplateItem): boolean;
    /**
     * Create an array of loot items a PMC can have in their backpack
     * @returns string array of tpls
     */
    generatePMCBackpackLootPool(botRole: string): Record<string, number>;
}