import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { INullResponseData } from "../../../models/eft/httpResponse/INullResponseData.d.ts";
import { IProfileChangeNicknameRequestData } from "../../../models/eft/profile/IProfileChangeNicknameRequestData.d.ts";
import { IProfileChangeVoiceRequestData } from "../../../models/eft/profile/IProfileChangeVoiceRequestData.d.ts";
import { IProfileCreateRequestData } from "../../../models/eft/profile/IProfileCreateRequestData.d.ts";
import { ISearchFriendRequestData } from "../../../models/eft/profile/ISearchFriendRequestData.d.ts";
import { ISearchFriendResponse } from "../../../models/eft/profile/ISearchFriendResponse.d.ts";
import { IValidateNicknameRequestData } from "../../../models/eft/profile/IValidateNicknameRequestData.d.ts";
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
