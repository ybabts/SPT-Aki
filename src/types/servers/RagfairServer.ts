import type { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator.ts";
import type { TraderAssortHelper } from "../helpers/TraderAssortHelper.ts";
import type { TraderHelper } from "../helpers/TraderHelper.ts";
import type { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.ts";
import type { ISearchRequestData } from "../models/eft/ragfair/ISearchRequestData.ts";
import type { IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { RagfairCategoriesService } from "../services/RagfairCategoriesService.ts";
import type { RagfairOfferService } from "../services/RagfairOfferService.ts";
import type { RagfairRequiredItemsService } from "../services/RagfairRequiredItemsService.ts";
export declare class RagfairServer {
    protected logger: ILogger;
    protected ragfairOfferGenerator: RagfairOfferGenerator;
    protected ragfairOfferService: RagfairOfferService;
    protected ragfairCategoriesService: RagfairCategoriesService;
    protected ragfairRequiredItemsService: RagfairRequiredItemsService;
    protected localisationService: LocalisationService;
    protected traderHelper: TraderHelper;
    protected traderAssortHelper: TraderAssortHelper;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, ragfairOfferGenerator: RagfairOfferGenerator, ragfairOfferService: RagfairOfferService, ragfairCategoriesService: RagfairCategoriesService, ragfairRequiredItemsService: RagfairRequiredItemsService, localisationService: LocalisationService, traderHelper: TraderHelper, traderAssortHelper: TraderAssortHelper, configServer: ConfigServer);
    load(): Promise<void>;
    update(): Promise<void>;
    /**
     * Get traders who need to be periodically refreshed
     * @returns string array of traders
     */
    getUpdateableTraders(): string[];
    getAllActiveCategories(fleaUnlocked: boolean, searchRequestData: ISearchRequestData, offers: IRagfairOffer[]): Record<string, number>;
    /**
     * Disable/Hide an offer from flea
     * @param offerId
     */
    hideOffer(offerId: string): void;
    getOffer(offerID: string): IRagfairOffer;
    getOffers(): IRagfairOffer[];
    removeOfferStack(offerID: string, amount: number): void;
    doesOfferExist(offerId: string): boolean;
    addPlayerOffers(): void;
}
