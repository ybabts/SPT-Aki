import { InraidCallbacks } from "../../callbacks/InraidCallbacks.d.ts";
import { DynamicRouter } from "../../di/Router.d.ts";
export declare class InraidDynamicRouter extends DynamicRouter {
    protected inraidCallbacks: InraidCallbacks;
    constructor(inraidCallbacks: InraidCallbacks);
    getTopLevelRoute(): string;
}
