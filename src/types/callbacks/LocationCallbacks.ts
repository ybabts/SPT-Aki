import type { LocationController } from "../controllers/LocationController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { ILocationBase } from "../models/eft/common/ILocationBase.ts";
import type { ILocationsGenerateAllResponse } from "../models/eft/common/ILocationsSourceDestinationBase.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IGetLocationRequestData } from "../models/eft/location/IGetLocationRequestData.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class LocationCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected locationController: LocationController;
    constructor(httpResponse: HttpResponseUtil, locationController: LocationController);
    /** Handle client/locations */
    getLocationData(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ILocationsGenerateAllResponse>;
    /** Handle client/location/getLocalloot */
    getLocation(url: string, info: IGetLocationRequestData, sessionID: string): IGetBodyResponseData<ILocationBase>;
    /** Handle client/location/getAirdropLoot */
    getAirdropLoot(url: string, info: IEmptyRequestData, sessionID: string): string;
}
