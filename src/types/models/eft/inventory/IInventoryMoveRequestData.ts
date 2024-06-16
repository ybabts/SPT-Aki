import type { IInventoryBaseActionRequestData, To } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryMoveRequestData extends IInventoryBaseActionRequestData {
    Action: "Move";
    item: string;
    to: To;
}
