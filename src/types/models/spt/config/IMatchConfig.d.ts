import { IBaseConfig } from "../../../models/spt/config/IBaseConfig.d.ts";
export interface IMatchConfig extends IBaseConfig {
    kind: "aki-match";
    enabled: boolean;
}
