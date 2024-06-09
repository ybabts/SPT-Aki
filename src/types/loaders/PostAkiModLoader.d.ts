import { DependencyContainer } from "npm:tsyringe";
import { ModTypeCheck } from "../loaders/ModTypeCheck.d.ts";
import { PreAkiModLoader } from "../loaders/PreAkiModLoader.d.ts";
import { IModLoader } from "../models/spt/mod/IModLoader.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
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
