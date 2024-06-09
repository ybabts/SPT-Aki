import { AchievementCallbacks } from "../../callbacks/AchievementCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class AchievementStaticRouter extends StaticRouter {
    protected achievementCallbacks: AchievementCallbacks;
    constructor(achievementCallbacks: AchievementCallbacks);
}
