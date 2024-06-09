import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { IPmcData } from "../../../models/eft/common/IPmcData.d.ts";
import { IQuest } from "../../../models/eft/common/tables/IQuest.d.ts";
import { IPmcDataRepeatableQuest } from "../../../models/eft/common/tables/IRepeatableQuests.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { IItemEventRouterResponse } from "../../../models/eft/itemEvent/IItemEventRouterResponse.d.ts";
import { IAcceptQuestRequestData } from "../../../models/eft/quests/IAcceptQuestRequestData.d.ts";
import { ICompleteQuestRequestData } from "../../../models/eft/quests/ICompleteQuestRequestData.d.ts";
import { IHandoverQuestRequestData } from "../../../models/eft/quests/IHandoverQuestRequestData.d.ts";
import { IListQuestsRequestData } from "../../../models/eft/quests/IListQuestsRequestData.d.ts";
import { IRepeatableQuestChangeRequest } from "../../../models/eft/quests/IRepeatableQuestChangeRequest.d.ts";
export interface IQuestCallbacks {
    changeRepeatableQuest(pmcData: IPmcData, body: IRepeatableQuestChangeRequest, sessionID: string): IItemEventRouterResponse;
    acceptQuest(pmcData: IPmcData, body: IAcceptQuestRequestData, sessionID: string): IItemEventRouterResponse;
    completeQuest(pmcData: IPmcData, body: ICompleteQuestRequestData, sessionID: string): IItemEventRouterResponse;
    handoverQuest(pmcData: IPmcData, body: IHandoverQuestRequestData, sessionID: string): IItemEventRouterResponse;
    listQuests(url: string, info: IListQuestsRequestData, sessionID: string): IGetBodyResponseData<IQuest[]>;
    activityPeriods(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IPmcDataRepeatableQuest[]>;
}
