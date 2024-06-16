import type { RagfairController } from "../controllers/RagfairController.ts";
import type { OnLoad } from "../di/OnLoad.ts";
import type { OnUpdate } from "../di/OnUpdate.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../models/eft/httpResponse/INullResponseData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IAddOfferRequestData } from "../models/eft/ragfair/IAddOfferRequestData.ts";
import type { IExtendOfferRequestData } from "../models/eft/ragfair/IExtendOfferRequestData.ts";
import type { IGetItemPriceResult } from "../models/eft/ragfair/IGetItemPriceResult.ts";
import type { IGetMarketPriceRequestData } from "../models/eft/ragfair/IGetMarketPriceRequestData.ts";
import type { IGetOffersResult } from "../models/eft/ragfair/IGetOffersResult.ts";
import type { IGetRagfairOfferByIdRequest } from "../models/eft/ragfair/IGetRagfairOfferByIdRequest.ts";
import type { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.ts";
import type { IRemoveOfferRequestData } from "../models/eft/ragfair/IRemoveOfferRequestData.ts";
import type { ISearchRequestData } from "../models/eft/ragfair/ISearchRequestData.ts";
import type { ISendRagfairReportRequestData } from "../models/eft/ragfair/ISendRagfairReportRequestData.ts";
import type { IStorePlayerOfferTaxAmountRequestData } from "../models/eft/ragfair/IStorePlayerOfferTaxAmountRequestData.ts";
import type { IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { RagfairServer } from "../servers/RagfairServer.ts";
import type { RagfairTaxService } from "../services/RagfairTaxService.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
/**
 * Handle ragfair related callback events
 */
export declare class RagfairCallbacks implements OnLoad, OnUpdate {
    protected httpResponse: HttpResponseUtil;
    protected jsonUtil: JsonUtil;
    protected ragfairServer: RagfairServer;
    protected ragfairController: RagfairController;
    protected ragfairTaxService: RagfairTaxService;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    constructor(httpResponse: HttpResponseUtil, jsonUtil: JsonUtil, ragfairServer: RagfairServer, ragfairController: RagfairController, ragfairTaxService: RagfairTaxService, configServer: ConfigServer);
    onLoad(): Promise<void>;
    getRoute(): string;
    onUpdate(timeSinceLastRun: number): Promise<boolean>;
    /**
     * Handle client/ragfair/search
     * Handle client/ragfair/find
     */
    search(url: string, info: ISearchRequestData, sessionID: string): IGetBodyResponseData<IGetOffersResult>;
    /** Handle client/ragfair/itemMarketPrice */
    getMarketPrice(url: string, info: IGetMarketPriceRequestData, sessionID: string): IGetBodyResponseData<IGetItemPriceResult>;
    /** Handle RagFairAddOffer event */
    addOffer(pmcData: IPmcData, info: IAddOfferRequestData, sessionID: string): IItemEventRouterResponse;
    /** Handle RagFairRemoveOffer event */
    removeOffer(pmcData: IPmcData, info: IRemoveOfferRequestData, sessionID: string): IItemEventRouterResponse;
    /** Handle RagFairRenewOffer event */
    extendOffer(pmcData: IPmcData, info: IExtendOfferRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle /client/items/prices
     * Called when clicking an item to list on flea
     */
    getFleaPrices(url: string, request: IEmptyRequestData, sessionID: string): IGetBodyResponseData<Record<string, number>>;
    /** Handle client/reports/ragfair/send */
    sendReport(url: string, info: ISendRagfairReportRequestData, sessionID: string): INullResponseData;
    storePlayerOfferTaxAmount(url: string, request: IStorePlayerOfferTaxAmountRequestData, sessionId: string): INullResponseData;
    /** Handle client/ragfair/offer/findbyid */
    getFleaOfferById(url: string, request: IGetRagfairOfferByIdRequest, sessionID: string): IGetBodyResponseData<IRagfairOffer>;
}
