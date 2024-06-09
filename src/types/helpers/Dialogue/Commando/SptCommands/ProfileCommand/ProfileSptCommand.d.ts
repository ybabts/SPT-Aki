import { SavedCommand } from "../GiveCommand/SavedCommand.d.ts";
import { ISptCommand } from "../ISptCommand.d.ts";
import { ItemHelper } from "../../../../../helpers/ItemHelper.d.ts";
import { PresetHelper } from "../../../../../helpers/PresetHelper.d.ts";
import { ProfileHelper } from "../../../../../helpers/ProfileHelper.d.ts";
import { ISendMessageRequest } from "../../../../../models/eft/dialog/ISendMessageRequest.d.ts";
import { IUserDialogInfo } from "../../../../../models/eft/profile/IAkiProfile.d.ts";
import { IProfileChangeEvent } from "../../../../../models/spt/dialog/ISendMessageDetails.d.ts";
import { ILogger } from "../../../../../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../../../../../servers/DatabaseServer.d.ts";
import { LocaleService } from "../../../../../services/LocaleService.d.ts";
import { MailSendService } from "../../../../../services/MailSendService.d.ts";
import { HashUtil } from "../../../../../utils/HashUtil.d.ts";
import { JsonUtil } from "../../../../../utils/JsonUtil.d.ts";
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
