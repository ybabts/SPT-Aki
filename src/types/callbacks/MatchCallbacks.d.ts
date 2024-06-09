import { MatchController } from "../controllers/MatchController.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData.d.ts";
import { IAcceptGroupInviteRequest } from "../models/eft/match/IAcceptGroupInviteRequest.d.ts";
import { IAcceptGroupInviteResponse } from "../models/eft/match/IAcceptGroupInviteResponse.d.ts";
import { ICancelGroupInviteRequest } from "../models/eft/match/ICancelGroupInviteRequest.d.ts";
import { IDeclineGroupInviteRequest } from "../models/eft/match/IDeclineGroupInviteRequest.d.ts";
import { IEndOfflineRaidRequestData } from "../models/eft/match/IEndOfflineRaidRequestData.d.ts";
import { IGetGroupStatusRequestData } from "../models/eft/match/IGetGroupStatusRequestData.d.ts";
import { IGetGroupStatusResponse } from "../models/eft/match/IGetGroupStatusResponse.d.ts";
import { IGetRaidConfigurationRequestData } from "../models/eft/match/IGetRaidConfigurationRequestData.d.ts";
import { IJoinMatchRequestData } from "../models/eft/match/IJoinMatchRequestData.d.ts";
import { IJoinMatchResult } from "../models/eft/match/IJoinMatchResult.d.ts";
import { IPutMetricsRequestData } from "../models/eft/match/IPutMetricsRequestData.d.ts";
import { IRemovePlayerFromGroupRequest } from "../models/eft/match/IRemovePlayerFromGroupRequest.d.ts";
import { ISendGroupInviteRequest } from "../models/eft/match/ISendGroupInviteRequest.d.ts";
import { ITransferGroupRequest } from "../models/eft/match/ITransferGroupRequest.d.ts";
import { IUpdatePingRequestData } from "../models/eft/match/IUpdatePingRequestData.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
export declare class MatchCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected jsonUtil: JsonUtil;
    protected matchController: MatchController;
    protected databaseServer: DatabaseServer;
    constructor(httpResponse: HttpResponseUtil, jsonUtil: JsonUtil, matchController: MatchController, databaseServer: DatabaseServer);
    /** Handle client/match/updatePing */
    updatePing(url: string, info: IUpdatePingRequestData, sessionID: string): INullResponseData;
    exitMatch(url: string, info: IEmptyRequestData, sessionID: string): INullResponseData;
    /** Handle client/match/group/exit_from_menu */
    exitToMenu(url: string, info: IEmptyRequestData, sessionID: string): INullResponseData;
    startGroupSearch(url: string, info: IEmptyRequestData, sessionID: string): INullResponseData;
    stopGroupSearch(url: string, info: IEmptyRequestData, sessionID: string): INullResponseData;
    /** Handle client/match/group/invite/send */
    sendGroupInvite(url: string, info: ISendGroupInviteRequest, sessionID: string): IGetBodyResponseData<string>;
    /** Handle client/match/group/invite/accept */
    acceptGroupInvite(url: string, info: IAcceptGroupInviteRequest, sessionID: string): IGetBodyResponseData<IAcceptGroupInviteResponse[]>;
    /** Handle client/match/group/invite/decline */
    declineGroupInvite(url: string, info: IDeclineGroupInviteRequest, sessionID: string): IGetBodyResponseData<any>;
    /** Handle client/match/group/invite/cancel */
    cancelGroupInvite(url: string, info: ICancelGroupInviteRequest, sessionID: string): IGetBodyResponseData<boolean>;
    /** Handle client/match/group/transfer */
    transferGroup(url: string, info: ITransferGroupRequest, sessionID: string): IGetBodyResponseData<boolean>;
    /** Handle client/match/group/invite/cancel-all */
    cancelAllGroupInvite(url: string, info: IEmptyRequestData, sessionID: string): INullResponseData;
    /** @deprecated - not called on raid start/end or game start/exit */
    putMetrics(url: string, info: IPutMetricsRequestData, sessionID: string): INullResponseData;
    serverAvailable(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<boolean>;
    /** Handle match/group/start_game */
    joinMatch(url: string, info: IJoinMatchRequestData, sessionID: string): IGetBodyResponseData<IJoinMatchResult>;
    /** Handle client/getMetricsConfig */
    getMetrics(url: string, info: any, sessionID: string): IGetBodyResponseData<string>;
    /**
     * Called periodically while in a group
     * Handle client/match/group/status
     * @returns
     */
    getGroupStatus(url: string, info: IGetGroupStatusRequestData, sessionID: string): IGetBodyResponseData<IGetGroupStatusResponse>;
    /** Handle client/match/group/delete */
    deleteGroup(url: string, info: any, sessionID: string): INullResponseData;
    leaveGroup(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<boolean>;
    /** Handle client/match/group/player/remove */
    removePlayerFromGroup(url: string, info: IRemovePlayerFromGroupRequest, sessionID: string): INullResponseData;
    /** Handle client/match/offline/end */
    endOfflineRaid(url: string, info: IEndOfflineRaidRequestData, sessionID: string): INullResponseData;
    /** Handle client/raid/configuration */
    getRaidConfiguration(url: string, info: IGetRaidConfigurationRequestData, sessionID: string): INullResponseData;
    /** Handle client/raid/configuration-by-profile */
    getConfigurationByProfile(url: string, info: IGetRaidConfigurationRequestData, sessionID: string): INullResponseData;
}
