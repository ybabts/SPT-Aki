import type { RagfairCallbacks } from "../../callbacks/RagfairCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class RagfairStaticRouter extends StaticRouter {
    protected ragfairCallbacks: RagfairCallbacks;
    constructor(ragfairCallbacks: RagfairCallbacks);
}
