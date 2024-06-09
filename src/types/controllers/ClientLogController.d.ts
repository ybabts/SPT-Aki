import { IClientLogRequest } from "../models/spt/logging/IClientLogRequest.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
export declare class ClientLogController {
    protected logger: ILogger;
    constructor(logger: ILogger);
    /**
     * Handle /singleplayer/log
     */
    clientLog(logRequest: IClientLogRequest): void;
}
