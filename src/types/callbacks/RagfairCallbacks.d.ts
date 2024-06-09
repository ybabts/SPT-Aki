import { RagfairController } from "../controllers/RagfairController.d.ts";
import { OnLoad } from "../di/OnLoad.d.ts";
import { OnUpdate } from "../di/OnUpdate.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IAddOfferRequestData } from "../models/eft/ragfair/IAddOfferRequestData.d.ts";
import { IExtendOfferRequestData } from "../models/eft/ragfair/IExtendOfferRequestData.d.ts";
import { IGetItemPriceResult } from "../models/eft/ragfair/IGetItemPriceResult.d.ts";
import { IGetMarketPriceRequestData } from "../models/eft/ragfair/IGetMarketPriceRequestData.d.ts";
import { IGetOffersResult } from "../models/eft/ragfair/IGetOffersResult.d.ts";
import { IGetRagfairOfferByIdRequest } from "../models/eft/ragfair/IGetRagfairOfferByIdRequest.d.ts";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.d.ts";
import { IRemoveOfferRequestData } from "../models/eft/ragfair/IRemoveOfferRequestData.d.ts";
import { ISearchRequestData } from "../models/eft/ragfair/ISearchRequestData.d.ts";
import { ISendRagfairReportRequestData } from "../models/eft/ragfair/ISendRagfairReportRequestData.d.ts";
import { IStorePlayerOfferTaxAmountRequestData } from "../models/eft/ragfair/IStorePlayerOfferTaxAmountRequestData.d.ts";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { RagfairServer } from "../servers/RagfairServer.d.ts";
import { RagfairTaxService } from "../services/RagfairTaxService.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
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
