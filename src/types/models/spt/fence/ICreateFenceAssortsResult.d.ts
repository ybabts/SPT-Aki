import { Item } from "../../../models/eft/common/tables/IItem.d.ts";
import { IBarterScheme } from "../../../models/eft/common/tables/ITrader.d.ts";
export interface ICreateFenceAssortsResult {
    sptItems: Item[][];
    barter_scheme: Record<string, IBarterScheme[][]>;
    loyal_level_items: Record<string, number>;
}
