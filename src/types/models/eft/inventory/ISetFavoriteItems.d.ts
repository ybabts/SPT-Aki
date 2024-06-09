import { IInventoryBaseActionRequestData } from "./IInventoryBaseActionRequestData.d.ts";
export interface ISetFavoriteItems extends IInventoryBaseActionRequestData {
    Action: "SetFavoriteItems";
    items: any[];
    timestamp: number;
}
