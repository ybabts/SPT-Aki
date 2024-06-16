import type { DynamicRouter, RouteAction } from "../../../di/Router.ts";
export declare class DynamicRouterMod extends DynamicRouter {
    private topLevelRoute;
    constructor(routes: RouteAction[], topLevelRoute: string);
    getTopLevelRoute(): string;
}
