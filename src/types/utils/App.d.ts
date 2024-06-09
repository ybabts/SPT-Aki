import { OnLoad } from "../di/OnLoad.d.ts";
import { OnUpdate } from "../di/OnUpdate.d.ts";
import { ICoreConfig } from "../models/spt/config/ICoreConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { HttpServer } from "../servers/HttpServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { EncodingUtil } from "../utils/EncodingUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
