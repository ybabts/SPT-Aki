import type { DynamicRouter } from "../../di/Router.ts";
import type { ImageRouter } from "../../routers/ImageRouter.ts";
export declare class HttpDynamicRouter extends DynamicRouter {
    protected imageRouter: ImageRouter;
    constructor(imageRouter: ImageRouter);
}
