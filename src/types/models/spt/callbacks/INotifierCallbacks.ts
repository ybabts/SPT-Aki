import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IUIDRequestData } from "../../../models/eft/common/request/IUIDRequestData.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INotifierChannel } from "../../../models/eft/notifier/INotifier.ts";
export interface INotifierCallbacks {
    /**
     * If we don't have anything to send, it's ok to not send anything back
     * because notification requests can be long-polling. In fact, we SHOULD wait
     * until we actually have something to send because otherwise we'd spam the client
     * and the client would abort the connection due to spam.
     */
    sendNotification(sessionID: string, req: any, resp: any, data: any): void;
    getNotifier(url: string, info: any, sessionID: string): IGetBodyResponseData<any[]>;
    createNotifierChannel(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<INotifierChannel>;
    selectProfile(url: string, info: IUIDRequestData, sessionID: string): IGetBodyResponseData<any>;
    notify(url: string, info: any, sessionID: string): string;
}
