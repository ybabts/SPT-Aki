import type { OnLoad } from "../di/OnLoad.ts";
import type { OnUpdate } from "../di/OnUpdate.ts";
import type { ICoreConfig } from "../models/spt/config/ICoreConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { HttpServer } from "../servers/HttpServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { EncodingUtil } from "../utils/EncodingUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class App {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected encodingUtil: EncodingUtil;
    protected httpServer: HttpServer;
    protected onLoadComponents: OnLoad[];
    protected onUpdateComponents: OnUpdate[];
    protected onUpdateLastRun: {};
    protected coreConfig: ICoreConfig;
    constructor(logger: ILogger, timeUtil: TimeUtil, localisationService: LocalisationService, configServer: ConfigServer, encodingUtil: EncodingUtil, httpServer: HttpServer, onLoadComponents: OnLoad[], onUpdateComponents: OnUpdate[]);
    load(): Promise<void>;
    protected update(onUpdateComponents: OnUpdate[]): Promise<void>;
    protected logUpdateException(err: any, updateable: OnUpdate): void;
}
