import type { OnLoad } from "../di/OnLoad.ts";
import type { IHttpConfig } from "../models/spt/config/IHttpConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ImageRouter } from "../routers/ImageRouter.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { EncodingUtil } from "../utils/EncodingUtil.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { ImporterUtil } from "../utils/ImporterUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { VFS } from "../utils/VFS.ts";
export declare class DatabaseImporter implements OnLoad {
    protected logger: ILogger;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected localisationService: LocalisationService;
    protected databaseServer: DatabaseServer;
    protected imageRouter: ImageRouter;
    protected encodingUtil: EncodingUtil;
    protected hashUtil: HashUtil;
    protected importerUtil: ImporterUtil;
    protected configServer: ConfigServer;
    private hashedFile;
    private valid;
    private filepath;
    protected httpConfig: IHttpConfig;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, localisationService: LocalisationService, databaseServer: DatabaseServer, imageRouter: ImageRouter, encodingUtil: EncodingUtil, hashUtil: HashUtil, importerUtil: ImporterUtil, configServer: ConfigServer);
    /**
     * Get path to aki data
     * @returns path to data
     */
    getSptDataPath(): string;
    onLoad(): Promise<void>;
    /**
     * Read all json files in database folder and map into a json object
     * @param filepath path to database folder
     */
    protected hydrateDatabase(filepath: string): Promise<void>;
    protected onReadValidate(fileWithPath: string, data: string): void;
    getRoute(): string;
    protected validateFile(filePathAndName: string, fileData: any): boolean;
    /**
     * Find and map files with image router inside a designated path
     * @param filepath Path to find files in
     */
    loadImages(filepath: string, directories: string[], routes: string[]): void;
    /**
     * Check for a path override in the http json config file
     * @param imagePath Key
     * @returns override for key
     */
    protected getImagePathOverride(imagePath: string): string;
}
