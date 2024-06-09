import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { ITraderServiceModel } from "../models/spt/services/ITraderServiceModel.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
export declare class TraderServicesService {
    protected profileHelper: ProfileHelper;
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    constructor(profileHelper: ProfileHelper, jsonUtil: JsonUtil, logger: ILogger, databaseServer: DatabaseServer);
    getTraderServices(sessionId: string, traderId: string): ITraderServiceModel[];
}
