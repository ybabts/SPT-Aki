import type { IInventoryBaseActionRequestData } from "./IInventoryBaseActionRequestData.ts";
export interface ISetFavoriteItems extends IInventoryBaseActionRequestData {
    Action: "SetFavoriteItems";
    items: any[];
    timestamp: number;
}
