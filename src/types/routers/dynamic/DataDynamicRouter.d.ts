import { DataCallbacks } from "../../callbacks/DataCallbacks.d.ts";
import { DynamicRouter } from "../../di/Router.d.ts";
export declare class DataDynamicRouter extends DynamicRouter {
    protected dataCallbacks: DataCallbacks;
    constructor(dataCallbacks: DataCallbacks);
}
