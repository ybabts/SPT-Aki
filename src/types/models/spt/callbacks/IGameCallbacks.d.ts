import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { IGameConfigResponse } from "../../../models/eft/game/IGameConfigResponse.d.ts";
import { IGameEmptyCrcRequestData } from "../../../models/eft/game/IGameEmptyCrcRequestData.d.ts";
import { IVersionValidateRequestData } from "../../../models/eft/game/IVersionValidateRequestData.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { INullResponseData } from "../../../models/eft/httpResponse/INullResponseData.d.ts";
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
