import type { IItemEventRouterBase } from "../itemEvent/IItemEventRouterBase.ts";
/** An object sent back to the game client that contains alterations the client must make to ensure server/client are in sync */
export interface IItemEventRouterResponse extends IItemEventRouterBase {
}
