import type { NotificationSendHelper } from "../helpers/NotificationSendHelper.ts";
import type { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { Aggressor, Victim } from "../models/eft/common/tables/IBotBase.ts";
import type { IUserDialogInfo } from "../models/eft/profile/IAkiProfile.ts";
import type { IPmcChatResponse } from "../models/spt/config/IPmChatResponse.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { MatchBotDetailsCacheService } from "../services/MatchBotDetailsCacheService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class PmcChatResponseService {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected notificationSendHelper: NotificationSendHelper;
    protected matchBotDetailsCacheService: MatchBotDetailsCacheService;
    protected localisationService: LocalisationService;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected configServer: ConfigServer;
    protected pmcResponsesConfig: IPmcChatResponse;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, notificationSendHelper: NotificationSendHelper, matchBotDetailsCacheService: MatchBotDetailsCacheService, localisationService: LocalisationService, weightedRandomHelper: WeightedRandomHelper, configServer: ConfigServer);
    /**
     * For each PMC victim of the player, have a chance to send a message to the player, can be positive or negative
     * @param sessionId Session id
     * @param pmcVictims Array of bots killed by player
     * @param pmcData Player profile
     */
    sendVictimResponse(sessionId: string, pmcVictims: Victim[], pmcData: IPmcData): void;
    /**
     * Not fully implemented yet, needs method of acquiring killers details after raid
     * @param sessionId Session id
     * @param pmcData Players profile
     * @param killer The bot who killed the player
     */
    sendKillerResponse(sessionId: string, pmcData: IPmcData, killer: Aggressor): void;
    /**
     * Choose a localised message to send the player (different if sender was killed or killed player)
     * @param isVictim Is the message coming from a bot killed by the player
     * @param pmcData Player profile
     * @returns Message from PMC to player
     */
    protected chooseMessage(isVictim: boolean, pmcData: IPmcData): string;
    /**
     * Should capitalisation be stripped from the message response before sending
     * @param isVictim Was responder a victim of player
     * @returns true = should be stripped
     */
    protected stripCapitalistion(isVictim: boolean): boolean;
    /**
     * Should capitalisation be stripped from the message response before sending
     * @param isVictim Was responder a victim of player
     * @returns true = should be stripped
     */
    protected allCaps(isVictim: boolean): boolean;
    /**
     * Should a suffix be appended to the end of the message being sent to player
     * @param isVictim Was responder a victim of player
     * @returns true = should be stripped
     */
    appendSuffixToMessageEnd(isVictim: boolean): boolean;
    /**
     * Choose a type of response based on the weightings in pmc response config
     * @param isVictim Was responder killed by player
     * @returns Response type (positive/negative)
     */
    protected chooseResponseType(isVictim?: boolean): string;
    /**
     * Get locale keys related to the type of response to send (victim/killer)
     * @param keyType Positive/negative
     * @param isVictim Was responder killed by player
     * @returns
     */
    protected getResponseLocaleKeys(keyType: string, isVictim?: boolean): string[];
    /**
     * Get all locale keys that start with `pmcresponse-suffix`
     * @returns array of keys
     */
    protected getResponseSuffixLocaleKeys(): string[];
    /**
     * Randomly draw a victim of the the array and return thier details
     * @param pmcVictims Possible victims to choose from
     * @returns IUserDialogInfo
     */
    protected chooseRandomVictim(pmcVictims: Victim[]): IUserDialogInfo;
    /**
     * Convert a victim object into a IUserDialogInfo object
     * @param pmcVictim victim to convert
     * @returns IUserDialogInfo
     */
    protected getVictimDetails(pmcVictim: Victim): IUserDialogInfo;
}
