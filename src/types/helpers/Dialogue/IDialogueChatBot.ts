import type { ISendMessageRequest } from "../../models/eft/dialog/ISendMessageRequest.ts";
import type { IUserDialogInfo } from "../../models/eft/profile/IAkiProfile.ts";
export interface IDialogueChatBot {
    getChatBot(): IUserDialogInfo;
    handleMessage(sessionId: string, request: ISendMessageRequest): string;
}
