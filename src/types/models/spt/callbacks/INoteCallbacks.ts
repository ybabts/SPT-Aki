import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { INoteActionData } from "../../../models/eft/notes/INoteActionData.ts";
export interface INoteCallbacks {
    addNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    editNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    deleteNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
}
