import type { Container, IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.ts";
export interface IInventoryAddRequestData extends IInventoryBaseActionRequestData {
    Action: "Add";
    item: string;
    container: Container;
}
