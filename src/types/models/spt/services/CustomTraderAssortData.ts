import type { ITraderAssort } from "../../../models/eft/common/tables/ITrader.ts";
import type { Traders } from "../../../models/enums/Traders.ts";
export interface CustomTraderAssortData {
    traderId: Traders;
    assorts: ITraderAssort;
}
