import { DialogueController } from "../controllers/DialogueController.d.ts";
import { OnUpdate } from "../di/OnUpdate.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IUIDRequestData } from "../models/eft/common/request/IUIDRequestData.d.ts";
import { IAcceptFriendRequestData, ICancelFriendRequestData, IDeclineFriendRequestData } from "../models/eft/dialog/IAcceptFriendRequestData.d.ts";
import { IChatServer } from "../models/eft/dialog/IChatServer.d.ts";
import { IClearMailMessageRequest } from "../models/eft/dialog/IClearMailMessageRequest.d.ts";
import { IDeleteFriendRequest } from "../models/eft/dialog/IDeleteFriendRequest.d.ts";
import { IFriendRequestData } from "../models/eft/dialog/IFriendRequestData.d.ts";
import { IFriendRequestSendResponse } from "../models/eft/dialog/IFriendRequestSendResponse.d.ts";
import { IGetAllAttachmentsRequestData } from "../models/eft/dialog/IGetAllAttachmentsRequestData.d.ts";
import { IGetAllAttachmentsResponse } from "../models/eft/dialog/IGetAllAttachmentsResponse.d.ts";
import { IGetChatServerListRequestData } from "../models/eft/dialog/IGetChatServerListRequestData.d.ts";
import { IGetFriendListDataResponse } from "../models/eft/dialog/IGetFriendListDataResponse.d.ts";
import { IGetMailDialogInfoRequestData } from "../models/eft/dialog/IGetMailDialogInfoRequestData.d.ts";
import { IGetMailDialogListRequestData } from "../models/eft/dialog/IGetMailDialogListRequestData.d.ts";
import { IGetMailDialogViewRequestData } from "../models/eft/dialog/IGetMailDialogViewRequestData.d.ts";
import { IGetMailDialogViewResponseData } from "../models/eft/dialog/IGetMailDialogViewResponseData.d.ts";
import { IPinDialogRequestData } from "../models/eft/dialog/IPinDialogRequestData.d.ts";
import { IRemoveDialogRequestData } from "../models/eft/dialog/IRemoveDialogRequestData.d.ts";
import { IRemoveMailMessageRequest } from "../models/eft/dialog/IRemoveMailMessageRequest.d.ts";
import { ISendMessageRequest } from "../models/eft/dialog/ISendMessageRequest.d.ts";
import { ISetDialogReadRequestData } from "../models/eft/dialog/ISetDialogReadRequestData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData.d.ts";
import { DialogueInfo } from "../models/eft/profile/IAkiProfile.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
