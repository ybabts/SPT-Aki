import { TraderServiceType } from "../../../models/enums/TraderServiceType.d.ts";
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
