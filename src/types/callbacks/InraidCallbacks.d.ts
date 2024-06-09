import { InraidController } from "../controllers/InraidController.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData.d.ts";
import { IItemDeliveryRequestData } from "../models/eft/inRaid/IItemDeliveryRequestData.d.ts";
import { IRegisterPlayerRequestData } from "../models/eft/inRaid/IRegisterPlayerRequestData.d.ts";
import { ISaveProgressRequestData } from "../models/eft/inRaid/ISaveProgressRequestData.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
/**
 * Handle client requests
 */
export declare class InraidCallbacks {
    protected inraidController: InraidController;
    protected httpResponse: HttpResponseUtil;
    constructor(inraidController: InraidController, httpResponse: HttpResponseUtil);
    /**
     * Handle client/location/getLocalloot
     * Store active map in profile + applicationContext
     * @param url
     * @param info register player request
     * @param sessionID Session id
     * @returns Null http response
     */
    registerPlayer(url: string, info: IRegisterPlayerRequestData, sessionID: string): INullResponseData;
    /**
     * Handle raid/profile/save
     * @param url
     * @param info Save progress request
     * @param sessionID Session id
     * @returns Null http response
     */
    saveProgress(url: string, info: ISaveProgressRequestData, sessionID: string): INullResponseData;
    /**
     * Handle singleplayer/settings/raid/endstate
     * @returns
     */
    getRaidEndState(): string;
    /**
     * Handle singleplayer/settings/raid/menu
     * @returns JSON as string
     */
    getRaidMenuSettings(): string;
    /**
     * Handle singleplayer/airdrop/config
     * @returns JSON as string
     */
    getAirdropConfig(): string;
    /**
     * Handle singleplayer/btr/config
     * @returns JSON as string
     */
    getBTRConfig(): string;
    /**
     * Handle singleplayer/traderServices/getTraderServices
     */
    getTraderServices(url: string, info: IEmptyRequestData, sessionId: string): string;
    /**
     * Handle singleplayer/traderServices/itemDelivery
     */
    itemDelivery(url: string, request: IItemDeliveryRequestData, sessionId: string): INullResponseData;
    getTraitorScavHostileChance(url: string, info: IEmptyRequestData, sessionId: string): string;
    getSandboxMaxPatrolValue(url: string, info: IEmptyRequestData, sessionId: string): string;
}
