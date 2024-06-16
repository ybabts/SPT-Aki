import type { ILooseLoot, SpawnpointTemplate } from "../../../models/eft/common/ILooseLoot.ts";
import type { IStaticAmmoDetails, IStaticContainerProps, IStaticForcedProps, IStaticLootDetails } from "../../../models/eft/common/tables/ILootBase.ts";
export interface ILocationGenerator {
    generateContainerLoot(containerIn: IStaticContainerProps, staticForced: IStaticForcedProps[], staticLootDist: Record<string, IStaticLootDetails>, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): IStaticContainerProps;
    generateDynamicLoot(dynamicLootDist: ILooseLoot, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): SpawnpointTemplate[];
}
