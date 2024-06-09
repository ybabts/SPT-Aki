import { IEliminationConfig, IQuestConfig, IRepeatableQuestConfig } from "../models/spt/config/IQuestConfig.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { MathUtil } from "../utils/MathUtil.d.ts";
import { ProbabilityObject, ProbabilityObjectArray } from "../utils/RandomUtil.d.ts";
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
