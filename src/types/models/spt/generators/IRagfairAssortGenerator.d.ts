import { Item } from "../../../models/eft/common/tables/IItem.d.ts";
export interface IRagfairAssortGenerator {
    getAssortItems(): Item[];
}
