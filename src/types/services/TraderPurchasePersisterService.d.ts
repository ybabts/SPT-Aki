import { ProfileHelper } from "../helpers/ProfileHelper.d.ts";
import { TraderPurchaseData } from "../models/eft/profile/IAkiProfile.d.ts";
import { ITraderConfig } from "../models/spt/config/ITraderConfig.d.ts";
import { ILogger } from "../models/spt/utils/ILogger.d.ts";
import { ConfigServer } from "../servers/ConfigServer.d.ts";
import { LocalisationService } from "../services/LocalisationService.d.ts";
import { RandomUtil } from "../utils/RandomUtil.d.ts";
import { TimeUtil } from "../utils/TimeUtil.d.ts";
/**
 * Help with storing limited item purchases from traders in profile to persist them over server restarts
 */
export declare class TraderPurchasePersisterService {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected randomUtil: RandomUtil;
    protected profileHelper: ProfileHelper;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected traderConfig: ITraderConfig;
    constructor(logger: ILogger, timeUtil: TimeUtil, randomUtil: RandomUtil, profileHelper: ProfileHelper, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Get the purchases made from a trader for this profile before the last trader reset
     * @param sessionId Session id
     * @param traderId Trader to loop up purchases for
     * @returns Dict of assort id and count purchased
     */
    getProfileTraderPurchases(sessionId: string, traderId: string): Record<string, TraderPurchaseData>;
    /**
     * Get a purchase made from a trader for requested profile before the last trader reset
     * @param sessionId Session id
     * @param traderId Trader to loop up purchases for
     * @param assortId Id of assort to get data for
     * @returns TraderPurchaseData
     */
    getProfileTraderPurchase(sessionId: string, traderId: string, assortId: string): TraderPurchaseData;
    /**
     * Remove all trader purchase records from all profiles that exist
     * @param traderId Traders id
     */
    resetTraderPurchasesStoredInProfile(traderId: string): void;
    /**
     * Iterate over all server profiles and remove specific trader purchase data that has passed the trader refesh time
     * @param traderId Trader id
     */
    removeStalePurchasesFromProfiles(traderId: string): void;
}
