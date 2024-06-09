import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
export interface IWeatherCallbacks {
    getWeather(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
}
