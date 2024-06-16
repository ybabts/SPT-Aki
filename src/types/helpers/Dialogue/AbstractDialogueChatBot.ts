import type { IChatCommand, ICommandoCommand } from "../../helpers/Dialogue/Commando/IChatCommand.ts";
import type { IDialogueChatBot } from "../../helpers/Dialogue/IDialogueChatBot.ts";
import type { ISendMessageRequest } from "../../models/eft/dialog/ISendMessageRequest.ts";
import type { IUserDialogInfo } from "../../models/eft/profile/IAkiProfile.ts";
import type { ILogger } from "../../models/spt/utils/ILogger.ts";
import type { MailSendService } from "../../services/MailSendService.ts";
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
