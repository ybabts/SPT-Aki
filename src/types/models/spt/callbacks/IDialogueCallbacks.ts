import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IFriendRequestData } from "../../../models/eft/dialog/IFriendRequestData.ts";
import type { IGetAllAttachmentsRequestData } from "../../../models/eft/dialog/IGetAllAttachmentsRequestData.ts";
import type { IGetAllAttachmentsResponse } from "../../../models/eft/dialog/IGetAllAttachmentsResponse.ts";
import type { IGetChatServerListRequestData } from "../../../models/eft/dialog/IGetChatServerListRequestData.ts";
import type { IGetFriendListDataResponse } from "../../../models/eft/dialog/IGetFriendListDataResponse.ts";
import type { IGetMailDialogInfoRequestData } from "../../../models/eft/dialog/IGetMailDialogInfoRequestData.ts";
import type { IGetMailDialogListRequestData } from "../../../models/eft/dialog/IGetMailDialogListRequestData.ts";
import type { IGetMailDialogViewRequestData } from "../../../models/eft/dialog/IGetMailDialogViewRequestData.ts";
import type { IGetMailDialogViewResponseData } from "../../../models/eft/dialog/IGetMailDialogViewResponseData.ts";
import type { IPinDialogRequestData } from "../../../models/eft/dialog/IPinDialogRequestData.ts";
import type { IRemoveDialogRequestData } from "../../../models/eft/dialog/IRemoveDialogRequestData.ts";
import type { ISendMessageRequest } from "../../../models/eft/dialog/ISendMessageRequest.ts";
import type { ISetDialogReadRequestData } from "../../../models/eft/dialog/ISetDialogReadRequestData.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../../../models/eft/httpResponse/INullResponseData.ts";
import type { DialogueInfo } from "../../../models/eft/profile/IAkiProfile.ts";
export interface IDialogueCallbacks {
    getFriendList(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGetFriendListDataResponse>;
    getChatServerList(url: string, info: IGetChatServerListRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    getMailDialogList(url: string, info: IGetMailDialogListRequestData, sessionID: string): IGetBodyResponseData<DialogueInfo[]>;
    getMailDialogView(url: string, info: IGetMailDialogViewRequestData, sessionID: string): IGetBodyResponseData<IGetMailDialogViewResponseData>;
    getMailDialogInfo(url: string, info: IGetMailDialogInfoRequestData, sessionID: string): IGetBodyResponseData<any>;
    removeDialog(url: string, info: IRemoveDialogRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    pinDialog(url: string, info: IPinDialogRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    unpinDialog(url: string, info: IPinDialogRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    setRead(url: string, info: ISetDialogReadRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    getAllAttachments(url: string, info: IGetAllAttachmentsRequestData, sessionID: string): IGetBodyResponseData<IGetAllAttachmentsResponse>;
    listOutbox(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    listInbox(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    sendFriendRequest(url: string, request: IFriendRequestData, sessionID: string): INullResponseData;
    sendMessage(url: string, request: ISendMessageRequest, sessionID: string): IGetBodyResponseData<number>;
    update(): boolean;
}
