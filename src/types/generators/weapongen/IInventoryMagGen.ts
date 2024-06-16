import type { InventoryMagGen } from "./InventoryMagGen.ts";
export interface IInventoryMagGen {
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}
