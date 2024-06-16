import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryDeleteMarkerRequestData extends IInventoryBaseActionRequestData {
    Action: "DeleteMapMarker";
    item: string;
    X: number;
    Y: number;
}
