import { MessageType } from "../../../models/enums/MessageType.d.ts";
export interface IGetMailDialogViewRequestData {
    type: MessageType;
    dialogId: string;
    limit: number;
    time: number;
}
