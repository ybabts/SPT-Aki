import type { PaymentHelper } from "../helpers/PaymentHelper.ts";
import type { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { RagfairOfferService } from "../services/RagfairOfferService.ts";
export declare class RagfairRequiredItemsService {
    protected logger: ILogger;
    protected paymentHelper: PaymentHelper;
    protected ragfairOfferService: RagfairOfferService;
    protected requiredItemsCache: {};
    constructor(logger: ILogger, paymentHelper: PaymentHelper, ragfairOfferService: RagfairOfferService);
    getRequiredItemsById(searchId: string): IRagfairOffer[];
    buildRequiredItemTable(): void;
}
