import type { RaidMode } from "../../../models/enums/RaidMode.ts";
export interface ICreateGroupRequestData {
    location: string;
    raidMode: RaidMode;
    startInGroup: boolean;
}
