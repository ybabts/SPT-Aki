import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { GiftSentResult } from "../models/enums/GiftSentResult.d.ts";
import { MessageType } from "../models/enums/MessageType.d.ts";
import { Gift, IGiftsConfig } from "../models/spt/config/IGiftsConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { MailSendService } from "../services/MailSendService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
export declare class GiftService {
    protected logger: ILogger;
    protected mailSendService: MailSendService;
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected profileHelper: ProfileHelper;
    protected configServer: ConfigServer;
    protected giftConfig: IGiftsConfig;
    constructor(logger: ILogger, mailSendService: MailSendService, hashUtil: HashUtil, timeUtil: TimeUtil, profileHelper: ProfileHelper, configServer: ConfigServer);
    /**
     * Does a gift with a specific ID exist in db
     * @param giftId Gift id to check for
     * @returns True if it exists in  db
     */
    giftExists(giftId: string): boolean;
    /**
     * Send player a gift from a range of sources
     * @param playerId Player to send gift to / sessionId
     * @param giftId Id of gift in configs/gifts.json to send player
     * @returns outcome of sending gift to player
     */
    sendGiftToPlayer(playerId: string, giftId: string): GiftSentResult;
    /**
     * Get sender id based on gifts sender type enum
     * @param giftData Gift to send player
     * @returns trader/user/system id
     */
    protected getSenderId(giftData: Gift): string;
    /**
     * Convert GiftSenderType into a dialog MessageType
     * @param giftData Gift to send player
     * @returns MessageType enum value
     */
    protected getMessageType(giftData: Gift): MessageType;
    /**
     * Prapor sends gifts to player for first week after profile creation
     * @param sessionId Player id
     * @param day What day to give gift for
     */
    sendPraporStartingGift(sessionId: string, day: number): void;
}
