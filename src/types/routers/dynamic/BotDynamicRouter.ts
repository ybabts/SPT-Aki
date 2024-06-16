import type { BotCallbacks } from "../../callbacks/BotCallbacks.ts";
import type { DynamicRouter } from "../../di/Router.ts";
export declare class BotDynamicRouter extends DynamicRouter {
    protected botCallbacks: BotCallbacks;
    constructor(botCallbacks: BotCallbacks);
}
