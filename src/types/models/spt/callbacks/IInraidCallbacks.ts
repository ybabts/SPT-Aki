import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { INullResponseData } from "../../../models/eft/httpResponse/INullResponseData.ts";
import type { IRegisterPlayerRequestData } from "../../../models/eft/inRaid/IRegisterPlayerRequestData.ts";
import type { ISaveProgressRequestData } from "../../../models/eft/inRaid/ISaveProgressRequestData.ts";
import type { IAkiProfile } from "../../../models/eft/profile/IAkiProfile.ts";
export interface IInraidCallbacks {
    onLoad(sessionID: string): IAkiProfile;
    registerPlayer(url: string, info: IRegisterPlayerRequestData, sessionID: string): INullResponseData;
    saveProgress(url: string, info: ISaveProgressRequestData, sessionID: string): INullResponseData;
    getRaidEndState(): string;
    getRaidMenuSettings(url: string, info: IEmptyRequestData, sessionID: string): string;
    getWeaponDurability(url: string, info: any, sessionID: string): string;
    getAirdropConfig(url: string, info: any, sessionID: string): string;
}
