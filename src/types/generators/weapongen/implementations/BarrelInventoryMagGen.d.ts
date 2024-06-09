import { IInventoryMagGen } from "../IInventoryMagGen.d.ts";
import { InventoryMagGen } from "../InventoryMagGen.d.ts";
import { BotWeaponGeneratorHelper } from "../../../helpers/BotWeaponGeneratorHelper.d.ts";
import { RandomUtil } from "../../../utils/RandomUtil.d.ts";
export declare class BarrelInventoryMagGen implements IInventoryMagGen {
    protected randomUtil: RandomUtil;
    protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper;
    constructor(randomUtil: RandomUtil, botWeaponGeneratorHelper: BotWeaponGeneratorHelper);
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}
