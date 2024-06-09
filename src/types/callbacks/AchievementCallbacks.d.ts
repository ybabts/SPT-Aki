import { AchievementController } from "../controllers/AchievementController.d.ts";
import { ProfileController } from "../controllers/ProfileController.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { ICompletedAchievementsResponse } from "../models/eft/profile/ICompletedAchievementsResponse.d.ts";
import { IGetAchievementsResponse } from "../models/eft/profile/IGetAchievementsResponse.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
