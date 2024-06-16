import type { Item } from "../../../models/eft/common/tables/IItem.ts";
import type { IUserDialogInfo } from "../../../models/eft/profile/IAkiProfile.ts";
import type { GiftSenderType } from "../../../models/enums/GiftSenderType.ts";
import type { SeasonalEventType } from "../../../models/enums/SeasonalEventType.ts";
import type { Traders } from "../../../models/enums/Traders.ts";
import type { IBaseConfig } from "../../../models/spt/config/IBaseConfig.ts";
import type { IProfileChangeEvent } from "../dialog/ISendMessageDetails.ts";
export interface IGiftsConfig extends IBaseConfig {
    kind: "aki-gifts";
    gifts: Record<string, Gift>;
}
export interface Gift {
    /** Items to send to player */
    items: Item[];
    /** Who is sending the gift to player */
    sender: GiftSenderType;
    /** Optinal - supply a users id to send from, not necessary when sending from SYSTEM or TRADER */
    senderId?: string;
    senderDetails: IUserDialogInfo;
    /** Optional - supply a trader type to send from, not necessary when sending from SYSTEM or USER */
    trader?: Traders;
    messageText: string;
    /** Optional - if sending text from the client locale file */
    localeTextId?: string;
    /** Optional - Used by Seasonal events to send on specific day */
    timestampToSend?: number;
    associatedEvent: SeasonalEventType;
    collectionTimeHours: number;
    /** Optional, can be used to change profile settings like level/skills */
    profileChangeEvents?: IProfileChangeEvent[];
}
