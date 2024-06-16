import type { ApplicationContext } from "../context/ApplicationContext.ts";
import type { HideoutHelper } from "../helpers/HideoutHelper.ts";
import type { HttpServerHelper } from "../helpers/HttpServerHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { PreAkiModLoader } from "../loaders/PreAkiModLoader.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { ICheckVersionResponse } from "../models/eft/game/ICheckVersionResponse.ts";
import type { ICurrentGroupResponse } from "../models/eft/game/ICurrentGroupResponse.ts";
import type { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse.ts";
import type { IGameKeepAliveResponse } from "../models/eft/game/IGameKeepAliveResponse.ts";
import type { IGetRaidTimeRequest } from "../models/eft/game/IGetRaidTimeRequest.ts";
import type { IGetRaidTimeResponse } from "../models/eft/game/IGetRaidTimeResponse.ts";
import type { IServerDetails } from "../models/eft/game/IServerDetails.ts";
import type { IAkiProfile } from "../models/eft/profile/IAkiProfile.ts";
import type { IBotConfig } from "../models/spt/config/IBotConfig.ts";
import type { ICoreConfig } from "../models/spt/config/ICoreConfig.ts";
import type { IHideoutConfig } from "../models/spt/config/IHideoutConfig.ts";
import type { IHttpConfig } from "../models/spt/config/IHttpConfig.ts";
import type { ILocationConfig } from "../models/spt/config/ILocationConfig.ts";
import type { ILootConfig } from "../models/spt/config/ILootConfig.ts";
import type { IPmcConfig } from "../models/spt/config/IPmcConfig.ts";
import type { IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { CustomLocationWaveService } from "../services/CustomLocationWaveService.ts";
import type { GiftService } from "../services/GiftService.ts";
import type { ItemBaseClassService } from "../services/ItemBaseClassService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { OpenZoneService } from "../services/OpenZoneService.ts";
import type { ProfileActivityService } from "../services/ProfileActivityService.ts";
import type { ProfileFixerService } from "../services/ProfileFixerService.ts";
import type { RaidTimeAdjustmentService } from "../services/RaidTimeAdjustmentService.ts";
import type { SeasonalEventService } from "../services/SeasonalEventService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class GameController {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected jsonUtil: JsonUtil;
    protected timeUtil: TimeUtil;
    protected hashUtil: HashUtil;
    protected preAkiModLoader: PreAkiModLoader;
    protected httpServerHelper: HttpServerHelper;
    protected randomUtil: RandomUtil;
    protected hideoutHelper: HideoutHelper;
    protected profileHelper: ProfileHelper;
    protected profileFixerService: ProfileFixerService;
    protected localisationService: LocalisationService;
    protected customLocationWaveService: CustomLocationWaveService;
    protected openZoneService: OpenZoneService;
    protected seasonalEventService: SeasonalEventService;
    protected itemBaseClassService: ItemBaseClassService;
    protected giftService: GiftService;
    protected raidTimeAdjustmentService: RaidTimeAdjustmentService;
    protected profileActivityService: ProfileActivityService;
    protected applicationContext: ApplicationContext;
    protected configServer: ConfigServer;
    protected httpConfig: IHttpConfig;
    protected coreConfig: ICoreConfig;
    protected locationConfig: ILocationConfig;
    protected ragfairConfig: IRagfairConfig;
    protected hideoutConfig: IHideoutConfig;
    protected pmcConfig: IPmcConfig;
    protected lootConfig: ILootConfig;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, jsonUtil: JsonUtil, timeUtil: TimeUtil, hashUtil: HashUtil, preAkiModLoader: PreAkiModLoader, httpServerHelper: HttpServerHelper, randomUtil: RandomUtil, hideoutHelper: HideoutHelper, profileHelper: ProfileHelper, profileFixerService: ProfileFixerService, localisationService: LocalisationService, customLocationWaveService: CustomLocationWaveService, openZoneService: OpenZoneService, seasonalEventService: SeasonalEventService, itemBaseClassService: ItemBaseClassService, giftService: GiftService, raidTimeAdjustmentService: RaidTimeAdjustmentService, profileActivityService: ProfileActivityService, applicationContext: ApplicationContext, configServer: ConfigServer);
    load(): void;
    /**
     * Handle client/game/start
     */
    gameStart(_url: string, _info: IEmptyRequestData, sessionID: string, startTimeStampMS: number): void;
    protected adjustHideoutCraftTimes(): void;
    protected adjustHideoutBuildTimes(): void;
    protected adjustLocationBotValues(): void;
    /**
     * Out of date/incorrectly made trader mods forget this data
     */
    protected checkTraderRepairValuesExist(): void;
    protected addCustomLooseLootPositions(): void;
    protected adjustLooseLootSpawnProbabilities(): void;
    /** Apply custom limits on bot types as defined in configs/location.json/botTypeLimits */
    protected adjustMapBotLimits(): void;
    /**
     * Handle client/game/config
     */
    getGameConfig(sessionID: string): IGameConfigResponse;
    /**
     * Handle client/server/list
     */
    getServer(sessionId: string): IServerDetails[];
    /**
     * Handle client/match/group/current
     */
    getCurrentGroup(sessionId: string): ICurrentGroupResponse;
    /**
     * Handle client/checkVersion
     */
    getValidGameVersion(sessionId: string): ICheckVersionResponse;
    /**
     * Handle client/game/keepalive
     */
    getKeepAlive(sessionId: string): IGameKeepAliveResponse;
    /**
     * Handle singleplayer/settings/getRaidTime
     */
    getRaidTime(sessionId: string, request: IGetRaidTimeRequest): IGetRaidTimeResponse;
    /**
     * BSG have two values for shotgun dispersion, we make sure both have the same value
     */
    protected fixShotgunDispersions(): void;
    /**
     * Players set botReload to a high value and don't expect the crazy fast reload speeds, give them a warn about it
     * @param pmcProfile Player profile
     */
    protected warnOnActiveBotReloadSkill(pmcProfile: IPmcData): void;
    protected flagAllItemsInDbAsSellableOnFlea(): void;
    /**
     * When player logs in, iterate over all active effects and reduce timer
     * @param pmcProfile Profile to adjust values for
     */
    protected updateProfileHealthValues(pmcProfile: IPmcData): void;
    /**
     * Waves with an identical min/max values spawn nothing, the number of bots that spawn is the difference between min and max
     */
    protected fixBrokenOfflineMapWaves(): void;
    /**
     * Make Rogues spawn later to allow for scavs to spawn first instead of rogues filling up all spawn positions
     */
    protected fixRoguesSpawningInstantlyOnLighthouse(): void;
    /**
     * Send starting gifts to profile after x days
     * @param pmcProfile Profile to add gifts to
     */
    protected sendPraporGiftsToNewProfiles(pmcProfile: IPmcData): void;
    /**
     * Find and split waves with large numbers of bots into smaller waves - BSG appears to reduce the size of these
     * waves to one bot when they're waiting to spawn for too long
     */
    protected splitBotWavesIntoSingleWaves(): void;
    /**
     * Get a list of installed mods and save their details to the profile being used
     * @param fullProfile Profile to add mod details to
     */
    protected saveActiveModsToProfile(fullProfile: IAkiProfile): void;
    /**
     * Check for any missing assorts inside each traders assort.json data, checking against traders questassort.json
     */
    protected validateQuestAssortUnlocksExist(): void;
    /**
     * Add the logged in players name to PMC name pool
     * @param pmcProfile Profile of player to get name from
     */
    protected addPlayerToPMCNames(pmcProfile: IPmcData): void;
    /**
     * Check for a dialog with the key 'undefined', and remove it
     * @param fullProfile Profile to check for dialog in
     */
    protected checkForAndRemoveUndefinedDialogs(fullProfile: IAkiProfile): void;
    /**
     * Blank out the "test" mail message from prapor
     */
    protected removePraporTestMessage(): void;
    /**
     * Make non-trigger-spawned raiders spawn earlier + always
     */
    protected adjustLabsRaiderSpawnRate(): void;
    protected logProfileDetails(fullProfile: IAkiProfile): void;
}
