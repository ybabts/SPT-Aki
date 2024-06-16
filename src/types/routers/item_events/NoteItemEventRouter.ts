import type { NoteCallbacks } from "../../callbacks/NoteCallbacks.ts";
import type { HandledRoute, ItemEventRouterDefinition } from "../../di/Router.ts";
import type { IPmcData } from "../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { INoteActionData } from "../../models/eft/notes/INoteActionData.ts";
export declare class NoteItemEventRouter extends ItemEventRouterDefinition {
    protected noteCallbacks: NoteCallbacks;
    constructor(noteCallbacks: NoteCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
}
