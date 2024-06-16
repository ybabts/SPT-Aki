import type { DialogueHelper } from "../helpers/DialogueHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { NotificationSendHelper } from "../helpers/NotificationSendHelper.ts";
import type { NotifierHelper } from "../helpers/NotifierHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { Dialogue, IUserDialogInfo, Message, MessageItems } from "../models/eft/profile/IAkiProfile.ts";
import type { MessageType } from "../models/enums/MessageType.ts";
import type { Traders } from "../models/enums/Traders.ts";
import type { IProfileChangeEvent, ISendMessageDetails } from "../models/spt/dialog/ISendMessageDetails.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class MailSendService {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected notifierHelper: NotifierHelper;
    protected dialogueHelper: DialogueHelper;
    protected notificationSendHelper: NotificationSendHelper;
    protected localisationService: LocalisationService;
    protected itemHelper: ItemHelper;
    protected traderHelper: TraderHelper;
    protected readonly systemSenderId = "59e7125688a45068a6249071";
    constructor(logger: ILogger, hashUtil: HashUtil, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, notifierHelper: NotifierHelper, dialogueHelper: DialogueHelper, notificationSendHelper: NotificationSendHelper, localisationService: LocalisationService, itemHelper: ItemHelper, traderHelper: TraderHelper);
    /**
     * Send a message from an NPC (e.g. prapor) to the player with or without items using direct message text, do not look up any locale
     * @param sessionId The session ID to send the message to
     * @param trader The trader sending the message
     * @param messageType What type the message will assume (e.g. QUEST_SUCCESS)
     * @param message Text to send to the player
     * @param items Optional items to send to player
     * @param maxStorageTimeSeconds Optional time to collect items before they expire
     */
    sendDirectNpcMessageToPlayer(sessionId: string, trader: Traders, messageType: MessageType, message: string, items?: Item[], maxStorageTimeSeconds?: any, systemData?: any, ragfair?: any): void;
    /**
     * Send a message from an NPC (e.g. prapor) to the player with or without items
     * @param sessionId The session ID to send the message to
     * @param trader The trader sending the message
     * @param messageType What type the message will assume (e.g. QUEST_SUCCESS)
     * @param messageLocaleId The localised text to send to player
     * @param items Optional items to send to player
     * @param maxStorageTimeSeconds Optional time to collect items before they expire
     */
    sendLocalisedNpcMessageToPlayer(sessionId: string, trader: Traders, messageType: MessageType, messageLocaleId: string, items?: Item[], maxStorageTimeSeconds?: any, systemData?: any, ragfair?: any): void;
    /**
     * Send a message from SYSTEM to the player with or without items
     * @param sessionId The session ID to send the message to
     * @param message The text to send to player
     * @param items Optional items to send to player
     * @param maxStorageTimeSeconds Optional time to collect items before they expire
     */
    sendSystemMessageToPlayer(sessionId: string, message: string, items?: Item[], maxStorageTimeSeconds?: number, profileChangeEvents?: IProfileChangeEvent[]): void;
    /**
     * Send a message from SYSTEM to the player with or without items with localised text
     * @param sessionId The session ID to send the message to
     * @param messageLocaleId Id of key from locale file to send to player
     * @param items Optional items to send to player
     * @param maxStorageTimeSeconds Optional time to collect items before they expire
     */
    sendLocalisedSystemMessageToPlayer(sessionId: string, messageLocaleId: string, items?: Item[], profileChangeEvents?: IProfileChangeEvent[], maxStorageTimeSeconds?: number): void;
    /**
     * Send a USER message to a player with or without items
     * @param sessionId The session ID to send the message to
     * @param senderId Who is sending the message
     * @param message The text to send to player
     * @param items Optional items to send to player
     * @param maxStorageTimeSeconds Optional time to collect items before they expire
     */
    sendUserMessageToPlayer(sessionId: string, senderDetails: IUserDialogInfo, message: string, items?: Item[], maxStorageTimeSeconds?: any): void;
    /**
     * Large function to send messages to players from a variety of sources (SYSTEM/NPC/USER)
     * Helper functions in this class are available to simplify common actions
     * @param messageDetails Details needed to send a message to the player
     */
    sendMessageToPlayer(messageDetails: ISendMessageDetails): void;
    /**
     * Send a message from the player to an NPC
     * @param sessionId Player id
     * @param targetNpcId NPC message is sent to
     * @param message Text to send to NPC
     */
    sendPlayerMessageToNpc(sessionId: string, targetNpcId: string, message: string): void;
    /**
     * Create a message for storage inside a dialog in the player profile
     * @param senderDialog Id of dialog that will hold the message
     * @param messageDetails Various details on what the message must contain/do
     * @returns Message
     */
    protected createDialogMessage(dialogId: string, messageDetails: ISendMessageDetails): Message;
    /**
     * Add items to message and adjust various properties to reflect the items being added
     * @param message Message to add items to
     * @param itemsToSendToPlayer Items to add to message
     * @param maxStorageTimeSeconds total time items are stored in mail before being deleted
     */
    protected addRewardItemsToMessage(message: Message, itemsToSendToPlayer: MessageItems, maxStorageTimeSeconds: number): void;
    /**
     * perform various sanitising actions on the items before they're considered ready for insertion into message
     * @param dialogType The type of the dialog that will hold the reward items being processed
     * @param messageDetails
     * @returns Sanitised items
     */
    protected processItemsBeforeAddingToMail(dialogType: MessageType, messageDetails: ISendMessageDetails): MessageItems;
    /**
     * Try to find the most correct item to be the 'primary' item in a reward mail
     * @param items Possible items to choose from
     * @returns Chosen 'primary' item
     */
    protected getBaseItemFromRewards(items: Item[]): Item;
    /**
     * Get a dialog with a specified entity (user/trader)
     * Create and store empty dialog if none exists in profile
     * @param messageDetails Data on what message should do
     * @returns Relevant Dialogue
     */
    protected getDialog(messageDetails: ISendMessageDetails): Dialogue;
    /**
     * Get the appropriate sender id by the sender enum type
     * @param messageDetails
     * @returns gets an id of the individual sending it
     */
    protected getMessageSenderIdByType(messageDetails: ISendMessageDetails): string;
}
