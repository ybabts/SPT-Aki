import type { BundleCallbacks } from "../../callbacks/BundleCallbacks.ts";
import type { DynamicRouter } from "../../di/Router.ts";
export declare class BundleDynamicRouter extends DynamicRouter {
    protected bundleCallbacks: BundleCallbacks;
    constructor(bundleCallbacks: BundleCallbacks);
}
