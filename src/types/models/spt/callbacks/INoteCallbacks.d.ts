import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { INoteActionData } from "../../../models/eft/notes/INoteActionData.d.ts";
export interface INoteCallbacks {
    addNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    editNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    deleteNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
}
