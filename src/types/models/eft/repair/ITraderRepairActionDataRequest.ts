import type { IBaseRepairActionDataRequest } from "../../../models/eft/repair/IBaseRepairActionDataRequest.ts";
export interface ITraderRepairActionDataRequest extends IBaseRepairActionDataRequest {
    Action: "TraderRepair";
    tid: string;
    repairItems: RepairItem[];
}
export interface RepairItem {
    _id: string;
    count: number;
}
