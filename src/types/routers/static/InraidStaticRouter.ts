import type { InraidCallbacks } from "../../callbacks/InraidCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class InraidStaticRouter extends StaticRouter {
    protected inraidCallbacks: InraidCallbacks;
    constructor(inraidCallbacks: InraidCallbacks);
}
