import type { DependencyContainer } from "npm:tsyringe@4.8.0";
import type { ModLoadOrder } from "../loaders/ModLoadOrder.ts";
import type { ModTypeCheck } from "../loaders/ModTypeCheck.ts";
import type { ModDetails } from "../models/eft/profile/IAkiProfile.ts";
import type { ICoreConfig } from "../models/spt/config/ICoreConfig.ts";
import type { IModLoader } from "../models/spt/mod/IModLoader.ts";
import type { IPackageJsonData } from "../models/spt/mod/IPackageJsonData.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { ModCompilerService } from "../services/ModCompilerService.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { VFS } from "../utils/VFS.ts";
export declare class PreAkiModLoader implements IModLoader {
    protected logger: ILogger;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected modCompilerService: ModCompilerService;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected modLoadOrder: ModLoadOrder;
    protected modTypeCheck: ModTypeCheck;
    protected container: DependencyContainer;
    protected readonly basepath = "user/mods/.ts";
    protected readonly modOrderPath = "user/mods/order.json.ts";
    protected order: Record<string, number>;
    protected imported: Record<string, IPackageJsonData>;
    protected akiConfig: ICoreConfig;
    protected serverDependencies: Record<string, string>;
    protected skippedMods: Set<string>;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, modCompilerService: ModCompilerService, localisationService: LocalisationService, configServer: ConfigServer, modLoadOrder: ModLoadOrder, modTypeCheck: ModTypeCheck);
    load(container: DependencyContainer): Promise<void>;
    /**
     * Returns a list of mods with preserved load order
     * @returns Array of mod names in load order
     */
    getImportedModsNames(): string[];
    getImportedModDetails(): Record<string, IPackageJsonData>;
    getProfileModsGroupedByModName(profileMods: ModDetails[]): ModDetails[];
    getModPath(mod: string): string;
    protected importModsAsync(): Promise<void>;
    protected sortMods(prev: string, next: string, missingFromOrderJSON: Record<string, boolean>): number;
    /**
     * Check for duplicate mods loaded, show error if any
     * @param modPackageData map of mod package.json data
     */
    protected checkForDuplicateMods(modPackageData: Map<string, IPackageJsonData>): void;
    /**
     * Returns an array of valid mods.
     *
     * @param mods mods to validate
     * @returns array of mod folder names
     */
    protected getValidMods(mods: string[]): string[];
    /**
     * Get packageJson data for mods
     * @param mods mods to get packageJson for
     * @returns map <modFolderName - package.json>
     */
    protected getModsPackageData(mods: string[]): Map<string, IPackageJsonData>;
    /**
     * Is the passed in mod compatible with the running server version
     * @param mod Mod to check compatibiltiy with AKI
     * @returns True if compatible
     */
    protected isModCombatibleWithAki(mod: IPackageJsonData): boolean;
    /**
     * Execute each mod found in this.imported
     * @returns void promise
     */
    protected executeModsAsync(): Promise<void>;
    /**
     * Read loadorder.json (create if doesnt exist) and return sorted list of mods
     * @returns string array of sorted mod names
     */
    sortModsLoadOrder(): string[];
    /**
     * Compile mod and add into class property "imported"
     * @param mod Name of mod to compile/add
     */
    protected addModAsync(mod: string, pkg: IPackageJsonData): Promise<void>;
    /**
     * Checks if a given mod should be loaded or skipped.
     *
     * @param pkg mod package.json data
     * @returns
     */
    protected shouldSkipMod(pkg: IPackageJsonData): boolean;
    protected autoInstallDependencies(modPath: string, pkg: IPackageJsonData): void;
    protected areModDependenciesFulfilled(pkg: IPackageJsonData, loadedMods: Map<string, IPackageJsonData>): boolean;
    protected isModCompatible(mod: IPackageJsonData, loadedMods: Map<string, IPackageJsonData>): boolean;
    /**
     * Validate a mod passes a number of checks
     * @param modName name of mod in /mods/ to validate
     * @returns true if valid
     */
    protected validMod(modName: string): boolean;
    getContainer(): DependencyContainer;
}
