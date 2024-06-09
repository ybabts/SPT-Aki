import { LauncherController } from "../controllers/LauncherController.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IChangeRequestData } from "../models/eft/launcher/IChangeRequestData.d.ts";
import { ILoginRequestData } from "../models/eft/launcher/ILoginRequestData.d.ts";
import { IRegisterData } from "../models/eft/launcher/IRegisterData.d.ts";
import { IRemoveProfileData } from "../models/eft/launcher/IRemoveProfileData.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { Watermark } from "../utils/Watermark.d.ts";
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
