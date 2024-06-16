import type { ICompletedAchievementsResponse } from "../models/eft/profile/ICompletedAchievementsResponse.ts";
import type { IGetAchievementsResponse } from "../models/eft/profile/IGetAchievementsResponse.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
/**
 * Logic for handling In Raid callbacks
 */
export declare class AchievementController {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    constructor(logger: ILogger, databaseServer: DatabaseServer);
    /**
     * Get base achievements
     * @param sessionID Session id
     */
    getAchievements(sessionID: string): IGetAchievementsResponse;
    /**
     * Shows % of 'other' players who've completed each achievement
     * @param sessionId Session id
     * @returns ICompletedAchievementsResponse
     */
    getAchievementStatistics(sessionId: string): ICompletedAchievementsResponse;
}
