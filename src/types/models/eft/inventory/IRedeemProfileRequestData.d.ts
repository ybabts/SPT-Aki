import { IInventoryBaseActionRequestData } from "./IInventoryBaseActionRequestData.d.ts";
export interface IRedeemProfileRequestData extends IInventoryBaseActionRequestData {
    Action: "RedeemProfileReward";
    events: IRedeemProfileRequestEvent[];
}
export interface IRedeemProfileRequestEvent {
    MessageId: string;
    EventId: string;
}
