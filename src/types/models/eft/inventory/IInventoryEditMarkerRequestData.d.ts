import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryEditMarkerRequestData extends IInventoryBaseActionRequestData {
    Action: "EditMapMarker";
    item: string;
    X: number;
    Y: number;
    mapMarker: MapMarker;
}
export interface MapMarker {
    Type: string;
    X: number;
    Y: number;
    Note: string;
}
