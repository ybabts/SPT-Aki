import type { IBaseInteractionRequestData } from "../common/request/IBaseInteractionRequestData.ts";
export interface IOffraidEatRequestData extends IBaseInteractionRequestData {
    Action: "Eat";
    item: string;
    count: number;
    time: number;
}
