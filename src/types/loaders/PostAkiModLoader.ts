import type { DependencyContainer } from "npm:tsyringe@4.8.0";
import type { ModTypeCheck } from "../loaders/ModTypeCheck.ts";
import type { PreAkiModLoader } from "../loaders/PreAkiModLoader.ts";
import type { IModLoader } from "../models/spt/mod/IModLoader.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
export declare class PostAkiModLoader implements IModLoader {
    protected logger: ILogger;
    protected preAkiModLoader: PreAkiModLoader;
    protected localisationService: LocalisationService;
    protected modTypeCheck: ModTypeCheck;
    protected container: DependencyContainer;
    constructor(logger: ILogger, preAkiModLoader: PreAkiModLoader, localisationService: LocalisationService, modTypeCheck: ModTypeCheck);
    getModPath(mod: string): string;
    load(): Promise<void>;
    protected executeModsAsync(): Promise<void>;
}
