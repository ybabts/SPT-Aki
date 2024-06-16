import type { LocationCallbacks } from "../../callbacks/LocationCallbacks.ts";
import type { DynamicRouter } from "../../di/Router.ts";
export declare class LocationDynamicRouter extends DynamicRouter {
    protected locationCallbacks: LocationCallbacks;
    constructor(locationCallbacks: LocationCallbacks);
    getTopLevelRoute(): string;
}
