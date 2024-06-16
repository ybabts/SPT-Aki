import type { WishlistController } from "../controllers/WishlistController.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IWishlistActionData } from "../models/eft/wishlist/IWishlistActionData.ts";
export declare class WishlistCallbacks {
    protected wishlistController: WishlistController;
    constructor(wishlistController: WishlistController);
    /** Handle AddToWishList event */
    addToWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    /** Handle RemoveFromWishList event */
    removeFromWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
