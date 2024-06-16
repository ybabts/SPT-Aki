import type { LauncherCallbacks } from "../../callbacks/LauncherCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class LauncherStaticRouter extends StaticRouter {
    protected launcherCallbacks: LauncherCallbacks;
    constructor(launcherCallbacks: LauncherCallbacks);
}
