import { TraderController } from "../controllers/TraderController.d.ts";
import { OnLoad } from "../di/OnLoad.d.ts";
import { OnUpdate } from "../di/OnUpdate.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { ITraderAssort, ITraderBase } from "../models/eft/common/tables/ITrader.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
export declare class TraderCallbacks implements OnLoad, OnUpdate {
    protected httpResponse: HttpResponseUtil;
    protected traderController: TraderController;
    constructor(httpResponse: HttpResponseUtil, // TODO: delay required
        traderController: TraderController);
    onLoad(): Promise<void>;
    onUpdate(): Promise<boolean>;
    getRoute(): string;
    /** Handle client/trading/api/traderSettings */
    getTraderSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase[]>;
    /** Handle client/trading/api/getTrader */
    getTrader(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase>;
    /** Handle client/trading/api/getTraderAssort */
    getAssort(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderAssort>;
}
