import type { CustomizationController } from "../controllers/CustomizationController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { ISuit } from "../models/eft/common/tables/ITrader.ts";
import type { IBuyClothingRequestData } from "../models/eft/customization/IBuyClothingRequestData.ts";
import type { IGetSuitsResponse } from "../models/eft/customization/IGetSuitsResponse.ts";
import type { IWearClothingRequestData } from "../models/eft/customization/IWearClothingRequestData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class CustomizationCallbacks {
    protected customizationController: CustomizationController;
    protected saveServer: SaveServer;
    protected httpResponse: HttpResponseUtil;
    constructor(customizationController: CustomizationController, saveServer: SaveServer, httpResponse: HttpResponseUtil);
    /**
     * Handle client/trading/customization/storage
     * @returns IGetSuitsResponse
     */
    getSuits(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGetSuitsResponse>;
    /**
     * Handle client/trading/customization
     * @returns ISuit[]
     */
    getTraderSuits(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ISuit[]>;
    /**
     * Handle CustomizationWear event
     */
    wearClothing(pmcData: IPmcData, body: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle CustomizationBuy event
     */
    buyClothing(pmcData: IPmcData, body: IBuyClothingRequestData, sessionID: string): IItemEventRouterResponse;
}
