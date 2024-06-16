import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { ISetMagazineRequest } from "../models/eft/builds/ISetMagazineRequest.ts";
import type { IPresetBuildActionRequestData } from "../models/eft/presetBuild/IPresetBuildActionRequestData.ts";
import type { IRemoveBuildRequestData } from "../models/eft/presetBuild/IRemoveBuildRequestData.ts";
import type { IUserBuilds } from "../models/eft/profile/IAkiProfile.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
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
