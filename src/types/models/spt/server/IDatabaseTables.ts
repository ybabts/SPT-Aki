import type { IGlobals } from "../../../models/eft/common/IGlobals.ts";
import type { IAchievement } from "../../../models/eft/common/tables/IAchievement.ts";
import type { IBotBase } from "../../../models/eft/common/tables/IBotBase.ts";
import type { IBotCore } from "../../../models/eft/common/tables/IBotCore.ts";
import type { IBotType } from "../../../models/eft/common/tables/IBotType.ts";
import type { ICustomizationItem } from "../../../models/eft/common/tables/ICustomizationItem.ts";
import type { IHandbookBase } from "../../../models/eft/common/tables/IHandbookBase.ts";
import type { ILootBase } from "../../../models/eft/common/tables/ILootBase.ts";
import type { IMatch } from "../../../models/eft/common/tables/IMatch.ts";
import type { IProfileTemplates } from "../../../models/eft/common/tables/IProfileTemplate.ts";
import type { IQuest } from "../../../models/eft/common/tables/IQuest.ts";
import type { IRepeatableQuestDatabase } from "../../../models/eft/common/tables/IRepeatableQuests.ts";
import type { ITemplateItem } from "../../../models/eft/common/tables/ITemplateItem.ts";
import type { ITrader } from "../../../models/eft/common/tables/ITrader.ts";
import type { IHideoutArea } from "../../../models/eft/hideout/IHideoutArea.ts";
import type { IHideoutProduction } from "../../../models/eft/hideout/IHideoutProduction.ts";
import type { IHideoutScavCase } from "../../../models/eft/hideout/IHideoutScavCase.ts";
import type { IHideoutSettingsBase } from "../../../models/eft/hideout/IHideoutSettingsBase.ts";
import type { IQteData } from "../../../models/eft/hideout/IQteData.ts";
import type { IDefaultEquipmentPreset } from "../../../models/eft/profile/IAkiProfile.ts";
import type { ILocaleBase } from "../../../models/spt/server/ILocaleBase.ts";
import type { ILocations } from "../../../models/spt/server/ILocations.ts";
import type { IServerBase } from "../../../models/spt/server/IServerBase.ts";
import type { ISettingsBase } from "../../../models/spt/server/ISettingsBase.ts";
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
