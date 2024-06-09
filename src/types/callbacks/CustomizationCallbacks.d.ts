import { CustomizationController } from "../controllers/CustomizationController.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { ISuit } from "../models/eft/common/tables/ITrader.d.ts";
import { IBuyClothingRequestData } from "../models/eft/customization/IBuyClothingRequestData.d.ts";
import { IGetSuitsResponse } from "../models/eft/customization/IGetSuitsResponse.d.ts";
import { IWearClothingRequestData } from "../models/eft/customization/IWearClothingRequestData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
