import { IAsyncQueue } from "../../models/spt/utils/IAsyncQueue.d.ts";
import { AbstractWinstonLogger } from "../../utils/logging/AbstractWinstonLogger.d.ts";
export declare class WinstonMainLogger extends AbstractWinstonLogger {
    protected asyncQueue: IAsyncQueue;
    constructor(asyncQueue: IAsyncQueue);
    protected isLogExceptions(): boolean;
    protected isLogToFile(): boolean;
    protected isLogToConsole(): boolean;
    protected getFilePath(): string;
    protected getFileName(): string;
}
