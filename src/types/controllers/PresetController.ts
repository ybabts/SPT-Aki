import type { PresetHelper } from "../helpers/PresetHelper.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
export declare class PresetController {
    protected logger: ILogger;
    protected presetHelper: PresetHelper;
    protected databaseServer: DatabaseServer;
    constructor(logger: ILogger, presetHelper: PresetHelper, databaseServer: DatabaseServer);
    initialize(): void;
}
