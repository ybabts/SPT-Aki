import { RepairCallbacks } from "../../callbacks/RepairCallbacks.d.ts";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.d.ts";
import { IPmcData } from "../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
export declare class RepairItemEventRouter extends ItemEventRouterDefinition {
    protected repairCallbacks: RepairCallbacks;
    constructor(repairCallbacks: RepairCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
