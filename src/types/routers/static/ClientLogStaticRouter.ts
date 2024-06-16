import type { ClientLogCallbacks } from "../../callbacks/ClientLogCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class ClientLogStaticRouter extends StaticRouter {
    protected clientLogCallbacks: ClientLogCallbacks;
    constructor(clientLogCallbacks: ClientLogCallbacks);
}
