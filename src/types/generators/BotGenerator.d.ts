import { BotInventoryGenerator } from "../generators/BotInventoryGenerator.d.ts";
import { BotLevelGenerator } from "../generators/BotLevelGenerator.d.ts";
import { BotDifficultyHelper } from "../helpers/BotDifficultyHelper.d.ts";
import { BotHelper } from "../helpers/BotHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.d.ts";
import { IBaseJsonSkills, IBaseSkill, IBotBase, Info, Health as PmcHealth, Skills as botSkills } from "../models/eft/common/tables/IBotBase.d.ts";
import { Appearance, Health, IBotType } from "../models/eft/common/tables/IBotType.d.ts";
import { BotGenerationDetails } from "../models/spt/bots/BotGenerationDetails.d.ts";
import { IBotConfig } from "../models/spt/config/IBotConfig.d.ts";
import { IPmcConfig } from "../models/spt/config/IPmcConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { BotEquipmentFilterService } from "../services/BotEquipmentFilterService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { SeasonalEventService } from "../services/SeasonalEventService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
export declare class BotGenerator {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected timeUtil: TimeUtil;
    protected jsonUtil: JsonUtil;
    protected profileHelper: ProfileHelper;
    protected databaseServer: DatabaseServer;
    protected botInventoryGenerator: BotInventoryGenerator;
    protected botLevelGenerator: BotLevelGenerator;
    protected botEquipmentFilterService: BotEquipmentFilterService;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected botHelper: BotHelper;
    protected botDifficultyHelper: BotDifficultyHelper;
    protected seasonalEventService: SeasonalEventService;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    protected pmcConfig: IPmcConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, timeUtil: TimeUtil, jsonUtil: JsonUtil, profileHelper: ProfileHelper, databaseServer: DatabaseServer, botInventoryGenerator: BotInventoryGenerator, botLevelGenerator: BotLevelGenerator, botEquipmentFilterService: BotEquipmentFilterService, weightedRandomHelper: WeightedRandomHelper, botHelper: BotHelper, botDifficultyHelper: BotDifficultyHelper, seasonalEventService: SeasonalEventService, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Generate a player scav bot object
     * @param role e.g. assault / pmcbot
     * @param difficulty easy/normal/hard/impossible
     * @param botTemplate base bot template to use  (e.g. assault/pmcbot)
     * @returns
     */
    generatePlayerScav(sessionId: string, role: string, difficulty: string, botTemplate: IBotType): IBotBase;
    /**
     * Create 1  bots of the type/side/difficulty defined in botGenerationDetails
     * @param sessionId Session id
     * @param botGenerationDetails details on how to generate bots
     * @returns constructed bot
     */
    prepareAndGenerateBot(sessionId: string, botGenerationDetails: BotGenerationDetails): IBotBase;
    /**
     * Get a clone of the database\bots\base.json file
     * @returns IBotBase object
     */
    protected getCloneOfBotBase(): IBotBase;
    /**
     * Create a IBotBase object with equipment/loot/exp etc
     * @param sessionId Session id
     * @param bot bots base file
     * @param botJsonTemplate Bot template from db/bots/x.json
     * @param botGenerationDetails details on how to generate the bot
     * @returns IBotBase object
     */
    protected generateBot(sessionId: string, bot: IBotBase, botJsonTemplate: IBotType, botGenerationDetails: BotGenerationDetails): IBotBase;
    /**
     * Choose various appearance settings for a bot using weights
     * @param bot Bot to adjust
     * @param appearance Appearance settings to choose from
     * @param botGenerationDetails Generation details
     */
    protected setBotAppearance(bot: IBotBase, appearance: Appearance, botGenerationDetails: BotGenerationDetails): void;
    /**
     * Create a bot nickname
     * @param botJsonTemplate x.json from database
     * @param botGenerationDetails
     * @param botRole role of bot e.g. assault
     * @param sessionId profile session id
     * @returns Nickname for bot
     */
    protected generateBotNickname(botJsonTemplate: IBotType, botGenerationDetails: BotGenerationDetails, botRole: string, sessionId?: string): string;
    /**
     * Log the number of PMCs generated to the debug console
     * @param output Generated bot array, ready to send to client
     */
    protected logPmcGeneratedCount(output: IBotBase[]): void;
    /**
     * Converts health object to the required format
     * @param healthObj health object from bot json
     * @param playerScav Is a pscav bot being generated
     * @returns PmcHealth object
     */
    protected generateHealth(healthObj: Health, playerScav?: boolean): PmcHealth;
    /**
     * Get a bots skills with randomsied progress value between the min and max values
     * @param botSkills Skills that should have their progress value randomised
     * @returns
     */
    protected generateSkills(botSkills: IBaseJsonSkills): botSkills;
    /**
     * Randomise the progress value of passed in skills based on the min/max value
     * @param skills Skills to randomise
     * @param isCommonSkills Are the skills 'common' skills
     * @returns Skills with randomised progress values as an array
     */
    protected getSkillsWithRandomisedProgressValue(skills: Record<string, IBaseSkill>, isCommonSkills: boolean): IBaseSkill[];
    /**
     * Generate a random Id for a bot and apply to bots _id and aid value
     * @param bot bot to update
     * @returns updated IBotBase object
     */
    protected generateId(bot: IBotBase): void;
    protected generateInventoryID(profile: IBotBase): void;
    /**
     * Randomise a bots game version and account category
     * Chooses from all the game versions (standard, eod etc)
     * Chooses account type (default, Sherpa, etc)
     * @param botInfo bot info object to update
     */
    protected getRandomisedGameVersionAndCategory(botInfo: Info): void;
    /**
     * Add a side-specific (usec/bear) dogtag item to a bots inventory
     * @param bot bot to add dogtag to
     * @returns Bot with dogtag added
     */
    protected addDogtagToBot(bot: IBotBase): void;
}
