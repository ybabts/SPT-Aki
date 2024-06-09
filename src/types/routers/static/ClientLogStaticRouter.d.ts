import { ClientLogCallbacks } from "../../callbacks/ClientLogCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class ClientLogStaticRouter extends StaticRouter {
    protected clientLogCallbacks: ClientLogCallbacks;
    constructor(clientLogCallbacks: ClientLogCallbacks);
}
