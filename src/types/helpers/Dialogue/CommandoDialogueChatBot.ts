import type { AbstractDialogueChatBot } from "../../helpers/Dialogue/AbstractDialogueChatBot.ts";
import type { IChatCommand } from "../../helpers/Dialogue/Commando/IChatCommand.ts";
import type { IUserDialogInfo } from "../../models/eft/profile/IAkiProfile.ts";
import type { ILogger } from "../../models/spt/utils/ILogger.ts";
import type { MailSendService } from "../../services/MailSendService.ts";
export declare class CommandoDialogueChatBot extends AbstractDialogueChatBot {
    constructor(logger: ILogger, mailSendService: MailSendService, chatCommands: IChatCommand[]);
    getChatBot(): IUserDialogInfo;
    protected getUnrecognizedCommandMessage(): string;
}
