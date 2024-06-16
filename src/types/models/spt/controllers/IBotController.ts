import type { IGenerateBotsRequestData } from "../../../models/eft/bot/IGenerateBotsRequestData.ts";
import type { IBotBase } from "../../../models/eft/common/tables/IBotBase.ts";
import type { IBotCore } from "../../../models/eft/common/tables/IBotCore.ts";
import type { Difficulty } from "../../../models/eft/common/tables/IBotType.ts";
export interface IBotController {
    getBotLimit(type: string): number;
    getBotDifficulty(type: string, difficulty: string): IBotCore | Difficulty;
    isBotPmc(botRole: string): boolean;
    isBotBoss(botRole: string): boolean;
    isBotFollower(botRole: string): boolean;
    generate(info: IGenerateBotsRequestData, playerScav: boolean): IBotBase[];
    getBotCap(): number;
}
