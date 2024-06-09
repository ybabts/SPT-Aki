import { DependencyContainer } from "npm:tsyringe";
import { RouteAction } from "../../../di/Router.d.ts";
export declare class DynamicRouterModService {
    private container;
    constructor(container: DependencyContainer);
    registerDynamicRouter(name: string, routes: RouteAction[], topLevelRoute: string): void;
}
