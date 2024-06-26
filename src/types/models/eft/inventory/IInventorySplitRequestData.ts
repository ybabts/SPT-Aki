import type { Container, IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventorySplitRequestData extends IInventoryBaseActionRequestData {
    Action: "Split";
    /** Id of item to split */
    splitItem: string;
    /** Id of new item stack */
    newItem: string;
    /** Destination new item will be placed in */
    container: Container;
    count: number;
}
