import { FenceBaseAssortGenerator } from "../generators/FenceBaseAssortGenerator.d.ts";
import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { TraderAssortHelper } from "../helpers/TraderAssortHelper.d.ts";
import { TraderHelper } from "../helpers/TraderHelper.d.ts";
import { ITraderAssort, ITraderBase } from "../models/eft/common/tables/ITrader.d.ts";
import { ITraderConfig } from "../models/spt/config/ITraderConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { DatabaseServer } from "../servers/DatabaseServer.d.ts";
import { FenceService } from "../services/FenceService.d.ts";
import { TraderAssortService } from "../services/TraderAssortService.d.ts";
import { TraderPurchasePersisterService } from "../services/TraderPurchasePersisterService.d.ts";
import { JsonUtil } from "../utils/JsonUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
export declare class TraderController {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected traderAssortHelper: TraderAssortHelper;
    protected profileHelper: ProfileHelper;
    protected traderHelper: TraderHelper;
    protected traderAssortService: TraderAssortService;
    protected traderPurchasePersisterService: TraderPurchasePersisterService;
    protected fenceService: FenceService;
    protected fenceBaseAssortGenerator: FenceBaseAssortGenerator;
    protected jsonUtil: JsonUtil;
    protected configServer: ConfigServer;
    protected traderConfig: ITraderConfig;
    constructor(logger: ILogger, timeUtil: TimeUtil, databaseServer: DatabaseServer, traderAssortHelper: TraderAssortHelper, profileHelper: ProfileHelper, traderHelper: TraderHelper, traderAssortService: TraderAssortService, traderPurchasePersisterService: TraderPurchasePersisterService, fenceService: FenceService, fenceBaseAssortGenerator: FenceBaseAssortGenerator, jsonUtil: JsonUtil, configServer: ConfigServer);
    /**
     * Runs when onLoad event is fired
     * Iterate over traders, ensure a pristine copy of their assorts is stored in traderAssortService
     * Store timestamp of next assort refresh in nextResupply property of traders .base object
     */
    load(): void;
    /**
     * Runs when onUpdate is fired
     * If current time is > nextResupply(expire) time of trader, refresh traders assorts and
     * Fence is handled slightly differently
     * @returns has run
     */
    update(): boolean;
    /**
     * Handle client/trading/api/traderSettings
     * Return an array of all traders
     * @param sessionID Session id
     * @returns array if ITraderBase objects
     */
    getAllTraders(sessionID: string): ITraderBase[];
    /**
     * Order traders by their traderId (Ttid)
     * @param traderA First trader to compare
     * @param traderB Second trader to compare
     * @returns 1,-1 or 0
     */
    protected sortByTraderId(traderA: ITraderBase, traderB: ITraderBase): number;
    /** Handle client/trading/api/getTrader */
    getTrader(sessionID: string, traderID: string): ITraderBase;
    /** Handle client/trading/api/getTraderAssort */
    getAssort(sessionId: string, traderId: string): ITraderAssort;
}
