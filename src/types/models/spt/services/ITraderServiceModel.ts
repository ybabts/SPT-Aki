import type { TraderServiceType } from "../../../models/enums/TraderServiceType.ts";
export interface ITraderServiceModel {
    serviceType: TraderServiceType;
    itemsToPay?: {
        [key: string]: number;
    };
    itemsToReceive?: string[];
    subServices?: {
        [key: string]: number;
    };
    requirements?: ITraderServiceRequirementsModel;
}
export interface ITraderServiceRequirementsModel {
    completedQuests?: string[];
    standings?: {
        [key: string]: number;
    };
}
