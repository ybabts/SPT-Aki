import { GameController } from "../controllers/GameController.d.ts";
import { OnLoad } from "../di/OnLoad.d.ts";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.d.ts";
import { IUIDRequestData } from "../models/eft/common/request/IUIDRequestData.d.ts";
import { ICheckVersionResponse } from "../models/eft/game/ICheckVersionResponse.d.ts";
import { ICurrentGroupResponse } from "../models/eft/game/ICurrentGroupResponse.d.ts";
import { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse.d.ts";
import { IGameEmptyCrcRequestData } from "../models/eft/game/IGameEmptyCrcRequestData.d.ts";
import { IGameKeepAliveResponse } from "../models/eft/game/IGameKeepAliveResponse.d.ts";
import { IGameLogoutResponseData } from "../models/eft/game/IGameLogoutResponseData.d.ts";
import { IGameStartResponse } from "../models/eft/game/IGameStartResponse.d.ts";
import { IGetRaidTimeRequest } from "../models/eft/game/IGetRaidTimeRequest.d.ts";
import { IGetRaidTimeResponse } from "../models/eft/game/IGetRaidTimeResponse.d.ts";
import { IServerDetails } from "../models/eft/game/IServerDetails.d.ts";
import { IVersionValidateRequestData } from "../models/eft/game/IVersionValidateRequestData.d.ts";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { HttpResponseUtil } from "../utils/HttpResponseUtil.d.ts";
import { Watermark } from "../utils/Watermark.d.ts";
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
