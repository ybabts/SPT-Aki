import { Inventory as PmcInventory } from "../../../models/eft/common/tables/IBotBase.d.ts";
import { Chances, Generation, Inventory } from "../../../models/eft/common/tables/IBotType.d.ts";
export interface IBotGenerator {
    generateInventory(templateInventory: Inventory, equipmentChances: Chances, generation: Generation, botRole: string, isPmc: boolean): PmcInventory;
}
