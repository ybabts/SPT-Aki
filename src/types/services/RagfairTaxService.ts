import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.ts";
import type { IStorePlayerOfferTaxAmountRequestData } from "../models/eft/ragfair/IStorePlayerOfferTaxAmountRequestData.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { RagfairPriceService } from "../services/RagfairPriceService.ts";
export declare class RagfairTaxService {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected ragfairPriceService: RagfairPriceService;
    protected itemHelper: ItemHelper;
    protected playerOfferTaxCache: Record<string, IStorePlayerOfferTaxAmountRequestData>;
    constructor(logger: ILogger, databaseServer: DatabaseServer, ragfairPriceService: RagfairPriceService, itemHelper: ItemHelper);
    storeClientOfferTaxValue(sessionId: string, offer: IStorePlayerOfferTaxAmountRequestData): void;
    clearStoredOfferTaxById(offerIdToRemove: string): void;
    getStoredClientOfferTaxValueById(offerIdToGet: string): IStorePlayerOfferTaxAmountRequestData;
    /**
    // This method, along with calculateItemWorth, is trying to mirror the client-side code found in the method "CalculateTaxPrice".
    // It's structured to resemble the client-side code as closely as possible - avoid making any big structure changes if it's not necessary.
     * @param item Item being sold on flea
     * @param pmcData player profile
     * @param requirementsValue
     * @param offerItemCount Number of offers being created
     * @param sellInOnePiece
     * @returns Tax in roubles
     */
    calculateTax(item: Item, pmcData: IPmcData, requirementsValue: number, offerItemCount: number, sellInOnePiece: boolean): number;
    protected calculateItemWorth(item: Item, itemTemplate: ITemplateItem, itemCount: number, pmcData: IPmcData, isRootItem?: boolean): number;
}
