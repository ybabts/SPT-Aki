import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { Mods } from "../models/eft/common/tables/IBotType.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { IBotConfig } from "../models/spt/config/IBotConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { VFS } from "../utils/VFS.ts";
/** Store a mapping between weapons, their slots and the items that fit those slots */
export declare class BotEquipmentModPoolService {
    protected logger: ILogger;
    protected vfs: VFS;
    protected itemHelper: ItemHelper;
    protected databaseServer: DatabaseServer;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    protected weaponModPool: Mods;
    protected gearModPool: Mods;
    protected weaponPoolGenerated: boolean;
    protected armorPoolGenerated: boolean;
    constructor(logger: ILogger, vfs: VFS, itemHelper: ItemHelper, databaseServer: DatabaseServer, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Store dictionary of mods for each item passed in
     * @param items items to find related mods and store in modPool
     */
    protected generatePool(items: ITemplateItem[], poolType: string): void;
    /**
     * Empty the mod pool
     */
    resetPool(): void;
    /**
     * Get array of compatible mods for an items mod slot (generate pool if it doesnt exist already)
     * @param itemTpl item to look up
     * @param slotName slot to get compatible mods for
     * @returns tpls that fit the slot
     */
    getCompatibleModsForWeaponSlot(itemTpl: string, slotName: string): string[];
    /**
     * Get array of compatible mods for an items mod slot (generate pool if it doesnt exist already)
     * @param itemTpl item to look up
     * @param slotName slot to get compatible mods for
     * @returns tpls that fit the slot
     */
    getCompatibleModsFoGearSlot(itemTpl: string, slotName: string): string[];
    /**
     * Get mods for a piece of gear by its tpl
     * @param itemTpl items tpl to look up mods for
     * @returns Dictionary of mods (keys are mod slot names) with array of compatible mod tpls as value
     */
    getModsForGearSlot(itemTpl: string): Record<string, string[]>;
    /**
     * Get mods for a weapon by its tpl
     * @param itemTpl Weapons tpl to look up mods for
     * @returns Dictionary of mods (keys are mod slot names) with array of compatible mod tpls as value
     */
    getModsForWeaponSlot(itemTpl: string): Record<string, string[]>;
    /**
     * Create weapon mod pool and set generated flag to true
     */
    protected generateWeaponPool(): void;
    /**
     * Create gear mod pool and set generated flag to true
     */
    protected generateGearPool(): void;
}
