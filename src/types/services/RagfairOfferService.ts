import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { RagfairServerHelper } from "../helpers/RagfairServerHelper.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer.ts";
import type { IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { RagfairOfferHolder } from "../utils/RagfairOfferHolder.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class RagfairOfferService {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected saveServer: SaveServer;
    protected ragfairServerHelper: RagfairServerHelper;
    protected profileHelper: ProfileHelper;
    protected eventOutputHolder: EventOutputHolder;
    protected httpResponse: HttpResponseUtil;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected playerOffersLoaded: boolean;
    /** Offer id + offer object */
    protected expiredOffers: Record<string, IRagfairOffer>;
    protected ragfairConfig: IRagfairConfig;
    protected ragfairOfferHandler: RagfairOfferHolder;
    constructor(logger: ILogger, timeUtil: TimeUtil, databaseServer: DatabaseServer, saveServer: SaveServer, ragfairServerHelper: RagfairServerHelper, profileHelper: ProfileHelper, eventOutputHolder: EventOutputHolder, httpResponse: HttpResponseUtil, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Get all offers
     * @returns IRagfairOffer array
     */
    getOffers(): IRagfairOffer[];
    getOfferByOfferId(offerId: string): IRagfairOffer;
    getOffersOfType(templateId: string): IRagfairOffer[];
    addOffer(offer: IRagfairOffer): void;
    addOfferToExpired(staleOffer: IRagfairOffer): void;
    /**
     * Get total count of current expired offers
     * @returns Number of expired offers
     */
    getExpiredOfferCount(): number;
    /**
     * Get an array of arrays of expired offer items + children
     * @returns Expired offer assorts
     */
    getExpiredOfferAssorts(): Item[][];
    /**
     * Clear out internal expiredOffers dictionary of all items
     */
    resetExpiredOffers(): void;
    /**
     * Does the offer exist on the ragfair
     * @param offerId offer id to check for
     * @returns offer exists - true
     */
    doesOfferExist(offerId: string): boolean;
    /**
     * Remove an offer from ragfair by offer id
     * @param offerId Offer id to remove
     */
    removeOfferById(offerId: string): void;
    /**
     * Reduce size of an offer stack by specified amount
     * @param offerId Offer to adjust stack size of
     * @param amount How much to deduct from offers stack size
     */
    removeOfferStack(offerId: string, amount: number): void;
    removeAllOffersByTrader(traderId: string): void;
    /**
     * Do the trader offers on flea need to be refreshed
     * @param traderID Trader to check
     * @returns true if they do
     */
    traderOffersNeedRefreshing(traderID: string): boolean;
    addPlayerOffers(): void;
    expireStaleOffers(): void;
    /**
     * Remove stale offer from flea
     * @param staleOffer Stale offer to process
     */
    protected processStaleOffer(staleOffer: IRagfairOffer): void;
    protected returnPlayerOffer(playerOffer: IRagfairOffer): void;
}
