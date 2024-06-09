import { ProfileCallbacks } from "../../callbacks/ProfileCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class ProfileStaticRouter extends StaticRouter {
    protected profileCallbacks: ProfileCallbacks;
    constructor(profileCallbacks: ProfileCallbacks);
}
