import { BossLocationSpawn } from "../../../models/eft/common/ILocationBase.d.ts";
import { SeasonalEventType } from "../../../models/enums/SeasonalEventType.d.ts";
import { IBaseConfig } from "../../../models/spt/config/IBaseConfig.d.ts";
export interface ISeasonalEventConfig extends IBaseConfig {
    kind: "aki-seasonalevents";
    enableSeasonalEventDetection: boolean;
    /** event / botType / equipSlot / itemid */
    eventGear: Record<string, Record<string, Record<string, Record<string, number>>>>;
    events: ISeasonalEvent[];
    eventBotMapping: Record<string, string>;
    eventBossSpawns: Record<string, Record<string, BossLocationSpawn[]>>;
    gifterSettings: GifterSetting[];
}
export interface ISeasonalEvent {
    name: string;
    type: SeasonalEventType;
    startDay: number;
    startMonth: number;
    endDay: number;
    endMonth: number;
}
export interface GifterSetting {
    map: string;
    zones: string;
    spawnChance: number;
}
