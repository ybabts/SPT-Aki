import type { ItemEventRouterDefinition } from "../di/Router.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { IItemEventRouterRequest } from "../models/eft/itemEvent/IItemEventRouterRequest.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
export declare class ItemEventRouter {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected profileHelper: ProfileHelper;
    protected itemEventRouters: ItemEventRouterDefinition[];
    protected localisationService: LocalisationService;
    protected eventOutputHolder: EventOutputHolder;
    constructor(logger: ILogger, jsonUtil: JsonUtil, profileHelper: ProfileHelper, itemEventRouters: ItemEventRouterDefinition[], localisationService: LocalisationService, eventOutputHolder: EventOutputHolder);
    /**
     * @param info Event request
     * @param sessionID Session id
     * @returns Item response
     */
    handleEvents(info: IItemEventRouterRequest, sessionID: string): IItemEventRouterResponse;
}
