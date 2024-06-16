import type { IPostRaidPmcData } from "../../eft/common/IPmcData.ts";
import type { ISyncHealthRequestData } from "../../eft/health/ISyncHealthRequestData.ts";
import type { IInsuredItemsData } from "../../eft/inRaid/IInsuredItemsData.ts";
import type { PlayerRaidEndState } from "../../enums/PlayerRaidEndState.ts";
export interface ISaveProgressRequestData {
    exit: PlayerRaidEndState;
    profile: IPostRaidPmcData;
    isPlayerScav: boolean;
    health: ISyncHealthRequestData;
    insurance: IInsuredItemsData[];
}
