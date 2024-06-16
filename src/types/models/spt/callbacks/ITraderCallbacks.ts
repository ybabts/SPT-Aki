import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { ITraderAssort, ITraderBase } from "../../../models/eft/common/tables/ITrader.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
export interface ITraderCallbacks {
    load(): void;
    getTraderSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase[]>;
    getTrader(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase>;
    getAssort(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderAssort>;
    update(): boolean;
}
