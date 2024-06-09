import { ApplicationContext } from "../context/ApplicationContext.d.ts";
import { HideoutHelper } from "../helpers/HideoutHelper.d.ts";
import { HttpServerHelper } from "../helpers/HttpServerHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { PreAkiModLoader } from "../loaders/PreAkiModLoader.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { ICheckVersionResponse } from "../models/eft/game/ICheckVersionResponse.d.ts";
import { ICurrentGroupResponse } from "../models/eft/game/ICurrentGroupResponse.d.ts";
import { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse.d.ts";
import { IGameKeepAliveResponse } from "../models/eft/game/IGameKeepAliveResponse.d.ts";
import { IGetRaidTimeRequest } from "../models/eft/game/IGetRaidTimeRequest.d.ts";
import { IGetRaidTimeResponse } from "../models/eft/game/IGetRaidTimeResponse.d.ts";
import { IServerDetails } from "../models/eft/game/IServerDetails.d.ts";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile.d.ts";
import { IBotConfig } from "../models/spt/config/IBotConfig.d.ts";
import { ICoreConfig } from "../models/spt/config/ICoreConfig.d.ts";
import { IHideoutConfig } from "../models/spt/config/IHideoutConfig.d.ts";
import { IHttpConfig } from "../models/spt/config/IHttpConfig.d.ts";
import { ILocationConfig } from "../models/spt/config/ILocationConfig.d.ts";
import { ILootConfig } from "../models/spt/config/ILootConfig.d.ts";
import { IPmcConfig } from "../models/spt/config/IPmcConfig.d.ts";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { CustomLocationWaveService } from "../services/CustomLocationWaveService.d.ts";
import { GiftService } from "../services/GiftService.d.ts";
import { ItemBaseClassService } from "../services/ItemBaseClassService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { OpenZoneService } from "../services/OpenZoneService.d.ts";
import { ProfileActivityService } from "../services/ProfileActivityService.d.ts";
import { ProfileFixerService } from "../services/ProfileFixerService.d.ts";
import { RaidTimeAdjustmentService } from "../services/RaidTimeAdjustmentService.d.ts";
import { SeasonalEventService } from "../services/SeasonalEventService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
