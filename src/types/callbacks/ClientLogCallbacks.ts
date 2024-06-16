import type { ClientLogController } from "../controllers/ClientLogController.ts";
import type { ModLoadOrder } from "../loaders/ModLoadOrder.ts";
import type { INullResponseData } from "../models/eft/httpResponse/INullResponseData.ts";
import type { IClientLogRequest } from "../models/spt/logging/IClientLogRequest.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
/** Handle client logging related events */
export declare class ClientLogCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected clientLogController: ClientLogController;
    protected configServer: ConfigServer;
    protected localisationService: LocalisationService;
    protected modLoadOrder: ModLoadOrder;
    constructor(httpResponse: HttpResponseUtil, clientLogController: ClientLogController, configServer: ConfigServer, localisationService: LocalisationService, modLoadOrder: ModLoadOrder);
    /**
     * Handle /singleplayer/log
     */
    clientLog(url: string, info: IClientLogRequest, sessionID: string): INullResponseData;
    /**
     * Handle /singleplayer/release
     */
    releaseNotes(): string;
    /**
     * Handle /singleplayer/enableBSGlogging
     */
    bsgLogging(): string;
}
