import { OnLoad } from "../di/OnLoad.d.ts";
import { PostAkiModLoader } from "../loaders/PostAkiModLoader.d.ts";
import { IHttpConfig } from "../models/spt/config/IHttpConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { HttpFileUtil } from "../utils/HttpFileUtil.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
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
