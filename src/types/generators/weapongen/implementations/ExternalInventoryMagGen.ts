import type { IInventoryMagGen } from "../IInventoryMagGen.ts";
import type { InventoryMagGen } from "../InventoryMagGen.ts";
import type { BotGeneratorHelper } from "../../../helpers/BotGeneratorHelper.ts";
import type { BotWeaponGeneratorHelper } from "../../../helpers/BotWeaponGeneratorHelper.ts";
import type { ItemHelper } from "../../../helpers/ItemHelper.ts";
import type { ITemplateItem } from "../../../models/eft/common/tables/ITemplateItem.ts";
import type { ILogger } from "../../../models/spt/utils/ILogger.ts";
import type { LocalisationService } from "../../../services/LocalisationService.ts";
import type { RandomUtil } from "../../../utils/RandomUtil.ts";
export declare class ExternalInventoryMagGen implements IInventoryMagGen {
    protected logger: ILogger;
    protected itemHelper: ItemHelper;
    protected localisationService: LocalisationService;
    protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected randomUtil: RandomUtil;
    constructor(logger: ILogger, itemHelper: ItemHelper, localisationService: LocalisationService, botWeaponGeneratorHelper: BotWeaponGeneratorHelper, botGeneratorHelper: BotGeneratorHelper, randomUtil: RandomUtil);
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
    /**
     * Get a random compatible external magazine for a weapon, exclude internal magazines from possible pool
     * @param weaponTpl Weapon to get mag for
     * @returns tpl of magazine
     */
    protected getRandomExternalMagazineForInternalMagazineGun(weaponTpl: string, magazineBlacklist: string[]): ITemplateItem;
}
