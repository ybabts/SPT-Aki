import { LocationCallbacks } from "../../callbacks/LocationCallbacks.d.ts";
import { DynamicRouter } from "../../di/Router.d.ts";
export declare class LocationDynamicRouter extends DynamicRouter {
    protected locationCallbacks: LocationCallbacks;
    constructor(locationCallbacks: LocationCallbacks);
    getTopLevelRoute(): string;
}
