import { SaveServer } from "../servers/SaveServer.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
export declare class MatchLocationService {
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected locations: {};
    constructor(timeUtil: TimeUtil, saveServer: SaveServer);
    deleteGroup(info: any): void;
}
