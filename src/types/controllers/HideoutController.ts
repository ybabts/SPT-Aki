import type { ScavCaseRewardGenerator } from "../generators/ScavCaseRewardGenerator.ts";
import type { HideoutHelper } from "../helpers/HideoutHelper.ts";
import type { InventoryHelper } from "../helpers/InventoryHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { PaymentHelper } from "../helpers/PaymentHelper.ts";
import type { PresetHelper } from "../helpers/PresetHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { HideoutArea, ITaskConditionCounter, Product } from "../models/eft/common/tables/IBotBase.ts";
import type { HideoutUpgradeCompleteRequestData } from "../models/eft/hideout/HideoutUpgradeCompleteRequestData.ts";
import type { IHandleQTEEventRequestData } from "../models/eft/hideout/IHandleQTEEventRequestData.ts";
import type { IHideoutArea, Stage } from "../models/eft/hideout/IHideoutArea.ts";
import type { IHideoutCancelProductionRequestData } from "../models/eft/hideout/IHideoutCancelProductionRequestData.ts";
import type { IHideoutContinuousProductionStartRequestData } from "../models/eft/hideout/IHideoutContinuousProductionStartRequestData.ts";
import type { IHideoutImproveAreaRequestData } from "../models/eft/hideout/IHideoutImproveAreaRequestData.ts";
import type { IHideoutProduction } from "../models/eft/hideout/IHideoutProduction.ts";
import type { IHideoutPutItemInRequestData } from "../models/eft/hideout/IHideoutPutItemInRequestData.ts";
import type { IHideoutScavCaseStartRequestData } from "../models/eft/hideout/IHideoutScavCaseStartRequestData.ts";
import type { IHideoutSingleProductionStartRequestData } from "../models/eft/hideout/IHideoutSingleProductionStartRequestData.ts";
import type { IHideoutTakeItemOutRequestData } from "../models/eft/hideout/IHideoutTakeItemOutRequestData.ts";
import type { IHideoutTakeProductionRequestData } from "../models/eft/hideout/IHideoutTakeProductionRequestData.ts";
import type { IHideoutToggleAreaRequestData } from "../models/eft/hideout/IHideoutToggleAreaRequestData.ts";
import type { IHideoutUpgradeRequestData } from "../models/eft/hideout/IHideoutUpgradeRequestData.ts";
import type { IQteData } from "../models/eft/hideout/IQteData.ts";
import type { IRecordShootingRangePoints } from "../models/eft/hideout/IRecordShootingRangePoints.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { HideoutAreas } from "../models/enums/HideoutAreas.ts";
import type { IHideoutConfig } from "../models/spt/config/IHideoutConfig.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { ConfigServer } from "../servers/ConfigServer.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { SaveServer } from "../servers/SaveServer.ts";
import type { FenceService } from "../services/FenceService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { PlayerService } from "../services/PlayerService.ts";
import type { ProfileActivityService } from "../services/ProfileActivityService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
import type { TimeUtil } from "../utils/TimeUtil.ts";
export declare class HideoutController {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected randomUtil: RandomUtil;
    protected inventoryHelper: InventoryHelper;
    protected itemHelper: ItemHelper;
    protected saveServer: SaveServer;
    protected playerService: PlayerService;
    protected presetHelper: PresetHelper;
    protected paymentHelper: PaymentHelper;
    protected eventOutputHolder: EventOutputHolder;
    protected httpResponse: HttpResponseUtil;
    protected profileHelper: ProfileHelper;
    protected hideoutHelper: HideoutHelper;
    protected scavCaseRewardGenerator: ScavCaseRewardGenerator;
    protected localisationService: LocalisationService;
    protected profileActivityService: ProfileActivityService;
    protected configServer: ConfigServer;
    protected jsonUtil: JsonUtil;
    protected fenceService: FenceService;
    /** Key used in TaskConditionCounters array */
    protected static nameTaskConditionCountersCrafting: string;
    protected hideoutConfig: IHideoutConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, timeUtil: TimeUtil, databaseServer: DatabaseServer, randomUtil: RandomUtil, inventoryHelper: InventoryHelper, itemHelper: ItemHelper, saveServer: SaveServer, playerService: PlayerService, presetHelper: PresetHelper, paymentHelper: PaymentHelper, eventOutputHolder: EventOutputHolder, httpResponse: HttpResponseUtil, profileHelper: ProfileHelper, hideoutHelper: HideoutHelper, scavCaseRewardGenerator: ScavCaseRewardGenerator, localisationService: LocalisationService, profileActivityService: ProfileActivityService, configServer: ConfigServer, jsonUtil: JsonUtil, fenceService: FenceService);
    /**
     * Handle HideoutUpgrade event
     * Start a hideout area upgrade
     * @param pmcData Player profile
     * @param request upgrade start request
     * @param sessionID Session id
     * @param output Client response
     */
    startUpgrade(pmcData: IPmcData, request: IHideoutUpgradeRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Handle HideoutUpgradeComplete event
     * Complete a hideout area upgrade
     * @param pmcData Player profile
     * @param request Completed upgrade request
     * @param sessionID Session id
     * @param output Client response
     */
    upgradeComplete(pmcData: IPmcData, request: HideoutUpgradeCompleteRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Upgrade wall status to visible in profile if medstation/water collector are both level 1
     * @param pmcData Player profile
     */
    protected checkAndUpgradeWall(pmcData: IPmcData): void;
    /**
     * @param pmcData Profile to edit
     * @param output Object to send back to client
     * @param sessionID Session/player id
     * @param profileParentHideoutArea Current hideout area for profile
     * @param dbHideoutArea Hideout area being upgraded
     * @param hideoutStage Stage hideout area is being upgraded to
     */
    protected addContainerImprovementToProfile(output: IItemEventRouterResponse, sessionID: string, pmcData: IPmcData, profileParentHideoutArea: HideoutArea, dbHideoutArea: IHideoutArea, hideoutStage: Stage): void;
    /**
     * Add an inventory item to profile from a hideout area stage data
     * @param pmcData Profile to update
     * @param dbHideoutData Hideout area from db being upgraded
     * @param hideoutStage Stage area upgraded to
     */
    protected addUpdateInventoryItemToProfile(pmcData: IPmcData, dbHideoutData: IHideoutArea, hideoutStage: Stage): void;
    /**
     * @param output Object to send to client
     * @param sessionID Session/player id
     * @param areaType Hideout area that had stash added
     * @param hideoutDbData Hideout area that caused addition of stash
     * @param hideoutStage Hideout area upgraded to this
     */
    protected addContainerUpgradeToClientOutput(output: IItemEventRouterResponse, sessionID: string, areaType: HideoutAreas, hideoutDbData: IHideoutArea, hideoutStage: Stage): void;
    /**
     * Handle HideoutPutItemsInAreaSlots
     * Create item in hideout slot item array, remove item from player inventory
     * @param pmcData Profile data
     * @param addItemToHideoutRequest reqeust from client to place item in area slot
     * @param sessionID Session id
     * @returns IItemEventRouterResponse object
     */
    putItemsInAreaSlots(pmcData: IPmcData, addItemToHideoutRequest: IHideoutPutItemInRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutTakeItemsFromAreaSlots event
     * Remove item from hideout area and place into player inventory
     * @param pmcData Player profile
     * @param request Take item out of area request
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    takeItemsFromAreaSlots(pmcData: IPmcData, request: IHideoutTakeItemOutRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Find resource item in hideout area, add copy to player inventory, remove Item from hideout slot
     * @param sessionID Session id
     * @param pmcData Profile to update
     * @param removeResourceRequest client request
     * @param output response to send to client
     * @param hideoutArea Area fuel is being removed from
     * @returns IItemEventRouterResponse response
     */
    protected removeResourceFromArea(sessionID: string, pmcData: IPmcData, removeResourceRequest: IHideoutTakeItemOutRequestData, output: IItemEventRouterResponse, hideoutArea: HideoutArea): IItemEventRouterResponse;
    /**
     * Handle HideoutToggleArea event
     * Toggle area on/off
     * @param pmcData Player profile
     * @param request Toggle area request
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    toggleArea(pmcData: IPmcData, request: IHideoutToggleAreaRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutSingleProductionStart event
     * Start production for an item from hideout area
     * @param pmcData Player profile
     * @param body Start prodution of single item request
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    singleProductionStart(pmcData: IPmcData, body: IHideoutSingleProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutScavCaseProductionStart event
     * Handles event after clicking 'start' on the scav case hideout page
     * @param pmcData player profile
     * @param body client request object
     * @param sessionID session id
     * @returns item event router response
     */
    scavCaseProductionStart(pmcData: IPmcData, body: IHideoutScavCaseStartRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Adjust scav case time based on fence standing
     *
     * @param pmcData Player profile
     * @param productionTime Time to complete scav case in seconds
     * @returns Adjusted scav case time in seconds
     */
    protected getScavCaseTime(pmcData: IPmcData, productionTime: number): number;
    /**
     * Add generated scav case rewards to player profile
     * @param pmcData player profile to add rewards to
     * @param rewards reward items to add to profile
     * @param recipeId recipe id to save into Production dict
     */
    protected addScavCaseRewardsToProfile(pmcData: IPmcData, rewards: Product[], recipeId: string): void;
    /**
     * Start production of continuously created item
     * @param pmcData Player profile
     * @param request Continious production request
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    continuousProductionStart(pmcData: IPmcData, request: IHideoutContinuousProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle HideoutTakeProduction event
     * Take completed item out of hideout area and place into player inventory
     * @param pmcData Player profile
     * @param request Remove production from area request
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    takeProduction(pmcData: IPmcData, request: IHideoutTakeProductionRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Take recipe-type production out of hideout area and place into player inventory
     * @param sessionID Session id
     * @param recipe Completed recipe of item
     * @param pmcData Player profile
     * @param request Remove production from area request
     * @param output Output object to update
     */
    protected handleRecipe(sessionID: string, recipe: IHideoutProduction, pmcData: IPmcData, request: IHideoutTakeProductionRequestData, output: IItemEventRouterResponse): void;
    /**
     * Get the "CounterHoursCrafting" TaskConditionCounter from a profile
     * @param pmcData Profile to get counter from
     * @param recipe Recipe being crafted
     * @returns ITaskConditionCounter
     */
    protected getHoursCraftingTaskConditionCounter(pmcData: IPmcData, recipe: IHideoutProduction): ITaskConditionCounter;
    /**
     * Handles generating case rewards and sending to player inventory
     * @param sessionID Session id
     * @param pmcData Player profile
     * @param request Get rewards from scavcase craft request
     * @param output Output object to update
     */
    protected handleScavCase(sessionID: string, pmcData: IPmcData, request: IHideoutTakeProductionRequestData, output: IItemEventRouterResponse): void;
    /**
     * Get quick time event list for hideout
     * // TODO - implement this
     * @param sessionId Session id
     * @returns IQteData array
     */
    getQteList(sessionId: string): IQteData[];
    /**
     * Handle HideoutQuickTimeEvent on client/game/profile/items/moving
     * Called after completing workout at gym
     * @param sessionId Session id
     * @param pmcData Profile to adjust
     * @param request QTE result object
     */
    handleQTEEventOutcome(sessionId: string, pmcData: IPmcData, request: IHandleQTEEventRequestData, output: IItemEventRouterResponse): void;
    /**
     * Record a high score from the shooting range into a player profiles overallcounters
     * @param sessionId Session id
     * @param pmcData Profile to update
     * @param request shooting range score request
     * @returns IItemEventRouterResponse
     */
    recordShootingRangePoints(sessionId: string, pmcData: IPmcData, request: IRecordShootingRangePoints): void;
    /**
     * Handle client/game/profile/items/moving - HideoutImproveArea
     * @param sessionId Session id
     * @param pmcData Profile to improve area in
     * @param request Improve area request data
     */
    improveArea(sessionId: string, pmcData: IPmcData, request: IHideoutImproveAreaRequestData): IItemEventRouterResponse;
    /**
     * Handle client/game/profile/items/moving HideoutCancelProductionCommand
     * @param sessionId Session id
     * @param pmcData Profile with craft to cancel
     * @param request Cancel production request data
     * @returns IItemEventRouterResponse
     */
    cancelProduction(sessionId: string, pmcData: IPmcData, request: IHideoutCancelProductionRequestData): IItemEventRouterResponse;
    /**
     * Function called every x seconds as part of onUpdate event
     */
    update(): void;
}
