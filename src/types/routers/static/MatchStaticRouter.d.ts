import { MatchCallbacks } from "../../callbacks/MatchCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class MatchStaticRouter extends StaticRouter {
    protected matchCallbacks: MatchCallbacks;
    constructor(matchCallbacks: MatchCallbacks);
}
