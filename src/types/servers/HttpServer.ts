import type { IncomingMessage, ServerResponse } from "node:http";
import type { ApplicationContext } from "../context/ApplicationContext.ts";
import type { HttpServerHelper } from "../helpers/HttpServerHelper.ts";
import type { IHttpConfig } from "../models/spt/config/IHttpConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { IHttpListener } from "../servers/http/IHttpListener.ts";
import type { WebSocketServer } from "../servers/WebSocketServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
export declare class HttpServer {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected httpServerHelper: HttpServerHelper;
    protected localisationService: LocalisationService;
    protected httpListeners: IHttpListener[];
    protected configServer: ConfigServer;
    protected applicationContext: ApplicationContext;
    protected webSocketServer: WebSocketServer;
    protected httpConfig: IHttpConfig;
    protected started: boolean;
    constructor(logger: ILogger, databaseServer: DatabaseServer, httpServerHelper: HttpServerHelper, localisationService: LocalisationService, httpListeners: IHttpListener[], configServer: ConfigServer, applicationContext: ApplicationContext, webSocketServer: WebSocketServer);
    /**
     * Handle server loading event
     */
    load(): void;
    protected handleRequest(req: IncomingMessage, resp: ServerResponse): void;
    /**
     * Check against hardcoded values that determine its from a local address
     * @param remoteAddress Address to check
     * @returns True if its local
     */
    protected isLocalRequest(remoteAddress: string): boolean;
    protected getCookies(req: IncomingMessage): Record<string, string>;
    isStarted(): boolean;
}
