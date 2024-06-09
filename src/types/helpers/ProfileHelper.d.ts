import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { Common, CounterKeyValue, Stats } from "../models/eft/common/tables/IBotBase.d.ts";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile.d.ts";
import { IValidateNicknameRequestData } from "../models/eft/profile/IValidateNicknameRequestData.d.ts";
import { SkillTypes } from "../models/enums/SkillTypes.d.ts";
import { IInventoryConfig } from "../models/spt/config/IInventoryConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { ProfileSnapshotService } from "../services/ProfileSnapshotService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
import { Watermark } from "../utils/Watermark.d.ts";
export declare class ProfileHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected watermark: Watermark;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected profileSnapshotService: ProfileSnapshotService;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected inventoryConfig: IInventoryConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, watermark: Watermark, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, itemHelper: ItemHelper, profileSnapshotService: ProfileSnapshotService, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Remove/reset a completed quest condtion from players profile quest data
     * @param sessionID Session id
     * @param questConditionId Quest with condition to remove
     */
    removeQuestConditionFromProfile(pmcData: IPmcData, questConditionId: Record<string, string>): void;
    /**
     * Get all profiles from server
     * @returns Dictionary of profiles
     */
    getProfiles(): Record<string, IAkiProfile>;
    /**
     * Get the pmc and scav profiles as an array by profile id
     * @param sessionID
     * @returns Array of IPmcData objects
     */
    getCompleteProfile(sessionID: string): IPmcData[];
    /**
     * Fix xp doubling on post-raid xp reward screen by sending a 'dummy' profile to the post-raid screen
     * Server saves the post-raid changes prior to the xp screen getting the profile, this results in the xp screen using
     * the now updated profile values as a base, meaning it shows x2 xp gained
     * Instead, clone the post-raid profile (so we dont alter its values), apply the pre-raid xp values to the cloned objects and return
     * Delete snapshot of pre-raid profile prior to returning profile data
     * @param sessionId Session id
     * @param output pmc and scav profiles array
     * @param pmcProfile post-raid pmc profile
     * @param scavProfile post-raid scav profile
     * @returns Updated profile array
     */
    protected postRaidXpWorkaroundFix(sessionId: string, output: IPmcData[], pmcProfile: IPmcData, scavProfile: IPmcData): IPmcData[];
    /**
     * Check if a nickname is used by another profile loaded by the server
     * @param nicknameRequest nickname request object
     * @param sessionID Session id
     * @returns True if already used
     */
    isNicknameTaken(nicknameRequest: IValidateNicknameRequestData, sessionID: string): boolean;
    protected profileHasInfoProperty(profile: IAkiProfile): boolean;
    protected stringsMatch(stringA: string, stringB: string): boolean;
    /**
     * Add experience to a PMC inside the players profile
     * @param sessionID Session id
     * @param experienceToAdd Experience to add to PMC character
     */
    addExperienceToPmc(sessionID: string, experienceToAdd: number): void;
    /**
     * Iterate all profiles and find matching pmc profile by provided id
     * @param pmcId Profile id to find
     * @returns IPmcData
     */
    getProfileByPmcId(pmcId: string): IPmcData;
    /**
     * Get the experiecne for the given level
     * @param level level to get xp for
     * @returns Number of xp points for level
     */
    getExperience(level: number): number;
    /**
     * Get the max level a player can be
     * @returns Max level
     */
    getMaxLevel(): number;
    getDefaultAkiDataObject(): any;
    /**
     * Get full representation of a players profile json
     * @param sessionID Profile id to get
     * @returns IAkiProfile object
     */
    getFullProfile(sessionID: string): IAkiProfile;
    /**
     * Get a PMC profile by its session id
     * @param sessionID Profile id to return
     * @returns IPmcData object
     */
    getPmcProfile(sessionID: string): IPmcData;
    /**
     * Get a full profiles scav-specific sub-profile
     * @param sessionID Profiles id
     * @returns IPmcData object
     */
    getScavProfile(sessionID: string): IPmcData;
    /**
     * Get baseline counter values for a fresh profile
     * @returns Default profile Stats object
     */
    getDefaultCounters(): Stats;
    /**
     * is this profile flagged for data removal
     * @param sessionID Profile id
     * @returns True if profile is to be wiped of data/progress
     */
    protected isWiped(sessionID: string): boolean;
    protected getServerVersion(): string;
    /**
     * Iterate over player profile inventory items and find the secure container and remove it
     * @param profile Profile to remove secure container from
     * @returns profile without secure container
     */
    removeSecureContainer(profile: IPmcData): IPmcData;
    /**
     *  Flag a profile as having received a gift
     * Store giftid in profile aki object
     * @param playerId Player to add gift flag to
     * @param giftId Gift player received
     */
    addGiftReceivedFlagToProfile(playerId: string, giftId: string): void;
    /**
     * Check if profile has recieved a gift by id
     * @param playerId Player profile to check for gift
     * @param giftId Gift to check for
     * @returns True if player has recieved gift previously
     */
    playerHasRecievedGift(playerId: string, giftId: string): boolean;
    /**
     * Find Stat in profile counters and increment by one
     * @param counters Counters to search for key
     * @param keyToIncrement Key
     */
    incrementStatCounter(counters: CounterKeyValue[], keyToIncrement: string): void;
    /**
     * Check if player has a skill at elite level
     * @param skillType Skill to check
     * @param pmcProfile Profile to find skill in
     * @returns True if player has skill at elite level
     */
    hasEliteSkillLevel(skillType: SkillTypes, pmcProfile: IPmcData): boolean;
    /**
     * Add points to a specific skill in player profile
     * @param skill Skill to add points to
     * @param pointsToAdd Points to add
     * @param pmcProfile Player profile with skill
     * @param useSkillProgressRateMultipler Skills are multiplied by a value in globals, default is off to maintain compatibility with legacy code
     * @returns
     */
    addSkillPointsToPlayer(pmcProfile: IPmcData, skill: SkillTypes, pointsToAdd: number, useSkillProgressRateMultipler?: boolean): void;
    /**
     * Get a speciic common skill from supplied profile
     * @param pmcData Player profile
     * @param skill Skill to look up and return value from
     * @returns Common skill object from desired profile
     */
    getSkillFromProfile(pmcData: IPmcData, skill: SkillTypes): Common;
    /**
     * Is the provided session id for a developer account
     * @param sessionID Profile id ot check
     * @returns True if account is developer
     */
    isDeveloperAccount(sessionID: string): boolean;
    /**
     * Add stash row bonus to profile or increments rows given count if it already exists
     * @param sessionId Profile id to give rows to
     * @param rowsToAdd How many rows to give profile
     */
    addStashRowsBonusToProfile(sessionId: string, rowsToAdd: number): void;
}
