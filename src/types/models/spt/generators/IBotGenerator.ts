import type { Inventory as PmcInventory } from "../../../models/eft/common/tables/IBotBase.ts";
import type { Chances, Generation, Inventory } from "../../../models/eft/common/tables/IBotType.ts";
export interface IBotGenerator {
    generateInventory(templateInventory: Inventory, equipmentChances: Chances, generation: Generation, botRole: string, isPmc: boolean): PmcInventory;
}
