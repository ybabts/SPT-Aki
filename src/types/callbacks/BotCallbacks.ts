import type { BotController } from "../controllers/BotController.ts";
import type { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IBotBase } from "../models/eft/common/tables/IBotBase.ts";
import type { Difficulties } from "../models/eft/common/tables/IBotType.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class BotCallbacks {
    protected botController: BotController;
    protected httpResponse: HttpResponseUtil;
    constructor(botController: BotController, httpResponse: HttpResponseUtil);
    /**
     * Handle singleplayer/settings/bot/limit
     * Is called by client to define each bot roles wave limit
     * @returns string
     */
    getBotLimit(url: string, info: IEmptyRequestData, sessionID: string): string;
    /**
     * Handle singleplayer/settings/bot/difficulty
     * @returns string
     */
    getBotDifficulty(url: string, info: IEmptyRequestData, sessionID: string): string;
    /**
     * Handle singleplayer/settings/bot/difficulties
     * @returns dictionary of every bot and its diffiulty settings
     */
    getAllBotDifficulties(url: string, info: IEmptyRequestData, sessionID: string): Record<string, Difficulties>;
    /**
     * Handle client/game/bot/generate
     * @returns IGetBodyResponseData
     */
    generateBots(url: string, info: IGenerateBotsRequestData, sessionID: string): IGetBodyResponseData<IBotBase[]>;
    /**
     * Handle singleplayer/settings/bot/maxCap
     * @returns string
     */
    getBotCap(): string;
    /**
     * Handle singleplayer/settings/bot/getBotBehaviours
     * @returns string
     */
    getBotBehaviours(): string;
}
