import { TimeUtil } from "../utils/TimeUtil.d.ts";
import { Buffer } from "node:buffer";
export declare class ObjectId {
    protected timeUtil: TimeUtil;
    constructor(timeUtil: TimeUtil);
    protected randomBytes: Buffer;
    protected constglobalCounter: number;
    protected consttime: number;
    protected globalCounter: number;
    protected time: number;
    incGlobalCounter(): number;
    toHexString(byteArray: string | any[] | Buffer): string;
    generate(): string;
}
