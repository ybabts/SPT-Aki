import type { InsuranceController } from "../controllers/InsuranceController.ts";
import type { OnUpdate } from "../di/OnUpdate.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IGetInsuranceCostRequestData } from "../models/eft/insurance/IGetInsuranceCostRequestData.ts";
import type { IGetInsuranceCostResponseData } from "../models/eft/insurance/IGetInsuranceCostResponseData.ts";
import type { IInsureRequestData } from "../models/eft/insurance/IInsureRequestData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IInsuranceConfig } from "../models/spt/config/IInsuranceConfig.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { InsuranceService } from "../services/InsuranceService.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
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
