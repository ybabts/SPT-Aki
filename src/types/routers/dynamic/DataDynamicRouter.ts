import type { DataCallbacks } from "../../callbacks/DataCallbacks.ts";
import type { DynamicRouter } from "../../di/Router.ts";
export declare class DataDynamicRouter extends DynamicRouter {
    protected dataCallbacks: DataCallbacks;
    constructor(dataCallbacks: DataCallbacks);
}
