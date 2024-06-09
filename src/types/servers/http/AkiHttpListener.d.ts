import { IncomingMessage, ServerResponse } from "node:http";
import { Serializer } from "../../di/Serializer.d.ts";
import { ILogger } from "../../models/spt/utils/ILogger.d.ts";
import { HttpRouter } from "../../routers/HttpRouter.d.ts";
import { IHttpListener } from "../../servers/http/IHttpListener.d.ts";
import { LocalisationService } from "../../services/LocalisationService.d.ts";
import { HttpResponseUtil } from "../../utils/HttpResponseUtil.d.ts";
import { JsonUtil } from "../../utils/JsonUtil.d.ts";
import { Buffer } from "node:buffer";
export declare class AkiHttpListener implements IHttpListener {
    protected httpRouter: HttpRouter;
    protected serializers: Serializer[];
    protected logger: ILogger;
    protected requestsLogger: ILogger;
    protected jsonUtil: JsonUtil;
    protected httpResponse: HttpResponseUtil;
    protected localisationService: LocalisationService;
    constructor(httpRouter: HttpRouter, // TODO: delay required
        serializers: Serializer[], logger: ILogger, requestsLogger: ILogger, jsonUtil: JsonUtil, httpResponse: HttpResponseUtil, localisationService: LocalisationService);
    canHandle(_: string, req: IncomingMessage): boolean;
    handle(sessionId: string, req: IncomingMessage, resp: ServerResponse): void;
    /**
     * Send http response to the client
     * @param sessionID Player id
     * @param req Incoming request
     * @param resp Outgoing response
     * @param body Buffer
     * @param output Server generated response data
     */
    sendResponse(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: Buffer, output: string): void;
    getResponse(sessionID: string, req: IncomingMessage, body: Buffer): string;
    protected getBodyInfo(body: Buffer, requestUrl?: any): any;
    sendJson(resp: ServerResponse, output: string, sessionID: string): void;
    sendZlibJson(resp: ServerResponse, output: string, sessionID: string): void;
}
