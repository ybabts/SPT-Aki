import { HttpServerHelper } from "../helpers/HttpServerHelper.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { PreAkiModLoader } from "../loaders/PreAkiModLoader.d.ts";
import { IChangeRequestData } from "../models/eft/launcher/IChangeRequestData.d.ts";
import { ILoginRequestData } from "../models/eft/launcher/ILoginRequestData.d.ts";
import { IRegisterData } from "../models/eft/launcher/IRegisterData.d.ts";
import { Info, ModDetails } from "../models/eft/profile/IAkiProfile.d.ts";
import { IConnectResponse } from "../models/eft/profile/IConnectResponse.d.ts";
import { ICoreConfig } from "../models/spt/config/ICoreConfig.d.ts";
import { IPackageJsonData } from "../models/spt/mod/IPackageJsonData.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { SaveServer } from "../servers/SaveServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { HashUtil } from "../utils/HashUtil.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
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
