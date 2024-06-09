import { Inventory } from "../../models/eft/common/tables/IBotBase.d.ts";
import { GenerationData } from "../../models/eft/common/tables/IBotType.d.ts";
import { ITemplateItem } from "../../models/eft/common/tables/ITemplateItem.d.ts";
export declare class InventoryMagGen {
    private magCounts;
    private magazineTemplate;
    private weaponTemplate;
    private ammoTemplate;
    private pmcInventory;
    constructor(magCounts: GenerationData, magazineTemplate: ITemplateItem, weaponTemplate: ITemplateItem, ammoTemplate: ITemplateItem, pmcInventory: Inventory);
    getMagCount(): GenerationData;
    getMagazineTemplate(): ITemplateItem;
    getWeaponTemplate(): ITemplateItem;
    getAmmoTemplate(): ITemplateItem;
    getPmcInventory(): Inventory;
}
