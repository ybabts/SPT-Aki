import type { GameController } from "../controllers/GameController.ts";
import type { OnLoad } from "../di/OnLoad.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IUIDRequestData } from "../models/eft/common/request/IUIDRequestData.ts";
import type { ICheckVersionResponse } from "../models/eft/game/ICheckVersionResponse.ts";
import type { ICurrentGroupResponse } from "../models/eft/game/ICurrentGroupResponse.ts";
import type { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse.ts";
import type { IGameEmptyCrcRequestData } from "../models/eft/game/IGameEmptyCrcRequestData.ts";
import type { IGameKeepAliveResponse } from "../models/eft/game/IGameKeepAliveResponse.ts";
import type { IGameLogoutResponseData } from "../models/eft/game/IGameLogoutResponseData.ts";
import type { IGameStartResponse } from "../models/eft/game/IGameStartResponse.ts";
import type { IGetRaidTimeRequest } from "../models/eft/game/IGetRaidTimeRequest.ts";
import type { IGetRaidTimeResponse } from "../models/eft/game/IGetRaidTimeResponse.ts";
import type { IServerDetails } from "../models/eft/game/IServerDetails.ts";
import type { IVersionValidateRequestData } from "../models/eft/game/IVersionValidateRequestData.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../models/eft/httpResponse/INullResponseData.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { Watermark } from "../utils/Watermark.ts";
export declare class GameCallbacks implements OnLoad {
    protected httpResponse: HttpResponseUtil;
    protected watermark: Watermark;
    protected saveServer: SaveServer;
    protected gameController: GameController;
    constructor(httpResponse: HttpResponseUtil, watermark: Watermark, saveServer: SaveServer, gameController: GameController);
    onLoad(): Promise<void>;
    getRoute(): string;
    /**
     * Handle client/game/version/validate
     * @returns INullResponseData
     */
    versionValidate(url: string, info: IVersionValidateRequestData, sessionID: string): INullResponseData;
    /**
     * Handle client/game/start
     * @returns IGameStartResponse
     */
    gameStart(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGameStartResponse>;
    /**
     * Handle client/game/logout
     * Save profiles on game close
     * @returns IGameLogoutResponseData
     */
    gameLogout(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGameLogoutResponseData>;
    /**
     * Handle client/game/config
     * @returns IGameConfigResponse
     */
    getGameConfig(url: string, info: IGameEmptyCrcRequestData, sessionID: string): IGetBodyResponseData<IGameConfigResponse>;
    /**
     * Handle client/server/list
     */
    getServer(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IServerDetails[]>;
    /**
     * Handle client/match/group/current
     */
    getCurrentGroup(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ICurrentGroupResponse>;
    /**
     * Handle client/checkVersion
     */
    validateGameVersion(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ICheckVersionResponse>;
    /**
     * Handle client/game/keepalive
     * @returns IGameKeepAliveResponse
     */
    gameKeepalive(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGameKeepAliveResponse>;
    /**
     * Handle singleplayer/settings/version
     * @returns string
     */
    getVersion(url: string, info: IEmptyRequestData, sessionID: string): string;
    reportNickname(url: string, info: IUIDRequestData, sessionID: string): INullResponseData;
    /**
     * Handle singleplayer/settings/getRaidTime
     * @returns string
     */
    getRaidTime(url: string, request: IGetRaidTimeRequest, sessionID: string): IGetRaidTimeResponse;
}
