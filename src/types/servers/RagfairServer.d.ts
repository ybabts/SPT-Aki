import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator.d.ts";
import { TraderAssortHelper } from "../helpers/TraderAssortHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.d.ts";
import { ISearchRequestData } from "../models/eft/ragfair/ISearchRequestData.d.ts";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { RagfairCategoriesService } from "../services/RagfairCategoriesService.d.ts";
import { RagfairOfferService } from "../services/RagfairOfferService.d.ts";
import { RagfairRequiredItemsService } from "../services/RagfairRequiredItemsService.d.ts";
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
