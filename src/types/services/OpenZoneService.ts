import type { ILocationConfig } from "../models/spt/config/ILocationConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
/** Service for adding new zones to a maps OpenZones property */
export declare class OpenZoneService {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected locationConfig: ILocationConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, jsonUtil: JsonUtil, databaseServer: DatabaseServer, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Add open zone to specified map
     * @param locationId map location (e.g. factory4_day)
     * @param zoneToAdd zone to add
     */
    addZoneToMap(locationId: string, zoneToAdd: string): void;
    /**
     * Add open zones to all maps found in config/location.json to db
     */
    applyZoneChangesToAllMaps(): void;
}
