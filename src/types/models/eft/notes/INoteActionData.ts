import type { IBaseInteractionRequestData } from "../common/request/IBaseInteractionRequestData.ts";
export interface INoteActionData extends IBaseInteractionRequestData {
    Action: string;
    index: number;
    note: INote;
}
export interface INote {
    Time: number;
    Text: string;
}
