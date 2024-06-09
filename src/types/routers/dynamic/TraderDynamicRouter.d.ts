import { TraderCallbacks } from "../../callbacks/TraderCallbacks.d.ts";
import { DynamicRouter } from "../../di/Router.d.ts";
export declare class TraderDynamicRouter extends DynamicRouter {
    protected traderCallbacks: TraderCallbacks;
    constructor(traderCallbacks: TraderCallbacks);
}
