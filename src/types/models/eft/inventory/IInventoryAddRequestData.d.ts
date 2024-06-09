import { Container, IInventoryBaseActionRequestData } from "../inventory/IInventoryBaseActionRequestData.d.ts";
export interface IInventoryAddRequestData extends IInventoryBaseActionRequestData {
    Action: "Add";
    item: string;
    container: Container;
}
