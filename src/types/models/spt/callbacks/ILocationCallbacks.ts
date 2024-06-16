import type { ILocationBase } from "../../../models/eft/common/ILocationBase.ts";
import type { ILocationsGenerateAllResponse } from "../../../models/eft/common/ILocationsSourceDestinationBase.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IGetLocationRequestData } from "../../../models/eft/location/IGetLocationRequestData.ts";
export interface ILocationCallbacks {
    getLocationData(url: string, info: any, sessionID: string): IGetBodyResponseData<ILocationsGenerateAllResponse>;
    getLocation(url: string, info: IGetLocationRequestData, sessionID: string): IGetBodyResponseData<ILocationBase>;
}
