import { IncomingMessage, ServerResponse } from "node:http";
import { NotifierController } from "../../controllers/NotifierController.d.ts";
import { Serializer } from "../../di/Serializer.d.ts";
import { HttpServerHelper } from "../../helpers/HttpServerHelper.d.ts";
import { JsonUtil } from "../../utils/JsonUtil.d.ts";
export declare class NotifySerializer extends Serializer {
    protected notifierController: NotifierController;
    protected jsonUtil: JsonUtil;
    protected httpServerHelper: HttpServerHelper;
    constructor(notifierController: NotifierController, jsonUtil: JsonUtil, httpServerHelper: HttpServerHelper);
    serialize(_sessionID: string, req: IncomingMessage, resp: ServerResponse, _: any): void;
    canHandle(route: string): boolean;
}
