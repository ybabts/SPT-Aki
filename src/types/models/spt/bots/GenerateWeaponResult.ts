import type { Mods } from "../../../models/eft/common/tables/IBotType.ts";
import type { Item } from "../../../models/eft/common/tables/IItem.ts";
import type { ITemplateItem } from "../../../models/eft/common/tables/ITemplateItem.ts";
export declare class GenerateWeaponResult {
    weapon: Item[];
    chosenAmmoTpl: string;
    chosenUbglAmmoTpl: string;
    weaponMods: Mods;
    weaponTemplate: ITemplateItem;
}
