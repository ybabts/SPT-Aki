import type { QuestController } from "../controllers/QuestController.ts";
import type { RepeatableQuestController } from "../controllers/RepeatableQuestController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IPmcData } from "../models/eft/common/IPmcData.ts";
import type { IQuest } from "../models/eft/common/tables/IQuest.ts";
import type { IPmcDataRepeatableQuest } from "../models/eft/common/tables/IRepeatableQuests.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse.ts";
import type { IAcceptQuestRequestData } from "../models/eft/quests/IAcceptQuestRequestData.ts";
import type { ICompleteQuestRequestData } from "../models/eft/quests/ICompleteQuestRequestData.ts";
import type { IHandoverQuestRequestData } from "../models/eft/quests/IHandoverQuestRequestData.ts";
import type { IListQuestsRequestData } from "../models/eft/quests/IListQuestsRequestData.ts";
import type { IRepeatableQuestChangeRequest } from "../models/eft/quests/IRepeatableQuestChangeRequest.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
export declare class QuestCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected questController: QuestController;
    protected repeatableQuestController: RepeatableQuestController;
    constructor(httpResponse: HttpResponseUtil, questController: QuestController, repeatableQuestController: RepeatableQuestController);
    /**
     * Handle RepeatableQuestChange event
     */
    changeRepeatableQuest(pmcData: IPmcData, body: IRepeatableQuestChangeRequest, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle QuestAccept event
     */
    acceptQuest(pmcData: IPmcData, body: IAcceptQuestRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle QuestComplete event
     */
    completeQuest(pmcData: IPmcData, body: ICompleteQuestRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle QuestHandover event
     */
    handoverQuest(pmcData: IPmcData, body: IHandoverQuestRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handle client/quest/list
     */
    listQuests(url: string, info: IListQuestsRequestData, sessionID: string): IGetBodyResponseData<IQuest[]>;
    /**
     * Handle client/repeatalbeQuests/activityPeriods
     */
    activityPeriods(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IPmcDataRepeatableQuest[]>;
}
