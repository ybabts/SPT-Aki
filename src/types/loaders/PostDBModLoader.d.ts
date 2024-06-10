import { DependencyContainer } from "npm:tsyringe@4.2.0";
import { OnLoad } from "../di/OnLoad.d.ts";
import { BundleLoader } from "../loaders/BundleLoader.d.ts";
import { ModTypeCheck } from "../loaders/ModTypeCheck.d.ts";
import { PreAkiModLoader } from "../loaders/PreAkiModLoader.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
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
