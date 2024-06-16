import type { IEliminationConfig, IQuestConfig, IRepeatableQuestConfig } from "../models/spt/config/IQuestConfig.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { MathUtil } from "../utils/MathUtil.ts";
import type { ProbabilityObject, ProbabilityObjectArray } from "../utils/RandomUtil.ts";
export declare class RepeatableQuestHelper {
    protected mathUtil: MathUtil;
    protected jsonUtil: JsonUtil;
    protected configServer: ConfigServer;
    protected questConfig: IQuestConfig;
    constructor(mathUtil: MathUtil, jsonUtil: JsonUtil, configServer: ConfigServer);
    /**
     * Get the relevant elimination config based on the current players PMC level
     * @param pmcLevel Level of PMC character
     * @param repeatableConfig Main repeatable config
     * @returns IEliminationConfig
     */
    getEliminationConfigByPmcLevel(pmcLevel: number, repeatableConfig: IRepeatableQuestConfig): IEliminationConfig;
    probabilityObjectArray<K, V>(configArrayInput: ProbabilityObject<K, V>[]): ProbabilityObjectArray<K, V>;
}
