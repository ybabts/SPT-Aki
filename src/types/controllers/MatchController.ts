import type { ApplicationContext } from "../context/ApplicationContext.ts";
import type { LootGenerator } from "../generators/LootGenerator.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IEndOfflineRaidRequestData } from "../models/eft/match/IEndOfflineRaidRequestData.ts";
import type { IGetGroupStatusRequestData } from "../models/eft/match/IGetGroupStatusRequestData.ts";
import type { IGetGroupStatusResponse } from "../models/eft/match/IGetGroupStatusResponse.ts";
import type { IGetRaidConfigurationRequestData } from "../models/eft/match/IGetRaidConfigurationRequestData.ts";
import type { IJoinMatchRequestData } from "../models/eft/match/IJoinMatchRequestData.ts";
import type { IJoinMatchResult } from "../models/eft/match/IJoinMatchResult.ts";
import type { IInRaidConfig } from "../models/spt/config/IInRaidConfig.ts";
import type { IMatchConfig } from "../models/spt/config/IMatchConfig.ts";
import type { IPmcConfig } from "../models/spt/config/IPmcConfig.ts";
import type { ITraderConfig } from "../models/spt/config/ITraderConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { BotGenerationCacheService } from "../services/BotGenerationCacheService.ts";
import type { BotLootCacheService } from "../services/BotLootCacheService.ts";
import type { MailSendService } from "../services/MailSendService.ts";
import type { MatchLocationService } from "../services/MatchLocationService.ts";
import type { ProfileSnapshotService } from "../services/ProfileSnapshotService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class MatchController {
    protected logger: ILogger;
    protected saveServer: SaveServer;
    protected timeUtil: TimeUtil;
    protected randomUtil: RandomUtil;
    protected hashUtil: HashUtil;
    protected profileHelper: ProfileHelper;
    protected matchLocationService: MatchLocationService;
    protected traderHelper: TraderHelper;
    protected botLootCacheService: BotLootCacheService;
    protected configServer: ConfigServer;
    protected profileSnapshotService: ProfileSnapshotService;
    protected botGenerationCacheService: BotGenerationCacheService;
    protected mailSendService: MailSendService;
    protected lootGenerator: LootGenerator;
    protected applicationContext: ApplicationContext;
    protected matchConfig: IMatchConfig;
    protected inRaidConfig: IInRaidConfig;
    protected traderConfig: ITraderConfig;
    protected pmcConfig: IPmcConfig;
    constructor(logger: ILogger, saveServer: SaveServer, timeUtil: TimeUtil, randomUtil: RandomUtil, hashUtil: HashUtil, profileHelper: ProfileHelper, matchLocationService: MatchLocationService, traderHelper: TraderHelper, botLootCacheService: BotLootCacheService, configServer: ConfigServer, profileSnapshotService: ProfileSnapshotService, botGenerationCacheService: BotGenerationCacheService, mailSendService: MailSendService, lootGenerator: LootGenerator, applicationContext: ApplicationContext);
    getEnabled(): boolean;
    /** Handle client/match/group/delete */
    deleteGroup(info: any): void;
    /** Handle match/group/start_game */
    joinMatch(info: IJoinMatchRequestData, sessionId: string): IJoinMatchResult;
    /** Handle client/match/group/status */
    getGroupStatus(info: IGetGroupStatusRequestData): IGetGroupStatusResponse;
    /**
     * Handle /client/raid/configuration
     * @param request Raid config request
     * @param sessionID Session id
     */
    startOfflineRaid(request: IGetRaidConfigurationRequestData, sessionID: string): void;
    /**
     * Convert a difficulty value from pre-raid screen to a bot difficulty
     * @param botDifficulty dropdown difficulty value
     * @returns bot difficulty
     */
    protected convertDifficultyDropdownIntoBotDifficulty(botDifficulty: string): string;
    /** Handle client/match/offline/end */
    endOfflineRaid(info: IEndOfflineRaidRequestData, sessionId: string): void;
    /**
     * Did player take a COOP extract
     * @param extractName Name of extract player took
     * @returns True if coop extract
     */
    protected extractWasViaCoop(extractName: string): boolean;
    protected sendCoopTakenFenceMessage(sessionId: string): void;
    /**
     * Handle when a player extracts using a coop extract - add rep to fence
     * @param sessionId Session/player id
     * @param pmcData Profile
     * @param extractName Name of extract taken
     */
    protected handleCoopExtract(sessionId: string, pmcData: IPmcData, extractName: string): void;
    /**
     * Was extract by car
     * @param extractName name of extract
     * @returns true if car extract
     */
    protected extractWasViaCar(extractName: string): boolean;
    /**
     * Handle when a player extracts using a car - Add rep to fence
     * @param extractName name of the extract used
     * @param pmcData Player profile
     * @param sessionId Session id
     */
    protected handleCarExtract(extractName: string, pmcData: IPmcData, sessionId: string): void;
    /**
     * Get the fence rep gain from using a car or coop extract
     * @param pmcData Profile
     * @param baseGain amount gained for the first extract
     * @param extractCount Number of times extract was taken
     * @returns Fence standing after taking extract
     */
    protected getFenceStandingAfterExtract(pmcData: IPmcData, baseGain: number, extractCount: number): number;
}
