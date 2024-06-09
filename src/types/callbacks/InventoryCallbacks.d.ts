import { InventoryController } from "../controllers/InventoryController.d.ts";
import { QuestController } from "../controllers/QuestController.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IInventoryBindRequestData } from "../models/eft/inventory/IInventoryBindRequestData.d.ts";
import { IInventoryCreateMarkerRequestData } from "../models/eft/inventory/IInventoryCreateMarkerRequestData.d.ts";
import { IInventoryDeleteMarkerRequestData } from "../models/eft/inventory/IInventoryDeleteMarkerRequestData.d.ts";
import { IInventoryEditMarkerRequestData } from "../models/eft/inventory/IInventoryEditMarkerRequestData.d.ts";
import { IInventoryExamineRequestData } from "../models/eft/inventory/IInventoryExamineRequestData.d.ts";
import { IInventoryFoldRequestData } from "../models/eft/inventory/IInventoryFoldRequestData.d.ts";
import { IInventoryMergeRequestData } from "../models/eft/inventory/IInventoryMergeRequestData.d.ts";
import { IInventoryMoveRequestData } from "../models/eft/inventory/IInventoryMoveRequestData.d.ts";
import { IInventoryReadEncyclopediaRequestData } from "../models/eft/inventory/IInventoryReadEncyclopediaRequestData.d.ts";
import { IInventoryRemoveRequestData } from "../models/eft/inventory/IInventoryRemoveRequestData.d.ts";
import { IInventorySortRequestData } from "../models/eft/inventory/IInventorySortRequestData.d.ts";
import { IInventorySplitRequestData } from "../models/eft/inventory/IInventorySplitRequestData.d.ts";
import { IInventorySwapRequestData } from "../models/eft/inventory/IInventorySwapRequestData.d.ts";
import { IInventoryTagRequestData } from "../models/eft/inventory/IInventoryTagRequestData.d.ts";
import { IInventoryToggleRequestData } from "../models/eft/inventory/IInventoryToggleRequestData.d.ts";
import { IInventoryTransferRequestData } from "../models/eft/inventory/IInventoryTransferRequestData.d.ts";
import { IOpenRandomLootContainerRequestData } from "../models/eft/inventory/IOpenRandomLootContainerRequestData.d.ts";
import { IRedeemProfileRequestData } from "../models/eft/inventory/IRedeemProfileRequestData.d.ts";
import { ISetFavoriteItems } from "../models/eft/inventory/ISetFavoriteItems.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IFailQuestRequestData } from "../models/eft/quests/IFailQuestRequestData.d.ts";
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
