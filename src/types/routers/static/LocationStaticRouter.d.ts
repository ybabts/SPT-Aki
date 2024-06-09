import { LocationCallbacks } from "../../callbacks/LocationCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class LocationStaticRouter extends StaticRouter {
    protected locationCallbacks: LocationCallbacks;
    constructor(locationCallbacks: LocationCallbacks);
}
