import { IChatCommand, ICommandoCommand } from "../../helpers/Dialogue/Commando/IChatCommand.d.ts";
import { IDialogueChatBot } from "../../helpers/Dialogue/IDialogueChatBot.d.ts";
import { ISendMessageRequest } from "../../models/eft/dialog/ISendMessageRequest.d.ts";
import { IUserDialogInfo } from "../../models/eft/profile/IAkiProfile.d.ts";
import { ILogger } from "../../models/spt/utils/ILogger.d.ts";
import { MailSendService } from "../../services/MailSendService.d.ts";
export declare abstract class AbstractDialogueChatBot implements IDialogueChatBot {
    protected logger: ILogger;
    protected mailSendService: MailSendService;
    protected chatCommands: IChatCommand[] | ICommandoCommand[];
    constructor(logger: ILogger, mailSendService: MailSendService, chatCommands: IChatCommand[] | ICommandoCommand[]);
    /**
     * @deprecated As of v3.7.6. Use registerChatCommand.
     */
    registerCommandoCommand(chatCommand: IChatCommand | ICommandoCommand): void;
    registerChatCommand(chatCommand: IChatCommand | ICommandoCommand): void;
    abstract getChatBot(): IUserDialogInfo;
    protected abstract getUnrecognizedCommandMessage(): string;
    handleMessage(sessionId: string, request: ISendMessageRequest): string;
}
