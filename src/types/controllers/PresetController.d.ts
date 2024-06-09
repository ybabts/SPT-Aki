import { PresetHelper } from "../helpers/PresetHelper.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
export declare class PresetController {
    protected logger: ILogger;
    protected presetHelper: PresetHelper;
    protected databaseServer: DatabaseServer;
    constructor(logger: ILogger, presetHelper: PresetHelper, databaseServer: DatabaseServer);
    initialize(): void;
}
