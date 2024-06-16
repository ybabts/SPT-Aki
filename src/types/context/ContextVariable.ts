import type { ContextVariableType } from "../context/ContextVariableType.ts";
export declare class ContextVariable {
    private value;
    private timestamp;
    private type;
    constructor(value: any, type: ContextVariableType);
    getValue<T>(): T;
    getTimestamp(): Date;
    getType(): ContextVariableType;
}
