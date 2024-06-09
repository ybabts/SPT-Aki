import { DependencyContainer } from "npm:tsyringe";
import { RouteAction } from "../../../di/Router.d.ts";
export declare class StaticRouterModService {
    protected container: DependencyContainer;
    constructor(container: DependencyContainer);
    registerStaticRouter(name: string, routes: RouteAction[], topLevelRoute: string): void;
}
