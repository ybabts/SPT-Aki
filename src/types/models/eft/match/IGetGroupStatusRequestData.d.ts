import { RaidMode } from "../../../models/enums/RaidMode.d.ts";
export interface IGetGroupStatusRequestData {
    location: string;
    savage: boolean;
    dt: string;
    keyId: string;
    raidMode: RaidMode;
    spawnPlace: string;
}
