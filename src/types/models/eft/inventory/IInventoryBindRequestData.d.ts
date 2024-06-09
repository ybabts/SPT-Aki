import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryBindRequestData extends IInventoryBaseActionRequestData {
    Action: "Bind";
    item: string;
    index: number;
}
