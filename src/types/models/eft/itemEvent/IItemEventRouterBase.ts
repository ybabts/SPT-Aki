import type { Health, IQuestStatus, Productive, Skills } from "../common/tables/IBotBase.ts";
import type { Item, Upd } from "../common/tables/IItem.ts";
import type { IQuest } from "../common/tables/IQuest.ts";
import type { IPmcDataRepeatableQuest } from "../common/tables/IRepeatableQuests.ts";
import type { IRagfairOffer } from "../ragfair/IRagfairOffer.ts";
import type { EquipmentBuildType } from "../../../models/enums/EquipmentBuildType.ts";
export interface IItemEventRouterBase {
    warnings: Warning[];
    profileChanges: TProfileChanges | "";
}
export type TProfileChanges = Record<string, ProfileChange>;
export interface Warning {
    index: number;
    errmsg: string;
    code?: string;
    data?: any;
}
export interface ProfileChange {
    _id: string;
    experience: number;
    quests: IQuest[];
    ragFairOffers: IRagfairOffer[];
    weaponBuilds: IWeaponBuildChange[];
    equipmentBuilds: IEquipmentBuildChange[];
    items: ItemChanges;
    production: Record<string, Productive>;
    /** Hideout area improvement id */
    improvements: Record<string, Improvement>;
    skills: Skills;
    health: Health;
    traderRelations: Record<string, TraderData>;
    repeatableQuests?: IPmcDataRepeatableQuest[];
    recipeUnlocked: Record<string, boolean>;
    changedHideoutStashes?: Record<string, IHideoutStashItem>;
    questsStatus: IQuestStatus[];
}
export interface IHideoutStashItem {
    Id: string;
    Tpl: string;
}
export interface IWeaponBuildChange {
    id: string;
    name: string;
    root: string;
    items: Item[];
}
export interface IEquipmentBuildChange {
    id: string;
    name: string;
    root: string;
    items: Item[];
    type: string;
    fastpanel: any[];
    buildType: EquipmentBuildType;
}
export interface ItemChanges {
    new: Product[];
    change: Product[];
    del: Product[];
}
export interface Improvement {
    completed: boolean;
    improveCompleteTimestamp: number;
}
/** Related to TraderInfo */
export interface TraderData {
    salesSum: number;
    standing: number;
    loyalty: number;
    unlocked: boolean;
    disabled: boolean;
}
export interface Product {
    _id: string;
    _tpl?: string;
    parentId?: string;
    slotId?: string;
    location?: ItemChangeLocation;
    upd?: Upd;
}
export interface ItemChangeLocation {
    x: number;
    y: number;
    r: number;
    isSearched?: boolean;
}
