import { InsuranceCallbacks } from "../../callbacks/InsuranceCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class InsuranceStaticRouter extends StaticRouter {
    protected insuranceCallbacks: InsuranceCallbacks;
    constructor(insuranceCallbacks: InsuranceCallbacks);
}
