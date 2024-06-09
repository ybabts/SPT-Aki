import { ApplicationContext } from "../context/ApplicationContext.d.ts";
import { BotGenerator } from "../generators/BotGenerator.d.ts";
import { BotDifficultyHelper } from "../helpers/BotDifficultyHelper.d.ts";
import { BotHelper } from "../helpers/BotHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IBotBase } from "../models/eft/common/tables/IBotBase.d.ts";
import { IBotCore } from "../models/eft/common/tables/IBotCore.d.ts";
import { Difficulty } from "../models/eft/common/tables/IBotType.d.ts";
import { IBotConfig } from "../models/spt/config/IBotConfig.d.ts";
import { IPmcConfig } from "../models/spt/config/IPmcConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { BotGenerationCacheService } from "../services/BotGenerationCacheService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { MatchBotDetailsCacheService } from "../services/MatchBotDetailsCacheService.d.ts";
import { SeasonalEventService } from "../services/SeasonalEventService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
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
