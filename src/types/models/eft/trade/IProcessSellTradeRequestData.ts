import type { IProcessBaseTradeRequestData } from "../../../models/eft/trade/IProcessBaseTradeRequestData.ts";
export interface IProcessSellTradeRequestData extends IProcessBaseTradeRequestData {
    Action: "sell_to_trader";
    type: string;
    tid: string;
    price: number;
    items: Item[];
}
export interface Item {
    id: string;
    count: number;
    scheme_id: number;
}
