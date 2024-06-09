import { ClientLogController } from "../controllers/ClientLogController.d.ts";
import { ModLoadOrder } from "../loaders/ModLoadOrder.d.ts";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData.d.ts";
import { IClientLogRequest } from "../models/spt/logging/IClientLogRequest.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
