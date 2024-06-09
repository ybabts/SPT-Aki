import { RaidMode } from "../../../models/enums/RaidMode.d.ts";
export interface ICreateGroupRequestData {
    location: string;
    raidMode: RaidMode;
    startInGroup: boolean;
}
