import { RouteAction, StaticRouter } from "../../../di/Router.d.ts";
export declare class StaticRouterMod extends StaticRouter {
    private topLevelRoute;
    constructor(routes: RouteAction[], topLevelRoute: string);
    getTopLevelRoute(): string;
}
