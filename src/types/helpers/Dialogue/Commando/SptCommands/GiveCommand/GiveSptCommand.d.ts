import { SavedCommand } from "./SavedCommand.d.ts";
import { ISptCommand } from "../ISptCommand.d.ts";
import { ItemHelper } from "../../../../ItemHelper.d.ts";
import { PresetHelper } from "../../../../PresetHelper.d.ts";
import { ITemplateItem } from "../../../../../models/eft/common/tables/ITemplateItem.d.ts";
import { ISendMessageRequest } from "../../../../../models/eft/dialog/ISendMessageRequest.d.ts";
import { IUserDialogInfo } from "../../../../../models/eft/profile/IAkiProfile.d.ts";
import { ILogger } from "../../../../../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../../../../../servers/DatabaseServer.d.ts";
import { ItemFilterService } from "../../../../../services/ItemFilterService.d.ts";
import { LocaleService } from "../../../../../services/LocaleService.d.ts";
import { MailSendService } from "../../../../../services/MailSendService.d.ts";
import { HashUtil } from "../../../../../utils/HashUtil.d.ts";
import { JsonUtil } from "../../../../../utils/JsonUtil.d.ts";
export declare class GiveSptCommand implements ISptCommand {
    protected logger: ILogger;
    protected itemHelper: ItemHelper;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected presetHelper: PresetHelper;
    protected mailSendService: MailSendService;
    protected localeService: LocaleService;
    protected databaseServer: DatabaseServer;
    protected itemFilterService: ItemFilterService;
    /**
     * Regex to account for all these cases:
     * spt give "item name" 5
     * spt give templateId 5
     * spt give en "item name in english" 5
     * spt give es "nombre en español" 5
     * spt give 5 <== this is the reply when the algo isn't sure about an item
     */
    private static commandRegex;
    private static acceptableConfidence;
    protected savedCommand: Map<string, SavedCommand>;
    constructor(logger: ILogger, itemHelper: ItemHelper, hashUtil: HashUtil, jsonUtil: JsonUtil, presetHelper: PresetHelper, mailSendService: MailSendService, localeService: LocaleService, databaseServer: DatabaseServer, itemFilterService: ItemFilterService);
    getCommand(): string;
    getCommandHelp(): string;
    performAction(commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string;
    /**
     * A "simple" function that checks if an item is supposed to be given to a player or not
     * @param templateItem the template item to check
     * @returns true if its obtainable, false if its not
     */
    protected isItemAllowed(templateItem: ITemplateItem): boolean;
}
