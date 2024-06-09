import { BotGenerator } from "../generators/BotGenerator.d.ts";
import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper.d.ts";
import { BotHelper } from "../helpers/BotHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IBotBase, Skills, Stats } from "../models/eft/common/tables/IBotBase.d.ts";
import { IBotType } from "../models/eft/common/tables/IBotType.d.ts";
import { IPlayerScavConfig, KarmaLevel } from "../models/spt/config/IPlayerScavConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { BotLootCacheService } from "../services/BotLootCacheService.d.ts";
import { FenceService } from "../services/FenceService.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
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
