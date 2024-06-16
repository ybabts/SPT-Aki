import type { IncomingMessage, ServerResponse } from "node:http";
import type { Serializer } from "../../di/Serializer.ts";
import type { BundleLoader } from "../../loaders/BundleLoader.ts";
import type { ILogger } from "../../models/spt/utils/ILogger.ts";
import type { HttpFileUtil } from "../../utils/HttpFileUtil.ts";
export declare class BundleSerializer extends Serializer {
    protected logger: ILogger;
    protected bundleLoader: BundleLoader;
    protected httpFileUtil: HttpFileUtil;
    constructor(logger: ILogger, bundleLoader: BundleLoader, httpFileUtil: HttpFileUtil);
    serialize(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: any): void;
    canHandle(route: string): boolean;
}
