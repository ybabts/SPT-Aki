import type { TraderCallbacks } from "../../callbacks/TraderCallbacks.ts";
import type { DynamicRouter } from "../../di/Router.ts";
export declare class TraderDynamicRouter extends DynamicRouter {
    protected traderCallbacks: TraderCallbacks;
    constructor(traderCallbacks: TraderCallbacks);
}
