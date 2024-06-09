import { InventoryMagGen } from "./InventoryMagGen.d.ts";
export interface IInventoryMagGen {
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}
