import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { INullResponseData } from "../../../models/eft/httpResponse/INullResponseData.d.ts";
import { IRegisterPlayerRequestData } from "../../../models/eft/inRaid/IRegisterPlayerRequestData.d.ts";
import { ISaveProgressRequestData } from "../../../models/eft/inRaid/ISaveProgressRequestData.d.ts";
import { IAkiProfile } from "../../../models/eft/profile/IAkiProfile.d.ts";
export interface IInraidCallbacks {
    onLoad(sessionID: string): IAkiProfile;
    registerPlayer(url: string, info: IRegisterPlayerRequestData, sessionID: string): INullResponseData;
    saveProgress(url: string, info: ISaveProgressRequestData, sessionID: string): INullResponseData;
    getRaidEndState(): string;
    getRaidMenuSettings(url: string, info: IEmptyRequestData, sessionID: string): string;
    getWeaponDurability(url: string, info: any, sessionID: string): string;
    getAirdropConfig(url: string, info: any, sessionID: string): string;
}
