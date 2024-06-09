import { ICompletedAchievementsResponse } from "../models/eft/profile/ICompletedAchievementsResponse.d.ts";
import { IGetAchievementsResponse } from "../models/eft/profile/IGetAchievementsResponse.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
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
