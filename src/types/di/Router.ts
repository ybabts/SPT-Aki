import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IAkiProfile } from "../models/eft/profile/IAkiProfile.ts";
export declare class Router {
    protected handledRoutes: HandledRoute[];
    getTopLevelRoute(): string;
    protected getHandledRoutes(): HandledRoute[];
    protected getInternalHandledRoutes(): HandledRoute[];
    canHandle(url: string, partialMatch?: boolean): boolean;
}
export declare class StaticRouter extends Router {
    private routes;
    constructor(routes: RouteAction[]);
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
    getHandledRoutes(): HandledRoute[];
}
export declare class DynamicRouter extends Router {
    private routes;
    constructor(routes: RouteAction[]);
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
    getHandledRoutes(): HandledRoute[];
}
export declare class ItemEventRouterDefinition extends Router {
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string, output: IItemEventRouterResponse): void;
}
export declare class SaveLoadRouter extends Router {
    handleLoad(profile: IAkiProfile): IAkiProfile;
}
export declare class HandledRoute {
    route: string;
    dynamic: boolean;
    constructor(route: string, dynamic: boolean);
}
export declare class RouteAction {
    url: string;
    action: (url: string, info: any, sessionID: string, output: string) => any;
    constructor(url: string, action: (url: string, info: any, sessionID: string, output: string) => any);
}
