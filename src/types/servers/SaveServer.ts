import type { SaveLoadRouter } from "../di/Router.ts";
import type { IAkiProfile, Info } from "../models/eft/profile/IAkiProfile.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { VFS } from "../utils/VFS.ts";
import type { ConfigServer } from "./ConfigServer.ts";
export declare class SaveServer {
    protected vfs: VFS;
    protected saveLoadRouters: SaveLoadRouter[];
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected localisationService: LocalisationService;
    protected logger: ILogger;
    protected configServer: ConfigServer;
    protected profileFilepath: string;
    protected profiles: {};
    protected onBeforeSaveCallbacks: {};
    protected saveMd5: {};
    constructor(vfs: VFS, saveLoadRouters: SaveLoadRouter[], jsonUtil: JsonUtil, hashUtil: HashUtil, localisationService: LocalisationService, logger: ILogger, configServer: ConfigServer);
    /**
     * Add callback to occur prior to saving profile changes
     * @param id Id for save callback
     * @param callback Callback to execute prior to running SaveServer.saveProfile()
     */
    addBeforeSaveCallback(id: string, callback: (profile: Partial<IAkiProfile>) => Partial<IAkiProfile>): void;
    /**
     * Remove a callback from being executed prior to saving profile in SaveServer.saveProfile()
     * @param id Id of callback to remove
     */
    removeBeforeSaveCallback(id: string): void;
    /**
     * Load all profiles in /user/profiles folder into memory (this.profiles)
     */
    load(): void;
    /**
     * Save changes for each profile from memory into user/profiles json
     */
    save(): void;
    /**
     * Get a player profile from memory
     * @param sessionId Session id
     * @returns IAkiProfile
     */
    getProfile(sessionId: string): IAkiProfile;
    /**
     * Get all profiles from memory
     * @returns Dictionary of IAkiProfile
     */
    getProfiles(): Record<string, IAkiProfile>;
    /**
     * Delete a profile by id
     * @param sessionID Id of profile to remove
     * @returns true when deleted, false when profile not found
     */
    deleteProfileById(sessionID: string): boolean;
    /**
     * Create a new profile in memory with empty pmc/scav objects
     * @param profileInfo Basic profile data
     */
    createProfile(profileInfo: Info): void;
    /**
     * Add full profile in memory by key (info.id)
     * @param profileDetails Profile to save
     */
    addProfile(profileDetails: IAkiProfile): void;
    /**
     * Look up profile json in user/profiles by id and store in memory
     * Execute saveLoadRouters callbacks after being loaded into memory
     * @param sessionID Id of profile to store in memory
     */
    loadProfile(sessionID: string): void;
    /**
     * Save changes from in-memory profile to user/profiles json
     * Execute onBeforeSaveCallbacks callbacks prior to being saved to json
     * @param sessionID profile id (user/profiles/id.json)
     * @returns time taken to save in MS
     */
    saveProfile(sessionID: string): number;
    /**
     * Remove a physical profile json from user/profiles
     * @param sessionID Profile id to remove
     * @returns true if file no longer exists
     */
    removeProfile(sessionID: string): boolean;
}
