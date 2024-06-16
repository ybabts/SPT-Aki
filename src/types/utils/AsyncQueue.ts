import type { IAsyncQueue } from "../models/spt/utils/IAsyncQueue.ts";
import type { ICommand } from "../models/spt/utils/ICommand.ts";
export declare class AsyncQueue implements IAsyncQueue {
    protected commandsQueue: ICommand[];
    constructor();
    waitFor(command: ICommand): Promise<any>;
}
