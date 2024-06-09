import http, { IncomingMessage } from "node:http";
import WebSocket from "npm:ws";
import { HttpServerHelper } from "../helpers/HttpServerHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { INotification } from "../models/eft/notifier/INotifier.d.ts";
import { IHttpConfig } from "../models/spt/config/IHttpConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
export declare class WebSocketServer {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected configServer: ConfigServer;
    protected localisationService: LocalisationService;
    protected jsonUtil: JsonUtil;
    protected httpServerHelper: HttpServerHelper;
    protected profileHelper: ProfileHelper;
    constructor(logger: ILogger, randomUtil: RandomUtil, configServer: ConfigServer, localisationService: LocalisationService, jsonUtil: JsonUtil, httpServerHelper: HttpServerHelper, profileHelper: ProfileHelper);
    protected httpConfig: IHttpConfig;
    protected defaultNotification: INotification;
    protected webSocketServer: WebSocket.Server;
    protected webSockets: Record<string, WebSocket.WebSocket>;
    protected websocketPingHandler: any;
    getWebSocketServer(): WebSocket.Server;
    getSessionWebSocket(sessionID: string): WebSocket.WebSocket;
    setupWebSocket(httpServer: http.Server): void;
    sendMessage(sessionID: string, output: INotification): void;
    protected getRandomisedMessage(): string;
    isConnectionWebSocket(sessionID: string): boolean;
    protected wsOnConnection(ws: WebSocket.WebSocket, req: IncomingMessage): void;
}
