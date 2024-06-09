import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IWishlistActionData } from "../models/eft/wishlist/IWishlistActionData.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
export declare class WishlistController {
    protected eventOutputHolder: EventOutputHolder;
    constructor(eventOutputHolder: EventOutputHolder);
    /** Handle AddToWishList */
    addToWishList(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    /** Handle RemoveFromWishList event */
    removeFromWishList(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
