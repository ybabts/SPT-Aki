import type { ILogger } from "../../models/spt/utils/ILogger.ts";
import type { HashUtil } from "../../utils/HashUtil.ts";
import type { JsonUtil } from "../../utils/JsonUtil.ts";
import type { VFS } from "../../utils/VFS.ts";
export declare class BundleHashCacheService {
    protected vfs: VFS;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    protected bundleHashes: Record<string, number>;
    protected readonly bundleHashCachePath = "./user/cache/bundleHashCache.json";
    constructor(vfs: VFS, hashUtil: HashUtil, jsonUtil: JsonUtil, logger: ILogger);
    getStoredValue(key: string): number;
    storeValue(key: string, value: number): void;
    matchWithStoredHash(bundlePath: string, hash: number): boolean;
    calculateAndMatchHash(bundlePath: string): boolean;
    calculateAndStoreHash(bundlePath: string): void;
}
