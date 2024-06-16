import type { IChangeRequestData } from "../../../models/eft/launcher/IChangeRequestData.ts";
import type { IGetMiniProfileRequestData } from "../../../models/eft/launcher/IGetMiniProfileRequestData.ts";
import type { ILoginRequestData } from "../../../models/eft/launcher/ILoginRequestData.ts";
import type { IRegisterData } from "../../../models/eft/launcher/IRegisterData.ts";
import type { IRemoveProfileData } from "../../../models/eft/launcher/IRemoveProfileData.ts";
export interface ILauncherCallbacks {
    connect(): string;
    login(url: string, info: ILoginRequestData, sessionID: string): string;
    register(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK.ts";
    get(url: string, info: ILoginRequestData, sessionID: string): string;
    changeUsername(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK.ts";
    changePassword(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK.ts";
    wipe(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK.ts";
    getMiniProfile(url: string, info: IGetMiniProfileRequestData, sessionID: string): string;
    getAllMiniProfiles(url: string, info: any, sessionID: string): string;
    getServerVersion(): string;
    ping(url: string, info: any, sessionID: string): string;
    removeProfile(url: string, info: IRemoveProfileData, sessionID: string): string;
    getCompatibleTarkovVersion(): string;
}
