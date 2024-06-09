import { OwnerInfo } from "../../../models/eft/common/request/IBaseInteractionRequestData.d.ts";
export interface ISellScavItemsToFenceRequestData {
    Action: "SellAllFromSavage";
    totalValue: number;
    fromOwner: OwnerInfo;
    toOwner: OwnerInfo;
}
