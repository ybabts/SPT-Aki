import type { IncomingMessage, ServerResponse } from "node:http";
import type { Serializer } from "../../di/Serializer.ts";
import type { ILogger } from "../../models/spt/utils/ILogger.ts";
import type { HttpRouter } from "../../routers/HttpRouter.ts";
import type { IHttpListener } from "../../servers/http/IHttpListener.ts";
import type { LocalisationService } from "../../services/LocalisationService.ts";
import type { HttpResponseUtil } from "../../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../../utils/JsonUtil.ts";
import type { Buffer } from "node:buffer";
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
