import type { BundleCallbacks } from "../../callbacks/BundleCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class BundleStaticRouter extends StaticRouter {
    protected bundleCallbacks: BundleCallbacks;
    constructor(bundleCallbacks: BundleCallbacks);
}
