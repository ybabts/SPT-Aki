import type { MatchController } from "../controllers/MatchController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../models/eft/httpResponse/INullResponseData.ts";
import type { IAcceptGroupInviteRequest } from "../models/eft/match/IAcceptGroupInviteRequest.ts";
import type { IAcceptGroupInviteResponse } from "../models/eft/match/IAcceptGroupInviteResponse.ts";
import type { ICancelGroupInviteRequest } from "../models/eft/match/ICancelGroupInviteRequest.ts";
import type { IDeclineGroupInviteRequest } from "../models/eft/match/IDeclineGroupInviteRequest.ts";
import type { IEndOfflineRaidRequestData } from "../models/eft/match/IEndOfflineRaidRequestData.ts";
import type { IGetGroupStatusRequestData } from "../models/eft/match/IGetGroupStatusRequestData.ts";
import type { IGetGroupStatusResponse } from "../models/eft/match/IGetGroupStatusResponse.ts";
import type { IGetRaidConfigurationRequestData } from "../models/eft/match/IGetRaidConfigurationRequestData.ts";
import type { IJoinMatchRequestData } from "../models/eft/match/IJoinMatchRequestData.ts";
import type { IJoinMatchResult } from "../models/eft/match/IJoinMatchResult.ts";
import type { IPutMetricsRequestData } from "../models/eft/match/IPutMetricsRequestData.ts";
import type { IRemovePlayerFromGroupRequest } from "../models/eft/match/IRemovePlayerFromGroupRequest.ts";
import type { ISendGroupInviteRequest } from "../models/eft/match/ISendGroupInviteRequest.ts";
import type { ITransferGroupRequest } from "../models/eft/match/ITransferGroupRequest.ts";
import type { IUpdatePingRequestData } from "../models/eft/match/IUpdatePingRequestData.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
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
