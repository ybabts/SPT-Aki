import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryToggleRequestData extends IInventoryBaseActionRequestData {
    Action: "Toggle";
    item: string;
    value: boolean;
}
