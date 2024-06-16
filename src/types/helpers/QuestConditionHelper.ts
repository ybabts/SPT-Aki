import type { IQuestCondition } from "../models/eft/common/tables/IQuest.ts";
export declare class QuestConditionHelper {
    getQuestConditions(q: IQuestCondition[], furtherFilter?: (a: IQuestCondition) => IQuestCondition[]): IQuestCondition[];
    getLevelConditions(q: IQuestCondition[], furtherFilter?: (a: IQuestCondition) => IQuestCondition[]): IQuestCondition[];
    getLoyaltyConditions(q: IQuestCondition[], furtherFilter?: (a: IQuestCondition) => IQuestCondition[]): IQuestCondition[];
    getStandingConditions(q: IQuestCondition[], furtherFilter?: (a: IQuestCondition) => IQuestCondition[]): IQuestCondition[];
    protected filterConditions(q: IQuestCondition[], questType: string, furtherFilter?: (a: IQuestCondition) => IQuestCondition[]): IQuestCondition[];
}
