import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IItemEventRouterRequest } from "../../../models/eft/itemEvent/IItemEventRouterRequest.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
export interface IItemEventCallbacks {
    handleEvents(url: string, info: IItemEventRouterRequest, sessionID: string): IGetBodyResponseData<IItemEventRouterResponse>;
}
