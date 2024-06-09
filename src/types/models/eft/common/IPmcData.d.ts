import { IBotBase, IEftStats } from "./tables/IBotBase.d.ts";
export interface IPmcData extends IBotBase {
}
export interface IPostRaidPmcData extends IBotBase {
    Stats: IPostRaidStats;
}
export interface IPostRaidStats {
    Eft: IEftStats;
    /** Only found in profile we get from client post raid */
    Arena: IEftStats;
}
