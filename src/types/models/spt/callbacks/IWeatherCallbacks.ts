import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
export interface IWeatherCallbacks {
    getWeather(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
}
