import { HideoutCallbacks } from "../../callbacks/HideoutCallbacks.d.ts";
import { InventoryCallbacks } from "../../callbacks/InventoryCallbacks.d.ts";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.d.ts";
import { IPmcData } from "../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
export declare class InventoryItemEventRouter extends ItemEventRouterDefinition {
    protected inventoryCallbacks: InventoryCallbacks;
    protected hideoutCallbacks: HideoutCallbacks;
    constructor(inventoryCallbacks: InventoryCallbacks, hideoutCallbacks: HideoutCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
}
