import type { RagfairCallbacks } from "../../callbacks/RagfairCallbacks.ts";
import type { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.ts";
import type { IPmcData } from "../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.ts";
export declare class RagfairItemEventRouter extends ItemEventRouterDefinition {
    protected ragfairCallbacks: RagfairCallbacks;
    constructor(ragfairCallbacks: RagfairCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
