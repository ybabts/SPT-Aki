import type { IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryReadEncyclopediaRequestData extends IInventoryBaseActionRequestData {
    Action: "ReadEncyclopedia";
    ids: string[];
}
