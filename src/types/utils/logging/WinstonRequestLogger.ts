import type { IAsyncQueue } from "../../models/spt/utils/IAsyncQueue.ts";
import type { AbstractWinstonLogger } from "../../utils/logging/AbstractWinstonLogger.ts";
export declare class WinstonRequestLogger extends AbstractWinstonLogger {
    protected asyncQueue: IAsyncQueue;
    constructor(asyncQueue: IAsyncQueue);
    protected isLogExceptions(): boolean;
    protected isLogToFile(): boolean;
    protected isLogToConsole(): boolean;
    protected getFilePath(): string;
    protected getFileName(): string;
    protected getLogMaxSize(): string;
}
