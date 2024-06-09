import { DataCallbacks } from "../../callbacks/DataCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class DataStaticRouter extends StaticRouter {
    protected dataCallbacks: DataCallbacks;
    constructor(dataCallbacks: DataCallbacks);
}
