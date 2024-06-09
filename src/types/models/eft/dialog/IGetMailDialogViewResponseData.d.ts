import { IUserDialogInfo, Message } from "../profile/IAkiProfile.d.ts";
export interface IGetMailDialogViewResponseData {
    messages: Message[];
    profiles: IUserDialogInfo[];
    hasMessagesWithRewards: boolean;
}
