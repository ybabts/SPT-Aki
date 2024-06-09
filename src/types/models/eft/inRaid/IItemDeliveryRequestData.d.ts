import { Item } from "../common/tables/IItem.d.ts";
export interface IItemDeliveryRequestData {
    items: Item[];
    traderId: string;
}
