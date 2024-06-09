import { NoteController } from "../controllers/NoteController.d.ts";
import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { INoteActionData } from "../models/eft/notes/INoteActionData.d.ts";
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
