import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryRemoveRequestData extends IInventoryBaseActionRequestData {
    Action: "Remove";
    item: string;
}
