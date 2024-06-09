import { MessageType } from "../../enums/MessageType.d.ts";
export interface ISendMessageRequest {
    dialogId: string;
    type: MessageType;
    text: string;
    replyTo: string;
}
