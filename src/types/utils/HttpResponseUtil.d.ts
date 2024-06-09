import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { BackendErrorCodes } from "../models/enums/BackendErrorCodes.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
export declare class HttpResponseUtil {
    protected jsonUtil: JsonUtil;
    protected localisationService: LocalisationService;
    constructor(jsonUtil: JsonUtil, localisationService: LocalisationService);
    protected clearString(s: string): any;
    /**
     * Return passed in data as JSON string
     * @param data
     * @returns
     */
    noBody(data: any): any;
    /**
     * Game client needs server responses in a particular format
     * @param data
     * @param err
     * @param errmsg
     * @returns
     */
    getBody<T>(data: T, err?: number, errmsg?: any, sanitize?: boolean): IGetBodyResponseData<T>;
    getUnclearedBody(data: any, err?: number, errmsg?: any): string;
    emptyResponse(): IGetBodyResponseData<string>;
    nullResponse(): INullResponseData;
    emptyArrayResponse(): IGetBodyResponseData<any[]>;
    /**
     * Add an error into the 'warnings' array of the client response message
     * @param output IItemEventRouterResponse
     * @param message Error message
     * @param errorCode Error code
     * @returns IItemEventRouterResponse
     */
    appendErrorToOutput(output: IItemEventRouterResponse, message?: string, errorCode?: BackendErrorCodes): IItemEventRouterResponse;
}
