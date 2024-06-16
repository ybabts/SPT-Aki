import type { TradeCallbacks } from "../../callbacks/TradeCallbacks.ts";
import type { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.ts";
import type { IPmcData } from "../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.ts";
export declare class TradeItemEventRouter extends ItemEventRouterDefinition {
    protected tradeCallbacks: TradeCallbacks;
    constructor(tradeCallbacks: TradeCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
