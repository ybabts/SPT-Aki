import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { Item } from "../../../models/eft/common/tables/IItem.d.ts";
export interface IInsuranceEquipmentPkg {
    sessionID: string;
    pmcData: IPmcData;
    itemToReturnToPlayer: Item;
    traderId: string;
}
