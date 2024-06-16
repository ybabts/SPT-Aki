import type { IBaseConfig, IRunIntervalValues } from "../../../models/spt/config/IBaseConfig.ts";
export interface IHideoutConfig extends IBaseConfig {
    kind: "aki-hideout";
    /** How many seconds should pass before hideout crafts / fuel usage is checked and procesed */
    runIntervalSeconds: number;
    /** Default values used to hydrate `runIntervalSeconds` with */
    runIntervalValues: IRunIntervalValues;
    hoursForSkillCrafting: number;
    expCraftAmount: number;
    overrideCraftTimeSeconds: number;
    overrideBuildTimeSeconds: number;
    /** Only process a profiles hideout crafts when it has been active in the last x minutes */
    updateProfileHideoutWhenActiveWithinMinutes: number;
}
