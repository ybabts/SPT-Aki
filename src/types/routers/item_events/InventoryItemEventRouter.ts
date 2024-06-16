import type { HideoutCallbacks } from "../../callbacks/HideoutCallbacks.ts";
import type { InventoryCallbacks } from "../../callbacks/InventoryCallbacks.ts";
import type { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.ts";
import type { IPmcData } from "../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.ts";
export declare class InventoryItemEventRouter extends ItemEventRouterDefinition {
    protected inventoryCallbacks: InventoryCallbacks;
    protected hideoutCallbacks: HideoutCallbacks;
    constructor(inventoryCallbacks: InventoryCallbacks, hideoutCallbacks: HideoutCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
}
