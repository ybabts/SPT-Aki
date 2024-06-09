import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryFoldRequestData extends IInventoryBaseActionRequestData {
    Action: "Fold";
    item: string;
    value: boolean;
}
