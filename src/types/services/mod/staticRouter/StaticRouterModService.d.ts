import { DependencyContainer } from "npm:tsyringe@4.2.0";
import { RouteAction } from "../../../di/Router.d.ts";
export declare class StaticRouterModService {
    protected container: DependencyContainer;
    constructor(container: DependencyContainer);
    registerStaticRouter(name: string, routes: RouteAction[], topLevelRoute: string): void;
}
