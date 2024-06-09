import { QuestCallbacks } from "../../callbacks/QuestCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class QuestStaticRouter extends StaticRouter {
    protected questCallbacks: QuestCallbacks;
    constructor(questCallbacks: QuestCallbacks);
}
