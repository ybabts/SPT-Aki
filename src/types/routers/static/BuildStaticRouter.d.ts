import { BuildsCallbacks } from "../../callbacks/BuildsCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class BuildsStaticRouter extends StaticRouter {
    protected buildsCallbacks: BuildsCallbacks;
    constructor(buildsCallbacks: BuildsCallbacks);
}
