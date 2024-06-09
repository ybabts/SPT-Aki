import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem.d.ts";
import { IStorePlayerOfferTaxAmountRequestData } from "../models/eft/ragfair/IStorePlayerOfferTaxAmountRequestData.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { RagfairPriceService } from "../services/RagfairPriceService.d.ts";
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
