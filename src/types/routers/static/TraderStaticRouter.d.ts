import { TraderCallbacks } from "../../callbacks/TraderCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class TraderStaticRouter extends StaticRouter {
    protected traderCallbacks: TraderCallbacks;
    constructor(traderCallbacks: TraderCallbacks);
}
