import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IAddOfferRequestData } from "../../../models/eft/ragfair/IAddOfferRequestData.ts";
import type { IExtendOfferRequestData } from "../../../models/eft/ragfair/IExtendOfferRequestData.ts";
import type { IGetItemPriceResult } from "../../../models/eft/ragfair/IGetItemPriceResult.ts";
import type { IGetMarketPriceRequestData } from "../../../models/eft/ragfair/IGetMarketPriceRequestData.ts";
import type { IRemoveOfferRequestData } from "../../../models/eft/ragfair/IRemoveOfferRequestData.ts";
import type { ISearchRequestData } from "../../../models/eft/ragfair/ISearchRequestData.ts";
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
