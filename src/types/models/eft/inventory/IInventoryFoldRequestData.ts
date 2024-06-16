import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryFoldRequestData extends IInventoryBaseActionRequestData {
    Action: "Fold";
    item: string;
    value: boolean;
}
