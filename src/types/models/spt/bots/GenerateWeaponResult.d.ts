import { Mods } from "../../../models/eft/common/tables/IBotType.d.ts";
import { Item } from "../../../models/eft/common/tables/IItem.d.ts";
import { ITemplateItem } from "../../../models/eft/common/tables/ITemplateItem.d.ts";
export declare class GenerateWeaponResult {
    weapon: Item[];
    chosenAmmoTpl: string;
    chosenUbglAmmoTpl: string;
    weaponMods: Mods;
    weaponTemplate: ITemplateItem;
}
