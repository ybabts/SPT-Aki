import { IEmptyRequestData } from "../../../models/eft/common/IEmptyRequestData.d.ts";
import { IGlobals } from "../../../models/eft/common/IGlobals.d.ts";
import { IHideoutArea } from "../../../models/eft/hideout/IHideoutArea.d.ts";
import { IHideoutProduction } from "../../../models/eft/hideout/IHideoutProduction.d.ts";
import { IHideoutScavCase } from "../../../models/eft/hideout/IHideoutScavCase.d.ts";
import { IHideoutSettingsBase } from "../../../models/eft/hideout/IHideoutSettingsBase.d.ts";
import { IGetBodyResponseData } from "../../../models/eft/httpResponse/IGetBodyResponseData.d.ts";
import { ISettingsBase } from "../../../models/spt/server/ISettingsBase.d.ts";
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
