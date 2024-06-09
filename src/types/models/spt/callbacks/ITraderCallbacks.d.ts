import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { ITraderAssort, ITraderBase } from "../../../models/eft/common/tables/ITrader.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
export interface ITraderCallbacks {
    load(): void;
    getTraderSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase[]>;
    getTrader(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderBase>;
    getAssort(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ITraderAssort>;
    update(): boolean;
}
