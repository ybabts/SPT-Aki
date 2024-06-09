import { HealthCallbacks } from "../../callbacks/HealthCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class HealthStaticRouter extends StaticRouter {
    protected healthCallbacks: HealthCallbacks;
    constructor(healthCallbacks: HealthCallbacks);
}
