import { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks.d.ts";
import { DynamicRouter } from "../../di/Router.d.ts";
export declare class CustomizationDynamicRouter extends DynamicRouter {
    protected customizationCallbacks: CustomizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
}
