import type { TraderCallbacks } from "../../callbacks/TraderCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class TraderStaticRouter extends StaticRouter {
    protected traderCallbacks: TraderCallbacks;
    constructor(traderCallbacks: TraderCallbacks);
}
