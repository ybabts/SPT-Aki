import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IHideoutImprovement, Productive, TraderInfo } from "../models/eft/common/tables/IBotBase.ts";
import type { TraderData } from "../models/eft/itemEvent/IItemEventRouterBase.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class EventOutputHolder {
    protected jsonUtil: JsonUtil;
    protected profileHelper: ProfileHelper;
    protected timeUtil: TimeUtil;
    /** What has client been informed of this game session */
    protected clientActiveSessionStorage: Record<string, {
        clientInformed: boolean;
    }>;
    constructor(jsonUtil: JsonUtil, profileHelper: ProfileHelper, timeUtil: TimeUtil);
    protected output: IItemEventRouterResponse;
    getOutput(sessionID: string): IItemEventRouterResponse;
    /**
     * Reset the response object to a default state
     * Occurs prior to event being handled by server
     * @param sessionID Players id
     */
    resetOutput(sessionID: string): void;
    /**
     * Update output object with most recent values from player profile
     * @param sessionId Session id
     */
    updateOutputProperties(sessionId: string): void;
    /**
     * Convert the internal trader data object into an object we can send to the client
     * @param traderData server data for traders
     * @returns dict of trader id + TraderData
     */
    protected constructTraderRelations(traderData: Record<string, TraderInfo>): Record<string, TraderData>;
    /**
     * Return all hideout Improvements from player profile, adjust completed Improvements' completed property to be true
     * @param pmcData Player profile
     * @returns dictionary of hideout improvements
     */
    protected getImprovementsFromProfileAndFlagComplete(pmcData: IPmcData): Record<string, IHideoutImprovement>;
    /**
     * Return productions from player profile except those completed crafts the client has already seen
     * @param pmcData Player profile
     * @returns dictionary of hideout productions
     */
    protected getProductionsFromProfileAndFlagComplete(productions: Record<string, Productive>): Record<string, Productive>;
    /**
     * Required as continuous productions don't reset and stay at 100% completion but client thinks it hasn't started
     * @param productions Productions in a profile
     */
    protected cleanUpCompleteCraftsInProfile(productions: Record<string, Productive>): void;
}
