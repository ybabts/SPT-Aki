import type { ISeasonalEventConfig } from "../models/spt/config/ISeasonalEventConfig.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
export declare class GameEventHelper {
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected seasonalEventConfig: ISeasonalEventConfig;
    constructor(databaseServer: DatabaseServer, configServer: ConfigServer);
}
