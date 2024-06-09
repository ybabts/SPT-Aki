import { TradeCallbacks } from "../../callbacks/TradeCallbacks.d.ts";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.d.ts";
import { IPmcData } from "../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
export declare class TradeItemEventRouter extends ItemEventRouterDefinition {
    protected tradeCallbacks: TradeCallbacks;
    constructor(tradeCallbacks: TradeCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
