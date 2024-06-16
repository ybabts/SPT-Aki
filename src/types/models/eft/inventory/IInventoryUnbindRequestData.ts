import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryUnbindRequestData extends IInventoryBaseActionRequestData {
    Action: "Unbind";
    item: string;
    index: number;
}
