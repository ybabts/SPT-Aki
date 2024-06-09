import { ApplicationContext } from "../context/ApplicationContext.d.ts";
import { LootGenerator } from "../generators/LootGenerator.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IEndOfflineRaidRequestData } from "../models/eft/match/IEndOfflineRaidRequestData.d.ts";
import { IGetGroupStatusRequestData } from "../models/eft/match/IGetGroupStatusRequestData.d.ts";
import { IGetGroupStatusResponse } from "../models/eft/match/IGetGroupStatusResponse.d.ts";
import { IGetRaidConfigurationRequestData } from "../models/eft/match/IGetRaidConfigurationRequestData.d.ts";
import { IJoinMatchRequestData } from "../models/eft/match/IJoinMatchRequestData.d.ts";
import { IJoinMatchResult } from "../models/eft/match/IJoinMatchResult.d.ts";
import { IInRaidConfig } from "../models/spt/config/IInRaidConfig.d.ts";
import { IMatchConfig } from "../models/spt/config/IMatchConfig.d.ts";
import { IPmcConfig } from "../models/spt/config/IPmcConfig.d.ts";
import { ITraderConfig } from "../models/spt/config/ITraderConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { BotGenerationCacheService } from "../services/BotGenerationCacheService.d.ts";
import { BotLootCacheService } from "../services/BotLootCacheService.d.ts";
import { MailSendService } from "../services/MailSendService.d.ts";
import { MatchLocationService } from "../services/MatchLocationService.d.ts";
import { ProfileSnapshotService } from "../services/ProfileSnapshotService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
