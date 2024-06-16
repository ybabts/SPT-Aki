import type { Item } from "../../../models/eft/common/tables/IItem.ts";
export interface IPresetBuildActionRequestData {
    Action: string;
    Id: string;
    /** name of preset given by player */
    Name: string;
    Root: string;
    Items: Item[];
}
