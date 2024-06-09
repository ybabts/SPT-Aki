import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryCreateMarkerRequestData extends IInventoryBaseActionRequestData {
    Action: "CreateMapMarker";
    item: string;
    mapMarker: MapMarker;
}
export interface MapMarker {
    Type: string;
    X: number;
    Y: number;
    Note: string;
}
