import type { Message } from "../profile/IAkiProfile.ts";
export interface IGetAllAttachmentsResponse {
    messages: Message[];
    profiles: any[];
    hasMessagesWithRewards: boolean;
}
