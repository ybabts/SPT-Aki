import type { Skills } from "../../../models/eft/common/tables/IBotBase.ts";
export interface IPlayerIncrementSkillLevelRequestData {
    _id: string;
    experience: number;
    quests: any[];
    ragFairOffers: any[];
    builds: any[];
    items: Items;
    production: Production;
    skills: Skills;
    traderRelations: TraderRelations;
}
export interface Items {
    new: any[];
    change: any[];
    del: any[];
}
export interface Production {
}
export interface TraderRelations {
}
