import { ConfigTypes } from "../models/enums/ConfigTypes.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { VFS } from "../utils/VFS.d.ts";
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
