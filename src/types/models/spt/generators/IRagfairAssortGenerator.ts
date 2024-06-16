import type { Item } from "../../../models/eft/common/tables/IItem.ts";
export interface IRagfairAssortGenerator {
    getAssortItems(): Item[];
}
