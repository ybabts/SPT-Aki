import type { Item, Location } from "../common/tables/IItem.ts";
export interface IAddItemTempObject {
    itemRef: Item;
    count: number;
    isPreset: boolean;
    location?: Location;
    containerId?: string;
}
