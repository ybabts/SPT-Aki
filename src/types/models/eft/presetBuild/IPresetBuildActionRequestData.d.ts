import { Item } from "../../../models/eft/common/tables/IItem.d.ts";
export interface IPresetBuildActionRequestData {
    Action: string;
    Id: string;
    /** name of preset given by player */
    Name: string;
    Root: string;
    Items: Item[];
}
