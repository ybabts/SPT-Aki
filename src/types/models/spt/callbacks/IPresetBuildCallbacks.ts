import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IPresetBuildActionRequestData } from "../../../models/eft/presetBuild/IPresetBuildActionRequestData.ts";
import type { IWeaponBuild } from "../../../models/eft/profile/IAkiProfile.ts";
export interface IPresetBuildCallbacks {
    getHandbookUserlist(url: string, info: any, sessionID: string): IGetBodyResponseData<IWeaponBuild[]>;
    saveWeaponBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    removeWeaponBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    saveEquipmentBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    removeEquipmentBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
}
