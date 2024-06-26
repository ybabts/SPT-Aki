import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
export declare class RagfairLinkedItemService {
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected linkedItemsCache: Record<string, Set<string>>;
    constructor(databaseServer: DatabaseServer, itemHelper: ItemHelper);
    getLinkedItems(linkedSearchId: string): Set<string>;
    /**
     * Use ragfair linked item service to get an array of items that can fit on or in designated itemtpl
     * @param itemTpl Item to get sub-items for
     * @returns ITemplateItem array
     */
    getLinkedDbItems(itemTpl: string): ITemplateItem[];
    /**
     * Create Dictionary of every item and the items associated with it
     */
    protected buildLinkedItemTable(): void;
    /**
     * Add ammo to revolvers linked item dictionary
     * @param cylinder Revolvers cylinder
     * @param applyLinkedItems
     */
    protected addRevolverCylinderAmmoToLinkedItems(cylinder: ITemplateItem, applyLinkedItems: (items: string[]) => void): void;
    /**
     * Scans a given slot type for filters and returns them as a Set
     * @param item
     * @param slot
     * @returns array of ids
     */
    protected getFilters(item: ITemplateItem, slot: string): string[];
}
