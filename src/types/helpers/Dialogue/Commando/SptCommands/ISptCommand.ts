import type { ISendMessageRequest } from "../../../../models/eft/dialog/ISendMessageRequest.ts";
import type { IUserDialogInfo } from "../../../.././models/eft/profile/IAkiProfile.ts";
export interface ISptCommand {
    getCommand(): string;
    getCommandHelp(): string;
    performAction(commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string;
}
