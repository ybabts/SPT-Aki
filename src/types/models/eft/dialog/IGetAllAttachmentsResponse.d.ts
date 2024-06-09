import { Message } from "../profile/IAkiProfile.d.ts";
export interface IGetAllAttachmentsResponse {
    messages: Message[];
    profiles: any[];
    hasMessagesWithRewards: boolean;
}
