import type { IDialogueChatBot } from "../../helpers/Dialogue/IDialogueChatBot.ts";
import type { ProfileHelper } from "../../helpers/ProfileHelper.ts";
import type { ISendMessageRequest } from "../../models/eft/dialog/ISendMessageRequest.ts";
import type { IUserDialogInfo } from "../../models/eft/profile/IAkiProfile.ts";
import type { ICoreConfig } from "../../models/spt/config/ICoreConfig.ts";
import type { IWeatherConfig } from "../../models/spt/config/IWeatherConfig.ts";
import type { ConfigServer } from "../../servers/ConfigServer.ts";
import type { GiftService } from "../../services/GiftService.ts";
import type { MailSendService } from "../../services/MailSendService.ts";
import type { RandomUtil } from "../../utils/RandomUtil.ts";
export declare class SptDialogueChatBot implements IDialogueChatBot {
    protected profileHelper: ProfileHelper;
    protected randomUtil: RandomUtil;
    protected mailSendService: MailSendService;
    protected giftService: GiftService;
    protected configServer: ConfigServer;
    protected coreConfig: ICoreConfig;
    protected weatherConfig: IWeatherConfig;
    constructor(profileHelper: ProfileHelper, randomUtil: RandomUtil, mailSendService: MailSendService, giftService: GiftService, configServer: ConfigServer);
    getChatBot(): IUserDialogInfo;
    /**
     * Send responses back to player when they communicate with SPT friend on friends list
     * @param sessionId Session Id
     * @param request send message request
     */
    handleMessage(sessionId: string, request: ISendMessageRequest): string;
}
