import { IGenerateBotsRequestData } from "../../../models/eft/bot/IGenerateBotsRequestData.d.ts";
import { IBotBase } from "../../../models/eft/common/tables/IBotBase.d.ts";
import { IBotCore } from "../../../models/eft/common/tables/IBotCore.d.ts";
import { Difficulty } from "../../../models/eft/common/tables/IBotType.d.ts";
export interface IBotController {
    getBotLimit(type: string): number;
    getBotDifficulty(type: string, difficulty: string): IBotCore | Difficulty;
    isBotPmc(botRole: string): boolean;
    isBotBoss(botRole: string): boolean;
    isBotFollower(botRole: string): boolean;
    generate(info: IGenerateBotsRequestData, playerScav: boolean): IBotBase[];
    getBotCap(): number;
}
