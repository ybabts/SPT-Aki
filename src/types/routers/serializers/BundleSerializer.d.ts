import { IncomingMessage, ServerResponse } from "node:http";
import { Serializer } from "../../di/Serializer.d.ts";
import { BundleLoader } from "../../loaders/BundleLoader.d.ts";
import { ILogger } from "../../models/spt/utils/ILogger.d.ts";
import { HttpFileUtil } from "../../utils/HttpFileUtil.d.ts";
export declare class BundleSerializer extends Serializer {
    protected logger: ILogger;
    protected bundleLoader: BundleLoader;
    protected httpFileUtil: HttpFileUtil;
    constructor(logger: ILogger, bundleLoader: BundleLoader, httpFileUtil: HttpFileUtil);
    serialize(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: any): void;
    canHandle(route: string): boolean;
}
