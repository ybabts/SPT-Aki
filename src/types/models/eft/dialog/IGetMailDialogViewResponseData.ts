import type { IUserDialogInfo, Message } from "../profile/IAkiProfile.ts";
export interface IGetMailDialogViewResponseData {
    messages: Message[];
    profiles: IUserDialogInfo[];
    hasMessagesWithRewards: boolean;
}
