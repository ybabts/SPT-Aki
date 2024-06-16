import type { QuestCallbacks } from "../../callbacks/QuestCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class QuestStaticRouter extends StaticRouter {
    protected questCallbacks: QuestCallbacks;
    constructor(questCallbacks: QuestCallbacks);
}
