import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { ISetMagazineRequest } from "../models/eft/builds/ISetMagazineRequest.d.ts";
import { IPresetBuildActionRequestData } from "../models/eft/presetBuild/IPresetBuildActionRequestData.d.ts";
import { IRemoveBuildRequestData } from "../models/eft/presetBuild/IRemoveBuildRequestData.d.ts";
import { IUserBuilds } from "../models/eft/profile/IAkiProfile.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
export declare class BuildController {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected eventOutputHolder: EventOutputHolder;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected profileHelper: ProfileHelper;
    protected itemHelper: ItemHelper;
    protected saveServer: SaveServer;
    constructor(logger: ILogger, hashUtil: HashUtil, eventOutputHolder: EventOutputHolder, jsonUtil: JsonUtil, databaseServer: DatabaseServer, profileHelper: ProfileHelper, itemHelper: ItemHelper, saveServer: SaveServer);
    /** Handle client/handbook/builds/my/list */
    getUserBuilds(sessionID: string): IUserBuilds;
    /** Handle client/builds/weapon/save */
    saveWeaponBuild(sessionId: string, body: IPresetBuildActionRequestData): void;
    /** Handle client/builds/equipment/save event */
    saveEquipmentBuild(sessionID: string, request: IPresetBuildActionRequestData): void;
    /** Handle client/builds/delete */
    removeBuild(sessionID: string, request: IRemoveBuildRequestData): void;
    protected removePlayerBuild(idToRemove: string, sessionID: string): void;
    /**
     * Handle client/builds/magazine/save
     */
    createMagazineTemplate(sessionId: string, request: ISetMagazineRequest): void;
}
