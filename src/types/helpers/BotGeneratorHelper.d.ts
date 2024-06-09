import { ApplicationContext } from "../context/ApplicationContext.d.ts";
import { ContainerHelper } from "../helpers/ContainerHelper.d.ts";
import { DurabilityLimitsHelper } from "../helpers/DurabilityLimitsHelper.d.ts";
import { InventoryHelper } from "../helpers/InventoryHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { Inventory } from "../models/eft/common/tables/IBotBase.d.ts";
import { Item, Repairable, Upd } from "../models/eft/common/tables/IItem.d.ts";
import { Grid, ITemplateItem } from "../models/eft/common/tables/ITemplateItem.d.ts";
import { ItemAddedResult } from "../models/enums/ItemAddedResult.d.ts";
import { IChooseRandomCompatibleModResult } from "../models/spt/bots/IChooseRandomCompatibleModResult.d.ts";
import { EquipmentFilters, IBotConfig, IRandomisedResourceValues } from "../models/spt/config/IBotConfig.d.ts";
import { IPmcConfig } from "../models/spt/config/IPmcConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
export declare class BotGeneratorHelper {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected durabilityLimitsHelper: DurabilityLimitsHelper;
    protected itemHelper: ItemHelper;
    protected inventoryHelper: InventoryHelper;
    protected containerHelper: ContainerHelper;
    protected applicationContext: ApplicationContext;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    protected pmcConfig: IPmcConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, databaseServer: DatabaseServer, durabilityLimitsHelper: DurabilityLimitsHelper, itemHelper: ItemHelper, inventoryHelper: InventoryHelper, containerHelper: ContainerHelper, applicationContext: ApplicationContext, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Adds properties to an item
     * e.g. Repairable / HasHinge / Foldable / MaxDurability
     * @param itemTemplate Item extra properties are being generated for
     * @param botRole Used by weapons to randomize the durability values. Null for non-equipped items
     * @returns Item Upd object with extra properties
     */
    generateExtraPropertiesForItem(itemTemplate: ITemplateItem, botRole?: string): {
        upd?: Upd;
    };
    /**
     * Randomize the HpResource for bots e.g (245/400 resources)
     * @param maxResource Max resource value of medical items
     * @param randomizationValues Value provided from config
     * @returns Randomized value from maxHpResource
     */
    protected getRandomizedResourceValue(maxResource: number, randomizationValues: IRandomisedResourceValues): number;
    /**
     * Get the chance for the weapon attachment or helmet equipment to be set as activated
     * @param botRole role of bot with weapon/helmet
     * @param setting the setting of the weapon attachment/helmet equipment to be activated
     * @param defaultValue default value for the chance of activation if the botrole or bot equipment role is null
     * @returns Percent chance to be active
     */
    protected getBotEquipmentSettingFromConfig(botRole: string, setting: keyof EquipmentFilters, defaultValue: number): number;
    /**
     * Create a repairable object for a weapon that containers durability + max durability properties
     * @param itemTemplate weapon object being generated for
     * @param botRole type of bot being generated for
     * @returns Repairable object
     */
    protected generateWeaponRepairableProperties(itemTemplate: ITemplateItem, botRole: string): Repairable;
    /**
     * Create a repairable object for an armor that containers durability + max durability properties
     * @param itemTemplate weapon object being generated for
     * @param botRole type of bot being generated for
     * @returns Repairable object
     */
    protected generateArmorRepairableProperties(itemTemplate: ITemplateItem, botRole: string): Repairable;
    isWeaponModIncompatibleWithCurrentMods(itemsEquipped: Item[], tplToCheck: string, modSlot: string): IChooseRandomCompatibleModResult;
    /**
     * Can item be added to another item without conflict
     * @param itemsEquipped Items to check compatibilities with
     * @param tplToCheck Tpl of the item to check for incompatibilities
     * @param equipmentSlot Slot the item will be placed into
     * @returns false if no incompatibilities, also has incompatibility reason
     */
    isItemIncompatibleWithCurrentItems(itemsEquipped: Item[], tplToCheck: string, equipmentSlot: string): IChooseRandomCompatibleModResult;
    /**
     * Convert a bots role to the equipment role used in config/bot.json
     * @param botRole Role to convert
     * @returns Equipment role (e.g. pmc / assault / bossTagilla)
     */
    getBotEquipmentRole(botRole: string): string;
    /**
     * Adds an item with all its children into specified equipmentSlots, wherever it fits.
     * @param equipmentSlots Slot to add item+children into
     * @param rootItemId Root item id to use as mod items parentid
     * @param rootItemTplId Root itms tpl id
     * @param itemWithChildren Item to add
     * @param inventory Inventory to add item+children into
     * @returns ItemAddedResult result object
     */
    addItemWithChildrenToEquipmentSlot(equipmentSlots: string[], rootItemId: string, rootItemTplId: string, itemWithChildren: Item[], inventory: Inventory, containersIdFull?: Set<string>): ItemAddedResult;
    /**
     * Is the provided item allowed inside a container
     * @param slotGrid Items sub-grid we want to place item inside
     * @param itemTpl Item tpl being placed
     * @returns True if allowed
     */
    protected itemAllowedInContainer(slotGrid: Grid, itemTpl: string): boolean;
}
