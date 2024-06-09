import { Health, IQuestStatus, Productive, Skills } from "../common/tables/IBotBase.d.ts";
import { Item, Upd } from "../common/tables/IItem.d.ts";
import { IQuest } from "../common/tables/IQuest.d.ts";
import { IPmcDataRepeatableQuest } from "../common/tables/IRepeatableQuests.d.ts";
import { IRagfairOffer } from "../ragfair/IRagfairOffer.d.ts";
import { EquipmentBuildType } from "../../../models/enums/EquipmentBuildType.d.ts";
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
