import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class PlayerService {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected localisationService: LocalisationService;
    protected databaseServer: DatabaseServer;
    constructor(logger: ILogger, timeUtil: TimeUtil, localisationService: LocalisationService, databaseServer: DatabaseServer);
    /**
     * Get level of player
     * @param pmcData Player profile
     * @returns Level of player
     */
    calculateLevel(pmcData: IPmcData): number;
}
