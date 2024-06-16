import type { BotGenerator } from "../generators/BotGenerator.ts";
import type { BotGeneratorHelper } from "../helpers/BotGeneratorHelper.ts";
import type { BotHelper } from "../helpers/BotHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IBotBase, Skills, Stats } from "../models/eft/common/tables/IBotBase.ts";
import type { IBotType } from "../models/eft/common/tables/IBotType.ts";
import type { IPlayerScavConfig, KarmaLevel } from "../models/spt/config/IPlayerScavConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { BotLootCacheService } from "../services/BotLootCacheService.ts";
import type { FenceService } from "../services/FenceService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class PlayerScavGenerator {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected hashUtil: HashUtil;
    protected itemHelper: ItemHelper;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected saveServer: SaveServer;
    protected profileHelper: ProfileHelper;
    protected botHelper: BotHelper;
    protected jsonUtil: JsonUtil;
    protected fenceService: FenceService;
    protected botLootCacheService: BotLootCacheService;
    protected localisationService: LocalisationService;
    protected botGenerator: BotGenerator;
    protected configServer: ConfigServer;
    protected playerScavConfig: IPlayerScavConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, databaseServer: DatabaseServer, hashUtil: HashUtil, itemHelper: ItemHelper, botGeneratorHelper: BotGeneratorHelper, saveServer: SaveServer, profileHelper: ProfileHelper, botHelper: BotHelper, jsonUtil: JsonUtil, fenceService: FenceService, botLootCacheService: BotLootCacheService, localisationService: LocalisationService, botGenerator: BotGenerator, configServer: ConfigServer);
    /**
     * Update a player profile to include a new player scav profile
     * @param sessionID session id to specify what profile is updated
     * @returns profile object
     */
    generate(sessionID: string): IPmcData;
    /**
     * Add items picked from `playerscav.lootItemsToAddChancePercent`
     * @param possibleItemsToAdd dict of tpl + % chance to be added
     * @param scavData
     * @param containersToAddTo Possible slotIds to add loot to
     */
    protected addAdditionalLootToPlayerScavContainers(possibleItemsToAdd: Record<string, number>, scavData: IBotBase, containersToAddTo: string[]): void;
    /**
     * Get the scav karama level for a profile
     * Is also the fence trader rep level
     * @param pmcData pmc profile
     * @returns karma level
     */
    protected getScavKarmaLevel(pmcData: IPmcData): number;
    /**
     * Get a baseBot template
     * If the parameter doesnt match "assault", take parts from the loot type and apply to the return bot template
     * @param botTypeForLoot bot type to use for inventory/chances
     * @returns IBotType object
     */
    protected constructBotBaseTemplate(botTypeForLoot: string): IBotType;
    /**
     * Adjust equipment/mod/item generation values based on scav karma levels
     * @param karmaSettings Values to modify the bot template with
     * @param baseBotNode bot template to modify according to karama level settings
     */
    protected adjustBotTemplateWithKarmaSpecificSettings(karmaSettings: KarmaLevel, baseBotNode: IBotType): void;
    protected getScavSkills(scavProfile: IPmcData): Skills;
    protected getDefaultScavSkills(): Skills;
    protected getScavStats(scavProfile: IPmcData): Stats;
    protected getScavLevel(scavProfile: IPmcData): number;
    protected getScavExperience(scavProfile: IPmcData): number;
    /**
     * Set cooldown till pscav is playable
     * take into account scav cooldown bonus
     * @param scavData scav profile
     * @param pmcData pmc profile
     * @returns
     */
    protected setScavCooldownTimer(scavData: IPmcData, pmcData: IPmcData): IPmcData;
}
