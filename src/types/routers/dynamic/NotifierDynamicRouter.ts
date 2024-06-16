import type { NotifierCallbacks } from "../../callbacks/NotifierCallbacks.ts";
import type { DynamicRouter } from "../../di/Router.ts";
export declare class NotifierDynamicRouter extends DynamicRouter {
    protected notifierCallbacks: NotifierCallbacks;
    constructor(notifierCallbacks: NotifierCallbacks);
}
