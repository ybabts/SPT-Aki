import { IPostRaidPmcData } from "../../eft/common/IPmcData.d.ts";
import { ISyncHealthRequestData } from "../../eft/health/ISyncHealthRequestData.d.ts";
import { IInsuredItemsData } from "../../eft/inRaid/IInsuredItemsData.d.ts";
import { PlayerRaidEndState } from "../../enums/PlayerRaidEndState.d.ts";
export interface ISaveProgressRequestData {
    exit: PlayerRaidEndState;
    profile: IPostRaidPmcData;
    isPlayerScav: boolean;
    health: ISyncHealthRequestData;
    insurance: IInsuredItemsData[];
}
