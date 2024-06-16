import type { ILogger } from "../../models/spt/utils/ILogger.ts";
import type { HashUtil } from "../../utils/HashUtil.ts";
import type { JsonUtil } from "../../utils/JsonUtil.ts";
import type { VFS } from "../../utils/VFS.ts";
export declare class ModHashCacheService {
    protected vfs: VFS;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    protected modHashes: Record<string, string>;
    protected readonly modCachePath = "./user/cache/modCache.json";
    constructor(vfs: VFS, hashUtil: HashUtil, jsonUtil: JsonUtil, logger: ILogger);
    getStoredValue(key: string): string;
    storeValue(key: string, value: string): void;
    matchWithStoredHash(modName: string, hash: string): boolean;
    calculateAndCompareHash(modName: string, modContent: string): boolean;
    calculateAndStoreHash(modName: string, modContent: string): void;
}
