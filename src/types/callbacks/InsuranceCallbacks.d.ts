import { InsuranceController } from "../controllers/InsuranceController.d.ts";
import { OnUpdate } from "../di/OnUpdate.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IGetInsuranceCostRequestData } from "../models/eft/insurance/IGetInsuranceCostRequestData.d.ts";
import { IGetInsuranceCostResponseData } from "../models/eft/insurance/IGetInsuranceCostResponseData.d.ts";
import { IInsureRequestData } from "../models/eft/insurance/IInsureRequestData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IInsuranceConfig } from "../models/spt/config/IInsuranceConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { InsuranceService } from "../services/InsuranceService.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
export declare class InsuranceCallbacks implements OnUpdate {
    protected insuranceController: InsuranceController;
    protected insuranceService: InsuranceService;
    protected httpResponse: HttpResponseUtil;
    protected configServer: ConfigServer;
    protected insuranceConfig: IInsuranceConfig;
    constructor(insuranceController: InsuranceController, insuranceService: InsuranceService, httpResponse: HttpResponseUtil, configServer: ConfigServer);
    /**
     * Handle client/insurance/items/list/cost
     * @returns IGetInsuranceCostResponseData
     */
    getInsuranceCost(url: string, info: IGetInsuranceCostRequestData, sessionID: string): IGetBodyResponseData<IGetInsuranceCostResponseData>;
    /**
     * Handle Insure event
     * @returns IItemEventRouterResponse
     */
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): IItemEventRouterResponse;
    onUpdate(secondsSinceLastRun: number): Promise<boolean>;
    getRoute(): string;
}
