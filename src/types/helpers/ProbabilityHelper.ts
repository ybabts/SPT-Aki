import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class ProbabilityHelper {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    constructor(logger: ILogger, randomUtil: RandomUtil);
    /**
     * Chance to roll a number out of 100
     * @param chance Percentage chance roll should success
     * @param scale scale of chance to allow support of numbers > 1-100
     * @returns true if success
     */
    rollChance(chance: number, scale?: number): boolean;
}
