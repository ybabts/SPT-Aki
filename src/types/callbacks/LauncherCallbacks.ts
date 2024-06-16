import type { LauncherController } from "../controllers/LauncherController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IChangeRequestData } from "../models/eft/launcher/IChangeRequestData.ts";
import type { ILoginRequestData } from "../models/eft/launcher/ILoginRequestData.ts";
import type { IRegisterData } from "../models/eft/launcher/IRegisterData.ts";
import type { IRemoveProfileData } from "../models/eft/launcher/IRemoveProfileData.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { Watermark } from "../utils/Watermark.ts";
export declare class LauncherCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected launcherController: LauncherController;
    protected saveServer: SaveServer;
    protected watermark: Watermark;
    constructor(httpResponse: HttpResponseUtil, launcherController: LauncherController, saveServer: SaveServer, watermark: Watermark);
    connect(): string;
    login(url: string, info: ILoginRequestData, sessionID: string): string;
    register(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK";
    get(url: string, info: ILoginRequestData, sessionID: string): string;
    changeUsername(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK";
    changePassword(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK";
    wipe(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK";
    getServerVersion(): string;
    ping(url: string, info: IEmptyRequestData, sessionID: string): string;
    removeProfile(url: string, info: IRemoveProfileData, sessionID: string): string;
    getCompatibleTarkovVersion(): string;
    getLoadedServerMods(): string;
    getServerModsProfileUsed(url: string, info: IEmptyRequestData, sessionId: string): string;
}
