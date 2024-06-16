import type { IBaseInteractionRequestData } from "../../eft/common/request/IBaseInteractionRequestData.ts";
export interface IInsureRequestData extends IBaseInteractionRequestData {
    Action: "Insure";
    tid: string;
    items: string[];
}
