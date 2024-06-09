import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryDeleteMarkerRequestData extends IInventoryBaseActionRequestData {
    Action: "DeleteMapMarker";
    item: string;
    X: number;
    Y: number;
}
