import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { QuestHelper } from "../helpers/QuestHelper.ts";
import type { RepairHelper } from "../helpers/RepairHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IRepairActionDataRequest } from "../models/eft/repair/IRepairActionDataRequest.ts";
import type { ITraderRepairActionDataRequest } from "../models/eft/repair/ITraderRepairActionDataRequest.ts";
import type { IRepairConfig } from "../models/spt/config/IRepairConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { PaymentService } from "../services/PaymentService.ts";
import type { RepairService } from "../services/RepairService.ts";
export declare class RepairController {
    protected logger: ILogger;
    protected eventOutputHolder: EventOutputHolder;
    protected databaseServer: DatabaseServer;
    protected questHelper: QuestHelper;
    protected traderHelper: TraderHelper;
    protected paymentService: PaymentService;
    protected repairHelper: RepairHelper;
    protected repairService: RepairService;
    protected profileHelper: ProfileHelper;
    protected repairConfig: IRepairConfig;
    constructor(logger: ILogger, eventOutputHolder: EventOutputHolder, databaseServer: DatabaseServer, questHelper: QuestHelper, traderHelper: TraderHelper, paymentService: PaymentService, repairHelper: RepairHelper, repairService: RepairService, profileHelper: ProfileHelper);
    /**
     * Handle TraderRepair event
     * Repair with trader
     * @param sessionID session id
     * @param body endpoint request data
     * @param pmcData player profile
     * @returns item event router action
     */
    traderRepair(sessionID: string, body: ITraderRepairActionDataRequest, pmcData: IPmcData): IItemEventRouterResponse;
    /**
     * Handle Repair event
     * Repair with repair kit
     * @param sessionID session id
     * @param body endpoint request data
     * @param pmcData player profile
     * @returns item event router action
     */
    repairWithKit(sessionID: string, body: IRepairActionDataRequest, pmcData: IPmcData): IItemEventRouterResponse;
}
