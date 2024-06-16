import type { MemberCategory } from "../../enums/MemberCategory.ts";
export interface ICurrentGroupResponse {
    squad: ICurrentGroupSquadMember[];
}
export interface ICurrentGroupSquadMember {
    _id: string;
    aid: string;
    info: ICurrentGroupMemberInfo;
    isLeader: boolean;
    isReady: boolean;
}
export interface ICurrentGroupMemberInfo {
    Nickname: string;
    Side: string;
    Level: string;
    MemberCategory: MemberCategory;
}
