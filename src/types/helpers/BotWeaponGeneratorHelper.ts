import type { BotGeneratorHelper } from "../helpers/BotGeneratorHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.ts";
import type { Inventory } from "../models/eft/common/tables/IBotBase.ts";
import type { GenerationData } from "../models/eft/common/tables/IBotType.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { EquipmentSlots } from "../models/enums/EquipmentSlots.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class BotWeaponGeneratorHelper {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected randomUtil: RandomUtil;
    protected hashUtil: HashUtil;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected localisationService: LocalisationService;
    constructor(logger: ILogger, databaseServer: DatabaseServer, itemHelper: ItemHelper, randomUtil: RandomUtil, hashUtil: HashUtil, weightedRandomHelper: WeightedRandomHelper, botGeneratorHelper: BotGeneratorHelper, localisationService: LocalisationService);
    /**
     * Get a randomized number of bullets for a specific magazine
     * @param magCounts Weights of magazines
     * @param magTemplate magazine to generate bullet count for
     * @returns bullet count number
     */
    getRandomizedBulletCount(magCounts: GenerationData, magTemplate: ITemplateItem): number;
    /**
     * Get a randomized count of magazines
     * @param magCounts min and max value returned value can be between
     * @returns numerical value of magazine count
     */
    getRandomizedMagazineCount(magCounts: GenerationData): number;
    /**
     * Is this magazine cylinder related (revolvers and grenade launchers)
     * @param magazineParentName the name of the magazines parent
     * @returns true if it is cylinder related
     */
    magazineIsCylinderRelated(magazineParentName: string): boolean;
    /**
     * Create a magazine using the parameters given
     * @param magazineTpl Tpl of the magazine to create
     * @param ammoTpl Ammo to add to magazine
     * @param magTemplate template object of magazine
     * @returns Item array
     */
    createMagazineWithAmmo(magazineTpl: string, ammoTpl: string, magTemplate: ITemplateItem): Item[];
    /**
     * Add a specific number of cartridges to a bots inventory (defaults to vest and pockets)
     * @param ammoTpl Ammo tpl to add to vest/pockets
     * @param cartridgeCount number of cartridges to add to vest/pockets
     * @param inventory bot inventory to add cartridges to
     * @param equipmentSlotsToAddTo what equipment slots should bullets be added into
     */
    addAmmoIntoEquipmentSlots(ammoTpl: string, cartridgeCount: number, inventory: Inventory, equipmentSlotsToAddTo?: EquipmentSlots[]): void;
    /**
     * Get a weapons default magazine template id
     * @param weaponTemplate weapon to get default magazine for
     * @returns tpl of magazine
     */
    getWeaponsDefaultMagazineTpl(weaponTemplate: ITemplateItem): string;
}
