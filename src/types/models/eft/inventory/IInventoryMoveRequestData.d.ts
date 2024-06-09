import { IInventoryBaseActionRequestData, To } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryMoveRequestData extends IInventoryBaseActionRequestData {
    Action: "Move";
    item: string;
    to: To;
}
