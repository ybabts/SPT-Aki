import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryRemoveRequestData extends IInventoryBaseActionRequestData {
    Action: "Remove";
    item: string;
}
