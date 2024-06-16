import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryTransferRequestData extends IInventoryBaseActionRequestData {
    Action: "Transfer";
    item: string;
    with: string;
    count: number;
}
