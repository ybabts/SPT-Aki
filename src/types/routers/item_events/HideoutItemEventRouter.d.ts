import { HideoutCallbacks } from "../../callbacks/HideoutCallbacks.d.ts";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.d.ts";
import { IPmcData } from "../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
export declare class HideoutItemEventRouter extends ItemEventRouterDefinition {
    protected hideoutCallbacks: HideoutCallbacks;
    constructor(hideoutCallbacks: HideoutCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
}
