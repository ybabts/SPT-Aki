import { IncomingMessage, ServerResponse } from "node:http";
import { Serializer } from "../../di/Serializer.d.ts";
import { ImageRouter } from "../../routers/ImageRouter.d.ts";
export declare class ImageSerializer extends Serializer {
    protected imageRouter: ImageRouter;
    constructor(imageRouter: ImageRouter);
    serialize(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: any): void;
    canHandle(route: string): boolean;
}
