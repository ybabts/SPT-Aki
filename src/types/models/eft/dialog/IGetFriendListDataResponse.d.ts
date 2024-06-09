import { IUserDialogInfo } from "../profile/IAkiProfile.d.ts";
export interface IGetFriendListDataResponse {
    Friends: IUserDialogInfo[];
    Ignore: string[];
    InIgnoreList: string[];
}
