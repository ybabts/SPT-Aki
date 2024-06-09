import { LauncherCallbacks } from "../../callbacks/LauncherCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class LauncherStaticRouter extends StaticRouter {
    protected launcherCallbacks: LauncherCallbacks;
    constructor(launcherCallbacks: LauncherCallbacks);
}
