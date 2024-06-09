import { NotifierCallbacks } from "../../callbacks/NotifierCallbacks.d.ts";
import { DynamicRouter } from "../../di/Router.d.ts";
export declare class NotifierDynamicRouter extends DynamicRouter {
    protected notifierCallbacks: NotifierCallbacks;
    constructor(notifierCallbacks: NotifierCallbacks);
}
