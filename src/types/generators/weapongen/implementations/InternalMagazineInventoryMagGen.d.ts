import { IInventoryMagGen } from "../IInventoryMagGen.d.ts";
import { InventoryMagGen } from "../InventoryMagGen.d.ts";
import { BotWeaponGeneratorHelper } from "../../../helpers/BotWeaponGeneratorHelper.d.ts";
export declare class InternalMagazineInventoryMagGen implements IInventoryMagGen {
    protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper;
    constructor(botWeaponGeneratorHelper: BotWeaponGeneratorHelper);
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}
