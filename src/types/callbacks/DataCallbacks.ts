import type { HideoutController } from "../controllers/HideoutController.ts";
import type { RagfairController } from "../controllers/RagfairController.ts";
import type { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData.ts";
import type { IGlobals } from "../models/eft/common/IGlobals.ts";
import type { ICustomizationItem } from "../models/eft/common/tables/ICustomizationItem.ts";
import type { IHandbookBase } from "../models/eft/common/tables/IHandbookBase.ts";
import type { IGetItemPricesResponse } from "../models/eft/game/IGetItemPricesResponse.ts";
import type { IHideoutArea } from "../models/eft/hideout/IHideoutArea.ts";
import type { IHideoutProduction } from "../models/eft/hideout/IHideoutProduction.ts";
import type { IHideoutScavCase } from "../models/eft/hideout/IHideoutScavCase.ts";
import type { IHideoutSettingsBase } from "../models/eft/hideout/IHideoutSettingsBase.ts";
import type { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData.ts";
import type { ISettingsBase } from "../models/spt/server/ISettingsBase.ts";
import type { DatabaseServer } from "../servers/DatabaseServer.ts";
import type { HttpResponseUtil } from "../utils/HttpResponseUtil.ts";
/**
 * Handle client requests
 */
export declare class DataCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected databaseServer: DatabaseServer;
    protected ragfairController: RagfairController;
    protected hideoutController: HideoutController;
    constructor(httpResponse: HttpResponseUtil, databaseServer: DatabaseServer, ragfairController: RagfairController, hideoutController: HideoutController);
    /**
     * Handle client/settings
     * @returns ISettingsBase
     */
    getSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ISettingsBase>;
    /**
     * Handle client/globals
     * @returns IGlobals
     */
    getGlobals(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGlobals>;
    /**
     * Handle client/items
     * @returns string
     */
    getTemplateItems(url: string, info: IEmptyRequestData, sessionID: string): string;
    /**
     * Handle client/handbook/templates
     * @returns IHandbookBase
     */
    getTemplateHandbook(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHandbookBase>;
    /**
     * Handle client/customization
     * @returns Record<string, ICustomizationItem
     */
    getTemplateSuits(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<Record<string, ICustomizationItem>>;
    /**
     * Handle client/account/customization
     * @returns string[]
     */
    getTemplateCharacter(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string[]>;
    /**
     * Handle client/hideout/settings
     * @returns IHideoutSettingsBase
     */
    getHideoutSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutSettingsBase>;
    getHideoutAreas(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutArea[]>;
    gethideoutProduction(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutProduction[]>;
    getHideoutScavcase(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutScavCase[]>;
    /**
     * Handle client/languages
     */
    getLocalesLanguages(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<Record<string, string>>;
    /**
     * Handle client/menu/locale
     */
    getLocalesMenu(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string>;
    /**
     * Handle client/locale
     */
    getLocalesGlobal(url: string, info: IEmptyRequestData, sessionID: string): string;
    /**
     * Handle client/hideout/qte/list
     */
    getQteList(url: string, info: IEmptyRequestData, sessionID: string): string;
    /**
     * Handle client/items/prices/
     * Called when viewing a traders assorts
     * TODO -  fully implement this
     */
    getItemPrices(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGetItemPricesResponse>;
}
