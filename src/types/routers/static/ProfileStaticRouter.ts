import type { ProfileCallbacks } from "../../callbacks/ProfileCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class ProfileStaticRouter extends StaticRouter {
    protected profileCallbacks: ProfileCallbacks;
    constructor(profileCallbacks: ProfileCallbacks);
}
