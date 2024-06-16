import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { ISuit } from "../../../models/eft/common/tables/ITrader.ts";
import type { IBuyClothingRequestData } from "../../../models/eft/customization/IBuyClothingRequestData.ts";
import type { IWearClothingRequestData } from "../../../models/eft/customization/IWearClothingRequestData.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
export interface ICustomizationCallbacks {
    getSuits(url: string, info: any, sessionID: string): IGetBodyResponseData<any>;
    getTraderSuits(url: string, info: any, sessionID: string): IGetBodyResponseData<ISuit[]>;
    wearClothing(pmcData: IPmcData, body: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    buyClothing(pmcData: IPmcData, body: IBuyClothingRequestData, sessionID: string): IItemEventRouterResponse;
}
