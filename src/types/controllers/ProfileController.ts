import type { PlayerScavGenerator } from "../generators/PlayerScavGenerator.ts";
import type { DialogueHelper } from "../helpers/DialogueHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { QuestHelper } from "../helpers/QuestHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IMiniProfile } from "../models/eft/launcher/IMiniProfile.ts";
import type { GetProfileStatusResponseData } from "../models/eft/profile/GetProfileStatusResponseData.ts";
import type { IAkiProfile } from "../models/eft/profile/IAkiProfile.ts";
import type { IGetOtherProfileRequest } from "../models/eft/profile/IGetOtherProfileRequest.ts";
import type { IGetOtherProfileResponse } from "../models/eft/profile/IGetOtherProfileResponse.ts";
import type { IProfileChangeNicknameRequestData } from "../models/eft/profile/IProfileChangeNicknameRequestData.ts";
import type { IProfileChangeVoiceRequestData } from "../models/eft/profile/IProfileChangeVoiceRequestData.ts";
import type { IProfileCreateRequestData } from "../models/eft/profile/IProfileCreateRequestData.ts";
import type { ISearchFriendRequestData } from "../models/eft/profile/ISearchFriendRequestData.ts";
import type { ISearchFriendResponse } from "../models/eft/profile/ISearchFriendResponse.ts";
import type { IValidateNicknameRequestData } from "../models/eft/profile/IValidateNicknameRequestData.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { MailSendService } from "../services/MailSendService.ts";
import type { ProfileFixerService } from "../services/ProfileFixerService.ts";
import type { SeasonalEventService } from "../services/SeasonalEventService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class ProfileController {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected profileFixerService: ProfileFixerService;
    protected localisationService: LocalisationService;
    protected seasonalEventService: SeasonalEventService;
    protected mailSendService: MailSendService;
    protected playerScavGenerator: PlayerScavGenerator;
    protected eventOutputHolder: EventOutputHolder;
    protected traderHelper: TraderHelper;
    protected dialogueHelper: DialogueHelper;
    protected questHelper: QuestHelper;
    protected profileHelper: ProfileHelper;
    constructor(logger: ILogger, hashUtil: HashUtil, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, itemHelper: ItemHelper, profileFixerService: ProfileFixerService, localisationService: LocalisationService, seasonalEventService: SeasonalEventService, mailSendService: MailSendService, playerScavGenerator: PlayerScavGenerator, eventOutputHolder: EventOutputHolder, traderHelper: TraderHelper, dialogueHelper: DialogueHelper, questHelper: QuestHelper, profileHelper: ProfileHelper);
    /**
     * Handle /launcher/profiles
     */
    getMiniProfiles(): IMiniProfile[];
    /**
     * Handle launcher/profile/info
     */
    getMiniProfile(sessionID: string): any;
    /**
     * Handle client/game/profile/list
     */
    getCompleteProfile(sessionID: string): IPmcData[];
    /**
     * Handle client/game/profile/create
     * @param info Client reqeust object
     * @param sessionID Player id
     * @returns Profiles _id value
     */
    createProfile(info: IProfileCreateRequestData, sessionID: string): string;
    /**
     * make profiles pmcData.Inventory.equipment unique
     * @param pmcData Profile to update
     */
    protected updateInventoryEquipmentId(pmcData: IPmcData): void;
    /**
     * Delete a profile
     * @param sessionID Id of profile to delete
     */
    protected deleteProfileBySessionId(sessionID: string): void;
    /**
     * Iterate over all quests in player profile, inspect rewards for the quests current state (accepted/completed)
     * and send rewards to them in mail
     * @param profileDetails Player profile
     * @param sessionID Session id
     * @param response Event router response
     */
    protected givePlayerStartingQuestRewards(profileDetails: IAkiProfile, sessionID: string, response: IItemEventRouterResponse): void;
    /**
     * For each trader reset their state to what a level 1 player would see
     * @param sessionID Session id of profile to reset
     */
    protected resetAllTradersInProfile(sessionID: string): void;
    /**
     * Generate a player scav object
     * PMC profile MUST exist first before pscav can be generated
     * @param sessionID
     * @returns IPmcData object
     */
    generatePlayerScav(sessionID: string): IPmcData;
    /**
     * Handle client/game/profile/nickname/validate
     */
    validateNickname(info: IValidateNicknameRequestData, sessionID: string): string;
    /**
     * Handle client/game/profile/nickname/change event
     * Client allows player to adjust their profile name
     */
    changeNickname(info: IProfileChangeNicknameRequestData, sessionID: string): string;
    /**
     * Handle client/game/profile/voice/change event
     */
    changeVoice(info: IProfileChangeVoiceRequestData, sessionID: string): void;
    /**
     * Handle client/game/profile/search
     */
    getFriends(info: ISearchFriendRequestData, sessionID: string): ISearchFriendResponse[];
    /**
     * Handle client/profile/status
     */
    getProfileStatus(sessionId: string): GetProfileStatusResponseData;
    getOtherProfile(sessionId: string, request: IGetOtherProfileRequest): IGetOtherProfileResponse;
}
