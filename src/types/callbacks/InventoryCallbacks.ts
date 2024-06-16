import type { InventoryController } from "../controllers/InventoryController.ts";
import type { QuestController } from "../controllers/QuestController.ts";
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
import type { IFailQuestRequestData } from "../models/eft/quests/IFailQuestRequestData.ts";
export declare class InventoryCallbacks {
    protected inventoryController: InventoryController;
    protected questController: QuestController;
    constructor(inventoryController: InventoryController, questController: QuestController);
    /** Handle client/game/profile/items/moving Move event */
    moveItem(pmcData: IPmcData, body: IInventoryMoveRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /** Handle Remove event */
    removeItem(pmcData: IPmcData, body: IInventoryRemoveRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /** Handle Split event */
    splitItem(pmcData: IPmcData, body: IInventorySplitRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    mergeItem(pmcData: IPmcData, body: IInventoryMergeRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    transferItem(pmcData: IPmcData, request: IInventoryTransferRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /** Handle Swap */
    swapItem(pmcData: IPmcData, body: IInventorySwapRequestData, sessionID: string): IItemEventRouterResponse;
    foldItem(pmcData: IPmcData, body: IInventoryFoldRequestData, sessionID: string): IItemEventRouterResponse;
    toggleItem(pmcData: IPmcData, body: IInventoryToggleRequestData, sessionID: string): IItemEventRouterResponse;
    tagItem(pmcData: IPmcData, body: IInventoryTagRequestData, sessionID: string): IItemEventRouterResponse;
    bindItem(pmcData: IPmcData, body: IInventoryBindRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    unbindItem(pmcData: IPmcData, body: IInventoryBindRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    examineItem(pmcData: IPmcData, body: IInventoryExamineRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /** Handle ReadEncyclopedia */
    readEncyclopedia(pmcData: IPmcData, body: IInventoryReadEncyclopediaRequestData, sessionID: string): IItemEventRouterResponse;
    /** Handle ApplyInventoryChanges */
    sortInventory(pmcData: IPmcData, body: IInventorySortRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    createMapMarker(pmcData: IPmcData, body: IInventoryCreateMarkerRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    deleteMapMarker(pmcData: IPmcData, body: IInventoryDeleteMarkerRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    editMapMarker(pmcData: IPmcData, body: IInventoryEditMarkerRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /** Handle OpenRandomLootContainer */
    openRandomLootContainer(pmcData: IPmcData, body: IOpenRandomLootContainerRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    redeemProfileReward(pmcData: IPmcData, body: IRedeemProfileRequestData, sessionId: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    setFavoriteItem(pmcData: IPmcData, body: ISetFavoriteItems, sessionId: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * TODO - MOVE INTO QUEST CODE
     * Handle game/profile/items/moving - QuestFail
     */
    failQuest(pmcData: IPmcData, request: IFailQuestRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
}
