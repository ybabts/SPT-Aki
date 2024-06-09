import { ICommand } from "../../../models/spt/utils/ICommand.d.ts";
export interface IAsyncQueue {
    waitFor(command: ICommand): Promise<any>;
}
