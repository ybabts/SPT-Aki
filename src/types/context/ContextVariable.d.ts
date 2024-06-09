import { ContextVariableType } from "../context/ContextVariableType.d.ts";
export declare class ContextVariable {
    private value;
    private timestamp;
    private type;
    constructor(value: any, type: ContextVariableType);
    getValue<T>(): T;
    getTimestamp(): Date;
    getType(): ContextVariableType;
}
