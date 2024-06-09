import { Item, Location } from "../common/tables/IItem.d.ts";
export interface IAddItemTempObject {
    itemRef: Item;
    count: number;
    isPreset: boolean;
    location?: Location;
    containerId?: string;
}
