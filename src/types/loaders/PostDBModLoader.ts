import type { DependencyContainer } from "npm:tsyringe@4.8.0";
import type { OnLoad } from "../di/OnLoad.ts";
import type { BundleLoader } from "../loaders/BundleLoader.ts";
import type { ModTypeCheck } from "../loaders/ModTypeCheck.ts";
import type { PreAkiModLoader } from "../loaders/PreAkiModLoader.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
export declare class PostDBModLoader implements OnLoad {
    protected logger: ILogger;
    protected bundleLoader: BundleLoader;
    protected preAkiModLoader: PreAkiModLoader;
    protected localisationService: LocalisationService;
    protected modTypeCheck: ModTypeCheck;
    protected container: DependencyContainer;
    constructor(logger: ILogger, bundleLoader: BundleLoader, preAkiModLoader: PreAkiModLoader, localisationService: LocalisationService, modTypeCheck: ModTypeCheck);
    onLoad(): Promise<void>;
    getRoute(): string;
    getModPath(mod: string): string;
    protected executeModsAsync(): Promise<void>;
    protected addBundles(): void;
}
