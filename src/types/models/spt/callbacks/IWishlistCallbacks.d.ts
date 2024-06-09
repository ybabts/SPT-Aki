import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IWishlistActionData } from "../../../models/eft/wishlist/IWishlistActionData.d.ts";
export interface IWishlistCallbacks {
    addToWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    removeFromWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
