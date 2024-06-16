import type { ConfigTypes } from "../models/enums/ConfigTypes.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { VFS } from "../utils/VFS.ts";
export declare class ConfigServer {
    protected logger: ILogger;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected configs: Record<string, any>;
    protected readonly acceptableFileExtensions: string[];
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil);
    getConfig<T>(configType: ConfigTypes): T;
    getConfigByString<T>(configType: string): T;
    initialize(): void;
}
