import type { MatchCallbacks } from "../../callbacks/MatchCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class MatchStaticRouter extends StaticRouter {
    protected matchCallbacks: MatchCallbacks;
    constructor(matchCallbacks: MatchCallbacks);
}
