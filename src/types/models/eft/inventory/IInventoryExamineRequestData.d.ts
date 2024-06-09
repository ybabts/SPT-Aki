import { OwnerInfo } from "../common/request/IBaseInteractionRequestData.d.ts";
import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryExamineRequestData extends IInventoryBaseActionRequestData {
    Action: "Examine";
    item: string;
    fromOwner: OwnerInfo;
}
