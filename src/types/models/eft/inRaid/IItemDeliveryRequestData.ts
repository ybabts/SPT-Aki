import type { Item } from "../common/tables/IItem.ts";
export interface IItemDeliveryRequestData {
    items: Item[];
    traderId: string;
}
