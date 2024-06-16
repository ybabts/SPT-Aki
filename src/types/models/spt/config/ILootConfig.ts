import type { Spawnpoint } from "../../../models/eft/common/ILooseLoot.ts";
import type { IBaseConfig } from "../../../models/spt/config/IBaseConfig.ts";
export interface ILootConfig extends IBaseConfig {
    kind: "aki-loot";
    /** Spawn positions to add into a map, key=mapid */
    looseLoot: Record<string, Spawnpoint[]>;
    /** Loose loot probability adjustments to apply on game start */
    looseLootSpawnPointAdjustments: Record<string, Record<string, number>>;
}
