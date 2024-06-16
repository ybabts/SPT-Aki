import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryTagRequestData extends IInventoryBaseActionRequestData {
    Action: "Tag";
    item: string;
    TagName: string;
    TagColor: number;
}
