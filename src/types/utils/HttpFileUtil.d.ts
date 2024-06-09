import { ServerResponse } from "node:http";
import { HttpServerHelper } from "../helpers/HttpServerHelper.d.ts";
export declare class HttpFileUtil {
    protected httpServerHelper: HttpServerHelper;
    constructor(httpServerHelper: HttpServerHelper);
    sendFile(resp: ServerResponse, filePath: string): void;
}
