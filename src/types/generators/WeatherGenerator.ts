import type { ApplicationContext } from "../context/ApplicationContext.ts";
import type { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.ts";
import type { IWeather, IWeatherData } from "../models/eft/weather/IWeatherData.ts";
import type { WindDirection } from "../models/enums/WindDirection.ts";
import type { IWeatherConfig } from "../models/spt/config/IWeatherConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class WeatherGenerator {
    protected weightedRandomHelper: WeightedRandomHelper;
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected timeUtil: TimeUtil;
    protected applicationContext: ApplicationContext;
    protected configServer: ConfigServer;
    protected weatherConfig: IWeatherConfig;
    private serverStartTimestampMS;
    constructor(weightedRandomHelper: WeightedRandomHelper, logger: ILogger, randomUtil: RandomUtil, timeUtil: TimeUtil, applicationContext: ApplicationContext, configServer: ConfigServer);
    /**
     * Get current + raid datetime and format into correct BSG format and return
     * @param data Weather data
     * @returns IWeatherData
     */
    calculateGameTime(data: IWeatherData): IWeatherData;
    /**
     * Get server uptime seconds multiplied by a multiplier and add to current time as seconds
     * Format to BSGs requirements
     * @param currentDate current date
     * @returns formatted time
     */
    protected getBsgFormattedInRaidTime(): string;
    /**
     * Get the current in-raid time
     * @param currentDate (new Date())
     * @returns Date object of current in-raid time
     */
    getInRaidTime(): Date;
    /**
     * Get current time formatted to fit BSGs requirement
     * @param date date to format into bsg style
     * @returns Time formatted in BSG format
     */
    protected getBSGFormattedTime(date: Date): string;
    /**
     * Return randomised Weather data with help of config/weather.json
     * @returns Randomised weather data
     */
    generateWeather(): IWeather;
    /**
     * Set IWeather date/time/timestamp values to now
     * @param weather Object to update
     */
    protected setCurrentDateTime(weather: IWeather): void;
    protected getWeightedWindDirection(): WindDirection;
    protected getWeightedClouds(): number;
    protected getWeightedWindSpeed(): number;
    protected getWeightedFog(): number;
    protected getWeightedRain(): number;
    protected getRandomFloat(node: string): number;
}
