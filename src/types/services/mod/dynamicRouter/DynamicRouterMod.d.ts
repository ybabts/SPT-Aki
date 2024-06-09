import { DynamicRouter, RouteAction } from "../../../di/Router.d.ts";
export declare class DynamicRouterMod extends DynamicRouter {
    private topLevelRoute;
    constructor(routes: RouteAction[], topLevelRoute: string);
    getTopLevelRoute(): string;
}
