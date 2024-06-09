import { IInventoryMagGen } from "../IInventoryMagGen.d.ts";
import { InventoryMagGen } from "../InventoryMagGen.d.ts";
import { BotGeneratorHelper } from "../../../helpers/BotGeneratorHelper.d.ts";
import { BotWeaponGeneratorHelper } from "../../../helpers/BotWeaponGeneratorHelper.d.ts";
import { ItemHelper } from "../../../helpers/ItemHelper.d.ts";
import { ITemplateItem } from "../../../models/eft/common/tables/ITemplateItem.d.ts";
import { ILogger } from "../../../models/spt/utils/ILogger.d.ts";
import { LocalisationService } from "../../../services/LocalisationService.d.ts";
import { RandomUtil } from "../../../utils/RandomUtil.d.ts";
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
