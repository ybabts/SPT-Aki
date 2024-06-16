import type { GameCallbacks } from "../../callbacks/GameCallbacks.ts";
import type { StaticRouter } from "../../di/Router.ts";
export declare class GameStaticRouter extends StaticRouter {
    protected gameCallbacks: GameCallbacks;
    constructor(gameCallbacks: GameCallbacks);
}
