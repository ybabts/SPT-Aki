import { ILocations } from "../../spt/server/ILocations.d.ts";
export interface ILocationsGenerateAllResponse {
    locations: ILocations;
    paths: Path[];
}
export interface Path {
    Source: string;
    Destination: string;
}
