import { OwnerInfo } from "../common/request/IBaseInteractionRequestData.d.ts";
import { IInventoryBaseActionRequestData, To } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventorySwapRequestData extends IInventoryBaseActionRequestData {
    Action: "Swap";
    item: string;
    to: To;
    item2: string;
    to2: To;
    fromOwner2: OwnerInfo;
    toOwner2: OwnerInfo;
}
