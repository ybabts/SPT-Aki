import type { NoteController } from "../controllers/NoteController.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { INoteActionData } from "../models/eft/notes/INoteActionData.ts";
export declare class NoteCallbacks {
    protected noteController: NoteController;
    constructor(noteController: NoteController);
    /** Handle AddNote event */
    addNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    /** Handle EditNote event */
    editNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    /** Handle DeleteNote event */
    deleteNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
}
