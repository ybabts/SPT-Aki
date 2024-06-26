import type { BossLocationSpawn, Wave } from "../models/eft/common/ILocationBase.ts";
import type { ILocationConfig } from "../models/spt/config/ILocationConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class CustomLocationWaveService {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected locationConfig: ILocationConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, jsonUtil: JsonUtil, databaseServer: DatabaseServer, configServer: ConfigServer);
    /**
     * Add a boss wave to a map
     * @param locationId e.g. factory4_day, bigmap
     * @param waveToAdd Boss wave to add to map
     */
    addBossWaveToMap(locationId: string, waveToAdd: BossLocationSpawn): void;
    /**
     * Add a normal bot wave to a map
     * @param locationId e.g. factory4_day, bigmap
     * @param waveToAdd Wave to add to map
     */
    addNormalWaveToMap(locationId: string, waveToAdd: Wave): void;
    /**
     * Clear all custom boss waves from a map
     * @param locationId e.g. factory4_day, bigmap
     */
    clearBossWavesForMap(locationId: string): void;
    /**
     * Clear all custom normal waves from a map
     * @param locationId e.g. factory4_day, bigmap
     */
    clearNormalWavesForMap(locationId: string): void;
    /**
     * Add custom boss and normal waves to maps found in config/location.json to db
     */
    applyWaveChangesToAllMaps(): void;
}
