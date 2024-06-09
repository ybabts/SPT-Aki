import { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryReadEncyclopediaRequestData extends IInventoryBaseActionRequestData {
    Action: "ReadEncyclopedia";
    ids: string[];
}
