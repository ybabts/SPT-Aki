import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryToggleRequestData extends IInventoryBaseActionRequestData {
    Action: "Toggle";
    item: string;
    value: boolean;
}
