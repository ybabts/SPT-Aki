import type { OnLoad } from "../di/OnLoad.ts";
import type { PostAkiModLoader } from "../loaders/PostAkiModLoader.ts";
import type { IHttpConfig } from "../models/spt/config/IHttpConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HttpFileUtil } from "../utils/HttpFileUtil.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class ModCallbacks implements OnLoad {
    protected logger: ILogger;
    protected httpResponse: HttpResponseUtil;
    protected httpFileUtil: HttpFileUtil;
    protected postAkiModLoader: PostAkiModLoader;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected httpConfig: IHttpConfig;
    constructor(logger: ILogger, httpResponse: HttpResponseUtil, httpFileUtil: HttpFileUtil, postAkiModLoader: PostAkiModLoader, localisationService: LocalisationService, configServer: ConfigServer);
    onLoad(): Promise<void>;
    getRoute(): string;
}
