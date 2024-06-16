import type { IChatCommand } from "../../../helpers/Dialogue/Commando/IChatCommand.ts";
import type { ISptCommand } from "../../../helpers/Dialogue/Commando/SptCommands/ISptCommand.ts";
import type { ISendMessageRequest } from "../../../models/eft/dialog/ISendMessageRequest.ts";
import type { IUserDialogInfo } from "../../../models/eft/profile/IAkiProfile.ts";
import type { ConfigServer } from "../../../servers/ConfigServer.ts";
export declare class SptCommandoCommands implements IChatCommand {
    protected configServer: ConfigServer;
    protected sptCommands: ISptCommand[];
    constructor(configServer: ConfigServer, sptCommands: ISptCommand[]);
    registerSptCommandoCommand(command: ISptCommand): void;
    getCommandHelp(command: string): string;
    getCommandPrefix(): string;
    getCommands(): Set<string>;
    handle(command: string, commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string;
}
