import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { Warning } from "../models/eft/itemEvent/IItemEventRouterBase.d.ts";
import { IItemEventRouterRequest } from "../models/eft/itemEvent/IItemEventRouterRequest.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { ItemEventRouter } from "../routers/ItemEventRouter.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
