import type { MessageType } from "../../../models/enums/MessageType.ts";
export interface IGetMailDialogViewRequestData {
    type: MessageType;
    dialogId: string;
    limit: number;
    time: number;
}
