import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IPresetBuildActionRequestData } from "../../../models/eft/presetBuild/IPresetBuildActionRequestData.d.ts";
import { IWeaponBuild } from "../../../models/eft/profile/IAkiProfile.d.ts";
export interface IPresetBuildCallbacks {
    getHandbookUserlist(url: string, info: any, sessionID: string): IGetBodyResponseData<IWeaponBuild[]>;
    saveWeaponBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    removeWeaponBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    saveEquipmentBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
    removeEquipmentBuild(pmcData: IPmcData, body: IPresetBuildActionRequestData, sessionID: string): IItemEventRouterResponse;
}
