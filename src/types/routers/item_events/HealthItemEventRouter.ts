import type { HealthCallbacks } from "../../callbacks/HealthCallbacks.ts";
import type { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.ts";
import type { IPmcData } from "../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.ts";
export declare class HealthItemEventRouter extends ItemEventRouterDefinition {
    protected healthCallbacks: HealthCallbacks;
    constructor(healthCallbacks: HealthCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
