import { IBaseInteractionRequestData } from "../../eft/common/request/IBaseInteractionRequestData.d.ts";
export interface IInsureRequestData extends IBaseInteractionRequestData {
    Action: "Insure";
    tid: string;
    items: string[];
}
