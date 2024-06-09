import { WishlistController } from "../controllers/WishlistController.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IWishlistActionData } from "../models/eft/wishlist/IWishlistActionData.d.ts";
export declare class WishlistCallbacks {
    protected wishlistController: WishlistController;
    constructor(wishlistController: WishlistController);
    /** Handle AddToWishList event */
    addToWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    /** Handle RemoveFromWishList event */
    removeFromWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
