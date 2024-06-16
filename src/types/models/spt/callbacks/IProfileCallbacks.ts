import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../../../models/eft/httpResponse/INullResponseData.ts";
import type { IProfileChangeNicknameRequestData } from "../../../models/eft/profile/IProfileChangeNicknameRequestData.ts";
import type { IProfileChangeVoiceRequestData } from "../../../models/eft/profile/IProfileChangeVoiceRequestData.ts";
import type { IProfileCreateRequestData } from "../../../models/eft/profile/IProfileCreateRequestData.ts";
import type { ISearchFriendRequestData } from "../../../models/eft/profile/ISearchFriendRequestData.ts";
import type { ISearchFriendResponse } from "../../../models/eft/profile/ISearchFriendResponse.ts";
import type { IValidateNicknameRequestData } from "../../../models/eft/profile/IValidateNicknameRequestData.ts";
export interface IProfileCallbacks {
    onLoad(sessionID: string): any;
    createProfile(url: string, info: IProfileCreateRequestData, sessionID: string): IGetBodyResponseData<any>;
    getProfileData(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    regenerateScav(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    changeVoice(url: string, info: IProfileChangeVoiceRequestData, sessionID: string): INullResponseData;
    changeNickname(url: string, info: IProfileChangeNicknameRequestData, sessionID: string): IGetBodyResponseData<any>;
    validateNickname(url: string, info: IValidateNicknameRequestData, sessionID: string): IGetBodyResponseData<any>;
    getReservedNickname(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string>;
    getProfileStatus(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    searchFriend(url: string, info: ISearchFriendRequestData, sessionID: string): IGetBodyResponseData<ISearchFriendResponse>;
}
