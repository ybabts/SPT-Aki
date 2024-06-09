import { InraidCallbacks } from "../../callbacks/InraidCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class InraidStaticRouter extends StaticRouter {
    protected inraidCallbacks: InraidCallbacks;
    constructor(inraidCallbacks: InraidCallbacks);
}
