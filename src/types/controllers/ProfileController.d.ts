import { PlayerScavGenerator } from "../generators/PlayerScavGenerator.d.ts";
import { DialogueHelper } from "../helpers/DialogueHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { QuestHelper } from "../helpers/QuestHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IMiniProfile } from "../models/eft/launcher/IMiniProfile.d.ts";
import { GetProfileStatusResponseData } from "../models/eft/profile/GetProfileStatusResponseData.d.ts";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile.d.ts";
import { IGetOtherProfileRequest } from "../models/eft/profile/IGetOtherProfileRequest.d.ts";
import { IGetOtherProfileResponse } from "../models/eft/profile/IGetOtherProfileResponse.d.ts";
import { IProfileChangeNicknameRequestData } from "../models/eft/profile/IProfileChangeNicknameRequestData.d.ts";
import { IProfileChangeVoiceRequestData } from "../models/eft/profile/IProfileChangeVoiceRequestData.d.ts";
import { IProfileCreateRequestData } from "../models/eft/profile/IProfileCreateRequestData.d.ts";
import { ISearchFriendRequestData } from "../models/eft/profile/ISearchFriendRequestData.d.ts";
import { ISearchFriendResponse } from "../models/eft/profile/ISearchFriendResponse.d.ts";
import { IValidateNicknameRequestData } from "../models/eft/profile/IValidateNicknameRequestData.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { MailSendService } from "../services/MailSendService.d.ts";
import { ProfileFixerService } from "../services/ProfileFixerService.d.ts";
import { SeasonalEventService } from "../services/SeasonalEventService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
