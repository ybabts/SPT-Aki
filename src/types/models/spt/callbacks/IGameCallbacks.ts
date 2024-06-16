import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IGameConfigResponse } from "../../../models/eft/game/IGameConfigResponse.ts";
import type { IGameEmptyCrcRequestData } from "../../../models/eft/game/IGameEmptyCrcRequestData.ts";
import type { IVersionValidateRequestData } from "../../../models/eft/game/IVersionValidateRequestData.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { INullResponseData } from "../../../models/eft/httpResponse/INullResponseData.ts";
export interface IGameCallbacks {
    versionValidate(url: string, info: IVersionValidateRequestData, sessionID: string): INullResponseData;
    gameStart(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    gameLogout(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getGameConfig(url: string, info: IGameEmptyCrcRequestData, sessionID: string): IGetBodyResponseData<IGameConfigResponse>;
    getServer(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    validateGameVersion(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    gameKeepalive(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getVersion(url: string, info: IEmptyRequestData, sessionID: string): string;
}
