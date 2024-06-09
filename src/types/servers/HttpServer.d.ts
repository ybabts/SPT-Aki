import { IncomingMessage, ServerResponse } from "node:http";
import { ApplicationContext } from "../context/ApplicationContext.d.ts";
import { HttpServerHelper } from "../helpers/HttpServerHelper.d.ts";
import { IHttpConfig } from "../models/spt/config/IHttpConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { IHttpListener } from "../servers/http/IHttpListener.d.ts";
import { WebSocketServer } from "../servers/WebSocketServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
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
