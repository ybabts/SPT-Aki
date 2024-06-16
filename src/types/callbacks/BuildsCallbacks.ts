import type { BuildController } from "../controllers/BuildController.ts";
import type { ISetMagazineRequest } from "../models/eft/builds/ISetMagazineRequest.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../models/eft/httpResponse/INullResponseData.ts";
import type { IPresetBuildActionRequestData } from "../models/eft/presetBuild/IPresetBuildActionRequestData.ts";
import type { IRemoveBuildRequestData } from "../models/eft/presetBuild/IRemoveBuildRequestData.ts";
import type { IUserBuilds } from "../models/eft/profile/IAkiProfile.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
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
