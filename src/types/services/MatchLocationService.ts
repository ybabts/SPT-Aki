import type { SaveServer } from "../servers/SaveServer.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class MatchLocationService {
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected locations: {};
    constructor(timeUtil: TimeUtil, saveServer: SaveServer);
    deleteGroup(info: any): void;
}
