import type { HandbookHelper } from "../helpers/HandbookHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { TraderAssortHelper } from "../helpers/TraderAssortHelper.ts";
import type { UtilityHelper } from "../helpers/UtilityHelper.ts";
import type { Item } from "../models/eft/common/tables/IItem.ts";
import type { ITraderAssort } from "../models/eft/common/tables/ITrader.ts";
import type { ISearchRequestData } from "../models/eft/ragfair/ISearchRequestData.ts";
import type { IRagfairConfig } from "../models/spt/config/IRagfairConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { RagfairLinkedItemService } from "../services/RagfairLinkedItemService.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
export declare class RagfairHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected traderAssortHelper: TraderAssortHelper;
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    protected itemHelper: ItemHelper;
    protected ragfairLinkedItemService: RagfairLinkedItemService;
    protected utilityHelper: UtilityHelper;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, traderAssortHelper: TraderAssortHelper, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, itemHelper: ItemHelper, ragfairLinkedItemService: RagfairLinkedItemService, utilityHelper: UtilityHelper, configServer: ConfigServer);
    /**
     * Gets currency TAG from TPL
     * @param {string} currency
     * @returns string
     */
    getCurrencyTag(currency: string): string;
    filterCategories(sessionID: string, request: ISearchRequestData): string[];
    getDisplayableAssorts(sessionID: string): Record<string, ITraderAssort>;
    protected getCategoryList(handbookId: string): string[];
    /**
     * Merges Root Items
     * Ragfair allows abnormally large stacks.
     */
    mergeStackable(items: Item[]): Item[];
    /**
     * Return the symbol for a currency
     * e.g. 5449016a4bdc2d6f028b456f return ₽
     * @param currencyTpl currency to get symbol for
     * @returns symbol of currency
     */
    getCurrencySymbol(currencyTpl: string): string;
}
