import { ISeasonalEventConfig } from "../models/spt/config/ISeasonalEventConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
export declare class GameEventHelper {
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected seasonalEventConfig: ISeasonalEventConfig;
    constructor(databaseServer: DatabaseServer, configServer: ConfigServer);
}
