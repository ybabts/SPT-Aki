import type { DialogueHelper } from "../helpers/DialogueHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { MemberCategory } from "../models/enums/MemberCategory.ts";
import type { IQuestConfig } from "../models/spt/config/IQuestConfig.ts";
import type { IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { ItemFilterService } from "../services/ItemFilterService.ts";
import type { LocaleService } from "../services/LocaleService.ts";
import type { MailSendService } from "../services/MailSendService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
/**
 * Helper class for common ragfair server actions
 */
export declare class RagfairServerHelper {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected profileHelper: ProfileHelper;
    protected itemHelper: ItemHelper;
    protected localeService: LocaleService;
    protected dialogueHelper: DialogueHelper;
    protected traderHelper: TraderHelper;
    protected jsonUtil: JsonUtil;
    protected mailSendService: MailSendService;
    protected itemFilterService: ItemFilterService;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    protected questConfig: IQuestConfig;
    protected static goodsReturnedTemplate: string;
    constructor(logger: ILogger, randomUtil: RandomUtil, hashUtil: HashUtil, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, profileHelper: ProfileHelper, itemHelper: ItemHelper, localeService: LocaleService, dialogueHelper: DialogueHelper, traderHelper: TraderHelper, jsonUtil: JsonUtil, mailSendService: MailSendService, itemFilterService: ItemFilterService, configServer: ConfigServer);
    /**
     * Is item valid / on blacklist / quest item
     * @param itemDetails
     * @returns boolean
     */
    isItemValidRagfairItem(itemDetails: [boolean, ITemplateItem]): boolean;
    /**
     * Is supplied item tpl on the ragfair custom blacklist from configs/ragfair.json/dynamic
     * @param itemTemplateId Item tpl to check is blacklisted
     * @returns True if its blacklsited
     */
    protected isItemOnCustomFleaBlacklist(itemTemplateId: string): boolean;
    /**
     * Is supplied parent id on the ragfair custom item category blacklist
     * @param parentId Parent Id to check is blacklisted
     * @returns true if blacklisted
     */
    protected isItemCategoryOnCustomFleaBlacklist(itemParentId: string): boolean;
    /**
     * is supplied id a trader
     * @param traderId
     * @returns True if id was a trader
     */
    isTrader(traderId: string): boolean;
    /**
     * Is this user id the logged in player
     * @param userId Id to test
     * @returns True is the current player
     */
    isPlayer(userId: string): boolean;
    /**
     * Send items back to player
     * @param sessionID Player to send items to
     * @param returnedItems Items to send to player
     */
    returnItems(sessionID: string, returnedItems: Item[]): void;
    calculateDynamicStackCount(tplId: string, isWeaponPreset: boolean): number;
    /**
     * Choose a currency at random with bias
     * @returns currency tpl
     */
    getDynamicOfferCurrency(): string;
    getMemberType(userID: string): MemberCategory;
    /**
     * Get a player or traders nickname from their profile by their user id
     * @param userID Sessionid/userid
     * @returns Nickname of individual
     */
    getNickname(userID: string): string;
    /**
     * Given a preset id from globals.json, return an array of items[] with unique ids
     * @param item Preset item
     * @returns Array of weapon and its children
     */
    getPresetItems(item: Item): Item[];
    /**
     * Possible bug, returns all items associated with an items tpl, could be multiple presets from globals.json
     * @param item Preset item
     * @returns
     */
    getPresetItemsByTpl(item: Item): Item[];
}
