import { BundleCallbacks } from "../../callbacks/BundleCallbacks.d.ts";
import { DynamicRouter } from "../../di/Router.d.ts";
export declare class BundleDynamicRouter extends DynamicRouter {
    protected bundleCallbacks: BundleCallbacks;
    constructor(bundleCallbacks: BundleCallbacks);
}
