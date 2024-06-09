import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { NotificationSendHelper } from "../helpers/NotificationSendHelper.d.ts";
import { NotifierHelper } from "../helpers/NotifierHelper.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { Dialogue, MessagePreview } from "../models/eft/profile/IAkiProfile.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
export declare class DialogueHelper {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected notifierHelper: NotifierHelper;
    protected notificationSendHelper: NotificationSendHelper;
    protected localisationService: LocalisationService;
    protected itemHelper: ItemHelper;
    constructor(logger: ILogger, hashUtil: HashUtil, saveServer: SaveServer, databaseServer: DatabaseServer, notifierHelper: NotifierHelper, notificationSendHelper: NotificationSendHelper, localisationService: LocalisationService, itemHelper: ItemHelper);
    /**
     * Get the preview contents of the last message in a dialogue.
     * @param dialogue
     * @returns MessagePreview
     */
    getMessagePreview(dialogue: Dialogue): MessagePreview;
    /**
     * Get the item contents for a particular message.
     * @param messageID
     * @param sessionID
     * @param itemId Item being moved to inventory
     * @returns
     */
    getMessageItemContents(messageID: string, sessionID: string, itemId: string): Item[];
    /**
     * Get the dialogs dictionary for a profile, create if doesnt exist
     * @param sessionId Session/player id
     * @returns Dialog dictionary
     */
    getDialogsForProfile(sessionId: string): Record<string, Dialogue>;
}
