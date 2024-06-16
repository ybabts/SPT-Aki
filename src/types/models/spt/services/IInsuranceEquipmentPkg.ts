import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { Item } from "../../../models/eft/common/tables/IItem.ts";
export interface IInsuranceEquipmentPkg {
    sessionID: string;
    pmcData: IPmcData;
    itemToReturnToPlayer: Item;
    traderId: string;
}
