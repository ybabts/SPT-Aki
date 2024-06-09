import { IBaseInteractionRequestData } from "../common/request/IBaseInteractionRequestData.d.ts";
export interface IOffraidEatRequestData extends IBaseInteractionRequestData {
    Action: "Eat";
    item: string;
    count: number;
    time: number;
}
