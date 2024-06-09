import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryUnbindRequestData extends IInventoryBaseActionRequestData {
    Action: "Unbind";
    item: string;
    index: number;
}
