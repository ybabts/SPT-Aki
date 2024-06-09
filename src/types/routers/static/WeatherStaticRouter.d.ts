import { WeatherCallbacks } from "../../callbacks/WeatherCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class WeatherStaticRouter extends StaticRouter {
    protected weatherCallbacks: WeatherCallbacks;
    constructor(weatherCallbacks: WeatherCallbacks);
}
