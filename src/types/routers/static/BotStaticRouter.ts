import type { BotCallbacks } from "../../callbacks/BotCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class BotStaticRouter extends StaticRouter {
    protected botCallbacks: BotCallbacks;
    constructor(botCallbacks: BotCallbacks);
}
