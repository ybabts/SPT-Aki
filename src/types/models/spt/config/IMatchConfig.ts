import type { IBaseConfig } from "../../../models/spt/config/IBaseConfig.ts";
export interface IMatchConfig extends IBaseConfig {
    kind: "aki-match";
    enabled: boolean;
}
