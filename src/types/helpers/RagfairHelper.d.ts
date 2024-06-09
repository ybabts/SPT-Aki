import { HandbookHelper } from "../helpers/HandbookHelper.d.ts";
import { ItemHelper } from "../helpers/ItemHelper.d.ts";
import { TraderAssortHelper } from "../helpers/TraderAssortHelper.d.ts";
import { UtilityHelper } from "../helpers/UtilityHelper.d.ts";
import { Item } from "../models/eft/common/tables/IItem.d.ts";
import { ITraderAssort } from "../models/eft/common/tables/ITrader.d.ts";
import { ISearchRequestData } from "../models/eft/ragfair/ISearchRequestData.d.ts";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { RagfairLinkedItemService } from "../services/RagfairLinkedItemService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
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
