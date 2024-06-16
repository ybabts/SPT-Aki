import type { DialogueHelper } from "../helpers/DialogueHelper.ts";
import type { HandbookHelper } from "../helpers/HandbookHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { SecureContainerHelper } from "../helpers/SecureContainerHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITraderBase } from "../models/eft/common/tables/ITrader.ts";
import type { IInsuredItemsData } from "../models/eft/inRaid/IInsuredItemsData.ts";
import type { ISaveProgressRequestData } from "../models/eft/inRaid/ISaveProgressRequestData.ts";
import type { IInsuranceConfig } from "../models/spt/config/IInsuranceConfig.ts";
import type { ILostOnDeathConfig } from "../models/spt/config/ILostOnDeathConfig.ts";
import type { IInsuranceEquipmentPkg } from "../models/spt/services/IInsuranceEquipmentPkg.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { LocaleService } from "../services/LocaleService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { MailSendService } from "../services/MailSendService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class InsuranceService {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected secureContainerHelper: SecureContainerHelper;
    protected randomUtil: RandomUtil;
    protected itemHelper: ItemHelper;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected traderHelper: TraderHelper;
    protected dialogueHelper: DialogueHelper;
    protected handbookHelper: HandbookHelper;
    protected localisationService: LocalisationService;
    protected localeService: LocaleService;
    protected mailSendService: MailSendService;
    protected configServer: ConfigServer;
    protected insured: Record<string, Record<string, Item[]>>;
    protected insuranceConfig: IInsuranceConfig;
    protected lostOnDeathConfig: ILostOnDeathConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, secureContainerHelper: SecureContainerHelper, randomUtil: RandomUtil, itemHelper: ItemHelper, hashUtil: HashUtil, jsonUtil: JsonUtil, timeUtil: TimeUtil, saveServer: SaveServer, traderHelper: TraderHelper, dialogueHelper: DialogueHelper, handbookHelper: HandbookHelper, localisationService: LocalisationService, localeService: LocaleService, mailSendService: MailSendService, configServer: ConfigServer);
    /**
     * Does player have insurance array
     * @param sessionId Player id
     * @returns True if exists
     */
    insuranceExists(sessionId: string): boolean;
    /**
     * Get all insured items by all traders for a profile
     * @param sessionId Profile id (session id)
     * @returns Item array
     */
    getInsurance(sessionId: string): Record<string, Item[]>;
    /**
     * Get insured items by profile id + trader id
     * @param sessionId Profile id (session id)
     * @param traderId Trader items were insured with
     * @returns Item array
     */
    getInsuranceItems(sessionId: string, traderId: string): Item[];
    resetInsurance(sessionId: string): void;
    /**
     * Sends stored insured items as message to player
     * @param pmcData profile to send insured items to
     * @param sessionID SessionId of current player
     * @param mapId Id of the map player died/exited that caused the insurance to be issued on
     */
    sendInsuredItems(pmcData: IPmcData, sessionID: string, mapId: string): void;
    /**
     * Check all root insured items and remove location property + set slotId to 'hideout'
     * @param sessionId Session id
     * @param traderId Trader id
     */
    protected removeLocationProperty(sessionId: string, traderId: string): void;
    /**
     * Get a timestamp of when insurance items should be sent to player based on trader used to insure
     * Apply insurance return bonus if found in profile
     * @param pmcData Player profile
     * @param trader Trader base used to insure items
     * @returns Timestamp to return items to player in seconds
     */
    protected getInsuranceReturnTimestamp(pmcData: IPmcData, trader: ITraderBase): number;
    /**
     * Create insurance equipment packages that should be sent to the user. The packages should contain items that have
     * been lost in a raid and should be returned to the player through the insurance system.
     *
     * NOTE: We do not have data on items that were dropped in a raid. This means we have to pull item data from the
     *       profile at the start of the raid to return to the player in insurance. Because of this, the item
     *       positioning may differ from the position the item was in when the player died. Apart from removing all
     *       positioning, this is the best we can do. >:{}
     *
     * @param pmcData Player profile
     * @param offraidData Post-raid data
     * @param preRaidGear Pre-raid data
     * @param sessionID Session id
     * @param playerDied Did player die in raid
     * @returns Array of insured items lost in raid
     */
    getGearLostInRaid(pmcData: IPmcData, offraidData: ISaveProgressRequestData, preRaidGear: Item[], sessionID: string, playerDied: boolean): IInsuranceEquipmentPkg[];
    /**
     * Take the insurance item packages within a profile session and ensure that each of the items in that package are
     * not orphaned from their parent ID.
     *
     * @param sessionID The session ID to update insurance equipment packages in.
     * @returns void
     */
    protected adoptOrphanedInsEquipment(sessionID: string): void;
    /**
     * Store lost gear post-raid inside profile, ready for later code to pick it up and mail it
     * @param equipmentPkg Gear to store - generated by getGearLostInRaid()
     */
    storeGearLostInRaidToSendLater(sessionID: string, equipmentPkg: IInsuranceEquipmentPkg[]): void;
    /**
     * Take preraid item and update properties to ensure its ready to be given to player in insurance return mail
     * @param pmcData Player profile
     * @param preRaidItemWithChildren Insured item (with children) as it was pre-raid
     * @param allItemsFromClient Item data when player left raid (durability values)
     * @returns Item (with children) to send to player
     */
    protected getInsuredItemDetails(pmcData: IPmcData, preRaidItem: Item, insuredItemFromClient: IInsuredItemsData): Item;
    /**
     * Reset slotId property to "hideout" when necessary (used to be in )
     * @param pmcData Players pmcData.Inventory.equipment value
     * @param itemToReturn item we will send to player as insurance return
     */
    protected updateSlotIdValue(playerBaseInventoryEquipmentId: string, itemToReturn: Item): void;
    /**
     * Add gear item to InsuredItems array in player profile
     * @param sessionID Session id
     * @param pmcData Player profile
     * @param itemToReturnToPlayer item to store
     * @param traderId Id of trader item was insured with
     */
    protected addGearToSend(gear: IInsuranceEquipmentPkg): void;
    /**
     * Does insurance exist for a player and by trader
     * @param sessionId Player id (session id)
     * @param traderId Trader items insured with
     * @returns True if exists
     */
    protected insuranceTraderArrayExists(sessionId: string, traderId: string): boolean;
    /**
     * Empty out array holding insured items by sessionid + traderid
     * @param sessionId Player id (session id)
     * @param traderId Trader items insured with
     */
    resetInsuranceTraderArray(sessionId: string, traderId: string): void;
    /**
     * Store insured item
     * @param sessionId Player id (session id)
     * @param traderId Trader item insured with
     * @param itemToAdd Insured item (with children)
     */
    addInsuranceItemToArray(sessionId: string, traderId: string, itemToAdd: Item): void;
    /**
     * Get price of insurance * multiplier from config
     * @param pmcData Player profile
     * @param inventoryItem Item to be insured
     * @param traderId Trader item is insured with
     * @returns price in roubles
     */
    getPremium(pmcData: IPmcData, inventoryItem: Item, traderId: string): number;
    /**
     * Returns the ID that should be used for a root-level Item's parentId property value within in the context of insurance.
     *
     * @returns The ID.
     */
    getRootItemParentID(sessionID: string): string;
}
