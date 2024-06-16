import type { IncomingMessage, ServerResponse } from "node:http";
import type { ImageRouteService } from "../services/mod/image/imageRouteService.ts";
import type { HttpFileUtil } from "../utils/HttpFileUtil.ts";
import type { VFS } from "../utils/VFS.ts";
export declare class ImageRouter {
    protected vfs: VFS;
    protected imageRouteService: ImageRouteService;
    protected httpFileUtil: HttpFileUtil;
    constructor(vfs: VFS, imageRouteService: ImageRouteService, httpFileUtil: HttpFileUtil);
    addRoute(key: string, valueToAdd: string): void;
    sendImage(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: any): void;
    getImage(): string;
}
