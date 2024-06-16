import type { LootItem } from "../../spt/services/LootItem.ts";
export interface IAirdropLootResult {
    dropType: string;
    loot: LootItem[];
}
