import { PaymentHelper } from "../helpers/PaymentHelper.d.ts";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { RagfairOfferService } from "../services/RagfairOfferService.d.ts";
export declare class RagfairRequiredItemsService {
    protected logger: ILogger;
    protected paymentHelper: PaymentHelper;
    protected ragfairOfferService: RagfairOfferService;
    protected requiredItemsCache: {};
    constructor(logger: ILogger, paymentHelper: PaymentHelper, ragfairOfferService: RagfairOfferService);
    getRequiredItemsById(searchId: string): IRagfairOffer[];
    buildRequiredItemTable(): void;
}
