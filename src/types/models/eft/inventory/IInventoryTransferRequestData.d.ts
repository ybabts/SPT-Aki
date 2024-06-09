import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryTransferRequestData extends IInventoryBaseActionRequestData {
    Action: "Transfer";
    item: string;
    with: string;
    count: number;
}
