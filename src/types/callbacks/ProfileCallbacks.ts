import type { ProfileController } from "../controllers/ProfileController.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../models/eft/httpResponse/INullResponseData.ts";
import type { IGetMiniProfileRequestData } from "../models/eft/launcher/IGetMiniProfileRequestData.ts";
import type { GetProfileStatusResponseData } from "../models/eft/profile/GetProfileStatusResponseData.ts";
import type { ICreateProfileResponse } from "../models/eft/profile/ICreateProfileResponse.ts";
import type { IGetOtherProfileRequest } from "../models/eft/profile/IGetOtherProfileRequest.ts";
import type { IGetOtherProfileResponse } from "../models/eft/profile/IGetOtherProfileResponse.ts";
import type { IGetProfileSettingsRequest } from "../models/eft/profile/IGetProfileSettingsRequest.ts";
import type { IProfileChangeNicknameRequestData } from "../models/eft/profile/IProfileChangeNicknameRequestData.ts";
import type { IProfileChangeVoiceRequestData } from "../models/eft/profile/IProfileChangeVoiceRequestData.ts";
import type { IProfileCreateRequestData } from "../models/eft/profile/IProfileCreateRequestData.ts";
import type { ISearchFriendRequestData } from "../models/eft/profile/ISearchFriendRequestData.ts";
import type { ISearchFriendResponse } from "../models/eft/profile/ISearchFriendResponse.ts";
import type { IValidateNicknameRequestData } from "../models/eft/profile/IValidateNicknameRequestData.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
/** Handle profile related client events */
export declare class ProfileCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected timeUtil: TimeUtil;
    protected profileController: ProfileController;
    protected profileHelper: ProfileHelper;
    constructor(httpResponse: HttpResponseUtil, timeUtil: TimeUtil, profileController: ProfileController, profileHelper: ProfileHelper);
    /**
     * Handle client/game/profile/create
     */
    createProfile(url: string, info: IProfileCreateRequestData, sessionID: string): IGetBodyResponseData<ICreateProfileResponse>;
    /**
     * Handle client/game/profile/list
     * Get the complete player profile (scav + pmc character)
     */
    getProfileData(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IPmcData[]>;
    /**
     * Handle client/game/profile/savage/regenerate
     * Handle the creation of a scav profile for player
     * Occurs post-raid and when profile first created immediately after character details are confirmed by player
     * @param url
     * @param info empty
     * @param sessionID Session id
     * @returns Profile object
     */
    regenerateScav(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IPmcData[]>;
    /**
     * Handle client/game/profile/voice/change event
     */
    changeVoice(url: string, info: IProfileChangeVoiceRequestData, sessionID: string): INullResponseData;
    /**
     * Handle client/game/profile/nickname/change event
     * Client allows player to adjust their profile name
     */
    changeNickname(url: string, info: IProfileChangeNicknameRequestData, sessionID: string): IGetBodyResponseData<any>;
    /**
     * Handle client/game/profile/nickname/validate
     */
    validateNickname(url: string, info: IValidateNicknameRequestData, sessionID: string): IGetBodyResponseData<any>;
    /**
     * Handle client/game/profile/nickname/reserved
     */
    getReservedNickname(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string>;
    /**
     * Handle client/profile/status
     * Called when creating a character when choosing a character face/voice
     */
    getProfileStatus(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<GetProfileStatusResponseData>;
    /**
     * Handle client/profile/view
     * Called when viewing another players profile
     */
    getOtherProfile(url: string, request: IGetOtherProfileRequest, sessionID: string): IGetBodyResponseData<IGetOtherProfileResponse>;
    /**
     * Handle client/profile/settings
     */
    getProfileSettings(url: string, info: IGetProfileSettingsRequest, sessionId: string): IGetBodyResponseData<string>;
    /**
     * Handle client/game/profile/search
     */
    searchFriend(url: string, info: ISearchFriendRequestData, sessionID: string): IGetBodyResponseData<ISearchFriendResponse[]>;
    /**
     * Handle launcher/profile/info
     */
    getMiniProfile(url: string, info: IGetMiniProfileRequestData, sessionID: string): string;
    /**
     * Handle /launcher/profiles
     */
    getAllMiniProfiles(url: string, info: IEmptyRequestData, sessionID: string): string;
}
