import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { PresetHelper } from "../helpers/PresetHelper.d.ts";
import { IPreset } from "../models/eft/common/IGlobals.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SeasonalEventService } from "../services/SeasonalEventService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
export declare class RagfairAssortGenerator {
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected itemHelper: ItemHelper;
    protected presetHelper: PresetHelper;
    protected databaseServer: DatabaseServer;
    protected seasonalEventService: SeasonalEventService;
    protected configServer: ConfigServer;
    protected generatedAssortItems: Item[][];
    protected ragfairConfig: IRagfairConfig;
    protected ragfairItemInvalidBaseTypes: string[];
    constructor(jsonUtil: JsonUtil, hashUtil: HashUtil, itemHelper: ItemHelper, presetHelper: PresetHelper, databaseServer: DatabaseServer, seasonalEventService: SeasonalEventService, configServer: ConfigServer);
    /**
     * Get an array of arrays that can be sold on the flea
     * Each sub array contains item + children (if any)
     * @returns array of arrays
     */
    getAssortItems(): Item[][];
    /**
     * Check internal generatedAssortItems array has objects
     * @returns true if array has objects
     */
    protected assortsAreGenerated(): boolean;
    /**
     * Generate an array of arrays (item + children) the flea can sell
     * @returns array of arrays (item + children)
     */
    protected generateRagfairAssortItems(): Item[][];
    /**
     * Get presets from globals to add to flea
     * ragfairConfig.dynamic.showDefaultPresetsOnly decides if its all presets or just defaults
     * @returns IPreset array
     */
    protected getPresetsToAdd(): IPreset[];
    /**
     * Create a base assort item and return it with populated values + 999999 stack count + unlimited count = true
     * @param tplId tplid to add to item
     * @param id id to add to item
     * @returns Hydrated Item object
     */
    protected createRagfairAssortRootItem(tplId: string, id?: string): Item;
}
