import { BundleCallbacks } from "../../callbacks/BundleCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class BundleStaticRouter extends StaticRouter {
    protected bundleCallbacks: BundleCallbacks;
    constructor(bundleCallbacks: BundleCallbacks);
}
