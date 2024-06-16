import type { ApplicationContext } from "../context/ApplicationContext.ts";
import type { BotGenerator } from "../generators/BotGenerator.ts";
import type { BotDifficultyHelper } from "../helpers/BotDifficultyHelper.ts";
import type { BotHelper } from "../helpers/BotHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IBotBase } from "../models/eft/common/tables/IBotBase.ts";
import type { IBotCore } from "../models/eft/common/tables/IBotCore.ts";
import type { Difficulty } from "../models/eft/common/tables/IBotType.ts";
import type { IBotConfig } from "../models/spt/config/IBotConfig.ts";
import type { IPmcConfig } from "../models/spt/config/IPmcConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { BotGenerationCacheService } from "../services/BotGenerationCacheService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { MatchBotDetailsCacheService } from "../services/MatchBotDetailsCacheService.ts";
import type { SeasonalEventService } from "../services/SeasonalEventService.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class BotController {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected botGenerator: BotGenerator;
    protected botHelper: BotHelper;
    protected botDifficultyHelper: BotDifficultyHelper;
    protected botGenerationCacheService: BotGenerationCacheService;
    protected matchBotDetailsCacheService: MatchBotDetailsCacheService;
    protected localisationService: LocalisationService;
    protected seasonalEventService: SeasonalEventService;
    protected profileHelper: ProfileHelper;
    protected configServer: ConfigServer;
    protected applicationContext: ApplicationContext;
    protected randomUtil: RandomUtil;
    protected jsonUtil: JsonUtil;
    protected botConfig: IBotConfig;
    protected pmcConfig: IPmcConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, botGenerator: BotGenerator, botHelper: BotHelper, botDifficultyHelper: BotDifficultyHelper, botGenerationCacheService: BotGenerationCacheService, matchBotDetailsCacheService: MatchBotDetailsCacheService, localisationService: LocalisationService, seasonalEventService: SeasonalEventService, profileHelper: ProfileHelper, configServer: ConfigServer, applicationContext: ApplicationContext, randomUtil: RandomUtil, jsonUtil: JsonUtil);
    /**
     * Return the number of bot load-out varieties to be generated
     * @param type bot Type we want the load-out gen count for
     * @returns number of bots to generate
     */
    getBotPresetGenerationLimit(type: string): number;
    /**
     * Handle singleplayer/settings/bot/difficulty
     * Get the core.json difficulty settings from database/bots
     * @returns IBotCore
     */
    getBotCoreDifficulty(): IBotCore;
    /**
     * Get bot difficulty settings
     * Adjust PMC settings to ensure they engage the correct bot types
     * @param type what bot the server is requesting settings for
     * @param diffLevel difficulty level server requested settings for
     * @param ignoreRaidSettings should raid settings chosen pre-raid be ignored
     * @returns Difficulty object
     */
    getBotDifficulty(type: string, diffLevel: string, ignoreRaidSettings?: boolean): Difficulty;
    getAllBotDifficulties(): Record<string, any>;
    /**
     * Generate bot profiles and store in cache
     * @param sessionId Session id
     * @param info bot generation request info
     * @returns IBotBase array
     */
    generate(sessionId: string, info: IGenerateBotsRequestData): IBotBase[];
    /**
     * On first bot generation bots are generated and stored inside a cache, ready to be used later
     * @param request Bot generation request object
     * @param pmcProfile Player profile
     * @param sessionId Session id
     * @returns
     */
    protected generateBotsFirstTime(request: IGenerateBotsRequestData, pmcProfile: IPmcData, sessionId: string): IBotBase[];
    /**
     * Pull a single bot out of cache and return, if cache is empty add bots to it and then return
     * @param sessionId Session id
     * @param request Bot generation request object
     * @returns Single IBotBase object
     */
    protected returnSingleBotFromCache(sessionId: string, request: IGenerateBotsRequestData): IBotBase[];
    /**
     * Get the difficulty passed in, if its not "asonline", get selected difficulty from config
     * @param requestedDifficulty
     * @returns
     */
    getPMCDifficulty(requestedDifficulty: string): string;
    /**
     * Get the max number of bots allowed on a map
     * Looks up location player is entering when getting cap value
     * @returns cap number
     */
    getBotCap(): number;
    getAiBotBrainTypes(): any;
}
