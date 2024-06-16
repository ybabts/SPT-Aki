import type { DataCallbacks } from "../../callbacks/DataCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class DataStaticRouter extends StaticRouter {
    protected dataCallbacks: DataCallbacks;
    constructor(dataCallbacks: DataCallbacks);
}
