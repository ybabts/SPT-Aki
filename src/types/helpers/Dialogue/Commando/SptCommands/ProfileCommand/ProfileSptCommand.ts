import type { SavedCommand } from "../GiveCommand/SavedCommand.ts";
import type { ISptCommand } from "../ISptCommand.ts";
import type { ItemHelper } from "../../../../../helpers/ItemHelper.ts";
import type { PresetHelper } from "../../../../../helpers/PresetHelper.ts";
import type { ProfileHelper } from "../../../../../helpers/ProfileHelper.ts";
import type { ISendMessageRequest } from "../../../../../models/eft/dialog/ISendMessageRequest.ts";
import type { IUserDialogInfo } from "../../../../../models/eft/profile/IAkiProfile.ts";
import type { IProfileChangeEvent } from "../../../../../models/spt/dialog/ISendMessageDetails.ts";
import type { ILogger } from "../../../../../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../../../../../servers/DatabaseServer.ts";
import type { LocaleService } from "../../../../../services/LocaleService.ts";
import type { MailSendService } from "../../../../../services/MailSendService.ts";
import type { HashUtil } from "../../../../../utils/HashUtil.ts";
import type { JsonUtil } from "../../../../../utils/JsonUtil.ts";
export declare class ProfileSptCommand implements ISptCommand {
    protected logger: ILogger;
    protected itemHelper: ItemHelper;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected presetHelper: PresetHelper;
    protected mailSendService: MailSendService;
    protected localeService: LocaleService;
    protected databaseServer: DatabaseServer;
    protected profileHelper: ProfileHelper;
    /**
     * Regex to account for all these cases:
     * spt profile level 20
     * spt profile skill metabolism 10
     */
    private static commandRegex;
    protected savedCommand: SavedCommand;
    constructor(logger: ILogger, itemHelper: ItemHelper, hashUtil: HashUtil, jsonUtil: JsonUtil, presetHelper: PresetHelper, mailSendService: MailSendService, localeService: LocaleService, databaseServer: DatabaseServer, profileHelper: ProfileHelper);
    getCommand(): string;
    getCommandHelp(): string;
    performAction(commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string;
    protected handleSkillCommand(skill: string, level: number): IProfileChangeEvent;
    protected handleLevelCommand(level: number): IProfileChangeEvent;
}
