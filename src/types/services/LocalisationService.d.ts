import { I18n } from "npm:i18n";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { LocaleService } from "../services/LocaleService.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
/**
 * Handles translating server text into different langauges
 */
export declare class LocalisationService {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected localeService: LocaleService;
    protected i18n: I18n;
    constructor(logger: ILogger, randomUtil: RandomUtil, databaseServer: DatabaseServer, localeService: LocaleService);
    /**
     * Get a localised value using the passed in key
     * @param key Key to loop up locale for
     * @param args optional arguments
     * @returns Localised string
     */
    getText(key: string, args?: any): string;
    /**
     * Get all locale keys
     * @returns string array of keys
     */
    getKeys(): string[];
    /**
     * From the provided partial key, find all keys that start with text and choose a random match
     * @param partialKey Key to match locale keys on
     * @returns locale text
     */
    getRandomTextThatMatchesPartialKey(partialKey: string): string;
}
