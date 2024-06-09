import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IAddOfferRequestData } from "../../../models/eft/ragfair/IAddOfferRequestData.d.ts";
import { IExtendOfferRequestData } from "../../../models/eft/ragfair/IExtendOfferRequestData.d.ts";
import { IGetItemPriceResult } from "../../../models/eft/ragfair/IGetItemPriceResult.d.ts";
import { IGetMarketPriceRequestData } from "../../../models/eft/ragfair/IGetMarketPriceRequestData.d.ts";
import { IRemoveOfferRequestData } from "../../../models/eft/ragfair/IRemoveOfferRequestData.d.ts";
import { ISearchRequestData } from "../../../models/eft/ragfair/ISearchRequestData.d.ts";
export interface IRagfairCallbacks {
    load(): void;
    search(url: string, info: ISearchRequestData, sessionID: string): IGetBodyResponseData<any>;
    getMarketPrice(url: string, info: IGetMarketPriceRequestData, sessionID: string): IGetBodyResponseData<IGetItemPriceResult>;
    getItemPrices(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    addOffer(pmcData: IPmcData, info: IAddOfferRequestData, sessionID: string): IItemEventRouterResponse;
    removeOffer(pmcData: IPmcData, info: IRemoveOfferRequestData, sessionID: string): IItemEventRouterResponse;
    extendOffer(pmcData: IPmcData, info: IExtendOfferRequestData, sessionID: string): IItemEventRouterResponse;
    update(timeSinceLastRun: number): boolean;
    updatePlayer(timeSinceLastRun: number): boolean;
}
