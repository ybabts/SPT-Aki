import type { Ixyz } from "./Ixyz.ts";
import type { Item } from "./tables/IItem.ts";
export interface ILooseLoot {
    spawnpointCount: SpawnpointCount;
    spawnpointsForced: SpawnpointsForced[];
    spawnpoints: Spawnpoint[];
}
export interface SpawnpointCount {
    mean: number;
    std: number;
}
export interface SpawnpointsForced {
    locationId: string;
    probability: number;
    template: SpawnpointTemplate;
}
export interface SpawnpointTemplate {
    Id: string;
    IsContainer: boolean;
    useGravity: boolean;
    randomRotation: boolean;
    Position: Ixyz;
    Rotation: Ixyz;
    IsAlwaysSpawn: boolean;
    IsGroupPosition: boolean;
    GroupPositions: any[];
    Root: string;
    Items: Item[];
}
export interface Spawnpoint {
    locationId: string;
    probability: number;
    template: SpawnpointTemplate;
    itemDistribution: ItemDistribution[];
}
export interface ItemDistribution {
    composedKey: ComposedKey;
    relativeProbability: number;
}
export interface ComposedKey {
    key: string;
}
