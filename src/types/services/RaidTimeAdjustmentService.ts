import type { ApplicationContext } from "../context/ApplicationContext.ts";
import type { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.ts";
import type { ILocationBase } from "../models/eft/common/ILocationBase.ts";
import type { IGetRaidTimeRequest } from "../models/eft/game/IGetRaidTimeRequest.ts";
import type { ExtractChange, IGetRaidTimeResponse } from "../models/eft/game/IGetRaidTimeResponse.ts";
import type { ILocationConfig, IScavRaidTimeLocationSettings, LootMultiplier } from "../models/spt/config/ILocationConfig.ts";
import type { IRaidChanges } from "../models/spt/location/IRaidChanges.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class RaidTimeAdjustmentService {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected randomUtil: RandomUtil;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected applicationContext: ApplicationContext;
    protected configServer: ConfigServer;
    protected locationConfig: ILocationConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, randomUtil: RandomUtil, weightedRandomHelper: WeightedRandomHelper, applicationContext: ApplicationContext, configServer: ConfigServer);
    /**
     * Make alterations to the base map data passed in
     * Loot multipliers/waves/wave start times
     * @param raidAdjustments Changes to process on map
     * @param mapBase Map to adjust
     */
    makeAdjustmentsToMap(raidAdjustments: IRaidChanges, mapBase: ILocationBase): void;
    /**
     * Adjust the loot multiplier values passed in to be a % of their original value
     * @param mapLootMultiplers Multiplers to adjust
     * @param loosePercent Percent to change values to
     */
    protected adjustLootMultipliers(mapLootMultiplers: LootMultiplier, loosePercent: number): void;
    /**
     * Adjust bot waves to act as if player spawned later
     * @param mapBase map to adjust
     * @param raidAdjustments Map adjustments
     */
    protected adjustWaves(mapBase: ILocationBase, raidAdjustments: IRaidChanges): void;
    /**
     * Create a randomised adjustment to the raid based on map data in location.json
     * @param sessionId Session id
     * @param request Raid adjustment request
     * @returns Response to send to client
     */
    getRaidAdjustments(sessionId: string, request: IGetRaidTimeRequest): IGetRaidTimeResponse;
    /**
     * Get raid start time settings for specific map
     * @param location Map Location e.g. bigmap
     * @returns IScavRaidTimeLocationSettings
     */
    protected getMapSettings(location: string): IScavRaidTimeLocationSettings;
    /**
     * Adjust exit times to handle scavs entering raids part-way through
     * @param mapBase Map base file player is on
     * @param newRaidTimeMinutes How long raid is in minutes
     * @returns List of  exit changes to send to client
     */
    protected getExitAdjustments(mapBase: ILocationBase, newRaidTimeMinutes: number): ExtractChange[];
}
