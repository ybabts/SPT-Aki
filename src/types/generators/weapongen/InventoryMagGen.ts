import type { Inventory } from "../../models/eft/common/tables/IBotBase.ts";
import type { GenerationData } from "../../models/eft/common/tables/IBotType.ts";
import type { ITemplateItem } from "../../models/eft/common/tables/ITemplateItem.ts";
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
