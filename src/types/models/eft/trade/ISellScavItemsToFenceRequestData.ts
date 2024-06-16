import type { OwnerInfo } from "../../../models/eft/common/request/IBaseInteractionRequestData.ts";
export interface ISellScavItemsToFenceRequestData {
    Action: "SellAllFromSavage";
    totalValue: number;
    fromOwner: OwnerInfo;
    toOwner: OwnerInfo;
}
