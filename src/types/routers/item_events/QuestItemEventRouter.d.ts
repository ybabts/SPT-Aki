import { QuestCallbacks } from "../../callbacks/QuestCallbacks.d.ts";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.d.ts";
import { IPmcData } from "../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { ILogger } from "../../models/spt/utils/ILogger.d.ts";
export declare class QuestItemEventRouter extends ItemEventRouterDefinition {
    protected logger: ILogger;
    protected questCallbacks: QuestCallbacks;
    constructor(logger: ILogger, questCallbacks: QuestCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(eventAction: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
