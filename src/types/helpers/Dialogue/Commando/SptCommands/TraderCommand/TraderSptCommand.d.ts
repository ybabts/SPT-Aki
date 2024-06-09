import { SavedCommand } from "../GiveCommand/SavedCommand.d.ts";
import { ISptCommand } from "../ISptCommand.d.ts";
import { ItemHelper } from "../../../../../helpers/ItemHelper.d.ts";
import { PresetHelper } from "../../../../../helpers/PresetHelper.d.ts";
import { ISendMessageRequest } from "../../../../../models/eft/dialog/ISendMessageRequest.d.ts";
import { IUserDialogInfo } from "../../../../../models/eft/profile/IAkiProfile.d.ts";
import { ILogger } from "../../../../../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../../../../../servers/DatabaseServer.d.ts";
import { LocaleService } from "../../../../../services/LocaleService.d.ts";
import { MailSendService } from "../../../../../services/MailSendService.d.ts";
import { HashUtil } from "../../../../../utils/HashUtil.d.ts";
import { JsonUtil } from "../../../../../utils/JsonUtil.d.ts";
export declare class TraderSptCommand implements ISptCommand {
    protected logger: ILogger;
    protected itemHelper: ItemHelper;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected presetHelper: PresetHelper;
    protected mailSendService: MailSendService;
    protected localeService: LocaleService;
    protected databaseServer: DatabaseServer;
    /**
     * Regex to account for all these cases:
     * spt trader prapor rep 100
     * spt trader mechanic spend 1000000
     */
    private static commandRegex;
    protected savedCommand: SavedCommand;
    constructor(logger: ILogger, itemHelper: ItemHelper, hashUtil: HashUtil, jsonUtil: JsonUtil, presetHelper: PresetHelper, mailSendService: MailSendService, localeService: LocaleService, databaseServer: DatabaseServer);
    getCommand(): string;
    getCommandHelp(): string;
    performAction(commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string;
}
