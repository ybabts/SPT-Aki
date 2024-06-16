import type { Item } from "../../../models/eft/common/tables/IItem.ts";
import type { IBarterScheme } from "../../../models/eft/common/tables/ITrader.ts";
export interface ICreateFenceAssortsResult {
    sptItems: Item[][];
    barter_scheme: Record<string, IBarterScheme[][]>;
    loyal_level_items: Record<string, number>;
}
