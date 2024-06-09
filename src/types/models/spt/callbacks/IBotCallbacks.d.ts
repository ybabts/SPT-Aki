import { IGenerateBotsRequestData } from "../../../models/eft/bot/IGenerateBotsRequestData.d.ts";
import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { IBotBase } from "../../../models/eft/common/tables/IBotBase.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
export interface IBotCallbacks {
    getBotLimit(url: string, info: IEmptyRequestData, sessionID: string): string;
    getBotDifficulty(url: string, info: IEmptyRequestData, sessionID: string): string;
    generateBots(url: string, info: IGenerateBotsRequestData, sessionID: string): IGetBodyResponseData<IBotBase[]>;
    getBotCap(): string;
}
