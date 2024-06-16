import type { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks.ts";
import type { DynamicRouter } from "../../di/Router.ts";
export declare class CustomizationDynamicRouter extends DynamicRouter {
    protected customizationCallbacks: CustomizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
}
