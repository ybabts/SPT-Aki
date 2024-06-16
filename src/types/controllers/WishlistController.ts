import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IWishlistActionData } from "../models/eft/wishlist/IWishlistActionData.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
export declare class WishlistController {
    protected eventOutputHolder: EventOutputHolder;
    constructor(eventOutputHolder: EventOutputHolder);
    /** Handle AddToWishList */
    addToWishList(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    /** Handle RemoveFromWishList event */
    removeFromWishList(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
