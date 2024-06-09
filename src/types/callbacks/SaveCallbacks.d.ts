import { OnLoad } from "../di/OnLoad.d.ts";
import { OnUpdate } from "../di/OnUpdate.d.ts";
import { ICoreConfig } from "../models/spt/config/ICoreConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
export declare class SaveCallbacks implements OnLoad, OnUpdate {
    protected saveServer: SaveServer;
    protected configServer: ConfigServer;
    protected coreConfig: ICoreConfig;
    constructor(saveServer: SaveServer, configServer: ConfigServer);
    onLoad(): Promise<void>;
    getRoute(): string;
    onUpdate(secondsSinceLastRun: number): Promise<boolean>;
}
