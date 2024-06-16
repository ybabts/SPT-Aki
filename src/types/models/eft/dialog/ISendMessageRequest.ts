import type { MessageType } from "../../enums/MessageType.ts";
export interface ISendMessageRequest {
    dialogId: string;
    type: MessageType;
    text: string;
    replyTo: string;
}
