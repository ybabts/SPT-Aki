import { BotCallbacks } from "../../callbacks/BotCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class BotStaticRouter extends StaticRouter {
    protected botCallbacks: BotCallbacks;
    constructor(botCallbacks: BotCallbacks);
}
