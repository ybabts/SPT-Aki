import { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class CustomizationStaticRouter extends StaticRouter {
    protected customizationCallbacks: CustomizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
}
