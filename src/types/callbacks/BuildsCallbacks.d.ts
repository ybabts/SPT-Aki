import { BuildController } from "../controllers/BuildController.d.ts";
import { ISetMagazineRequest } from "../models/eft/builds/ISetMagazineRequest.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData.d.ts";
import { IPresetBuildActionRequestData } from "../models/eft/presetBuild/IPresetBuildActionRequestData.d.ts";
import { IRemoveBuildRequestData } from "../models/eft/presetBuild/IRemoveBuildRequestData.d.ts";
import { IUserBuilds } from "../models/eft/profile/IAkiProfile.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
export declare class BuildsCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected buildController: BuildController;
    constructor(httpResponse: HttpResponseUtil, buildController: BuildController);
    /**
     * Handle client/builds/list
     */
    getBuilds(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IUserBuilds>;
    /**
     * Handle client/builds/magazine/save
     */
    createMagazineTemplate(url: string, request: ISetMagazineRequest, sessionID: string): INullResponseData;
    /**
     * Handle client/builds/weapon/save
     */
    setWeapon(url: string, info: IPresetBuildActionRequestData, sessionID: string): INullResponseData;
    /**
     * Handle client/builds/equipment/save
     */
    setEquipment(url: string, info: IPresetBuildActionRequestData, sessionID: string): INullResponseData;
    /**
     * Handle client/builds/delete
     */
    deleteBuild(url: string, info: IRemoveBuildRequestData, sessionID: string): INullResponseData;
}
