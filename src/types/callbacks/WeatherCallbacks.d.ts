import { WeatherController } from "../controllers/WeatherController.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IWeatherData } from "../models/eft/weather/IWeatherData.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
