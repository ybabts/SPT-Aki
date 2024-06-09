import { LocationController } from "../controllers/LocationController.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { ILocationBase } from "../models/eft/common/ILocationBase.d.ts";
import { ILocationsGenerateAllResponse } from "../models/eft/common/ILocationsSourceDestinationBase.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IGetLocationRequestData } from "../models/eft/location/IGetLocationRequestData.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
