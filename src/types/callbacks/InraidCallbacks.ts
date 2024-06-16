import type { InraidController } from "../controllers/InraidController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { INullResponseData } from "../models/eft/httpResponse/INullResponseData.ts";
import type { IItemDeliveryRequestData } from "../models/eft/inRaid/IItemDeliveryRequestData.ts";
import type { IRegisterPlayerRequestData } from "../models/eft/inRaid/IRegisterPlayerRequestData.ts";
import type { ISaveProgressRequestData } from "../models/eft/inRaid/ISaveProgressRequestData.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
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
