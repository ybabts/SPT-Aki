import type { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.ts";
import type { IGlobals } from "../../../models/eft/common/IGlobals.ts";
import type { IHideoutArea } from "../../../models/eft/hideout/IHideoutArea.ts";
import type { IHideoutProduction } from "../../../models/eft/hideout/IHideoutProduction.ts";
import type { IHideoutScavCase } from "../../../models/eft/hideout/IHideoutScavCase.ts";
import type { IHideoutSettingsBase } from "../../../models/eft/hideout/IHideoutSettingsBase.ts";
import type { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { ISettingsBase } from "../../../models/spt/server/ISettingsBase.ts";
export interface IDataCallbacks {
    getSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ISettingsBase>;
    getGlobals(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGlobals>;
    getTemplateItems(url: string, info: IEmptyRequestData, sessionID: string): string;
    getTemplateHandbook(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getTemplateSuits(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getTemplateCharacter(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string[]>;
    getHideoutSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutSettingsBase>;
    getHideoutAreas(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutArea[]>;
    gethideoutProduction(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutProduction[]>;
    getHideoutScavcase(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutScavCase[]>;
    getLocalesLanguages(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<Record<string, string>>;
    getLocalesMenu(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getLocalesGlobal(url: string, info: IEmptyRequestData, sessionID: string): string;
}
