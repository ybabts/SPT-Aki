import type { OnLoad } from "../di/OnLoad.ts";
import type { OnUpdate } from "../di/OnUpdate.ts";
import type { ICoreConfig } from "../models/spt/config/ICoreConfig.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
export declare class SaveCallbacks implements OnLoad, OnUpdate {
    protected saveServer: SaveServer;
    protected configServer: ConfigServer;
    protected coreConfig: ICoreConfig;
    constructor(saveServer: SaveServer, configServer: ConfigServer);
    onLoad(): Promise<void>;
    getRoute(): string;
    onUpdate(secondsSinceLastRun: number): Promise<boolean>;
}
