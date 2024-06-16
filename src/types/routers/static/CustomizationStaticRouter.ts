import type { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class CustomizationStaticRouter extends StaticRouter {
    protected customizationCallbacks: CustomizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
}
