import type { IGenerateBotsRequestData } from "../../../models/eft/bot/IGenerateBotsRequestData.ts";
import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IBotBase } from "../../../models/eft/common/tables/IBotBase.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
export interface IBotCallbacks {
    getBotLimit(url: string, info: IEmptyRequestData, sessionID: string): string;
    getBotDifficulty(url: string, info: IEmptyRequestData, sessionID: string): string;
    generateBots(url: string, info: IGenerateBotsRequestData, sessionID: string): IGetBodyResponseData<IBotBase[]>;
    getBotCap(): string;
}
