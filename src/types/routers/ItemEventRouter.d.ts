import { ItemEventRouterDefinition } from "../di/Router.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { IItemEventRouterRequest } from "../models/eft/itemEvent/IItemEventRouterRequest.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
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
