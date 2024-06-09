import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
