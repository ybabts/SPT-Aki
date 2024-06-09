import { ILooseLoot, SpawnpointTemplate } from "../../../models/eft/common/ILooseLoot.d.ts";
import { IStaticAmmoDetails, IStaticContainerProps, IStaticForcedProps, IStaticLootDetails } from "../../../models/eft/common/tables/ILootBase.d.ts";
export interface ILocationGenerator {
    generateContainerLoot(containerIn: IStaticContainerProps, staticForced: IStaticForcedProps[], staticLootDist: Record<string, IStaticLootDetails>, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): IStaticContainerProps;
    generateDynamicLoot(dynamicLootDist: ILooseLoot, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): SpawnpointTemplate[];
}
