import type { BundleLoader } from "../loaders/BundleLoader.ts";
import type { IHttpConfig } from "../models/spt/config/IHttpConfig.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class BundleCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected bundleLoader: BundleLoader;
    protected configServer: ConfigServer;
    protected httpConfig: IHttpConfig;
    constructor(httpResponse: HttpResponseUtil, bundleLoader: BundleLoader, configServer: ConfigServer);
    /**
     * Handle singleplayer/bundles
     */
    getBundles(url: string, info: any, sessionID: string): string;
    getBundle(url: string, info: any, sessionID: string): string;
}
