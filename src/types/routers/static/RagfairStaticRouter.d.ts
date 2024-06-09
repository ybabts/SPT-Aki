import { RagfairCallbacks } from "../../callbacks/RagfairCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class RagfairStaticRouter extends StaticRouter {
    protected ragfairCallbacks: RagfairCallbacks;
    constructor(ragfairCallbacks: RagfairCallbacks);
}
