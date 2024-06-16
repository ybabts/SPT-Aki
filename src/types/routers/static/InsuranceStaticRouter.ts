import type { InsuranceCallbacks } from "../../callbacks/InsuranceCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class InsuranceStaticRouter extends StaticRouter {
    protected insuranceCallbacks: InsuranceCallbacks;
    constructor(insuranceCallbacks: InsuranceCallbacks);
}
