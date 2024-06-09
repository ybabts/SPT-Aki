import { IChangeRequestData } from "../../../models/eft/launcher/IChangeRequestData.d.ts";
import { IGetMiniProfileRequestData } from "../../../models/eft/launcher/IGetMiniProfileRequestData.d.ts";
import { ILoginRequestData } from "../../../models/eft/launcher/ILoginRequestData.d.ts";
import { IRegisterData } from "../../../models/eft/launcher/IRegisterData.d.ts";
import { IRemoveProfileData } from "../../../models/eft/launcher/IRemoveProfileData.d.ts";
export interface ILauncherCallbacks {
    connect(): string;
    login(url: string, info: ILoginRequestData, sessionID: string): string;
    register(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK.d.ts";
    get(url: string, info: ILoginRequestData, sessionID: string): string;
    changeUsername(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK.d.ts";
    changePassword(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK.d.ts";
    wipe(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK.d.ts";
    getMiniProfile(url: string, info: IGetMiniProfileRequestData, sessionID: string): string;
    getAllMiniProfiles(url: string, info: any, sessionID: string): string;
    getServerVersion(): string;
    ping(url: string, info: any, sessionID: string): string;
    removeProfile(url: string, info: IRemoveProfileData, sessionID: string): string;
    getCompatibleTarkovVersion(): string;
}
