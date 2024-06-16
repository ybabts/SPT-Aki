import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryMergeRequestData extends IInventoryBaseActionRequestData {
    Action: "Merge";
    item: string;
    with: string;
}
