import type { OwnerInfo } from "../common/request/IBaseInteractionRequestData.ts";
import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryExamineRequestData extends IInventoryBaseActionRequestData {
    Action: "Examine";
    item: string;
    fromOwner: OwnerInfo;
}
