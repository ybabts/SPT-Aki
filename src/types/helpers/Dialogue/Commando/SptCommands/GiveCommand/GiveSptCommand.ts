import type { SavedCommand } from "./SavedCommand.ts";
import type { ISptCommand } from "../ISptCommand.ts";
import type { ItemHelper } from "../../../../ItemHelper.ts";
import type { PresetHelper } from "../../../../PresetHelper.ts";
import type { ITemplateItem } from "../../../../../models/eft/common/tables/ITemplateItem.ts";
import type { ISendMessageRequest } from "../../../../../models/eft/dialog/ISendMessageRequest.ts";
import type { IUserDialogInfo } from "../../../../../models/eft/profile/IAkiProfile.ts";
import type { ILogger } from "../../../../../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../../../../../servers/DatabaseServer.ts";
import type { ItemFilterService } from "../../../../../services/ItemFilterService.ts";
import type { LocaleService } from "../../../../../services/LocaleService.ts";
import type { MailSendService } from "../../../../../services/MailSendService.ts";
import type { HashUtil } from "../../../../../utils/HashUtil.ts";
import type { JsonUtil } from "../../../../../utils/JsonUtil.ts";
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
