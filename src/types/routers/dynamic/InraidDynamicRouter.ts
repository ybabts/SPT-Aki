import type { InraidCallbacks } from "../../callbacks/InraidCallbacks.ts";
import type { DynamicRouter } from "../../di/Router.ts";
export declare class InraidDynamicRouter extends DynamicRouter {
    protected inraidCallbacks: InraidCallbacks;
    constructor(inraidCallbacks: InraidCallbacks);
    getTopLevelRoute(): string;
}
