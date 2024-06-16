import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IOpenRandomLootContainerRequestData extends IInventoryBaseActionRequestData {
    Action: "OpenRandomLootContainer";
    /** Container item id being opened */
    item: string;
    to: To[];
}
export interface To {
    /** Player character (pmc/scav) id items will be sent to */
    id: string;
}
