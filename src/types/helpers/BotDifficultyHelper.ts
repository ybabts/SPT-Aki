import type { BotHelper } from "../helpers/BotHelper.ts";
import type { Difficulty } from "../models/eft/common/tables/IBotType.ts";
import type { IPmcConfig } from "../models/spt/config/IPmcConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class BotDifficultyHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected randomUtil: RandomUtil;
    protected localisationService: LocalisationService;
    protected botHelper: BotHelper;
    protected configServer: ConfigServer;
    protected pmcConfig: IPmcConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, databaseServer: DatabaseServer, randomUtil: RandomUtil, localisationService: LocalisationService, botHelper: BotHelper, configServer: ConfigServer);
    getPmcDifficultySettings(pmcType: "bear" | "usec", difficulty: string, usecType: string, bearType: string): Difficulty;
    /**
     * Get difficulty settings for desired bot type, if not found use assault bot types
     * @param type bot type to retrieve difficulty of
     * @param difficulty difficulty to get settings for (easy/normal etc)
     * @returns Difficulty object
     */
    getBotDifficultySettings(type: string, difficulty: string): Difficulty;
    /**
     * Get difficulty settings for a PMC
     * @param type "usec" / "bear"
     * @param difficulty what difficulty to retrieve
     * @returns Difficulty object
     */
    protected getDifficultySettings(type: string, difficulty: string): Difficulty;
    /**
     * Translate chosen value from pre-raid difficulty dropdown into bot difficulty value
     * @param dropDownDifficulty Dropdown difficulty value to convert
     * @returns bot difficulty
     */
    convertBotDifficultyDropdownToBotDifficulty(dropDownDifficulty: string): string;
    /**
     * Choose a random difficulty from - easy/normal/hard/impossible
     * @returns random difficulty
     */
    chooseRandomDifficulty(): string;
}
