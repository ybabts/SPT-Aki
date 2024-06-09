import { NotifierCallbacks } from "../../callbacks/NotifierCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class NotifierStaticRouter extends StaticRouter {
    protected notifierCallbacks: NotifierCallbacks;
    constructor(notifierCallbacks: NotifierCallbacks);
}
