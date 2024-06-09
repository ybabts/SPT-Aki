import { IDialogueChatBot } from "../../helpers/Dialogue/IDialogueChatBot.d.ts";
import { ProfileHelper } from "../../helpers/ProfileHelper.d.ts";
import { ISendMessageRequest } from "../../models/eft/dialog/ISendMessageRequest.d.ts";
import { IUserDialogInfo } from "../../models/eft/profile/IAkiProfile.d.ts";
import { ICoreConfig } from "../../models/spt/config/ICoreConfig.d.ts";
import { IWeatherConfig } from "../../models/spt/config/IWeatherConfig.d.ts";
import { ConfigServer } from "../../servers/ConfigServer.d.ts";
import { GiftService } from "../../services/GiftService.d.ts";
import { MailSendService } from "../../services/MailSendService.d.ts";
import { RandomUtil } from "../../utils/RandomUtil.d.ts";
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
