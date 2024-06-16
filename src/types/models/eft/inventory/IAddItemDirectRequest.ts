import type { Item } from "../common/tables/IItem.ts";
export interface IAddItemDirectRequest {
    /** Item and child mods to add to player inventory */
    itemWithModsToAdd: Item[];
    foundInRaid: boolean;
    callback: (buyCount: number) => void;
    useSortingTable: boolean;
}
