import { BundleLoader } from "../loaders/BundleLoader.d.ts";
import { IHttpConfig } from "../models/spt/config/IHttpConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
