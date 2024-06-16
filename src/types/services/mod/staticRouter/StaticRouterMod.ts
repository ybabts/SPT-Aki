import type { RouteAction, StaticRouter } from "../../../di/Router.ts";
export declare class StaticRouterMod extends StaticRouter {
    private topLevelRoute;
    constructor(routes: RouteAction[], topLevelRoute: string);
    getTopLevelRoute(): string;
}
