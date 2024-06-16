import type { IUserDialogInfo } from "../profile/IAkiProfile.ts";
export interface IGetFriendListDataResponse {
    Friends: IUserDialogInfo[];
    Ignore: string[];
    InIgnoreList: string[];
}
