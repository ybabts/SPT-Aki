import type { WeatherCallbacks } from "../../callbacks/WeatherCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class WeatherStaticRouter extends StaticRouter {
    protected weatherCallbacks: WeatherCallbacks;
    constructor(weatherCallbacks: WeatherCallbacks);
}
