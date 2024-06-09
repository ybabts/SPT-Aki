import { MinMax } from "../../../models/common/MinMax.d.ts";
import { WindDirection } from "../../../models/enums/WindDirection.d.ts";
import { IBaseConfig } from "../../../models/spt/config/IBaseConfig.d.ts";
export interface IWeatherConfig extends IBaseConfig {
    kind: "aki-weather";
    acceleration: number;
    weather: Weather;
    forceWinterEvent: boolean;
}
export interface Weather {
    clouds: WeatherSettings<string>;
    windSpeed: WeatherSettings<number>;
    windDirection: WeatherSettings<WindDirection>;
    windGustiness: MinMax;
    rain: WeatherSettings<number>;
    rainIntensity: MinMax;
    fog: WeatherSettings<string>;
    temp: MinMax;
    pressure: MinMax;
}
export interface WeatherSettings<T> {
    values: T[];
    weights: number[];
}
