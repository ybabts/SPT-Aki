import type { MinMax } from "../models/common/MinMax.ts";
import type { IRandomisedBotLevelResult } from "../models/eft/bot/IRandomisedBotLevelResult.ts";
import type { IExpTable } from "../models/eft/common/IGlobals.ts";
import type { IBotBase } from "../models/eft/common/tables/IBotBase.ts";
import type { BotGenerationDetails } from "../models/spt/bots/BotGenerationDetails.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class BotLevelGenerator {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    constructor(logger: ILogger, randomUtil: RandomUtil, databaseServer: DatabaseServer);
    /**
     * Return a randomised bot level and exp value
     * @param levelDetails min and max of level for bot
     * @param botGenerationDetails Deatils to help generate a bot
     * @param bot being level is being generated for
     * @returns IRandomisedBotLevelResult object
     */
    generateBotLevel(levelDetails: MinMax, botGenerationDetails: BotGenerationDetails, bot: IBotBase): IRandomisedBotLevelResult;
    /**
     * Get the highest level a bot can be relative to the players level, but no further than the max size from globals.exp_table
     * @param playerLevel Players current level
     * @param relativeDeltaMax max delta above player level to go
     * @returns highest level possible for bot
     */
    protected getHighestRelativeBotLevel(playerLevel: number, relativeDeltaMax: number, levelDetails: MinMax, expTable: IExpTable[]): number;
    /**
     * Get the lowest level a bot can be relative to the players level, but no lower than 1
     * @param playerLevel Players current level
     * @param relativeDeltaMin Min delta below player level to go
     * @returns lowest level possible for bot
     */
    protected getLowestRelativeBotLevel(playerLevel: number, relativeDeltaMin: number, levelDetails: MinMax, expTable: IExpTable[]): number;
}
