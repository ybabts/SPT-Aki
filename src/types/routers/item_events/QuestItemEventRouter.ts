import type { QuestCallbacks } from "../../callbacks/QuestCallbacks.ts";
import type { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.ts";
import type { IPmcData } from "../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { ILogger } from "../../models/spt/utils/ILogger.ts";
export declare class QuestItemEventRouter extends ItemEventRouterDefinition {
    protected logger: ILogger;
    protected questCallbacks: QuestCallbacks;
    constructor(logger: ILogger, questCallbacks: QuestCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(eventAction: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
