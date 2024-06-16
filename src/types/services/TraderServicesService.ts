import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { ITraderServiceModel } from "../models/spt/services/ITraderServiceModel.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
export declare class TraderServicesService {
    protected profileHelper: ProfileHelper;
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    constructor(profileHelper: ProfileHelper, jsonUtil: JsonUtil, logger: ILogger, databaseServer: DatabaseServer);
    getTraderServices(sessionId: string, traderId: string): ITraderServiceModel[];
}
