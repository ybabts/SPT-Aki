import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IWishlistActionData } from "../../../models/eft/wishlist/IWishlistActionData.ts";
export interface IWishlistCallbacks {
    addToWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    removeFromWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
