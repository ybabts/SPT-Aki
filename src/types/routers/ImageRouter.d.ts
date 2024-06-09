import { IncomingMessage, ServerResponse } from "node:http";
import { ImageRouteService } from "../services/mod/image/imageRouteService.d.ts";
import { HttpFileUtil } from "../utils/HttpFileUtil.d.ts";
import { VFS } from "../utils/VFS.d.ts";
export declare class ImageRouter {
    protected vfs: VFS;
    protected imageRouteService: ImageRouteService;
    protected httpFileUtil: HttpFileUtil;
    constructor(vfs: VFS, imageRouteService: ImageRouteService, httpFileUtil: HttpFileUtil);
    addRoute(key: string, valueToAdd: string): void;
    sendImage(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: any): void;
    getImage(): string;
}
