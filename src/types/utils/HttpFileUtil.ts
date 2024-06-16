import type { ServerResponse } from "node:http";
import type { HttpServerHelper } from "../helpers/HttpServerHelper.ts";
export declare class HttpFileUtil {
    protected httpServerHelper: HttpServerHelper;
    constructor(httpServerHelper: HttpServerHelper);
    sendFile(resp: ServerResponse, filePath: string): void;
}
