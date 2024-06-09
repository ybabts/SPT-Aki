import { IAsyncQueue } from "../models/spt/utils/IAsyncQueue.d.ts";
import { ICommand } from "../models/spt/utils/ICommand.d.ts";
export declare class AsyncQueue implements IAsyncQueue {
    protected commandsQueue: ICommand[];
    constructor();
    waitFor(command: ICommand): Promise<any>;
}
