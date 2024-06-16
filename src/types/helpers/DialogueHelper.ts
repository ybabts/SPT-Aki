import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { NotificationSendHelper } from "../helpers/NotificationSendHelper.ts";
import type { NotifierHelper } from "../helpers/NotifierHelper.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { Dialogue, MessagePreview } from "../models/eft/profile/IAkiProfile.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
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
