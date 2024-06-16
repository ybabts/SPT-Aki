import type { BuildsCallbacks } from "../../callbacks/BuildsCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class BuildsStaticRouter extends StaticRouter {
    protected buildsCallbacks: BuildsCallbacks;
    constructor(buildsCallbacks: BuildsCallbacks);
}
