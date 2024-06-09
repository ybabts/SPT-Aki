import { IBaseRepairActionDataRequest } from "../../../models/eft/repair/IBaseRepairActionDataRequest.d.ts";
export interface IRepairActionDataRequest extends IBaseRepairActionDataRequest {
    Action: "Repair";
    repairKitsInfo: RepairKitsInfo[];
    target: string;
}
export interface RepairKitsInfo {
    _id: string;
    count: number;
}
