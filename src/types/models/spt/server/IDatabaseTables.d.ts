import { IGlobals } from "../../../models/eft/common/IGlobals.d.ts";
import { IAchievement } from "../../../models/eft/common/tables/IAchievement.d.ts";
import { IBotBase } from "../../../models/eft/common/tables/IBotBase.d.ts";
import { IBotCore } from "../../../models/eft/common/tables/IBotCore.d.ts";
import { IBotType } from "../../../models/eft/common/tables/IBotType.d.ts";
import { ICustomizationItem } from "../../../models/eft/common/tables/ICustomizationItem.d.ts";
import { IHandbookBase } from "../../../models/eft/common/tables/IHandbookBase.d.ts";
import { ILootBase } from "../../../models/eft/common/tables/ILootBase.d.ts";
import { IMatch } from "../../../models/eft/common/tables/IMatch.d.ts";
import { IProfileTemplates } from "../../../models/eft/common/tables/IProfileTemplate.d.ts";
import { IQuest } from "../../../models/eft/common/tables/IQuest.d.ts";
import { IRepeatableQuestDatabase } from "../../../models/eft/common/tables/IRepeatableQuests.d.ts";
import { ITemplateItem } from "../../../models/eft/common/tables/ITemplateItem.d.ts";
import { ITrader } from "../../../models/eft/common/tables/ITrader.d.ts";
import { IHideoutArea } from "../../../models/eft/hideout/IHideoutArea.d.ts";
import { IHideoutProduction } from "../../../models/eft/hideout/IHideoutProduction.d.ts";
import { IHideoutScavCase } from "../../../models/eft/hideout/IHideoutScavCase.d.ts";
import { IHideoutSettingsBase } from "../../../models/eft/hideout/IHideoutSettingsBase.d.ts";
import { IQteData } from "../../../models/eft/hideout/IQteData.d.ts";
import { IDefaultEquipmentPreset } from "../../../models/eft/profile/IAkiProfile.d.ts";
import { ILocaleBase } from "../../../models/spt/server/ILocaleBase.d.ts";
import { ILocations } from "../../../models/spt/server/ILocations.d.ts";
import { IServerBase } from "../../../models/spt/server/IServerBase.d.ts";
import { ISettingsBase } from "../../../models/spt/server/ISettingsBase.d.ts";
export interface IDatabaseTables {
    bots?: {
        types: Record<string, IBotType>;
        base: IBotBase;
        core: IBotCore;
    };
    hideout?: {
        areas: IHideoutArea[];
        production: IHideoutProduction[];
        scavcase: IHideoutScavCase[];
        settings: IHideoutSettingsBase;
        qte: IQteData[];
    };
    locales?: ILocaleBase;
    locations?: ILocations;
    loot?: ILootBase;
    match?: IMatch;
    templates?: {
        character: string[];
        items: Record<string, ITemplateItem>;
        quests: Record<string, IQuest>;
        repeatableQuests: IRepeatableQuestDatabase;
        handbook: IHandbookBase;
        customization: Record<string, ICustomizationItem>;
        /** The profile templates listed in the launcher on profile creation, split by account type (e.g. Standard) then side (e.g. bear/usec) */
        profiles: IProfileTemplates;
        /** Flea prices of items - gathered from online flea market dump */
        prices: Record<string, number>;
        /** Default equipment loadouts that show on main inventory screen */
        defaultEquipmentPresets: IDefaultEquipmentPreset[];
        /** Achievements */
        achievements: IAchievement[];
    };
    traders?: Record<string, ITrader>;
    globals?: IGlobals;
    server?: IServerBase;
    settings?: ISettingsBase;
}
