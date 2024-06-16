import type { IInventoryMagGen } from "../IInventoryMagGen.ts";
import type { InventoryMagGen } from "../InventoryMagGen.ts";
import type { BotWeaponGeneratorHelper } from "../../../helpers/BotWeaponGeneratorHelper.ts";
import type { RandomUtil } from "../../../utils/RandomUtil.ts";
export declare class BarrelInventoryMagGen implements IInventoryMagGen {
    protected randomUtil: RandomUtil;
    protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper;
    constructor(randomUtil: RandomUtil, botWeaponGeneratorHelper: BotWeaponGeneratorHelper);
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}
