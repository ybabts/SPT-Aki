import type { AchievementController } from "../controllers/AchievementController.ts";
import type { ProfileController } from "../controllers/ProfileController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { ICompletedAchievementsResponse } from "../models/eft/profile/ICompletedAchievementsResponse.ts";
import type { IGetAchievementsResponse } from "../models/eft/profile/IGetAchievementsResponse.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class AchievementCallbacks {
    protected achievementController: AchievementController;
    protected profileController: ProfileController;
    protected httpResponse: HttpResponseUtil;
    constructor(achievementController: AchievementController, profileController: ProfileController, httpResponse: HttpResponseUtil);
    /**
     * Handle client/achievement/list
     */
    getAchievements(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGetAchievementsResponse>;
    /**
     * Handle client/achievement/statistic
     */
    statistic(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ICompletedAchievementsResponse>;
}
