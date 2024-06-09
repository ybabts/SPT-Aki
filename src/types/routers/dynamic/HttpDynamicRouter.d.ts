import { DynamicRouter } from "../../di/Router.d.ts";
import { ImageRouter } from "../../routers/ImageRouter.d.ts";
export declare class HttpDynamicRouter extends DynamicRouter {
    protected imageRouter: ImageRouter;
    constructor(imageRouter: ImageRouter);
}
