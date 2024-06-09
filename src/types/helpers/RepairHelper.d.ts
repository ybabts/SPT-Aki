import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { ITemplateItem, Props } from "../models/eft/common/tables/ITemplateItem.d.ts";
import { IRepairConfig } from "../models/spt/config/IRepairConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
export declare class RepairHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected repairConfig: IRepairConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, configServer: ConfigServer);
    /**
     * Alter an items durability after a repair by trader/repair kit
     * @param itemToRepair item to update durability details
     * @param itemToRepairDetails db details of item to repair
     * @param isArmor Is item being repaired a piece of armor
     * @param amountToRepair how many unit of durability to repair
     * @param useRepairKit Is item being repaired with a repair kit
     * @param traderQualityMultipler Trader quality value from traders base json
     * @param applyMaxDurabilityDegradation should item have max durability reduced
     */
    updateItemDurability(itemToRepair: Item, itemToRepairDetails: ITemplateItem, isArmor: boolean, amountToRepair: number, useRepairKit: boolean, traderQualityMultipler: number, applyMaxDurabilityDegradation?: boolean): void;
    /**
     * Repairing armor reduces the total durability value slightly, get a randomised (to 2dp) amount based on armor material
     * @param armorMaterial What material is the armor being repaired made of
     * @param isRepairKit Was a repair kit used
     * @param armorMax Max amount of durability item can have
     * @param traderQualityMultipler Different traders produce different loss values
     * @returns Amount to reduce max durability by
     */
    protected getRandomisedArmorRepairDegradationValue(armorMaterial: string, isRepairKit: boolean, armorMax: number, traderQualityMultipler: number): number;
    /**
     * Repairing weapons reduces the total durability value slightly, get a randomised (to 2dp) amount
     * @param itemProps Weapon properties
     * @param isRepairKit Was a repair kit used
     * @param weaponMax ax amount of durability item can have
     * @param traderQualityMultipler Different traders produce different loss values
     * @returns Amount to reduce max durability by
     */
    protected getRandomisedWeaponRepairDegradationValue(itemProps: Props, isRepairKit: boolean, weaponMax: number, traderQualityMultipler: number): number;
}
