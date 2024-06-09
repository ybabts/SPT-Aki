import { ITraderAssort } from "../../../models/eft/common/tables/ITrader.d.ts";
import { Traders } from "../../../models/enums/Traders.d.ts";
export interface CustomTraderAssortData {
    traderId: Traders;
    assorts: ITraderAssort;
}
