import { ISendMessageRequest } from "../../models/eft/dialog/ISendMessageRequest.d.ts";
import { IUserDialogInfo } from "../../models/eft/profile/IAkiProfile.d.ts";
export interface IDialogueChatBot {
    getChatBot(): IUserDialogInfo;
    handleMessage(sessionId: string, request: ISendMessageRequest): string;
}
