import type { DependencyContainer } from "npm:tsyringe@4.8.0";
import type { RouteAction } from "../../../di/Router.ts";
export declare class StaticRouterModService {
    protected container: DependencyContainer;
    constructor(container: DependencyContainer);
    registerStaticRouter(name: string, routes: RouteAction[], topLevelRoute: string): void;
}
