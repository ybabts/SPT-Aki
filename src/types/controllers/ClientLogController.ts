import type { IClientLogRequest } from "../models/spt/logging/IClientLogRequest.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
export declare class ClientLogController {
    protected logger: ILogger;
    constructor(logger: ILogger);
    /**
     * Handle /singleplayer/log
     */
    clientLog(logRequest: IClientLogRequest): void;
}
