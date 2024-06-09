import { DialogueHelper } from "../helpers/DialogueHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.d.ts";
import { MemberCategory } from "../models/enums/MemberCategory.d.ts";
import { IQuestConfig } from "../models/spt/config/IQuestConfig.d.ts";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { ItemFilterService } from "../services/ItemFilterService.d.ts";
import { LocaleService } from "../services/LocaleService.d.ts";
import { MailSendService } from "../services/MailSendService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
