import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryTagRequestData extends IInventoryBaseActionRequestData {
    Action: "Tag";
    item: string;
    TagName: string;
    TagColor: number;
}
