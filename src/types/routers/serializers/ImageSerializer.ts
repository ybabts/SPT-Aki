import type { IncomingMessage, ServerResponse } from "node:http";
import type { Serializer } from "../../di/Serializer.ts";
import type { ImageRouter } from "../../routers/ImageRouter.ts";
export declare class ImageSerializer extends Serializer {
    protected imageRouter: ImageRouter;
    constructor(imageRouter: ImageRouter);
    serialize(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: any): void;
    canHandle(route: string): boolean;
}
