import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryBindRequestData extends IInventoryBaseActionRequestData {
    Action: "Bind";
    item: string;
    index: number;
}
