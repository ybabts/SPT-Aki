import { BotCallbacks } from "../../callbacks/BotCallbacks.d.ts";
import { DynamicRouter } from "../../di/Router.d.ts";
export declare class BotDynamicRouter extends DynamicRouter {
    protected botCallbacks: BotCallbacks;
    constructor(botCallbacks: BotCallbacks);
}
