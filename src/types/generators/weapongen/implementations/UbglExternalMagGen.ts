import type { IInventoryMagGen } from "../IInventoryMagGen.ts";
import type { InventoryMagGen } from "../InventoryMagGen.ts";
import type { BotWeaponGeneratorHelper } from "../../../helpers/BotWeaponGeneratorHelper.ts";
export declare class UbglExternalMagGen implements IInventoryMagGen {
    protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper;
    constructor(botWeaponGeneratorHelper: BotWeaponGeneratorHelper);
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}
