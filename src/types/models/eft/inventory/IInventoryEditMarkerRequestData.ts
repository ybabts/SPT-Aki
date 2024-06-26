import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
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
