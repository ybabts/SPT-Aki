import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryMergeRequestData extends IInventoryBaseActionRequestData {
    Action: "Merge";
    item: string;
    with: string;
}
