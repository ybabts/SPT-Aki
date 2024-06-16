import type { NotifierController } from "../controllers/NotifierController.ts";
import type { HttpServerHelper } from "../helpers/HttpServerHelper.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IUIDRequestData } from "../models/eft/common/request/IUIDRequestData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INotifierChannel } from "../models/eft/notifier/INotifier.ts";
import type { ISelectProfileResponse } from "../models/eft/notifier/ISelectProfileResponse.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
export declare class NotifierCallbacks {
    protected httpServerHelper: HttpServerHelper;
    protected httpResponse: HttpResponseUtil;
    protected jsonUtil: JsonUtil;
    protected notifierController: NotifierController;
    constructor(httpServerHelper: HttpServerHelper, httpResponse: HttpResponseUtil, jsonUtil: JsonUtil, notifierController: NotifierController);
    /**
     * If we don't have anything to send, it's ok to not send anything back
     * because notification requests can be long-polling. In fact, we SHOULD wait
     * until we actually have something to send because otherwise we'd spam the client
     * and the client would abort the connection due to spam.
     */
    sendNotification(sessionID: string, req: any, resp: any, data: any): void;
    /** Handle push/notifier/get */
    /** Handle push/notifier/getwebsocket */
    getNotifier(url: string, info: any, sessionID: string): IGetBodyResponseData<any[]>;
    /** Handle client/notifier/channel/create */
    createNotifierChannel(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<INotifierChannel>;
    /**
     * Handle client/game/profile/select
     * @returns ISelectProfileResponse
     */
    selectProfile(url: string, info: IUIDRequestData, sessionID: string): IGetBodyResponseData<ISelectProfileResponse>;
    notify(url: string, info: any, sessionID: string): string;
}
