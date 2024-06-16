import type { TraderController } from "../controllers/TraderController.ts";
import type { OnLoad } from "../di/OnLoad.ts";
import type { OnUpdate } from "../di/OnUpdate.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { ITraderAssort, ITraderBase } from "../models/eft/common/tables/ITrader.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
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
