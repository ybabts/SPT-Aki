import { IPmcData } from "../models/eft/common/IPmcData.d.ts";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { INoteActionData } from "../models/eft/notes/INoteActionData.d.ts";
import { EventOutputHolder } from "../routers/EventOutputHolder.d.ts";
export declare class NoteController {
    protected eventOutputHolder: EventOutputHolder;
    constructor(eventOutputHolder: EventOutputHolder);
    addNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    editNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    deleteNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
}
