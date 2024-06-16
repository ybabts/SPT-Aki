import type { HealthCallbacks } from "../../callbacks/HealthCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class HealthStaticRouter extends StaticRouter {
    protected healthCallbacks: HealthCallbacks;
    constructor(healthCallbacks: HealthCallbacks);
}
