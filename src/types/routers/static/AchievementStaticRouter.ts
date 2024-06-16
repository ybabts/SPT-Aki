import type { AchievementCallbacks } from "../../callbacks/AchievementCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class AchievementStaticRouter extends StaticRouter {
    protected achievementCallbacks: AchievementCallbacks;
    constructor(achievementCallbacks: AchievementCallbacks);
}
