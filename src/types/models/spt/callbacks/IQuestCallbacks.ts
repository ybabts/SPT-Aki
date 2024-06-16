import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IPmcData } from "../../../models/eft/common/IPmcData.ts";
import type { IQuest } from "../../../models/eft/common/tables/IQuest.ts";
import type { IPmcDataRepeatableQuest } from "../../../models/eft/common/tables/IRepeatableQuests.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IAcceptQuestRequestData } from "../../../models/eft/quests/IAcceptQuestRequestData.ts";
import type { ICompleteQuestRequestData } from "../../../models/eft/quests/ICompleteQuestRequestData.ts";
import type { IHandoverQuestRequestData } from "../../../models/eft/quests/IHandoverQuestRequestData.ts";
import type { IListQuestsRequestData } from "../../../models/eft/quests/IListQuestsRequestData.ts";
import type { IRepeatableQuestChangeRequest } from "../../../models/eft/quests/IRepeatableQuestChangeRequest.ts";
export interface IQuestCallbacks {
    changeRepeatableQuest(pmcData: IPmcData, body: IRepeatableQuestChangeRequest, sessionID: string): IItemEventRouterResponse;
    acceptQuest(pmcData: IPmcData, body: IAcceptQuestRequestData, sessionID: string): IItemEventRouterResponse;
    completeQuest(pmcData: IPmcData, body: ICompleteQuestRequestData, sessionID: string): IItemEventRouterResponse;
    handoverQuest(pmcData: IPmcData, body: IHandoverQuestRequestData, sessionID: string): IItemEventRouterResponse;
    listQuests(url: string, info: IListQuestsRequestData, sessionID: string): IGetBodyResponseData<IQuest[]>;
    activityPeriods(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IPmcDataRepeatableQuest[]>;
}
