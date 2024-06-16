import type { WeatherController } from "../controllers/WeatherController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IWeatherData } from "../models/eft/weather/IWeatherData.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class WeatherCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected weatherController: WeatherController;
    constructor(httpResponse: HttpResponseUtil, weatherController: WeatherController);
    /**
     * Handle client/weather
     * @returns IWeatherData
     */
    getWeather(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IWeatherData>;
}
