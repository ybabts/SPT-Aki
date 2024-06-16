import type { LootGenerator } from "../generators/LootGenerator.ts";
import type { HideoutHelper } from "../helpers/HideoutHelper.ts";
import type { InventoryHelper } from "../helpers/InventoryHelper.ts";
import type { ItemHelper } from "../helpers/ItemHelper.ts";
import type { PaymentHelper } from "../helpers/PaymentHelper.ts";
import type { PresetHelper } from "../helpers/PresetHelper.ts";
import type { ProfileHelper } from "../helpers/ProfileHelper.ts";
import type { QuestHelper } from "../helpers/QuestHelper.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IInventoryBindRequestData } from "../models/eft/inventory/IInventoryBindRequestData.ts";
import type { IInventoryCreateMarkerRequestData } from "../models/eft/inventory/IInventoryCreateMarkerRequestData.ts";
import type { IInventoryDeleteMarkerRequestData } from "../models/eft/inventory/IInventoryDeleteMarkerRequestData.ts";
import type { IInventoryEditMarkerRequestData } from "../models/eft/inventory/IInventoryEditMarkerRequestData.ts";
import type { IInventoryExamineRequestData } from "../models/eft/inventory/IInventoryExamineRequestData.ts";
import type { IInventoryFoldRequestData } from "../models/eft/inventory/IInventoryFoldRequestData.ts";
import type { IInventoryMergeRequestData } from "../models/eft/inventory/IInventoryMergeRequestData.ts";
import type { IInventoryMoveRequestData } from "../models/eft/inventory/IInventoryMoveRequestData.ts";
import type { IInventoryReadEncyclopediaRequestData } from "../models/eft/inventory/IInventoryReadEncyclopediaRequestData.ts";
import type { IInventoryRemoveRequestData } from "../models/eft/inventory/IInventoryRemoveRequestData.ts";
import type { IInventorySortRequestData } from "../models/eft/inventory/IInventorySortRequestData.ts";
import type { IInventorySplitRequestData } from "../models/eft/inventory/IInventorySplitRequestData.ts";
import type { IInventorySwapRequestData } from "../models/eft/inventory/IInventorySwapRequestData.ts";
import type { IInventoryTagRequestData } from "../models/eft/inventory/IInventoryTagRequestData.ts";
import type { IInventoryToggleRequestData } from "../models/eft/inventory/IInventoryToggleRequestData.ts";
import type { IInventoryTransferRequestData } from "../models/eft/inventory/IInventoryTransferRequestData.ts";
import type { IOpenRandomLootContainerRequestData } from "../models/eft/inventory/IOpenRandomLootContainerRequestData.ts";
import type { IRedeemProfileRequestData } from "../models/eft/inventory/IRedeemProfileRequestData.ts";
import type { ISetFavoriteItems } from "../models/eft/inventory/ISetFavoriteItems.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IAkiProfile } from "../models/eft/profile/IAkiProfile.ts";
import type { ILogger } from "../models/spt/utils/ILogger.ts";
import type { EventOutputHolder } from "../routers/EventOutputHolder.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { FenceService } from "../services/FenceService.ts";
import type { LocalisationService } from "../services/LocalisationService.ts";
import type { PlayerService } from "../services/PlayerService.ts";
import type { RagfairOfferService } from "../services/RagfairOfferService.ts";
import type { HashUtil } from "../utils/HashUtil.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
import type { JsonUtil } from "../utils/JsonUtil.ts";
import type { RandomUtil } from "../utils/RandomUtil.ts";
export declare class InventoryController {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected itemHelper: ItemHelper;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected fenceService: FenceService;
    protected presetHelper: PresetHelper;
    protected inventoryHelper: InventoryHelper;
    protected questHelper: QuestHelper;
    protected hideoutHelper: HideoutHelper;
    protected ragfairOfferService: RagfairOfferService;
    protected profileHelper: ProfileHelper;
    protected paymentHelper: PaymentHelper;
    protected localisationService: LocalisationService;
    protected playerService: PlayerService;
    protected lootGenerator: LootGenerator;
    protected eventOutputHolder: EventOutputHolder;
    protected httpResponseUtil: HttpResponseUtil;
    constructor(logger: ILogger, hashUtil: HashUtil, jsonUtil: JsonUtil, itemHelper: ItemHelper, randomUtil: RandomUtil, databaseServer: DatabaseServer, fenceService: FenceService, presetHelper: PresetHelper, inventoryHelper: InventoryHelper, questHelper: QuestHelper, hideoutHelper: HideoutHelper, ragfairOfferService: RagfairOfferService, profileHelper: ProfileHelper, paymentHelper: PaymentHelper, localisationService: LocalisationService, playerService: PlayerService, lootGenerator: LootGenerator, eventOutputHolder: EventOutputHolder, httpResponseUtil: HttpResponseUtil);
    /**
     * Move Item
     * change location of item with parentId and slotId
     * transfers items from one profile to another if fromOwner/toOwner is set in the body.
     * otherwise, move is contained within the same profile_f.
     * @param pmcData Profile
     * @param moveRequest Move request data
     * @param sessionID Session id
     * @param output Client response
     */
    moveItem(pmcData: IPmcData, moveRequest: IInventoryMoveRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Get a event router response with inventory trader message
     * @param output Item event router response
     * @returns Item event router response
     */
    protected appendTraderExploitErrorResponse(output: IItemEventRouterResponse): void;
    /**
     * Handle Remove event
     * Implements functionality "Discard" from Main menu (Stash etc.)
     * Removes item from PMC Profile
     */
    discardItem(pmcData: IPmcData, request: IInventoryRemoveRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Split Item
     * spliting 1 stack into 2
     * @param pmcData Player profile (unused, getOwnerInventoryItems() gets profile)
     * @param request Split request
     * @param sessionID Session/player id
     * @param output Client response
     * @returns IItemEventRouterResponse
     */
    splitItem(pmcData: IPmcData, request: IInventorySplitRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Fully merge 2 inventory stacks together into one stack (merging where both stacks remain is called 'transfer')
     * Deletes item from `body.item` and adding number of stacks into `body.with`
     * @param pmcData Player profile (unused, getOwnerInventoryItems() gets profile)
     * @param body Merge request
     * @param sessionID Player id
     * @param output Client response
     * @returns IItemEventRouterResponse
     */
    mergeItem(pmcData: IPmcData, body: IInventoryMergeRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * TODO: Adds no data to output to send to client, is this by design?
     * Transfer items from one stack into another while keeping original stack
     * Used to take items from scav inventory into stash or to insert ammo into mags (shotgun ones) and reloading weapon by clicking "Reload"
     * @param pmcData Player profile
     * @param body Transfer request
     * @param sessionID Session id
     * @param output Client response
     * @returns IItemEventRouterResponse
     */
    transferItem(pmcData: IPmcData, body: IInventoryTransferRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Swap Item
     * its used for "reload" if you have weapon in hands and magazine is somewhere else in rig or backpack in equipment
     * Also used to swap items using quick selection on character screen
     */
    swapItem(pmcData: IPmcData, request: IInventorySwapRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handles folding of Weapons
     */
    foldItem(pmcData: IPmcData, request: IInventoryFoldRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Toggles "Toggleable" items like night vision goggles and face shields.
     * @param pmcData player profile
     * @param body Toggle request
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    toggleItem(pmcData: IPmcData, body: IInventoryToggleRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Add a tag to an inventory item
     * @param pmcData profile with item to add tag to
     * @param body tag request data
     * @param sessionID session id
     * @returns client response object
     */
    tagItem(pmcData: IPmcData, body: IInventoryTagRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Bind an inventory item to the quick access menu at bottom of player screen
     * Handle bind event
     * @param pmcData Player profile
     * @param bindRequest Reqeust object
     * @param sessionID Session id
     * @returns IItemEventRouterResponse
     */
    bindItem(pmcData: IPmcData, bindRequest: IInventoryBindRequestData, sessionID: string): void;
    /**
     * Unbind an inventory item from quick access menu at bottom of player screen
     * Handle unbind event
     * @param pmcData Player profile
     * @param bindRequest Request object
     * @param sessionID Session id
     * @param output Client response
     */
    unbindItem(pmcData: IPmcData, request: IInventoryBindRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Handles examining an item
     * @param pmcData player profile
     * @param body request object
     * @param sessionID session id
     * @param output Client response
     * @returns response
     */
    examineItem(pmcData: IPmcData, body: IInventoryExamineRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    protected flagItemsAsInspectedAndRewardXp(itemTpls: string[], fullProfile: IAkiProfile): void;
    /**
     * Get the tplid of an item from the examine request object
     * @param request Response request
     * @returns tplId
     */
    protected getExaminedItemTpl(request: IInventoryExamineRequestData): string;
    readEncyclopedia(pmcData: IPmcData, body: IInventoryReadEncyclopediaRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle ApplyInventoryChanges
     * Sorts supplied items.
     * @param pmcData Player profile
     * @param request sort request
     * @param sessionID Session id
     */
    sortInventory(pmcData: IPmcData, request: IInventorySortRequestData, sessionID: string): void;
    /**
     * Add note to a map
     * @param pmcData Player profile
     * @param request Add marker request
     * @param sessionID Session id
     * @param output Client response
     * @returns IItemEventRouterResponse
     */
    createMapMarker(pmcData: IPmcData, request: IInventoryCreateMarkerRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Delete a map marker
     * @param pmcData Player profile
     * @param request Delete marker request
     * @param sessionID Session id
     * @param output Client response
     */
    deleteMapMarker(pmcData: IPmcData, request: IInventoryDeleteMarkerRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Edit an existing map marker
     * @param pmcData Player profile
     * @param request Edit marker request
     * @param sessionID Session id
     * @param output Client response
     */
    editMapMarker(pmcData: IPmcData, request: IInventoryEditMarkerRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    /**
     * Strip out characters from note string that are not: letter/numbers/unicode/spaces
     * @param mapNoteText Marker text to sanitise
     * @returns Sanitised map marker text
     */
    protected sanitiseMapMarkerText(mapNoteText: string): string;
    /**
     * Handle OpenRandomLootContainer event
     * Handle event fired when a container is unpacked (currently only the halloween pumpkin)
     * @param pmcData Profile data
     * @param body Open loot container request data
     * @param sessionID Session id
     * @param output Client response
     */
    openRandomLootContainer(pmcData: IPmcData, body: IOpenRandomLootContainerRequestData, sessionID: string, output: IItemEventRouterResponse): void;
    redeemProfileReward(pmcData: IPmcData, request: IRedeemProfileRequestData, sessionId: string): void;
    setFavoriteItem(pmcData: IPmcData, request: ISetFavoriteItems, sessionId: string): void;
}
