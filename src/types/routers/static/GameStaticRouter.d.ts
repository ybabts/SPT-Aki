import { GameCallbacks } from "../../callbacks/GameCallbacks.d.ts";
import { StaticRouter } from "../../di/Router.d.ts";
export declare class GameStaticRouter extends StaticRouter {
    protected gameCallbacks: GameCallbacks;
    constructor(gameCallbacks: GameCallbacks);
}
