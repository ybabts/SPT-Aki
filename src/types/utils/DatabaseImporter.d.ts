import { OnLoad } from "../di/OnLoad.d.ts";
import { IHttpConfig } from "../models/spt/config/IHttpConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ImageRouter } from "../routers/ImageRouter.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { EncodingUtil } from "../utils/EncodingUtil.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { ImporterUtil } from "../utils/ImporterUtil.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { VFS } from "../utils/VFS.d.ts";
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
