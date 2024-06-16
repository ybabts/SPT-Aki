import type { ApplicationContext } from "../context/ApplicationContext.ts";
import type { LocationGenerator } from "../generators/LocationGenerator.ts";
import type { LootGenerator } from "../generators/LootGenerator.ts";
import type { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.ts";
import type { ILocationBase } from "../models/eft/common/ILocationBase.ts";
import type { ILocationsGenerateAllResponse } from "../models/eft/common/ILocationsSourceDestinationBase.ts";
import type { IAirdropLootResult } from "../models/eft/location/IAirdropLootResult.ts";
import type { IGetLocationRequestData } from "../models/eft/location/IGetLocationRequestData.ts";
import type { AirdropTypeEnum } from "../models/enums/AirdropType.ts";
import type { IAirdropConfig } from "../models/spt/config/IAirdropConfig.ts";
import type { ILocationConfig } from "../models/spt/config/ILocationConfig.ts";
import type { LootRequest } from "../models/spt/services/LootRequest.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { ItemFilterService } from "../services/ItemFilterService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { RaidTimeAdjustmentService } from "../services/RaidTimeAdjustmentService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class LocationController {
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected logger: ILogger;
    protected locationGenerator: LocationGenerator;
    protected localisationService: LocalisationService;
    protected raidTimeAdjustmentService: RaidTimeAdjustmentService;
    protected itemFilterService: ItemFilterService;
    protected lootGenerator: LootGenerator;
    protected databaseServer: DatabaseServer;
    protected timeUtil: TimeUtil;
    protected configServer: ConfigServer;
    protected applicationContext: ApplicationContext;
    protected airdropConfig: IAirdropConfig;
    protected locationConfig: ILocationConfig;
    constructor(jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, weightedRandomHelper: WeightedRandomHelper, logger: ILogger, locationGenerator: LocationGenerator, localisationService: LocalisationService, raidTimeAdjustmentService: RaidTimeAdjustmentService, itemFilterService: ItemFilterService, lootGenerator: LootGenerator, databaseServer: DatabaseServer, timeUtil: TimeUtil, configServer: ConfigServer, applicationContext: ApplicationContext);
    /**
     * Handle client/location/getLocalloot
     * Get a location (map) with generated loot data
     * @param sessionId Player id
     * @param request Map request to generate
     * @returns ILocationBase
     */
    get(sessionId: string, request: IGetLocationRequestData): ILocationBase;
    /**
     * Generate a maps base location with loot
     * @param name Map name
     * @returns ILocationBase
     */
    protected generate(name: string): ILocationBase;
    /**
     * Handle client/locations
     * Get all maps base location properties without loot data
     * @param sessionId Players Id
     * @returns ILocationsGenerateAllResponse
     */
    generateAll(sessionId: string): ILocationsGenerateAllResponse;
    /**
     * Handle client/location/getAirdropLoot
     * Get loot for an airdrop container
     * Generates it randomly based on config/airdrop.json values
     * @returns Array of LootItem objects
     */
    getAirdropLoot(): IAirdropLootResult;
    /**
     * Randomly pick a type of airdrop loot using weighted values from config
     * @returns airdrop type value
     */
    protected chooseAirdropType(): AirdropTypeEnum;
    /**
     * Get the configuration for a specific type of airdrop
     * @param airdropType Type of airdrop to get settings for
     * @returns LootRequest
     */
    protected getAirdropLootConfigByType(airdropType: AirdropTypeEnum): LootRequest;
}
