import type { HttpServerHelper } from "../helpers/HttpServerHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { PreAkiModLoader } from "../loaders/PreAkiModLoader.ts";
import type { IChangeRequestData } from "../models/eft/launcher/IChangeRequestData.ts";
import type { ILoginRequestData } from "../models/eft/launcher/ILoginRequestData.ts";
import type { IRegisterData } from "../models/eft/launcher/IRegisterData.ts";
import type { Info, ModDetails } from "../models/eft/profile/IAkiProfile.ts";
import type { IConnectResponse } from "../models/eft/profile/IConnectResponse.ts";
import type { ICoreConfig } from "../models/spt/config/ICoreConfig.ts";
import type { IPackageJsonData } from "../models/spt/mod/IPackageJsonData.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class LauncherController {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected randomUtil: RandomUtil;
    protected saveServer: SaveServer;
    protected httpServerHelper: HttpServerHelper;
    protected profileHelper: ProfileHelper;
    protected databaseServer: DatabaseServer;
    protected localisationService: LocalisationService;
    protected preAkiModLoader: PreAkiModLoader;
    protected configServer: ConfigServer;
    protected coreConfig: ICoreConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, timeUtil: TimeUtil, randomUtil: RandomUtil, saveServer: SaveServer, httpServerHelper: HttpServerHelper, profileHelper: ProfileHelper, databaseServer: DatabaseServer, localisationService: LocalisationService, preAkiModLoader: PreAkiModLoader, configServer: ConfigServer);
    connect(): IConnectResponse;
    /**
     * Get descriptive text for each of the profile edtions a player can choose, keyed by profile.json profile type e.g. "Edge Of Darkness"
     * @returns Dictionary of profile types with related descriptive text
     */
    protected getProfileDescriptions(): Record<string, string>;
    find(sessionIdKey: string): Info;
    login(info: ILoginRequestData): string;
    register(info: IRegisterData): string;
    protected createAccount(info: IRegisterData): string;
    protected generateProfileId(): string;
    protected formatID(timeStamp: number, counter: number): string;
    changeUsername(info: IChangeRequestData): string;
    changePassword(info: IChangeRequestData): string;
    /**
     * Handle launcher requesting profile be wiped
     * @param info IRegisterData
     * @returns Session id
     */
    wipe(info: IRegisterData): string;
    getCompatibleTarkovVersion(): string;
    /**
     * Get the mods the server has currently loaded
     * @returns Dictionary of mod name and mod details
     */
    getLoadedServerMods(): Record<string, IPackageJsonData>;
    /**
     * Get the mods a profile has ever loaded into game with
     * @param sessionId Player id
     * @returns Array of mod details
     */
    getServerModsProfileUsed(sessionId: string): ModDetails[];
}
