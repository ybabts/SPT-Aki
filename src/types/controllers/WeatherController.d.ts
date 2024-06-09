import { WeatherGenerator } from "../generators/WeatherGenerator.d.ts";
import { IWeatherData } from "../models/eft/weather/IWeatherData.d.ts";
import { IWeatherConfig } from "../models/spt/config/IWeatherConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
export declare class WeatherController {
    protected weatherGenerator: WeatherGenerator;
    protected logger: ILogger;
    protected configServer: ConfigServer;
    protected weatherConfig: IWeatherConfig;
    constructor(weatherGenerator: WeatherGenerator, logger: ILogger, configServer: ConfigServer);
    /** Handle client/weather */
    generate(): IWeatherData;
    /**
     * Get the current in-raid time (MUST HAVE PLAYER LOGGED INTO CLIENT TO WORK)
     * @returns Date object
     */
    getCurrentInRaidTime(): Date;
}
