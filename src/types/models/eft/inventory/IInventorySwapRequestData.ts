import type { OwnerInfo } from "../common/request/IBaseInteractionRequestData.ts";
import type { IInventoryBaseActionRequestData, To } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventorySwapRequestData extends IInventoryBaseActionRequestData {
    Action: "Swap";
    item: string;
    to: To;
    item2: string;
    to2: To;
    fromOwner2: OwnerInfo;
    toOwner2: OwnerInfo;
}
