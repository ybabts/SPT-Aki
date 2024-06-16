import type { IPackageJsonData } from "../models/spt/mod/IPackageJsonData.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
export declare class ModLoadOrder {
    protected logger: ILogger;
    protected localisationService: LocalisationService;
    protected mods: Map<string, IPackageJsonData>;
    protected modsAvailable: Map<string, IPackageJsonData>;
    protected loadOrder: Set<string>;
    constructor(logger: ILogger, localisationService: LocalisationService);
    setModList(mods: Record<string, IPackageJsonData>): void;
    getLoadOrder(): string[];
    getModsOnLoadBefore(mod: string): Set<string>;
    getModsOnLoadAfter(mod: string): Set<string>;
    protected invertLoadBefore(mod: string): void;
    protected getLoadOrderRecursive(mod: string, visited: Set<string>): void;
}
