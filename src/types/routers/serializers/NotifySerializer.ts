import type { IncomingMessage, ServerResponse } from "node:http";
import type { NotifierController } from "../../controllers/NotifierController.ts";
import type { Serializer } from "../../di/Serializer.ts";
import type { HttpServerHelper } from "../../helpers/HttpServerHelper.ts";
import type { JsonUtil } from "../../utils/JsonUtil.ts";
export declare class NotifySerializer extends Serializer {
    protected notifierController: NotifierController;
    protected jsonUtil: JsonUtil;
    protected httpServerHelper: HttpServerHelper;
    constructor(notifierController: NotifierController, jsonUtil: JsonUtil, httpServerHelper: HttpServerHelper);
    serialize(_sessionID: string, req: IncomingMessage, resp: ServerResponse, _: any): void;
    canHandle(route: string): boolean;
}
