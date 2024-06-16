import type { LocationCallbacks } from "../../callbacks/LocationCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class LocationStaticRouter extends StaticRouter {
    protected locationCallbacks: LocationCallbacks;
    constructor(locationCallbacks: LocationCallbacks);
}
