import { HttpServerHelper } from "../helpers/HttpServerHelper.d.ts";
import { BundleHashCacheService } from "../services/cache/BundleHashCacheService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { VFS } from "../utils/VFS.d.ts";
export declare class BundleInfo {
    modpath: string;
    filename: string;
    crc: number;
    dependencies: string[];
    constructor(modpath: string, bundle: BundleManifestEntry, bundleHash: number);
}
export declare class BundleLoader {
    protected httpServerHelper: HttpServerHelper;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected bundleHashCacheService: BundleHashCacheService;
    protected bundles: Record<string, BundleInfo>;
    constructor(httpServerHelper: HttpServerHelper, vfs: VFS, jsonUtil: JsonUtil, bundleHashCacheService: BundleHashCacheService);
    /**
     * Handle singleplayer/bundles
     */
    getBundles(): BundleInfo[];
    getBundle(key: string): BundleInfo;
    addBundles(modpath: string): void;
    addBundle(key: string, b: BundleInfo): void;
}
export interface BundleManifest {
    manifest: BundleManifestEntry[];
}
export interface BundleManifestEntry {
    key: string;
    dependencyKeys: string[];
}
