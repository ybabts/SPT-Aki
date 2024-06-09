import { RepairController } from "../controllers/RepairController.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IRepairActionDataRequest } from "../models/eft/repair/IRepairActionDataRequest.d.ts";
import { ITraderRepairActionDataRequest } from "../models/eft/repair/ITraderRepairActionDataRequest.d.ts";
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
