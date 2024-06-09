import { ApplicationContext } from "../context/ApplicationContext.d.ts";
import { LocationGenerator } from "../generators/LocationGenerator.d.ts";
import { LootGenerator } from "../generators/LootGenerator.d.ts";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper.d.ts";
import { ILocationBase } from "../models/eft/common/ILocationBase.d.ts";
import { ILocationsGenerateAllResponse } from "../models/eft/common/ILocationsSourceDestinationBase.d.ts";
import { IAirdropLootResult } from "../models/eft/location/IAirdropLootResult.d.ts";
import { IGetLocationRequestData } from "../models/eft/location/IGetLocationRequestData.d.ts";
import { AirdropTypeEnum } from "../models/enums/AirdropType.d.ts";
import { IAirdropConfig } from "../models/spt/config/IAirdropConfig.d.ts";
import { ILocationConfig } from "../models/spt/config/ILocationConfig.d.ts";
import { LootRequest } from "../models/spt/services/LootRequest.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { ItemFilterService } from "../services/ItemFilterService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { RaidTimeAdjustmentService } from "../services/RaidTimeAdjustmentService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
