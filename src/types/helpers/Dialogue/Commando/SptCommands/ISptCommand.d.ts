import { ISendMessageRequest } from "../../../../models/eft/dialog/ISendMessageRequest.d.ts";
import { IUserDialogInfo } from "../../../.././models/eft/profile/IAkiProfile.d.ts";
export interface ISptCommand {
    getCommand(): string;
    getCommandHelp(): string;
    performAction(commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string;
}
