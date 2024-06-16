import type { RaidMode } from "../../../models/enums/RaidMode.ts";
export interface IGetGroupStatusRequestData {
    location: string;
    savage: boolean;
    dt: string;
    keyId: string;
    raidMode: RaidMode;
    spawnPlace: string;
}
