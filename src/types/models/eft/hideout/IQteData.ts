import type { Effect } from "../health/Effect.ts";
import type { BodyPart } from "../health/IOffraidHealRequestData.ts";
import type { QteActivityType } from "../../enums/hideout/QteActivityType.ts";
import type { QteEffectType } from "../../enums/hideout/QteEffectType.ts";
import type { QteResultType } from "../../enums/hideout/QteResultType.ts";
import type { QteRewardType } from "../../enums/hideout/QteRewardType.ts";
import type { QteType } from "../../enums/hideout/QteType.ts";
import type { RequirementType } from "../../enums/hideout/RequirementType.ts";
import type { HideoutAreas } from "../../enums/HideoutAreas.ts";
import type { SkillTypes } from "../../enums/SkillTypes.ts";
import type { Traders } from "../../enums/Traders.ts";
export interface IQteData {
    id: string;
    type: QteActivityType;
    area: HideoutAreas;
    areaLevel: number;
    quickTimeEvents: IQuickTimeEvent[];
    requirements: (IAreaRequirement | IItemRequirement | ITraderUnlockRequirement | ITraderLoyaltyRequirement | ISkillRequirement | IResourceRequirement | IToolRequirement | IQuestRequirement | IHealthRequirement | IBodyPartBuffRequirement)[];
    results: Record<QteEffectType, IQteResult>;
}
export interface IQuickTimeEvent {
    type: QteType;
    position: {
        x: number;
        y: number;
    };
    startDelay: number;
    endDelay: number;
    speed: number;
    successRange: {
        x: number;
        y: number;
    };
    key: string;
}
export interface IQteRequirement {
    type: RequirementType;
}
export interface IQteResult {
    energy: number;
    hydration: number;
    rewardsRange: IQteEffect[];
}
export interface IQteEffect {
    type: QteRewardType;
    skillId: number;
    levelMultipliers: ISkillLevelMultiplier[];
    time: number;
    weight: number;
    result: QteResultType;
}
export interface ISkillLevelMultiplier {
    level: number;
    multiplier: number;
}
export interface IAreaRequirement extends IQteRequirement {
    type: RequirementType.AREA;
    areaType: HideoutAreas;
    requiredLevel: number;
}
export interface ITraderUnlockRequirement extends IQteRequirement {
    type: RequirementType.TRADER_UNLOCK;
    traderId: Traders;
}
export interface ITraderLoyaltyRequirement extends IQteRequirement {
    type: RequirementType.TRADER_LOYALTY;
    traderId: Traders;
    loyaltyLevel: number;
}
export interface ISkillRequirement extends IQteRequirement {
    type: RequirementType.SKILL;
    skillName: SkillTypes;
    skillLevel: number;
}
export interface IResourceRequirement extends IQteRequirement {
    type: RequirementType.RESOURCE;
    templateId: string;
    resource: number;
}
export interface IItemRequirement extends IQteRequirement {
    type: RequirementType.ITEM;
    templateId: string;
    count: number;
    isFunctional: boolean;
    isEncoded: boolean;
}
export interface IToolRequirement extends IQteRequirement {
    type: RequirementType.TOOL;
    templateId: string;
    count: number;
    isFunctional: boolean;
    isEncoded: boolean;
}
export interface IQuestRequirement extends IQteRequirement {
    type: RequirementType.QUEST_COMPLETE;
    questId: string;
}
export interface IHealthRequirement extends IQteRequirement {
    type: RequirementType.HEALTH;
    energy: number;
    hydration: number;
}
export interface IBodyPartBuffRequirement extends IQteRequirement {
    type: RequirementType.BODY_PART_BUFF;
    effectName: Effect;
    bodyPart: BodyPart;
    excluded: boolean;
}
