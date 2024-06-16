import type { NotifierCallbacks } from "../../callbacks/NotifierCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class NotifierStaticRouter extends StaticRouter {
    protected notifierCallbacks: NotifierCallbacks;
    constructor(notifierCallbacks: NotifierCallbacks);
}
