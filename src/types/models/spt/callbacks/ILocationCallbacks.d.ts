import { ILocationBase } from "../../../models/eft/common/ILocationBase.d.ts";
import { ILocationsGenerateAllResponse } from "../../../models/eft/common/ILocationsSourceDestinationBase.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IGetLocationRequestData } from "../../../models/eft/location/IGetLocationRequestData.d.ts";
export interface ILocationCallbacks {
    getLocationData(url: string, info: any, sessionID: string): IGetBodyResponseData<ILocationsGenerateAllResponse>;
    getLocation(url: string, info: IGetLocationRequestData, sessionID: string): IGetBodyResponseData<ILocationBase>;
}
