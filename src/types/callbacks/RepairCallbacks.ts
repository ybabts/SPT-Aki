import type { RepairController } from "../controllers/RepairController.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IRepairActionDataRequest } from "../models/eft/repair/IRepairActionDataRequest.ts";
import type { ITraderRepairActionDataRequest } from "../models/eft/repair/ITraderRepairActionDataRequest.ts";
export declare class RepairCallbacks {
    protected repairController: RepairController;
    constructor(repairController: RepairController);
    /**
     * Handle TraderRepair event
     * use trader to repair item
     * @param pmcData Player profile
     * @param traderRepairRequest Request object
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    traderRepair(pmcData: IPmcData, traderRepairRequest: ITraderRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle Repair event
     * Use repair kit to repair item
     * @param pmcData Player profile
     * @param repairRequest Request object
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    repair(pmcData: IPmcData, repairRequest: IRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
}
