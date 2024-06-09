import { ILocationConfig } from "../models/spt/config/ILocationConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
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
