import { IChatCommand } from "../../../helpers/Dialogue/Commando/IChatCommand.d.ts";
import { ISptCommand } from "../../../helpers/Dialogue/Commando/SptCommands/ISptCommand.d.ts";
import { ISendMessageRequest } from "../../../models/eft/dialog/ISendMessageRequest.d.ts";
import { IUserDialogInfo } from "../../../models/eft/profile/IAkiProfile.d.ts";
import { ConfigServer } from "../../../servers/ConfigServer.d.ts";
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
