import { ItemEventCallbacks } from "../../callbacks/ItemEventCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class ItemEventStaticRouter extends StaticRouter {
    protected itemEventCallbacks: ItemEventCallbacks;
    constructor(itemEventCallbacks: ItemEventCallbacks);
}
