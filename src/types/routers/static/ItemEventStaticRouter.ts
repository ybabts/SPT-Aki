import type { ItemEventCallbacks } from "../../callbacks/ItemEventCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class ItemEventStaticRouter extends StaticRouter {
    protected itemEventCallbacks: ItemEventCallbacks;
    constructor(itemEventCallbacks: ItemEventCallbacks);
}
