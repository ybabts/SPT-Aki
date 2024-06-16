import type { DialogueController } from "../controllers/DialogueController.ts";
import type { OnUpdate } from "../di/OnUpdate.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IUIDRequestData } from "../models/eft/common/request/IUIDRequestData.ts";
import type { IAcceptFriendRequestData, ICancelFriendRequestData, IDeclineFriendRequestData } from "../models/eft/dialog/IAcceptFriendRequestData.ts";
import type { IChatServer } from "../models/eft/dialog/IChatServer.ts";
import type { IClearMailMessageRequest } from "../models/eft/dialog/IClearMailMessageRequest.ts";
import type { IDeleteFriendRequest } from "../models/eft/dialog/IDeleteFriendRequest.ts";
import type { IFriendRequestData } from "../models/eft/dialog/IFriendRequestData.ts";
import type { IFriendRequestSendResponse } from "../models/eft/dialog/IFriendRequestSendResponse.ts";
import type { IGetAllAttachmentsRequestData } from "../models/eft/dialog/IGetAllAttachmentsRequestData.ts";
import type { IGetAllAttachmentsResponse } from "../models/eft/dialog/IGetAllAttachmentsResponse.ts";
import type { IGetChatServerListRequestData } from "../models/eft/dialog/IGetChatServerListRequestData.ts";
import type { IGetFriendListDataResponse } from "../models/eft/dialog/IGetFriendListDataResponse.ts";
import type { IGetMailDialogInfoRequestData } from "../models/eft/dialog/IGetMailDialogInfoRequestData.ts";
import type { IGetMailDialogListRequestData } from "../models/eft/dialog/IGetMailDialogListRequestData.ts";
import type { IGetMailDialogViewRequestData } from "../models/eft/dialog/IGetMailDialogViewRequestData.ts";
import type { IGetMailDialogViewResponseData } from "../models/eft/dialog/IGetMailDialogViewResponseData.ts";
import type { IPinDialogRequestData } from "../models/eft/dialog/IPinDialogRequestData.ts";
import type { IRemoveDialogRequestData } from "../models/eft/dialog/IRemoveDialogRequestData.ts";
import type { IRemoveMailMessageRequest } from "../models/eft/dialog/IRemoveMailMessageRequest.ts";
import type { ISendMessageRequest } from "../models/eft/dialog/ISendMessageRequest.ts";
import type { ISetDialogReadRequestData } from "../models/eft/dialog/ISetDialogReadRequestData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../models/eft/httpResponse/INullResponseData.ts";
import type { DialogueInfo } from "../models/eft/profile/IAkiProfile.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class DialogueCallbacks implements OnUpdate {
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected httpResponse: HttpResponseUtil;
    protected dialogueController: DialogueController;
    constructor(hashUtil: HashUtil, timeUtil: TimeUtil, httpResponse: HttpResponseUtil, dialogueController: DialogueController);
    /**
     * Handle client/friend/list
     * @returns IGetFriendListDataResponse
     */
    getFriendList(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGetFriendListDataResponse>;
    /**
     * Handle client/chatServer/list
     * @returns IChatServer[]
     */
    getChatServerList(url: string, info: IGetChatServerListRequestData, sessionID: string): IGetBodyResponseData<IChatServer[]>;
    /** Handle client/mail/dialog/list */
    getMailDialogList(url: string, info: IGetMailDialogListRequestData, sessionID: string): IGetBodyResponseData<DialogueInfo[]>;
    /** Handle client/mail/dialog/view */
    getMailDialogView(url: string, info: IGetMailDialogViewRequestData, sessionID: string): IGetBodyResponseData<IGetMailDialogViewResponseData>;
    /** Handle client/mail/dialog/info */
    getMailDialogInfo(url: string, info: IGetMailDialogInfoRequestData, sessionID: string): IGetBodyResponseData<DialogueInfo>;
    /** Handle client/mail/dialog/remove */
    removeDialog(url: string, info: IRemoveDialogRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    /** Handle client/mail/dialog/pin */
    pinDialog(url: string, info: IPinDialogRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    /** Handle client/mail/dialog/unpin */
    unpinDialog(url: string, info: IPinDialogRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    /** Handle client/mail/dialog/read */
    setRead(url: string, info: ISetDialogReadRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    /**
     * Handle client/mail/dialog/getAllAttachments
     * @returns IGetAllAttachmentsResponse
     */
    getAllAttachments(url: string, info: IGetAllAttachmentsRequestData, sessionID: string): IGetBodyResponseData<IGetAllAttachmentsResponse>;
    /** Handle client/mail/msg/send */
    sendMessage(url: string, request: ISendMessageRequest, sessionID: string): IGetBodyResponseData<string>;
    /** Handle client/friend/request/list/outbox */
    listOutbox(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    /**
     * Handle client/friend/request/list/inbox
     */
    listInbox(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any[]>;
    /**
     * Handle client/friend/request/send
     */
    sendFriendRequest(url: string, request: IFriendRequestData, sessionID: string): IGetBodyResponseData<IFriendRequestSendResponse>;
    /**
     * Handle client/friend/request/accept-all
     */
    acceptAllFriendRequests(url: string, request: IEmptyRequestData, sessionID: string): INullResponseData;
    /**
     * Handle client/friend/request/accept
     */
    acceptFriendRequest(url: string, request: IAcceptFriendRequestData, sessionID: string): IGetBodyResponseData<boolean>;
    /**
     * Handle client/friend/request/decline
     */
    declineFriendRequest(url: string, request: IDeclineFriendRequestData, sessionID: string): IGetBodyResponseData<boolean>;
    /**
     * Handle client/friend/request/cancel
     */
    cancelFriendRequest(url: string, request: ICancelFriendRequestData, sessionID: string): IGetBodyResponseData<boolean>;
    /** Handle client/friend/delete */
    deleteFriend(url: string, request: IDeleteFriendRequest, sessionID: string): INullResponseData;
    /** Handle client/friend/ignore/set */
    ignoreFriend(url: string, request: IUIDRequestData, sessionID: string): INullResponseData;
    /** Handle client/friend/ignore/remove */
    unIgnoreFriend(url: string, request: IUIDRequestData, sessionID: string): INullResponseData;
    clearMail(url: string, request: IClearMailMessageRequest, sessionID: string): IGetBodyResponseData<any[]>;
    removeMail(url: string, request: IRemoveMailMessageRequest, sessionID: string): IGetBodyResponseData<any[]>;
    onUpdate(timeSinceLastRun: number): Promise<boolean>;
    getRoute(): string;
}
