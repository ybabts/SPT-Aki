import type { Upd } from "../common/tables/IItem.ts";
import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventorySortRequestData extends IInventoryBaseActionRequestData {
    Action: "ApplyInventoryChanges";
    changedItems: ChangedItem[];
}
export interface ChangedItem {
    _id: string;
    _tpl: string;
    parentId: string;
    slotId: string;
    location: Location;
    upd: Upd;
}
export interface Location {
    x: number;
    y: number;
    r: string;
    isSearched: boolean;
}
