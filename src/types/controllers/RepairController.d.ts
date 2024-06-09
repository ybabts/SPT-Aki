import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { QuestHelper } from "../helpers/QuestHelper.d.ts";
import { RepairHelper } from "../helpers/RepairHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IRepairActionDataRequest } from "../models/eft/repair/IRepairActionDataRequest.d.ts";
import { ITraderRepairActionDataRequest } from "../models/eft/repair/ITraderRepairActionDataRequest.d.ts";
import { IRepairConfig } from "../models/spt/config/IRepairConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { PaymentService } from "../services/PaymentService.d.ts";
import { RepairService } from "../services/RepairService.d.ts";
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
