import type { Item } from "../../../models/eft/common/tables/IItem.ts";
import type { ISystemData, IUserDialogInfo, MessageContentRagfair } from "../../../models/eft/profile/IAkiProfile.ts";
import type { MessageType } from "../../../models/enums/MessageType.ts";
import type { Traders } from "../../../models/enums/Traders.ts";
export interface ISendMessageDetails {
    /** Player id */
    recipientId: string;
    /** Who is sending this message */
    sender: MessageType;
    /** Optional - leave blank to use sender value */
    dialogType?: MessageType;
    /** Optional - if sender is USER these details are used */
    senderDetails?: IUserDialogInfo;
    /** Optional - the trader sending the message */
    trader?: Traders;
    /** Optional - used in player/system messages, otherwise templateId is used */
    messageText?: string;
    /** Optinal - Items to send to player */
    items?: Item[];
    /** Optional - How long items will be stored in mail before expiry */
    itemsMaxStorageLifetimeSeconds?: number;
    /** Optional - Used when sending messages from traders who send text from locale json */
    templateId?: string;
    /** Optional - ragfair related */
    systemData?: ISystemData;
    /** Optional - Used by ragfair messages */
    ragfairDetails?: MessageContentRagfair;
    /** OPTIONAL - allows modification of profile settings via mail */
    profileChangeEvents?: IProfileChangeEvent[];
}
export interface IProfileChangeEvent {
    _id: string;
    Type: ProfileChangeEventType;
    value: number;
    entity?: string;
}
export declare enum ProfileChangeEventType {
    TRADER_SALES_SUM = "TraderSalesSum",
    TRADER_STANDING = "TraderStanding",
    PROFILE_LEVEL = "ProfileLevel",
    SKILL_POINTS = "SkillPoints",
    EXAMINE_ALL_ITEMS = "ExamineAllItems",
    UNLOCK_TRADER = "UnlockTrader"
}
