import type { MinMax } from "../../../models/common/MinMax.ts";
import type { IBaseConfig } from "../../../models/spt/config/IBaseConfig.ts";
export interface IRepairConfig extends IBaseConfig {
    kind: "aki-repair";
    priceMultiplier: number;
    applyRandomizeDurabilityLoss: boolean;
    weaponSkillRepairGain: number;
    armorKitSkillPointGainPerRepairPointMultiplier: number;
    /** INT gain multiplier per repaired item type */
    repairKitIntellectGainMultiplier: IIntellectGainValues;
    maxIntellectGainPerRepair: IMaxIntellectGainValues;
    weaponTreatment: IWeaponTreatmentRepairValues;
    repairKit: RepairKit;
}
export interface IIntellectGainValues {
    weapon: number;
    armor: number;
}
export interface IMaxIntellectGainValues {
    kit: number;
    trader: number;
}
export interface IWeaponTreatmentRepairValues {
    /** The chance to gain more weapon maintenance skill */
    critSuccessChance: number;
    critSuccessAmount: number;
    /** The chance to gain less weapon maintenance skill  */
    critFailureChance: number;
    critFailureAmount: number;
    /** The multiplier used for calculating weapon maintenance XP */
    pointGainMultiplier: number;
}
export interface RepairKit {
    armor: BonusSettings;
    weapon: BonusSettings;
}
export interface BonusSettings {
    rarityWeight: Record<string, number>;
    bonusTypeWeight: Record<string, number>;
    common: Record<string, BonusValues>;
    rare: Record<string, BonusValues>;
}
export interface BonusValues {
    valuesMinMax: MinMax;
    /** What dura is buff active between (min max of current max) */
    activeDurabilityPercentMinMax: MinMax;
}
