import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { Warning } from "../models/eft/itemEvent/IItemEventRouterBase.ts";
import type { IItemEventRouterRequest } from "../models/eft/itemEvent/IItemEventRouterRequest.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { ItemEventRouter } from "../routers/ItemEventRouter.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class ItemEventCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected itemEventRouter: ItemEventRouter;
    constructor(httpResponse: HttpResponseUtil, itemEventRouter: ItemEventRouter);
    handleEvents(url: string, info: IItemEventRouterRequest, sessionID: string): IGetBodyResponseData<IItemEventRouterResponse>;
    /**
     * Return true if the passed in list of warnings contains critical issues
     * @param warnings The list of warnings to check for critical errors
     * @returns
     */
    private isCriticalError;
    protected getErrorCode(warnings: Warning[]): number;
}
