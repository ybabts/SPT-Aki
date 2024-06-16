import type { ICommand } from "../../../models/spt/utils/ICommand.ts";
export interface IAsyncQueue {
    waitFor(command: ICommand): Promise<any>;
}
