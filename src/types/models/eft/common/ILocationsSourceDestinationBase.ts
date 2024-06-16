import type { ILocations } from "../../spt/server/ILocations.ts";
export interface ILocationsGenerateAllResponse {
    locations: ILocations;
    paths: Path[];
}
export interface Path {
    Source: string;
    Destination: string;
}
