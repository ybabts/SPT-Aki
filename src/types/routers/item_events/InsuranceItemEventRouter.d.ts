import { InsuranceCallbacks } from "../../callbacks/InsuranceCallbacks.d.ts";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.d.ts";
import { IPmcData } from "../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
export declare class InsuranceItemEventRouter extends ItemEventRouterDefinition {
    protected insuranceCallbacks: InsuranceCallbacks;
    constructor(insuranceCallbacks: InsuranceCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
