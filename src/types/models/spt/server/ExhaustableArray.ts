import type { JsonUtil } from "../../../utils/JsonUtil.ts";
import type { RandomUtil } from "../../../utils/RandomUtil.ts";
export declare class ExhaustableArray<T> implements IExhaustableArray<T> {
    private itemPool;
    private randomUtil;
    private jsonUtil;
    private pool;
    constructor(itemPool: T[], randomUtil: RandomUtil, jsonUtil: JsonUtil);
    getRandomValue(): T;
    getFirstValue(): T;
    hasValues(): boolean;
}
export interface IExhaustableArray<T> {
    getRandomValue(): T;
    getFirstValue(): T;
    hasValues(): boolean;
}
