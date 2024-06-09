import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { ISuit } from "../../../models/eft/common/tables/ITrader.d.ts";
import { IBuyClothingRequestData } from "../../../models/eft/customization/IBuyClothingRequestData.d.ts";
import { IWearClothingRequestData } from "../../../models/eft/customization/IWearClothingRequestData.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
export interface ICustomizationCallbacks {
    getSuits(url: string, info: any, sessionID: string): IGetBodyResponseData<any>;
    getTraderSuits(url: string, info: any, sessionID: string): IGetBodyResponseData<ISuit[]>;
    wearClothing(pmcData: IPmcData, body: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    buyClothing(pmcData: IPmcData, body: IBuyClothingRequestData, sessionID: string): IItemEventRouterResponse;
}
