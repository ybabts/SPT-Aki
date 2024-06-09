import { AbstractDialogueChatBot } from "../../helpers/Dialogue/AbstractDialogueChatBot.d.ts";
import { IChatCommand } from "../../helpers/Dialogue/Commando/IChatCommand.d.ts";
import { IUserDialogInfo } from "../../models/eft/profile/IAkiProfile.d.ts";
import { ILogger } from "../../models/spt/utils/ILogger.d.ts";
import { MailSendService } from "../../services/MailSendService.d.ts";
export declare class CommandoDialogueChatBot extends AbstractDialogueChatBot {
    constructor(logger: ILogger, mailSendService: MailSendService, chatCommands: IChatCommand[]);
    getChatBot(): IUserDialogInfo;
    protected getUnrecognizedCommandMessage(): string;
}
